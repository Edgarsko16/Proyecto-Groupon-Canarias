import DefaultButton from "./DefaultButton";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

function Card({ producto}) {
  const { añadirCarrito } = useContext(CartContext);
  const { nombre, descripcion, isla, precio, imagen } = producto;

  return (
    <div className="bg-slate-800 p-4 rounded-xl text-white font-semibold shadow-lg">
      <img 
        src={imagen}
        alt={nombre}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />
      <h2 className="text-xl font-bold">{nombre}</h2>
      <p className="text-gray-300 mt-2">{descripcion}</p>
      <p className="text-gray-300 mt-2">{isla}</p>
      <p className="mt-3 mb-2 text-teal-500 font-bold">{precio}€</p>
      <DefaultButton
        texto="Comprar"
        onClick={() => alert("Has comprado " + nombre)}
        className="bg-teal-700 hover:bg-teal-600 text-white mt-2 ml-2"
      />

      <DefaultButton
        texto="Añadir al carrito"
        onClick={() => añadirCarrito(producto)}
        className="bg-teal-700 hover:bg-teal-600 text-white mt-2 ml-6"
      />
    </div>
  );
}

export default Card;
