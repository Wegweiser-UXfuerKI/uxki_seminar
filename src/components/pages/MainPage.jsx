import React, { useContext, useEffect, useState } from 'react';
import SubTopic from '../SubTopic';
import {AppContext} from '../../AppContext';
import { ReactComponent as RightArrow } from '../../assets/images/right-arrow.svg';
import imageNr1 from '../../assets/images/Element1.png';
import imageNr2 from '../../assets/images/Element2.png';
import imageNr3 from '../../assets/images/Element3.png';
import imageNr4 from '../../assets/images/Element4.png';
import imageNr5 from '../../assets/images/Element5.png';

const MainPage = () => {
  const { topicContents } = useContext(AppContext);
  const topicNames = Object.keys(topicContents);
  const [showToTopBtn, setShowToTopBtn] = useState(false);

  // check scroll behavior for toTopBtn
  useEffect(() => {
    const handleScroll = () => {
      setShowToTopBtn(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const images = [imageNr1, imageNr2, imageNr3, imageNr4, imageNr5];

  return (
    <div className="Mainpage flex flex-col items-center">
      <h1 className="mainTitle text-center mt-24 mb-16">Wegweiser UX für KI</h1>
      <div className="flex justify-center flex-wrap max-w-screen-xl mb-24">
        {topicNames.map((topicName, index) => (
          <SubTopic
            key={topicName}
            topicName={topicName}
            image={images[index]}
          />
        ))}
      </div>
      {showToTopBtn && <RightArrow onClick={scrollToTop} id="toTopBtn" />}
    </div>
  );
};

// Function to scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
        behavior: 'smooth'
  });
}

export default MainPage;