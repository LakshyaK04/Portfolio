import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const { error } = await supabase
        .from('messages')
        .insert([
          { 
            name: formData.name, 
            email: formData.email, 
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err: any) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Let's connect
        </h1>
        <p className="text-zinc-400 text-lg mb-12">
          Have an idea or just want to chat? Drop me a message below.
        </p>

        {status === 'success' ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-zinc-900/50 border border-emerald-500/30 p-8 rounded-2xl text-center flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500">
              <CheckCircle2 size={32} />
            </div>
            <h2 className="text-xl font-bold text-white">Message Sent!</h2>
            <p className="text-zinc-400 max-w-sm">
              Thanks for reaching out. I'll get back to you as soon as possible.
            </p>
            <button 
              onClick={() => setStatus('idle')}
              className="mt-4 text-emerald-500 hover:text-emerald-400 font-medium transition-colors"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-zinc-300 ml-1">Name</label>
                <input
                  required
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#1c1c1e] border border-zinc-800/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all placeholder:text-zinc-600"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-300 ml-1">Email</label>
                <input
                  required
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#1c1c1e] border border-zinc-800/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all placeholder:text-zinc-600"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-zinc-300 ml-1">Message</label>
              <textarea
                required
                id="message"
                rows={6}
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#1c1c1e] border border-zinc-800/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all placeholder:text-zinc-600 resize-none"
              />
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/5 p-3 rounded-lg border border-red-400/20">
                <AlertCircle size={16} />
                <span>{errorMessage}</span>
              </div>
            )}

            <button
              disabled={status === 'submitting'}
              type="submit"
              className="w-full bg-white hover:bg-zinc-200 disabled:bg-zinc-600 text-black font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group"
            >
              {status === 'submitting' ? (
                <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              ) : (
                <>
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
