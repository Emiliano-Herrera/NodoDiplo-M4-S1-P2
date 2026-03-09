function Header() {
  return (
    <header className="bg-black text-white p-8 border-b border-gray-800">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">
          Introducción a react
        </h1>
        <p className="text-gray-400 text-xl md:text-2xl font-light max-w-2xl">
          Explorando el mundo de los componentes y estilizando con Tailwind CSS
        </p>
      </div>
    </header>
  );
}

export default Header;