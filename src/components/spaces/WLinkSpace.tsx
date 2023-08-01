import { useEffect, useState } from "react";
import "./Spaces.css";

const WLinkSpace: React.FC = () => {
  const [url, setUrl] = useState<string>("");
  const [version, setVersion] = useState<string>("");
  const [urls, setUrls] = useState<string[]>([]);

  useEffect(() => {
    let versionJs = version.substring(27);
    let jsFunction = `top.Inferior.Cos.document.location="${versionJs}";`;
    setUrl(jsFunction);
  }, [version]);

  const handleChangeEvent = (e: any, func: Function) => {
    func(e.target.value);
  };

  const deleteUrl = (url: string) => {
    let newUrls = urls.filter((x) => x !== url);
    setUrls(newUrls);
  };

  const table = (
    <table>
      {urls.map((url) => {
        return (
          <tr>
            <button onClick={() => navigator.clipboard.writeText(url)}>
              Copy
            </button>
            <button onClick={() => deleteUrl(url)}>❌</button>
            <td>{url}</td>
          </tr>
        );
      })}
    </table>
  );

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
      </div>
      <div className="buttonSpace">
        <button
          onClick={() => {
            let newUrls = [...urls, url];
            setUrls(newUrls);
            setVersion("");
          }}
        >
          Save version
        </button>
      </div>
      {table}
    </div>
  );

  return space;
};

export default WLinkSpace;
