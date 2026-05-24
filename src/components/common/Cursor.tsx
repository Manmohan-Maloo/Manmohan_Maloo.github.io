import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CursorInner: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const dotX = useMotionValue(-200);
  const dotY = useMotionValue(-200);
  const ringX = useSpring(dotX, { stiffness: 85, damping: 15, mass: 0.4 });
  const ringY = useSpring(dotY, { stiffness: 85, damping: 15, mass: 0.4 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      setVisible(true);
      const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      setHovering(!!el?.closest("a, button, [role='button'], input, textarea, select, label"));
    };
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [dotX, dotY]);

  return (
    <div className="pointer-events-none select-none">
      {/* Dot — follows exactly */}
      <motion.div
        className="fixed top-0 left-0 z-[99999] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, #a78bfa, #7c3aed)",
        }}
        animate={{
          width: clicking ? 6 : hovering ? 18 : 10,
          height: clicking ? 6 : hovering ? 18 : 10,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.12 }}
      />

      {/* Ring — lags behind with spring */}
      <motion.div
        className="fixed top-0 left-0 z-[99998] rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          border: hovering ? "1.5px solid rgba(167,139,250,0.7)" : "1.5px solid rgba(124,58,237,0.35)",
        }}
        animate={{
          width: clicking ? 22 : hovering ? 46 : 36,
          height: clicking ? 22 : hovering ? 46 : 36,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
};

/* Wrapper: skip rendering on touch-only devices */
const Cursor: React.FC = () => {
  const supported = useRef(
    typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches
  );
  if (!supported.current) return null;
  return <CursorInner />;
};

export default Cursor;
