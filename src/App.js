import React, { useState } from "react";
import "./styles.css";

const bookDB = {
  javascript: [
    {
      name: "A Smarter Way to Learn JavaScript",
      rating: "4.1/5",
      desc: "Simple book on javascript"
    },
    {
      name: "You Don't Know JS",
      rating: "3.5/5",
      desc: "Simple book on javascript"
    },
    {
      name: "A Smarter Way to Learn JavaScript",
      rating: "4.1/5",
      desc: "Simple book on javascript"
    }
  ],

  fiction: [
    {
      name: "The Hobbit",
      rating: "4.2/5",
      desc: "Simple book on javascript"
    },
    {
      name: "Atlas Shrugged",
      rating: "3.7/5",
      desc: "Simple book on javascript"
    }
  ],
  selfdevelp: [
    {
      name: "Rich Dad Poor Dad",
      rating: "4.1/5",
      desc: "Simple book on javascript"
    },
    {
      name: "12 Rules for Life",
      rating: "4.5/5",
      desc: "Simple book on javascript"
    }
  ]
};

export default function App() {
  const [gen, setGen] = useState("fiction");

  function clickHandler(genre) {
    setGen(genre);
  }
  const buttons = Object.keys(bookDB).map((item) => {
    return (
      <button className="button" onClick={() => clickHandler(item)}>
        {item}
      </button>
    );
  });

  return (
    <div className="App">
      <h1>📚 Booker</h1>
      <h4>Check out some good books</h4>
      {buttons}
      <hr />
      {bookDB[gen].map((item) => {
        return (
          <div className="books">
            <h3>{item.name}</h3>
            <h4>{item.desc}</h4>
            <p>{item.rating}</p>
          </div>
        );
      })}
    </div>
  );
}
