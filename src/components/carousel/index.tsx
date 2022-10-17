import React, {useState} from 'react';
import './index.less';
import Screen from '../screen/index';

interface CarouselProps {

}

const Carousel = (props: CarouselProps) => {
  const [a, setA] = useState(false);
  const handleClick = () => {
     setA(true);
  }

  return (
    <div className="gt-carousel">
        <div className="gt-carousel-shell">
          <input type="radio" name="music" id="item-1" />
          <input type="radio" name="music" id="item-2" />
          <input type="radio" name="music" id="item-3"  />
          <div className="gt-carousel-cards">
            <label className="gt-carousel-card" htmlFor="item-1" id="song-1">
              <div className="gt-carousel-content">content2</div>
            </label>
            <label className="gt-carousel-card" htmlFor="item-2" id="song-2">
              <div className="gt-carousel-content">content3</div>
            </label>
            <label className="gt-carousel-card" htmlFor="item-3" id="song-3" >
              <div className="gt-carousel-content" onClick={handleClick}>
                {a ? 'content1' : <Screen/>}
              </div>
            </label>
          </div>
        </div>
    </div>
  )
}

export default Carousel;
