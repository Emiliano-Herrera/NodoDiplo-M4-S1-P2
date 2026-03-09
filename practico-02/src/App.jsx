import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-black text-white">
        <Header />

        <main className="flex-grow container mx-auto max-w-4xl px-4 py-16">
          <div className="space-y-12">
            <div className="border-b border-gray-800 pb-8">
              <h2 className="text-3xl font-light mb-4 tracking-tight">
                Contenido Principal
              </h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, doloribus perspiciatis eveniet et, quisquam numquam laborum cupiditate hic nisi maxime sit labore neque beatae. Ut, praesentium! Dolorum voluptatem esse possimus?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-gray-800 p-6 hover:border-gray-700 transition-colors">
                <h3 className="text-xl font-light mb-2 text-white">
                  Componentes
                </h3>
                <p className="text-gray-400 font-light">
                  Los componentes son piezas reutilizables e independientes de código que definen partes de la interfaz de usuario. Como bloques de Lego que juntos forman tu aplicación.
                </p>
              </div>

              <div className="border border-gray-800 p-6 hover:border-gray-700 transition-colors">
                <h3 className="text-xl font-light mb-2 text-white">
                  Tailwind CSS
                </h3>
                <p className="text-gray-400 font-light">
                  Tailwind es un framework de CSS que en lugar de darte componentes pre-diseñados, te proporciona clases utilitarias de bajo nivel para construir diseños personalizados directamente en tu HTML/JSX.
                </p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
