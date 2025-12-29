function DefaultButton({ texto, onClick }) {
  return (
    <button
      className="px-4 py-2 ml-2 rounded-lg bg-teal-800 text-white font-semibold hover:bg-teal-600 transition"
      onClick={onClick}
    >
      {texto}
    </button>
  );
}

export default DefaultButton;
