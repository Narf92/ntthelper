import "./Utilities.css";
import _cards from "../../data/cardsUtilities.json";

import React, { useState } from "react";
import {
  UTableSpace,
  BCheckerSpace,
  WLinkSpace,
  UtilityCard,
} from "../../components/";

interface Utility {
  title: string;
  description: string;
  show: boolean;
  order: number;
}

const Utilities: React.FC = () => {
  const cards: Array<Utility> = _cards;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [utilities, setUtilities] = useState<Array<Utility>>(cards);
  const [displayedCards, setDisplayedCards] = useState<Array<Utility>>(cards);

  const orderCards = () => {
    setDisplayedCards(cards);
  };

  const handleSelectCard = (id: string) => {
    let newCards = utilities.map((card) => {
      if (id === card.title) {
        let toogle = card.show;
        card.show = !toogle;
      }
      return card;
    });
    setIsLoading(true);
    setUtilities(newCards);
    setIsLoading(false);
  };

  const renderedCards = displayedCards.map((x) => (
    <UtilityCard
      title={x.title}
      description={x.description}
      handleClick={handleSelectCard}
      orderCard={orderCards}
      show={x.show}
    />
  ));

  const renderedSpaces = displayedCards.map((x) => {
    if (x.title === "WLink" && x.show) return <WLinkSpace />;
    if (x.title === "BChecker" && x.show) return <BCheckerSpace />;
    if (x.title === "UTable" && x.show) return <UTableSpace />;
  });

  const menu = (
    <div>
      <h2>Utilities</h2>
      <div className="cardMenu">{renderedCards}</div>
      <div className="utilitiesSpace">{renderedSpaces}</div>
    </div>
  );

  const page = isLoading ? "" : menu;

  return page;
};

export default Utilities;
