import { useEffect, useState } from "react";
import "./Spaces.css";
import users from "../../data/usersCBK.json";

const UTableSpace: React.FC = () => {
  const [usersDisplayed, setUsersDisplayed] = useState(users);
  const [filterText, setFilterText] = useState("");
  const [copiedId, setCopiedId] = useState("");

  const copyClipboard = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = e.currentTarget;
    setCopiedId(button.id);
    navigator.clipboard.writeText(button.innerText);
  };

  const handleFilterInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field: HTMLInputElement = e.currentTarget;
    setFilterText(field.value);
  };

  const filterUsers = () => {
    const newUsers = users.filter((user) => {
      return user.name.toUpperCase().includes(filterText.toUpperCase());
    });
    return newUsers;
  };

  useEffect(() => {
    setUsersDisplayed(filterUsers);
  }, [filterText]);

  const table = usersDisplayed.map((user) => {
    const idBtnUserId = `btnUserId-${user.id}`;
    const idBtnUserPass = `btnUserPass-${user.id}`;
    const idBtnUserPin2 = `btnUserPin2-${user.id}`;
    const idBtnUserUsuclo = `btnUserUsuclo-${user.id}`;

    const greenBtnId = copiedId === idBtnUserId ? "green" : "";
    const greenBtnPass = copiedId === idBtnUserPass ? "green" : "";
    const greenBtnPin2 = copiedId === idBtnUserPin2 ? "green" : "";
    const greenBtnUsuclo = copiedId === idBtnUserUsuclo ? "green" : "";

    return (
      <tr key={`user-${user.name}`}>
        <td>{user.name}</td>
        <td>
          <button
            id={idBtnUserId}
            className={greenBtnId}
            onClick={copyClipboard}
          >
            {user.id}
          </button>
        </td>
        <td>
          <button
            id={idBtnUserPass}
            className={greenBtnPass}
            onClick={copyClipboard}
          >
            {user.pass}
          </button>
        </td>
        <td>
          <button
            id={idBtnUserPin2}
            className={greenBtnPin2}
            onClick={copyClipboard}
          >
            {user.pin2}
          </button>
        </td>
        <td>
          <button
            id={idBtnUserUsuclo}
            className={greenBtnUsuclo}
            onClick={copyClipboard}
          >
            {user.usuclo}
          </button>
        </td>
      </tr>
    );
  });

  const space = (
    <div className="utilitySpace">
      <h2>UTable</h2>

      <div className="filter">
        <h3>Filter</h3>
        <input
          type="text"
          placeholder="Insert your search..."
          onChange={handleFilterInput}
          value={filterText}
        />
        <button className="upload">⬆</button>
        <button className="download">⬇</button>
      </div>

      <table>
        <thead>
          <tr key="head">
            <th>Name</th>
            <th>Id</th>
            <th>Pass</th>
            <th>Pin2</th>
            <th>Usuclo</th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
      </table>
    </div>
  );

  return space;
};

export default UTableSpace;
