import { createContext, useState } from "react";

export const CartContext = createContext();
export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const añadirCarrito = (producto) => {
    const existe = carrito.find((item) => item.id === producto.id);

    if (existe) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const eliminarProducto = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
  };

  const aumentarCantidad = (id) => {
    setCarrito(
      carrito.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const disminuirCantidad = (id) => {
    setCarrito(
      carrito.map((item) =>
        item.id === id && item.cantidad > 1
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
    );
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        añadirCarrito,
        eliminarProducto,
        aumentarCantidad,
        disminuirCantidad,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
