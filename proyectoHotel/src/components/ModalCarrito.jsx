import { useMemo } from "react";

function ModalCarrito({
  carrito,
  onClose,
  eliminarProducto,
  aumentarCantidad,
  disminuirCantidad,
  vaciarCarrito,
}) {
  const total = useMemo(() => {
  return carrito
    .reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0)
    .toFixed(2);
}, [carrito]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white max-w-md w-full p-6 rounded-xl shadow-xl relative">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">
          🛒 Tu carrito
        </h2>

        {carrito.length > 0 ? (
          <>
            {carrito.map((producto, index) => (
              <div
                key={index}
                className="border-b py-2 flex justify-between items-center text-slate-700"
              >
                <span>
                  {producto.nombre} —
                  <span className="text-teal-600 font-semibold">
                    {" "}
                    {producto.precio}€
                  </span>
                </span>

                <div className="flex items-center gap-2">
                  {/* disminuir */}
                  <button
                    onClick={() => disminuirCantidad(producto.id)}
                    className="bg-slate-300 px-2 py-1 rounded hover:bg-slate-400"
                  >
                    ➖
                  </button>

                  <span>{producto.cantidad}</span>

                  {/* aumentar */}
                  <button
                    onClick={() => aumentarCantidad(producto.id)}
                    className="bg-slate-300 px-2 py-1 rounded hover:bg-slate-400"
                  >
                    ➕
                  </button>

                  {/* eliminar */}
                  <button
                    onClick={() => eliminarProducto(producto.id)}
                    className="text-red-600 hover:text-red-800 font-bold"
                  >
                    ✖
                  </button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p className="text-slate-600">Tu carrito está vacío</p>
        )}

        {/* Total */}
        <p className="mt-4 font-bold text-lg text-slate-800">Total: {total}€</p>

        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="mt-6 w-full py-2 bg-teal-700 text-white rounded-lg hover:bg-teal-600 transition font-semibold"
        >
          Cerrar
        </button>

        <button
          onClick={vaciarCarrito}
          className="mt-4 w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold"
        >
          Vaciar carrito
        </button>
      </div>
    </div>
  );
}

export default ModalCarrito;
