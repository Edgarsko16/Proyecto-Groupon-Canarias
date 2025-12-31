import { useMemo } from "react";
import DefaultButton from "./DefaultButton.jsx";

function ModalCarrito({
  carrito,
  onClose,
  eliminarProducto,
  aumentarCantidad,
  disminuirCantidad,
  vaciarCarrito,
}) {
  const total = useMemo(() => {
    return carrito.reduce(
      (acc, producto) => acc + producto.precio * producto.cantidad,
      0
    );
  }, [carrito]);

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-xl p-6 shadow-xl">
        {/* TÍTULO */}
        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          🛒 Tu carrito
        </h2>

        {/* LISTA */}
        {carrito.length === 0 ? (
          <p className="text-slate-500">Tu carrito está vacío</p>
        ) : (
          <div className="space-y-3">
            {carrito.map((producto) => (
              <div
                key={producto.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p className="font-medium text-slate-800">
                    {producto.nombre}
                  </p>
                  <p className="text-sm text-teal-600">{producto.precio} €</p>
                </div>

                <div className="flex items-center gap-2">
                  <DefaultButton
                    texto="➖"
                    onClick={() => disminuirCantidad(producto.id)}
                    className="bg-slate-300 hover:bg-slate-400 text-black px-2"
                  />

                  <span className="font-semibold">{producto.cantidad}</span>

                  <DefaultButton
                    texto="➕"
                    onClick={() => aumentarCantidad(producto.id)}
                    className="bg-slate-300 hover:bg-slate-400 text-black px-2"
                  />

                  <DefaultButton
                    texto="✖"
                    onClick={() => eliminarProducto(producto.id)}
                    className="bg-red-300 hover:bg-red-600 text-white px-2"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TOTAL */}
        <p className="mt-4 text-lg font-bold text-slate-800">
          Total: {total.toFixed(2)} €
        </p>

        {/* BOTONES */}
        <div className="mt-6 flex flex-col gap-3">
          <DefaultButton
            texto="Cerrar"
            onClick={onClose}
            className="bg-teal-700 hover:bg-teal-600 text-white w-full"
          />

          <DefaultButton
            texto="Vaciar carrito"
            onClick={vaciarCarrito}
            className="bg-red-600 hover:bg-red-700 text-white w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default ModalCarrito;
