import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

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
  const [resumeSelected, setResumeSelected] = useState(false);

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
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Nav>
      <main>
        {!contactSelected && !portfolioSelected && !resumeSelected ? (
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

        {resumeSelected ? (
          <>
            <Resume />
          </>
        ) : (
          ""
        )}

        <footer>
          <a href="https://www.linkedin.com/in/jennifer-hano/">LinkedIn</a>
          <a href="https://github.com/Jmhano/">Github</a>
          <a href="https://twitter.com/">Twitter</a>
        </footer>
      </main>
    </div>
  );
}

export default App;
