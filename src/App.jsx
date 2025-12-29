import { useState, useContext } from "react";
import DefaultButton from "./components/DefaultButton.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Card from "./components/Card.jsx";
import data from "./api/api.json";
import ModalCarrito from "./components/ModalCarrito.jsx";
import { CartContext } from "./context/CartContext.jsx";

function App() {

  const [mostrar, setMostrar] = useState(false);

  const {
    carrito,
    añadirCarrito,
    eliminarProducto,
    aumentarCantidad,
    disminuirCantidad,
    vaciarCarrito,
  } = useContext(CartContext);

  const abrirCarrito = () => {
    setMostrar(true);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">

      <Header openCart={abrirCarrito} cantidad={carrito.length} />

      <div className="flex-1 max-w-6xl mx-auto w-full p-6">
        <h1 className="text-3xl mb-6 text-blue-400 text-center">
          <span className="font-bold">Hola,</span> date un capricho hoy con una gran oferta!
        </h1>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.productos.map((producto) => (
            <Card
              key={producto.id}
              producto={producto}
            />
          ))}
        </div>
      </div>

      <Footer />

      {mostrar && (
        <ModalCarrito
          carrito={carrito}
          onClose={() => setMostrar(false)}
          eliminarProducto={eliminarProducto}
          aumentarCantidad={aumentarCantidad}
          disminuirCantidad={disminuirCantidad}
          vaciarCarrito={vaciarCarrito}
        />
      )}
    </div>
  );
}

export default App;
