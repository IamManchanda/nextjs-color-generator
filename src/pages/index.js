import Head from "next/head";
import { Fragment, useState } from "react";
import Values from "values.js";

import SingleColor from "../components/single-color";

function PageIndex() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [colorList, setColorList] = useState(new Values("#f15025").all(10));

  function handleSubmit(event) {
    event.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setColorList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  return (
    <Fragment>
      <Head>
        <title>Next.js Color Generator App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Fragment>
        <section className="container">
          <h3>Color Generator</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder="#f15025"
              className={`${error ? "error" : null}`}
            />
            <button className="btn" type="submit">
              submit
            </button>
          </form>
        </section>
        <section className="colors">
          {colorList.map((color, index) => {
            return (
              <SingleColor
                key={index}
                {...color}
                index={index}
                hexColor={color.hex}
              />
            );
          })}
        </section>
      </Fragment>
    </Fragment>
  );
}

export default PageIndex;
