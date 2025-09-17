import { useState } from 'react'
import './agregado.css'

const Agregado = () => {
  const [step, setStep] = useState(0); // 0: nada, 1: nombre, 2: cantidad
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    if (step === 0) {
      setStep(1);
    } else if (step === 1 && nombre.trim() !== "") {
      setStep(2);
    } else if (step === 2 && cantidad.trim() !== "") {
      setItems([...items, { nombre, cantidad }]);
      setNombre("");
      setCantidad("");
      setStep(0);
    }
  };

  return (
    <div class="p-6 flex flex-col gap-4 max-w-md mx-auto">
      { step === 0 && (
        <button onClick={handleAdd} class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Añadir elemento
        </button>
      ) }

      {step === 1 && (
        <input
          type="text"
          placeholder="nombre..."
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          class="border px-3 py-2 rounded-lg w-full"
        />
      ) }

      {step === 2 && (
        <input
          type="number"
          placeholder="cantidad..."
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          className="border px-3 py-2 rounded-lg w-full"
        />
      ) }

      <div class="grid gap-3">
        { items.map((item, index) => (
          <div key={index} class="p-4 border rounded-lg shadow bg-white flex justify-between">
            <span class="font-semibold">{item.nombre}</span>
            <span class="text-gray-600">x{item.cantidad}</span>
          </div>
        ) ) }
      </div>
    </div>
  );
}

export default Agregado
