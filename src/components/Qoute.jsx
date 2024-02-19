import { useState, useEffect } from "react";
import Styles from "../Qoute.module.css";
export default function Qoute() {
  const url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      async function getQuote() {
        try {
          const res = await fetch(url);
          const data = await res.json();
          setQuotes(data[0]);
        } catch (error) {
          console.error(error);
        }
      }
      getQuote();
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className={` ${Styles.qWrapper} ${Styles.bgImg}`}>
      <h5>{quotes}</h5>
    </div>
  );
}
