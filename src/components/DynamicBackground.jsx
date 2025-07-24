import { useEffect, useRef } from "react";

function DynamicBackground({ children }) {
  const beforeRef = useRef(null);
  const afterRef = useRef(null);

  useEffect(() => {
    const animate = (el, reverse = false, delay = 0) => {
      const direction = reverse ? -1 : 1;
      let angle = (delay / 20) * 360;

      const animateFrame = () => {
        angle += 0.1 * direction;
        el.style.transform = `rotate(${angle}deg)`;
        requestAnimationFrame(animateFrame);
      };

      animateFrame();
    };

    animate(beforeRef.current, true, 20);
    animate(afterRef.current, false, 0);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        animation: "theme 21s linear infinite",
        overflow: "hidden",
      }}
    >
      {/* Emula ::before */}
      <div
        ref={beforeRef}
        style={{
          position: "fixed",
          top: 0,
          right: "30vw",
          width: "100vmax",
          height: "100vmax",
          background: "rgba(0,0,0,0.05)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Emula ::after */}
      <div
        ref={afterRef}
        style={{
          position: "fixed",
          top: 0,
          left: "30vw",
          width: "100vmax",
          height: "100vmax",
          background: "rgba(0,0,0,0.05)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Hijos encima del fondo */}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>

      {/* Animaciones por keyframes en CSS */}
      <style>{`
        @keyframes theme {
          0%   { background: #2e003f; }{/* Morado */}
          16%  { background: #2f2c79; }{/* Azul */}
          33%  { background: #09363c; }{/* Verde */}
          50%  { background: #333333; }{/* Gris */}
          66%  { background: #2e003f; }{/* Morado */}
          83%  { background: #2f2c79; }{/* Azul */}
          100% { background: #09363c; }{/* Verde */}
        }
      `}</style>
    </div>
  );
}

export default DynamicBackground;
