import React, { useEffect, useState } from "react";
import "./styles.css";

function Testmonial() {
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    // This variable prevents race condition
    let current = 1;
    const cycleReviews = () => {
      if (current === 5) {
        current = 1;
      } else {
        current += 1;
      }
      setActiveSlide(current);
    };
    // intervalId identified so it can be canceled on unmount
    const intervalId = setInterval(() => {
      cycleReviews();
    }, 10000);
    // Removes interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  const reviews = [
    {
      name: "Edith Scripps",
      citation: "WHAT OUR CUSTOMERS ARE SAYING ON TRUSTPILOT?",
      quote:
        "The item was exactly as advertised  high quality, beautiful design, and it fits perfectly in my space. However, it did arrive a few days later than promised, which was a bit disappointing."
    },
    {
      name: "Gloria Cotton",
      citation: "WHAT OUR CUSTOMERS ARE SAYING ON TRUSTPILOT?",
      quote:
        "Absolutely love this item! It even more beautiful in person than in the photos. The craftsmanship is top-notch. It's become a focal point in my room, and everyone who sees it compliments it."
    },
    {
      name: "Gemma Samantha",
      citation: "WHAT OUR CUSTOMERS ARE SAYING ON TRUSTPILOT?",
      quote:
        "Very pleased with the whole experience!! Artist was willing to customize this piece for me. Best customer service! Thank you!"
    },
    {
      name: "Ryan W.",
      citation: "Sale Closed in 2019",
      quote:
        "Service was excellent EVERY step of the process! No way to tell that Door.com provided a flat rate service by the way that they treated us and handled every step of the transactions."
    },
    {
      name: "Kevin R.",
      citation: "Sale Closed in 2019",
      quote:
        "Everyone we worked with was very responsive, professional and easy to work with. A great experience all around. I work in this industry too so my expectations are high. Great work by all."
    }
  ];

  return (
    <div className="App">
      <ul className="carousel__list">
        {reviews.map((review, index) => {
          const { citation, name, quote } = review;
          const count = index + 1;
          return (
            <li
              className={`carousel__item
                ${count === activeSlide ? " active" : ""}
                ${count < activeSlide ? " left" : ""}
                ${count > activeSlide ? " right" : ""}
              `}
              key={count}
            >
              <blockquote className="carousel__quote">
                <cite className="prose">
                <span className="carousel__citation h2">{citation}</span>
                 
                <p style={{fontFamily:"sans-serif",paddingTop:"40px"}}> SHOW MORE </p>
                </cite>
                <p className="p">"{quote}"</p>
                <span className="carousel__name">{name}</span>
              </blockquote>
            </li>
          );
        })}
        <li className="carousel__indicator">
          <span
            className={`carousel__dot${activeSlide === 1 ? " active" : ""}`}
          />
          <span
            className={`carousel__dot${activeSlide === 2 ? " active" : ""}`}
          />
          <span
            className={`carousel__dot${activeSlide === 3 ? " active" : ""}`}
          />
          <span
            className={`carousel__dot${activeSlide === 4 ? " active" : ""}`}
          />
          <span
            className={`carousel__dot${activeSlide === 5 ? " active" : ""}`}
          />
        </li>
      </ul>
   
    </div>
  );
}

export default Testmonial
