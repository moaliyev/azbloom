const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(http://localhost:5173/test.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl font-bold text-white">AZBloom</h1>
          <p className="mb-5 text-gray-300">Yaşıl gələcəyə toxum əkək!</p>
          <a href="#about" className="btn btn-primary">
            Ətraflı məlumat
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
