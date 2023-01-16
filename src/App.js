import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Portfolio from "./components/Portfolio";

function App() {
  const [categories] = useState([
    {
      name: "portfolio",
      description: "Check out some of the projects I have worked on",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
      ></Nav>
      <main>
        {!contactSelected && !portfolioSelected ? (
          <>
            <About></About>
          </>
        ) : (
          ""
        )}

        {contactSelected ? (
          <>
            <ContactForm />
          </>
        ) : (
          ""
        )}

        {portfolioSelected ? (
          <>
            <Portfolio />
          </>
        ) : (
          ""
        )}
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
