import './Banner.css';

function Banner() {
  return (
    <section className="Banner">
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/src/assets/img/riodejaneiro.png" className="d-block mx-auto" alt="Rio de Janeiro" />
        </div>
        <div className="carousel-item">
          <img src="/src/assets/img/download 2.png" className="d-block mx-auto" alt="Paris" />
        </div>
        <div className="carousel-item">
          <img src="/src/assets/img/download 3.png" className="d-block mx-auto" alt="Lisbon" />
        </div>
      </div>
    </div>
  </section>
  );
}

export default Banner;
