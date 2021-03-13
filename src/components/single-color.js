import { useState, useEffect } from "react";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hexValue = `#${hexColor}`;

  function copyToClipboard() {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  }

  function clearAlert() {
    setAlert(false);
  }

  useEffect(() => {
    const timeout = setTimeout(clearAlert, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index >= 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={copyToClipboard}
    >
      <p className="percent-value">
        {index < 10 ? "-" : index > 10 ? "+" : ""}
        {weight}%
      </p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
