
function App() {

  const handleButtonClick = () => {
    alert("My projects are coming soon!");
  }
    

  return (
    <main className="hero">
      <p className="eyebrow">
        WELCOME TO MY PORTFOLIO
      </p>

      <h1>
        Hi, I'm <span>Rahul Lokhande</span>
      </h1>

      <h2>Aspiring React Developer</h2>

      <p className="description">
        I build modern websites and am learning React
        through practical projects. My goal is to help
        businesses build a strong online presence.
      </p>

      <button
        className="primary-button"
        onClick={handleButtonClick}
      >
        View My Projects →
      </button>
    </main>
  );
}

export default App;
