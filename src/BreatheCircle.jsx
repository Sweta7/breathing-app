import React, { useEffect, useState } from "react";
import "./BreatheCircle.css";

const CYCLE_TIME = 8000; // 8 seconds for full cycle (in + out)

export default function BreatheCircle() {
  const [phase, setPhase] = useState("in"); // "in" or "out"

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((p) => (p === "in" ? "out" : "in"));
    }, CYCLE_TIME / 2);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="breathe-container">
      <svg className="breathe-svg" width="300" height="300">
        <circle
          className={`breathe-circle ${phase}`}
          cx="150"
          cy="150"
          r="120"
          fill="url(#grad1)"
          stroke="#7f7fff"
          strokeWidth="10"
        />
        <defs>
          <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#b3c6ff" />
            <stop offset="100%" stopColor="#7f7fff" />
          </radialGradient>
        </defs>
      </svg>
      <div className="breathe-text">
        {phase === "in" ? (
          <>
            Breathe<br />in
          </>
        ) : (
          "Breathe out"
        )}
      </div>
    </div>
  );
}