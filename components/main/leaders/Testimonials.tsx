import { useState } from "react";
import "./Slider.css";

const Slider = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  // clicked on div slide
  const checkNext = () => {
    const nextIndex = selectedIndex === 2 ? 0 : selectedIndex + 1;
    setSelectedIndex(nextIndex);
  };

  //   add button

  const goToSlide = (index: number) => {
    setSelectedIndex(index);
  };

  const prevSlide = () => {
    const prevIndex = selectedIndex === 0 ? 2 : selectedIndex - 1;
    goToSlide(prevIndex);
  };

  const nextSlide = () => {
    const nextIndex = selectedIndex === 2 ? 0 : selectedIndex + 1;
    goToSlide(nextIndex);
  };

  return (
    <div>
      <div className="container-fluid flex justify-content-center">
        <div className="container flex">
          <div className="slider-test">Testimonials</div>
          <div className="slider-controls">
            <button className="slider-prev-button" onClick={prevSlide}>
              Less
            </button>
            <button onClick={nextSlide}>Greater</button>
          </div>
        </div>
      </div>
      <div className="container-fluid  flex justify-content-center slider-box ">
        <div>
          <section id="slider">
            <input type="radio" name="slider" id="s1" checked={selectedIndex === 0} readOnly />
            <input type="radio" name="slider" id="s2" checked={selectedIndex === 1} readOnly />
            <input type="radio" name="slider" id="s3" checked={selectedIndex === 2} readOnly />

            <label onClick={checkNext} id="slide1">
              <div style={{ cursor: "pointer" }} className="slide-c-box">
                <div>
                  <div className="slider-comma">❛❛</div>
                  <div className="slider-text">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                    classical Latin literature from 45 BC, making it over 2000 years old.
                  </div>
                </div>
                <div className="slider-circle"></div>
              </div>
            </label>

            <label onClick={checkNext} id="slide2">
              <div style={{ cursor: "pointer" }} className="slide-c-box">
                <div>
                  <div className="slider-comma">❛❛</div>
                  <div className="slider-text">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                    classical Latin literature from 45 BC, making it over 2000 years old.
                  </div>
                </div>
                <div className="slider-circle"></div>
              </div>
            </label>

            <label onClick={checkNext} id="slide3">
              <div style={{ cursor: "pointer" }} className="slide-c-box">
                <div>
                  <div className="slider-comma">❛❛</div>
                  <div className="slider-text">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                    classical Latin literature from 45 BC, making it over 2000 years old.
                  </div>
                </div>
                <div className="slider-circle"></div>
              </div>
            </label>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Slider;
