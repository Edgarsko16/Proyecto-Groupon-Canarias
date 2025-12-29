function Header( {openCart, cantidad} ) {
  return (
    <header className="w-full bg-teal-800 py-4 px-6 flex items-center justify-between">
      <img src="/Groupon-Canarias.png" alt="Groupon Canarias" className="h-30"/>

      <button
        onClick={openCart}
        className="rounded-lg bg-teal-900 px-4 py-2 text-white hover:bg-emerald-700 transition"
      >
        🛒 Ver Carrito ({cantidad})
      </button>
    </header>
  );
}

export default Header;
