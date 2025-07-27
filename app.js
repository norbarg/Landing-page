// app.js
function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <div className="image-block">
                    <img src="images/suns.png" alt="Cosmic sphere" />
                </div>
                <div className="text-block">
                    <h1 className="bebas-neue-regular">
                        &nbsp;&nbsp;DISCOVER THE INFINITE
                    </h1>
                    <p className="nunito">
                        Explore the mysteries of the cosmos — from distant
                        galaxies to the edge of our imagination.
                    </p>
                </div>
            </div>
        </header>
    );
}
function FeaturesSection() {
    return (
        <section className="features-icons">
            <div className="features-container">
                <div className="feature">
                    <img src="images/icon1.png" alt="Interstellar" />
                    <h3>INTERSTELLAR EXPLORATION</h3>
                    <p>
                        Uncover the secrets of deep space missions and the
                        future of human travel beyond our solar system.
                    </p>
                </div>
                <div className="feature">
                    <img src="images/icon2.png" alt="Astronomy" />
                    <h3>ASTRONOMICAL DISCOVERIES</h3>
                    <p>
                        Dive into the latest findings in astronomy, from
                        exoplanets to black holes and dark matter.
                    </p>
                </div>
                <div className="feature">
                    <img src="images/icon3.png" alt="Missions" />
                    <h3>LIVE SPACE MISSIONS</h3>
                    <p>
                        Track real-time satellite orbits and follow ongoing NASA
                        and ESA missions.
                    </p>
                </div>
                <div className="feature">
                    <img src="images/icon4.png" alt="Education" />
                    <h3>COSMIC EDUCATION</h3>
                    <p>
                        Learn about space through interactive articles, videos,
                        and virtual tours of the universe.
                    </p>
                </div>
            </div>
        </section>
    );
}

function App() {
    return (
        <div>
            <Header />
            <FeaturesSection />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
