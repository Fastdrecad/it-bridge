export default function Button({ text, color, background, icon, disabled }) {
  return (
    <button
      className={`bg-indigo-950 px-8 py-4 text-${color} rounded-full font-medium tracking-wider hover:bg-indigo-900`}
    >
      {text}
    </button>
  );
}
