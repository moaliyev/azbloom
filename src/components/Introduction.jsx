const Introduction = () => {
  return (
    <div
      className="sm:w-9/12 container pt-16 m-auto flex flex-col gap-3 items-center"
      id="about"
    >
      <h2 className="text-4xl text-center text-gray-200">
        Qarabağ müharibəsi nəticəsində yandırılmış meşəlik ərazisi:
      </h2>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">Ərazi sahəsi (hektar)</div>
          <div className="stat-value text-center">1,815</div>
        </div>
      </div>
      <h2 className="text-3xl pt-6 text-gray-200">Həlli yolu?</h2>
    </div>
  );
};

export default Introduction;
