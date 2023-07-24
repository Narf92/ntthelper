import React from "react";
import "./UtilityCard.css";

interface Props {
  title: string;
  description: string;
  show: boolean;
  handleClick: Function;
  orderCard: Function;
}

const UtilityCard: React.FC<Props> = (props: Props) => {
  const { title, description, handleClick, show, orderCard } = props;

  const card = (
    <div
      id="card-utility"
      key={title}
      className={show ? "selected" : ""}
      onClick={() => {
        handleClick(title);
      }}
    >
      <button onClick={() => orderCard}>a</button>
      <button onClick={() => orderCard}>b</button>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );

  return card;
};

export default UtilityCard;
