import React, { useState, useEffect, useRef } from "react";

const CursorFollower = () => {
  const [outerPos, setOuterPos] = useState({ x: 0, y: 0 });
  const [innerPos, setInnerPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const lastMoveTime = useRef(Date.now());
  const requestRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setOuterPos({ x: e.clientX, y: e.clientY });
      lastMoveTime.current = Date.now();
      setVisible(true);  // show cursor when moving
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const lerp = (start, end, amt) => start + (end - start) * amt;

    const animate = () => {
      const now = Date.now();
      const timeSinceLastMove = now - lastMoveTime.current;

      if (timeSinceLastMove > 100) {
        // Mouse stopped: inner dot aligns instantly and hide after a delay
        setInnerPos(outerPos);
        setTimeout(() => setVisible(false), 300); // fade out after 300ms
      } else {
        // Mouse moving: inner dot smoothly follows outer dot
        setInnerPos((prev) => {
          const dx = outerPos.x - prev.x;
          const dy = outerPos.y - prev.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const lerpAmount = Math.min(0.1, 0.2 / (distance || 1));
          return {
            x: lerp(prev.x, outerPos.x, lerpAmount),
            y: lerp(prev.y, outerPos.y, lerpAmount),
          };
        });
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [outerPos]);

  const dx = outerPos.x - innerPos.x;
  const dy = outerPos.y - innerPos.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const offsetAmount = Math.min(distance / 3, 10);
  const angle = Math.atan2(dy, dx);

  const innerX = innerPos.x + offsetAmount * Math.cos(angle);
  const innerY = innerPos.y + offsetAmount * Math.sin(angle);

  const outerStyle = {
    transform: `translate3d(${outerPos.x}px, ${outerPos.y}px, 0) translate(-50%, -50%)`,
  };

  const innerStyle = {
    transform: `translate3d(${innerX}px, ${innerY}px, 0) translate(-50%, -50%) scale(${visible ? 1 : 0})`,
    transition: "transform 0.3s ease-out",
    opacity: visible ? 1 : 0,
  };

  return (
    <>
      <div
        className="fixed pointer-events-none w-10 h-10 rounded-full border-2 border-blue-500 mix-blend-screen z-50"
        style={outerStyle}
      ></div>

      <div
        className="fixed pointer-events-none w-4 h-4 rounded-full bg-blue-500 mix-blend-screen z-50"
        style={innerStyle}
      ></div>
    </>
  );
};

export default CursorFollower;
