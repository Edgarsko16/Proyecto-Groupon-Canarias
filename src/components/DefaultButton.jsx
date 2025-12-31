function DefaultButton({ texto, onClick, className="" }) {
  return (
    <button
      className={`rounded-lg px-3 py-2 font-semibold transition ${className}`}
      onClick={onClick}
    >
      {texto}
    </button>
  );
}

export default DefaultButton;
