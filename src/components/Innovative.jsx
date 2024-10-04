const Innovative = () => {
  return (
    <div className="sm:w-9/12 container pt-16 m-auto">
      <h2 className="text-3xl text-center mb-8 text-gray-200">
        Bizi innovativ edən nədir?
      </h2>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Sürət və effektivlik
        </div>
        <div className="collapse-content">
          <p>
            İnsansız hava vasitələri ilə əkin prosesi daha sürətli həyata
            keçirilir. 1 gün ərzində 100 ha ərazi!
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Ekoloji təmiz və dayanıqlı
        </div>
        <div className="collapse-content">
          <p>
            Bioloji parçalanan materiallardan istifadə olunur və torpaqda
            minimal iz buraxır.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Sərfəli</div>
        <div className="collapse-content">
          <p>Daha az işçi qüvvəsi, daha sürətli nəticələr!</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Təhlükəsiz</div>
        <div className="collapse-content">
          <p>
            İnsanların təhlükəsiz ərazilərə, mina ilə dolu yerlərə daxil
            olmasına ehtiyac qalmır
          </p>
        </div>
      </div>
    </div>
  );
};

export default Innovative;
