import { useState } from "react";
import "./Carousel.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel(props) {
  const [currCardIdx, setCurrCardIdx] = useState(0);
  const currCard = props.cardData[currCardIdx];
  const total = props.cardData.length;
  const leftArrowHidden = currCardIdx === 0 ? "hidden" : "";
  const rightArrowHidden = currCardIdx === total - 1 ? "hidden" : "";
  const goForward = () => setCurrCardIdx(currCardIdx + 1);
  const goBack = () => setCurrCardIdx(currCardIdx - 1);



  return (
    <div className="Carousel">
      <h1>{props.title}</h1>
      <div className="Carousel-main">
        <i
          className={`bi bi-arrow-left-circle ${leftArrowHidden}`}
          onClick={goBack}
          data-testid="left-arrow"
        />
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        <i
          className={`bi bi-arrow-right-circle ${rightArrowHidden}`}
          onClick={goForward}
          data-testid="right-arrow"
        />
      </div>
    </div>
  );
}

Carousel.defaultProps = {
  cardData: [
    {
      src: image1,
      caption: "Photo by Richard Pasquarella on Unsplash",
    },
    {
      src: image2,
      caption: "Photo by Pratik Patel on Unsplash",
    },
    {
      src: image3,
      caption: "Photo by Josh Post on Unsplash",
    },
  ],
  title: "Shells from far away beaches.",
};

export default Carousel;
