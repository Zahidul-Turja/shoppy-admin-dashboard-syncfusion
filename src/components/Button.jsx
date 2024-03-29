function Button({ icon, bgColor, color, size, text, borderRadius, onClick }) {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      onClick={onClick}
    >
      {text || icon}
    </button>
  );
}

export default Button;
