import Header from "./Header";
import CarouselSection from "./CarouselSection";
import CardsSection from "./CardsSection";
import Footer from "./Footer";

function LandingPage() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "black" }}>
      <Header />
      <div className="container">
        <div className="container">
          <CarouselSection />
        </div>

        <div className="container">
          <CardsSection />
        </div>

        {/* VIDEO SECTION */}

        <div className="container">
          <h1 className="text-center mt-5 text-white ">Why Wrogn?</h1>
          <div className="ratio ratio-16x9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/sSWRV8QBj-Y?si=VmfFopC40mdZV8aQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* TESTIMONIALS */}

        <div className="container mt-4" style={{marginBottom:"100px"}}>
          <h1 className="text-center mb-5 text-white">Testimonials</h1>
          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card bg-dark text-light">
                <div className="card-body">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16">
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                  </svg>
                  <p className="card-text" style={{ fontSize: "16px" }}>
                    "I'm grateful to be part of this e-commerce platform endorsed by Virat Kohli. Whether you're a cricket fan or a fashion enthusiast, you're in for something special. The quality and range of items on this website are impressive, curated to reflect Virat's style. The user-friendly design and seamless navigation enhance your shopping experience. What's more exciting is that Virat Kohli himself sports these items, making this a unique shopping destination."
                    <br /><br />
                    - Luqman Haider
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card bg-dark text-light">
                <div className="card-body">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-quote" viewBox="0 0 16 20">
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                  </svg>
                  <p className="card-text" style={{ fontSize: "16px" }}>
                    "I'm thrilled to be part of this e-commerce venture backed by cricket legend Virat Kohli. This website is a game-changer for fashion and lifestyle. The products reflect the same excellence Virat brings to cricket. The user-friendly design and seamless shopping experience are commendable. Plus, knowing Virat endorses and wears these items makes shopping here even more special."
                    <br /><br /><br />
                    - Muhammad Usman
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default LandingPage;
