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
                    <h3 className="bebas-neue-regular">
                        INTERSTELLAR EXPLORATION
                    </h3>
                    <p className="nunito">
                        Uncover the secrets of deep space missions and the
                        future of human travel beyond our solar system.
                    </p>
                </div>
                <div className="feature">
                    <img src="images/icon2.png" alt="Astronomy" />
                    <h3 className="bebas-neue-regular">
                        ASTRONOMICAL DISCOVERIES
                    </h3>
                    <p className="nunito">
                        Dive into the latest findings in astronomy, from
                        exoplanets to black holes and dark matter.
                    </p>
                </div>
                <div className="feature">
                    <img src="images/icon3.png" alt="Missions" />
                    <h3 className="bebas-neue-regular">LIVE SPACE MISSIONS</h3>
                    <p className="nunito">
                        Track real-time satellite orbits and follow ongoing NASA
                        and ESA missions.
                    </p>
                </div>
                <div className="feature">
                    <img src="images/icon4.png" alt="Education" />
                    <h3 className="bebas-neue-regular">COSMIC EDUCATION</h3>
                    <p className="nunito">
                        Learn about space through interactive articles, videos,
                        and virtual tours of the universe.
                    </p>
                </div>
            </div>
        </section>
    );
}
function SectionDivider() {
    return <div className="section-divider"></div>;
}

function PrimaryContentSection() {
    return (
        <section className="primary-content">
            <div className="primary-text">
                <h2 className="bebas-neue-regular">THE UNIVERSE AWAITS</h2>
                <p className="nunito">
                    From the birth of stars to the collision of galaxies, space
                    is full of wonders waiting to be explored. Whether you're a
                    student, enthusiast, or professional, our platform brings
                    the cosmos closer than ever before.
                </p>
            </div>
            <div className="primary-image">
                <img src="images/img.png" alt="Silhouette with telescope" />
            </div>
        </section>
    );
}

function App() {
    return (
        <div>
            <Header />
            <FeaturesSection />
            <SectionDivider />
            <PrimaryContentSection />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
