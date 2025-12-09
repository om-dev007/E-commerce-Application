import React, { useEffect, useState } from "react";

const Toast = ({ message, type, onClose }) => {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLeaving(true);
      setTimeout(onClose, 450);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl text-white w-72
        backdrop-blur-md bg-opacity-80 select-none 
        ${leaving ? "animate-toast-out" : "animate-toast-in"}
        ${type === "success" && "bg-green-600/90 border border-green-300/40"}
        ${type === "error" && "bg-red-600/90 border border-red-300/40"}
        ${type === "warning" && "bg-yellow-500/90 border border-yellow-200/40"}
        ${type === "info" && "bg-blue-600/90 border border-blue-300/40"}
      `}
      style={{
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
      }}
    >
      <span className="flex-1 font-medium">{message}</span>

      <button
        onClick={() => {
          setLeaving(true);
          setTimeout(onClose, 450);
        }}
        className="text-xl font-bold hover:scale-125 transition-transform"
      >
        ×
      </button>
    </div>
  );
};

export default Toast;
