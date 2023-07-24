import { useEffect, useState } from "react";
import "./Spaces.css";

const WLinkSpace: React.FC = () => {
  const [url, setUrl] = useState("");
  const [version, setVersion] = useState("");
  const [page, setPage] = useState("");
  const [params, setParams] = useState("");

  useEffect(() => {
    setUrl(`${version}${page}${params}`);
  }, [version, page, params]);

  const handleChangeEvent = (e: any, func: Function) => {
    func(e.target.value);
  };

  const space = (
    <div className="utilitySpace">
      <div className="form">
        <h2>WLink</h2>
        <h3>Jenkins version</h3>
        <input
          type="text"
          value={version}
          onChange={(e) => handleChangeEvent(e, setVersion)}
          placeholder="URL from Jenkins"
        />
        <h3>Page</h3>
        <input
          type="text"
          value={page}
          onChange={(e) => handleChangeEvent(e, setPage)}
          placeholder="Example (/catalogue)"
        />
        <h3>Params</h3>
        <input
          type="text"
          value={params}
          onChange={(e) => handleChangeEvent(e, setParams)}
          placeholder="Example (?categoryId=electronics&version=354534)"
        />
      </div>
      <div className="buttonSpace">
        <button onClick={() => navigator.clipboard.writeText(url)}>
          create function
        </button>
      </div>
    </div>
  );

  return space;
};

export default WLinkSpace;
