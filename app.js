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

function App() {
    return (
        <div>
            <Header />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
