import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    contactSelected,
    portfolioSelected,
    currentCategory,
    setContactSelected,
    setPortfolioSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  const clickEventHandler = (event) => {
    if ((event.target.id === "about")) {
      setContactSelected(false);
      setPortfolioSelected(false);
    }
    if ((event.target.id === "contact")) {
      setContactSelected(true);
      setPortfolioSelected(false);
    }
    if ((event.target.id === "portfolio")) {
      setContactSelected(false);
      setPortfolioSelected(true);
    }
  };
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Jennifer Hano
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a id="about" href="#about" onClick={clickEventHandler}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <span id="contact" onClick={clickEventHandler}>
              Contact
            </span>
          </li>
          <li className={`mx-2 ${portfolioSelected && "navActive"}`}>
            <span id="portfolio" onClick={clickEventHandler}>
              Portfolio
            </span>
          </li>

          {/* <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
           Resume
            </a>
            </li> */}
          {/* {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
           ))}  */}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
