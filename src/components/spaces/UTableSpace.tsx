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

    const greenBtnId = copiedId === idBtnUserId ? "green" : "";
    const greenBtnPass = copiedId === idBtnUserPass ? "green" : "";

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
      </div>

      <table>
        <thead>
          <tr key="head">
            <th>Name</th>
            <th>Id</th>
            <th>Pass</th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
      </table>
    </div>
  );

  return space;
};

export default UTableSpace;
