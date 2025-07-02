export function Head({ onNavigate }) {
  return (
    <>
      <div id={"navbar"}>
        <h1 id={"navbarTitle"} onClick={() => onNavigate("home")}>DinOppgave</h1>
        <div id={"navbarBtns"}>
          <button className="nav-btn">Prosjekter</button>
          <button className="nav-btn">For Fagfolk</button>
          <button className="nav-btn">Min Hjemmeside</button>
          <button className="nav-btn">Legg ut oppdrag</button>
          <button 
            className="nav-btn highlight" 
            onClick={() => onNavigate("profile")}
          >
            Logg inn
          </button>
        </div>
      </div>
    </>
  );
}
