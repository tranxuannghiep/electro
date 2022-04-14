import "./App.scss";

function App() {
  const handleClick = (e) => {
    if (!e.target.control.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  return (
    <div className="container">
      <h1>Light / Dark Mode</h1>
      <div className="toggle-container">
        <input type="checkbox" id="switch" name="theme" />
        <label htmlFor="switch" onClick={handleClick}>
          Toggle
        </label>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus
        repellendus dolorem eum consequatur id exercitationem nesciunt,
        inventore modi perferendis impedit esse, tempora officia, ipsam quae
        libero. Nostrum, alias dignissimos.
      </p>
    </div>
  );
}

export default App;
