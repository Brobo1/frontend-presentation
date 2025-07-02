export function Head() {
  return (
    <>
      <div id={"navbar"}>
        <h1 id={"navbarTitle"}>DinOppgave</h1>
        <div id={"navbarBtns"}>
          <button className="nav-btn">Prosjekter</button>
          <button className="nav-btn">For Fagfolk</button>
          <button className="nav-btn">Min Hjemmeside</button>
          <button className="nav-btn">Legg ut oppdrag</button>
          <button className="nav-btn highlight">Logg inn</button>
        </div>
      </div>
    </>
  );
}
