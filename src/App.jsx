import { useState } from "react";
import "./App.css";
import { Head } from "./comps/head/Head.jsx";
import { Content } from "./comps/content/Content.jsx";
import { ProfilePage } from "./comps/profile/ProfilePage.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div id="container">
        <Head onNavigate={handleNavigation}></Head>
        {currentPage === "home" ? (
          <Content />
        ) : currentPage === "profile" ? (
          <ProfilePage />
        ) : (
          <Content />
        )}
      </div>
    </>
  );
}

export default App;
