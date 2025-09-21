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

function SecondaryContentSection() {
    const [expandedBlock, setExpandedBlock] = React.useState(null);
    const [isClosing, setIsClosing] = React.useState(false);
    const [isOpening, setIsOpening] = React.useState(false);

    const OPEN_MS = 2000; // = --open-ms
    const CLOSE_MS = 800; // = --close-ms

    const handleViewMore = (block) => {
        if (isClosing) setIsClosing(false);

        // 1) сначала помечаем, какая карточка будет expanded/hidden
        setExpandedBlock(block);

        // 2) дождёмся рендера этих классов...
        requestAnimationFrame(() => {
            // ...ещё один rAF, чтобы браузер сделал layout/paint,
            // и только потом даём класс is-opening — общий старт для обеих карточек
            requestAnimationFrame(() => {
                setIsOpening(true);
                // снимем флаг ровно по завершении длительности открытия
                setTimeout(() => setIsOpening(false), OPEN_MS);
            });
        });
    };

    const handleBack = () => {
        setIsClosing(true);
        setTimeout(() => {
            setExpandedBlock(null);
            setIsClosing(false);
        }, CLOSE_MS);
    };

    const containerClass =
        'cards-container' +
        (expandedBlock ? ' is-expanded expanded--' + expandedBlock : '') +
        (isClosing ? ' is-closing' : '') +
        (isOpening ? ' is-opening' : '');

    const virtualClass =
        expandedBlock === null
            ? 'card'
            : expandedBlock === 'virtual'
            ? 'card card--expanded'
            : 'card card--hidden-left';

    const scientistsClass =
        expandedBlock === null
            ? 'card'
            : expandedBlock === 'scientists'
            ? 'card card--expanded'
            : 'card card--hidden-right';

    return (
        <section className="secondary-content">
            <div className={containerClass}>
                {/* Card 1: VIRTUAL SPACE TOURS */}
                <div
                    className={virtualClass}
                    aria-hidden={expandedBlock && expandedBlock !== 'virtual'}
                >
                    <div className="card-content">
                        <h3 className="bebas-neue-regular title">
                            VIRTUAL SPACE TOURS
                        </h3>
                        {expandedBlock === 'virtual' ? (
                            <>
                                <div className="expanded-divider"></div>
                                <p className="nunito description long">
                                    Take a virtual leap into the cosmos with our
                                    immersive space tours. Navigate through
                                    fully interactive 3D models of celestial
                                    bodies — from the rocky terrain of Mars to
                                    the icy rings of Saturn. Explore the surface
                                    of the Moon, witness Jupiter’s Great Red
                                    Spot up close, and venture inside the
                                    International Space Station. With intuitive
                                    controls and high-resolution visuals, you'll
                                    feel like you're truly there. Whether you're
                                    using a desktop, tablet, or VR headset, our
                                    digital observatory brings the universe to
                                    your fingertips. Discover hidden features of
                                    planets, learn fascinating facts as you move
                                    through space, and enjoy guided tours
                                    narrated by space experts. It's not just a
                                    simulation — it’s an experience.
                                </p>
                                <div className="expanded-divider"></div>
                                <button
                                    className="bebas-neue-regular"
                                    onClick={handleBack}
                                >
                                    BACK
                                </button>
                            </>
                        ) : (
                            <>
                                <div className="divider"></div>
                                <p className="nunito description  short">
                                    Step into a digital observatory. Journey
                                    through 3D models of planets, moons, and the
                                    International Space Station with immersive
                                    visuals.
                                </p>
                                <button
                                    className="bebas-neue-regular"
                                    onClick={() => handleViewMore('virtual')}
                                >
                                    VIEW MORE
                                </button>
                            </>
                        )}
                    </div>
                    <img
                        src="images/tour.png"
                        alt="Virtual tour"
                        className="card-icon"
                    />
                </div>

                {/* Card 2: MEET THE SCIENTISTS */}
                <div
                    className={scientistsClass}
                    aria-hidden={
                        expandedBlock && expandedBlock !== 'scientists'
                    }
                >
                    <div className="card-content">
                        <h3 className="bebas-neue-regular title">
                            MEET THE SCIENTISTS
                        </h3>

                        {expandedBlock === 'scientists' ? (
                            <>
                                <div className="expanded-divider"></div>
                                <p className="nunito description long">
                                    Behind every satellite launch and cosmic
                                    discovery is a team of passionate
                                    individuals driven by curiosity and wonder.
                                    In this section, we introduce you to the
                                    scientists, engineers, and astronauts
                                    shaping our understanding of the universe.
                                    Read in-depth interviews with
                                    astrophysicists who study black holes,
                                    engineers who build next-generation
                                    spacecraft, and astronauts who have lived
                                    aboard the ISS. Gain insight into their
                                    daily lives, their challenges, and what
                                    inspired them to look up at the night sky.
                                </p>
                                <div className="expanded-divider"></div>
                                <button
                                    className="bebas-neue-regular"
                                    onClick={handleBack}
                                >
                                    BACK
                                </button>
                            </>
                        ) : (
                            <>
                                <div className="divider"></div>
                                <p className="nunito description short">
                                    Get inspired by the minds behind the
                                    missions. Read interviews, behind-the-scenes
                                    reports, and personal stories from
                                    astrophysicists and astronauts.
                                </p>
                                <button
                                    className="bebas-neue-regular"
                                    onClick={() => handleViewMore('scientists')}
                                >
                                    VIEW MORE
                                </button>
                            </>
                        )}
                    </div>
                    <img
                        src="images/scientist.png"
                        alt="Scientist"
                        className="card-icon"
                    />
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
            <SectionDivider />
            <PrimaryContentSection />
            <SectionDivider />
            <SecondaryContentSection />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
