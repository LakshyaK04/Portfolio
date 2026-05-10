import { useEffect, useRef } from 'react';

// ============================================================
// TYPES
// ============================================================

interface GridDot {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface SparkStar {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  floatPhaseX: number;
  floatPhaseY: number;
  floatSpeed: number;
  hasFlare: boolean;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  angle: number;
  active: boolean;
}

interface StarfieldProps {
  className?: string;
}

// ============================================================
// COMPONENT
// ============================================================

const Starfield = ({ className = "" }: StarfieldProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = container.clientWidth;
    let height = container.clientHeight;

    const setCanvasSize = () => {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setCanvasSize();

    let animationFrameId: number;

    // ============================================================
    // DOT GRID — the main interactive star layer
    // Each dot is a "star" that gently repels from cursor
    // ============================================================

    const DOT_SPACING = 14;
    const DOT_RADIUS = 0.8;
    const DOT_ALPHA = 0.16;
    const REPULSE_RADIUS = 25;
    const REPULSE_STRENGTH = 6;
    const SPRING_BACK = 0.06;
    const FRICTION = 0.85;

    let gridDots: GridDot[] = [];

    const initGrid = () => {
      gridDots = [];
      for (let gx = DOT_SPACING / 2; gx < width; gx += DOT_SPACING) {
        for (let gy = DOT_SPACING / 2; gy < height; gy += DOT_SPACING) {
          gridDots.push({
            baseX: gx,
            baseY: gy,
            x: gx,
            y: gy,
            vx: 0,
            vy: 0
          });
        }
      }
    };

    // ============================================================
    // SPARKLE STARS — dense twinkling stars with glow on top
    // ============================================================

    const sparkStars: SparkStar[] = [];

    const initSparkles = () => {
      sparkStars.length = 0;
      // High density — ~1 per 250px²
      const count = Math.floor((width * height) / 250);

      // Soft density patches — stars are slightly more likely near these
      const patchCount = 3 + Math.floor(Math.random() * 3);
      const patches: { cx: number; cy: number; r: number }[] = [];
      for (let p = 0; p < patchCount; p++) {
        patches.push({
          cx: Math.random() * width,
          cy: Math.random() * height,
          r: Math.random() * Math.min(width, height) * 0.3 + 100
        });
      }

      for (let i = 0; i < count; i++) {
        const rand = Math.random();
        const isLarge = rand > 0.9;
        const isMedium = rand > 0.6 && rand <= 0.9;

        // Subtle color tints — not all pure white
        let color = '255, 255, 255';
        const colorRoll = Math.random();
        if (colorRoll > 0.92) color = '200, 220, 255';     // cool blue
        else if (colorRoll > 0.85) color = '255, 240, 220'; // warm amber
        else if (colorRoll > 0.8) color = '230, 210, 255';  // soft violet

        let sx = Math.random() * width;
        let sy = Math.random() * height;

        // ~25% of stars gently biased toward density patches
        if (Math.random() < 0.25) {
          const patch = patches[Math.floor(Math.random() * patches.length)];
          const angle = Math.random() * Math.PI * 2;
          const dist = Math.random() * patch.r;
          sx = patch.cx + Math.cos(angle) * dist;
          sy = patch.cy + Math.sin(angle) * dist;
          sx = ((sx % width) + width) % width;
          sy = ((sy % height) + height) % height;
        }

        sparkStars.push({
          x: sx,
          y: sy,
          baseX: sx,
          baseY: sy,
          vx: 0,
          vy: 0,
          radius: isLarge
            ? Math.random() * 0.6 + 0.6
            : isMedium
              ? Math.random() * 0.4 + 0.3
              : Math.random() * 0.25 + 0.1,
          baseAlpha: isLarge
            ? Math.random() * 0.2 + 0.8
            : isMedium
              ? Math.random() * 0.4 + 0.4
              : Math.random() * 0.4 + 0.15,
          alpha: 0,
          twinkleSpeed: Math.random() * 0.03 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
          floatPhaseX: Math.random() * Math.PI * 2,
          floatPhaseY: Math.random() * Math.PI * 2,
          floatSpeed: Math.random() * 0.003 + 0.001,
          hasFlare: isLarge || (isMedium && Math.random() > 0.3),
          color
        });
      }
    };

    // ============================================================
    // SHOOTING STARS
    // ============================================================

    const shootingStars: ShootingStar[] = [];
    const MAX_SHOOTING_STARS = 3;
    let nextShootingStarTime = performance.now() + Math.random() * 3000 + 1000;

    const spawnShootingStar = () => {
      const now = performance.now();
      if (now < nextShootingStarTime) return;

      const activeCount = shootingStars.filter(s => s.active).length;
      if (activeCount >= MAX_SHOOTING_STARS) return;

      const angleVariants = [Math.PI / 6, Math.PI / 4, Math.PI / 3, Math.PI / 5, Math.PI / 2.5];
      const baseAngle = angleVariants[Math.floor(Math.random() * angleVariants.length)];
      const angle = baseAngle + (Math.random() * 0.3 - 0.15);

      const startSide = Math.random();
      let startX: number, startY: number;
      if (startSide < 0.6) {
        startX = Math.random() * width * 1.3;
        startY = -50;
      } else if (startSide < 0.8) {
        startX = -50;
        startY = Math.random() * height * 0.5;
      } else {
        startX = width + 50;
        startY = Math.random() * height * 0.3;
      }

      shootingStars.push({
        x: startX, y: startY,
        length: Math.random() * 160 + 80,
        speed: Math.random() * 14 + 8,
        opacity: Math.random() * 0.4 + 0.6,
        angle, active: true
      });

      nextShootingStarTime = now + Math.random() * 4000 + 1000;
    };

    // ============================================================
    // MOUSE STATE
    // ============================================================

    let mouseX = -9999;
    let mouseY = -9999;
    let targetMouseX = -9999;
    let targetMouseY = -9999;
    let mouseInCanvas = false;

    // ============================================================
    // DRAW: BACKGROUND
    // ============================================================

    const drawBackground = () => {
      ctx.fillStyle = '#111111';
      ctx.fillRect(0, 0, width, height);

      // Subtle nebula tint patches — very faint atmospheric glow
      ctx.globalCompositeOperation = 'screen';

      const neb1 = ctx.createRadialGradient(
        width * 0.2, height * 0.3, 0,
        width * 0.2, height * 0.3, width * 0.35
      );
      neb1.addColorStop(0, 'rgba(20, 18, 35, 0.08)');
      neb1.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = neb1;
      ctx.fillRect(0, 0, width, height);

      const neb2 = ctx.createRadialGradient(
        width * 0.75, height * 0.55, 0,
        width * 0.75, height * 0.55, width * 0.3
      );
      neb2.addColorStop(0, 'rgba(15, 15, 30, 0.06)');
      neb2.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = neb2;
      ctx.fillRect(0, 0, width, height);

      const neb3 = ctx.createRadialGradient(
        width * 0.5, height * 0.7, 0,
        width * 0.5, height * 0.7, width * 0.25
      );
      neb3.addColorStop(0, 'rgba(25, 15, 20, 0.05)');
      neb3.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = neb3;
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = 'source-over';
    };

    // ============================================================
    // DRAW: DOT GRID with cursor repulsion
    // All dots always visible, just gently displaced
    // ============================================================

    let time = 0;

    const updateAndDrawGrid = () => {
      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.1;
      mouseY += (targetMouseY - mouseY) * 0.1;

      time += 0.015;

      for (const dot of gridDots) {
        // Cursor repulsion
        if (mouseInCanvas) {
          const dx = dot.x - mouseX;
          const dy = dot.y - mouseY;
          const distSq = dx * dx + dy * dy;
          const rSq = REPULSE_RADIUS * REPULSE_RADIUS;

          if (distSq < rSq && distSq > 0) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / REPULSE_RADIUS) * REPULSE_STRENGTH;
            const nx = dx / dist;
            const ny = dy / dist;
            dot.vx += nx * force;
            dot.vy += ny * force;
          }
        }

        // Spring back to grid position
        dot.vx += (dot.baseX - dot.x) * SPRING_BACK;
        dot.vy += (dot.baseY - dot.y) * SPRING_BACK;

        // Friction
        dot.vx *= FRICTION;
        dot.vy *= FRICTION;

        // Apply
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Subtle shimmer — slow wave based on position + time
        const shimmer = 0.7 + 0.3 * Math.sin(
          dot.baseX * 0.08 + dot.baseY * 0.06 + time
        );
        ctx.fillStyle = `rgba(255, 255, 255, ${DOT_ALPHA * shimmer})`;

        // Draw dot — always visible
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // ============================================================
    // DRAW: SPARKLE STARS (decorative twinkling on top)
    // ============================================================

    const updateAndDrawSparkles = () => {
      for (const s of sparkStars) {
        // Cursor repulsion — same physics as grid dots
        if (mouseInCanvas) {
          const dx = s.x - mouseX;
          const dy = s.y - mouseY;
          const distSq = dx * dx + dy * dy;
          const rSq = REPULSE_RADIUS * REPULSE_RADIUS;
          if (distSq < rSq && distSq > 0) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / REPULSE_RADIUS) * REPULSE_STRENGTH;
            s.vx += (dx / dist) * force;
            s.vy += (dy / dist) * force;
          }
        }

        // Spring back
        s.vx += (s.baseX - s.x) * SPRING_BACK;
        s.vy += (s.baseY - s.y) * SPRING_BACK;
        s.vx *= FRICTION;
        s.vy *= FRICTION;
        s.x += s.vx;
        s.y += s.vy;

        // Float
        s.floatPhaseX += s.floatSpeed;
        s.floatPhaseY += s.floatSpeed * 0.8;
        const fX = Math.sin(s.floatPhaseX) * 2;
        const fY = Math.cos(s.floatPhaseY) * 2;

        // Twinkle
        s.twinklePhase += s.twinkleSpeed;
        s.alpha = s.baseAlpha * (0.5 + Math.sin(s.twinklePhase) * 0.5);

        const px = s.x + fX;
        const py = s.y + fY;

        if (px < -10 || px > width + 10 || py < -10 || py > height + 10) continue;

        // Glow bloom — subtle halo
        if (s.radius > 0.4 && s.alpha > 0.3) {
          const glowSize = s.radius * 4;
          const glow = ctx.createRadialGradient(px, py, 0, px, py, glowSize);
          glow.addColorStop(0, `rgba(${s.color}, ${s.alpha * 0.4})`);
          glow.addColorStop(1, `rgba(${s.color}, 0)`);
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(px, py, glowSize, 0, Math.PI * 2);
          ctx.fill();
        }

        // Core
        ctx.beginPath();
        ctx.arc(px, py, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color}, ${s.alpha})`;
        ctx.fill();

        // Cross flare ✦
        if (s.hasFlare && s.alpha > 0.35) {
          const flareLen = s.radius * 6 * s.alpha;
          ctx.save();
          ctx.translate(px, py);
          ctx.globalAlpha = s.alpha * 0.65;
          ctx.strokeStyle = `rgba(${s.color}, 0.8)`;
          ctx.lineWidth = 0.6;

          ctx.beginPath();
          ctx.moveTo(-flareLen, 0);
          ctx.lineTo(flareLen, 0);
          ctx.moveTo(0, -flareLen);
          ctx.lineTo(0, flareLen);
          ctx.stroke();

          if (s.radius > 0.7) {
            const dLen = flareLen * 0.5;
            ctx.beginPath();
            ctx.moveTo(-dLen, -dLen);
            ctx.lineTo(dLen, dLen);
            ctx.moveTo(dLen, -dLen);
            ctx.lineTo(-dLen, dLen);
            ctx.stroke();
          }

          ctx.restore();
        }
      }
    };

    // ============================================================
    // DRAW: SHOOTING STARS
    // ============================================================

    const updateAndDrawShootingStars = () => {
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        if (!ss.active) { shootingStars.splice(i, 1); continue; }

        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.opacity -= 0.006;

        if (ss.opacity <= 0 || ss.x < -300 || ss.x > width + 300 || ss.y > height + 300 || ss.y < -300) {
          ss.active = false; continue;
        }

        ctx.save();
        ctx.translate(ss.x, ss.y);
        ctx.rotate(ss.angle);

        const gradient = ctx.createLinearGradient(0, 0, -ss.length, 0);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${ss.opacity})`);
        gradient.addColorStop(0.12, `rgba(210, 225, 255, ${ss.opacity * 0.6})`);
        gradient.addColorStop(1, 'rgba(210, 225, 255, 0)');

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-ss.length, 0);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${ss.opacity})`;
        ctx.fill();

        const hg = ctx.createRadialGradient(0, 0, 0, 0, 0, 8);
        hg.addColorStop(0, `rgba(255, 255, 255, ${ss.opacity * 0.5})`);
        hg.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = hg;
        ctx.beginPath();
        ctx.arc(0, 0, 8, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    };

    // ============================================================
    // RENDER LOOP
    // ============================================================

    const render = () => {
      drawBackground();
      updateAndDrawGrid();
      updateAndDrawSparkles();

      spawnShootingStar();
      updateAndDrawShootingStars();

      animationFrameId = requestAnimationFrame(render);
    };

    // ============================================================
    // EVENTS
    // ============================================================

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      setCanvasSize();
      initGrid();
      initSparkles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
      mouseInCanvas = true;
    };

    const handleMouseLeave = () => {
      mouseInCanvas = false;
      targetMouseX = -9999;
      targetMouseY = -9999;
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    initGrid();
    initSparkles();
    render();

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
        aria-hidden="true"
      />
    </div>
  );
};

export default Starfield;
