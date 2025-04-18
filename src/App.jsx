import React from "react";

const businesses = [
  {
    name: "TecnoCelu_A&M",
    category: "Tecnología",
    address: "Calle 123",
    phone: "1254-5678"
  },
  {
    name: "Zeballos Ferretería",
    category: "Ferretería",
    address: "Calle Zeballos 456",
    phone: "2345-6789"
  },
  {
    name: "Peluquería Estilo",
    category: "Peluquería",
    address: "Mitre 789",
    phone: "9876-5432"
  },
  {
    name: "Boutique del Centro",
    category: "Ropa",
    address: "San Juan 234",
    phone: "1234-0000"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
          Encontrá ese emprendimiento!
        </h1>
        <p className="text-gray-600 mt-2">
          Explora la variedad de servicios en tu zona.
        </p>
        <button className="mt-4 bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600 transition">
          Buscar negocios
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {businesses.map((biz, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-4 flex flex-col gap-2"
          >
            <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
             <img src="../public/ana.jpeg" alt="logo-celulares-local" 
             className="h-70 w-70 object-contain"/>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{biz.name}</h2>
              <p className="text-gray-600">{biz.category}</p>
              <p className="text-gray-500 text-sm">
                📍 {biz.address}
              </p>
              <p className="text-gray-500 text-sm">📞 {biz.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
