import React from "react";

interface ButtonProps {
  text: string;
  color: string;
  background: string;
  disabled: boolean;
}

export default function Button({
  text,
  color,
  background,
  disabled
}: ButtonProps) {
  return (
    <button
      className={`bg-indigo-950 px-8 py-4 text-${color} rounded-full font-medium tracking-wider hover:bg-indigo-900`}
    >
      {text}
    </button>
  );
}
