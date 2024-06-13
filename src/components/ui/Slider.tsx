export const Slider = () => {
  return (
    <section className="uk-section">
      <h2>Slider</h2>
      <div
        className="uk-position-relative uk-visible-toggle uk-light"
        uk-slider=""
      >
        <div className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
          <div>
            <img
              src="https://getuikit.com/docs/images/slider1.jpg"
              width="400"
              height="600"
              alt="Image Slide"
              loading="lazy"
            />
            <div className="uk-position-center uk-panel">
              <h1>1</h1>
            </div>
          </div>
          <div>
            <img
              src="https://getuikit.com/docs/images/slider2.jpg"
              width="400"
              height="600"
              alt="Image Slide"
              loading="lazy"
            />
            <div className="uk-position-center uk-panel">
              <h1>2</h1>
            </div>
          </div>
          <div>
            <img
              src="https://getuikit.com/docs/images/slider3.jpg"
              width="400"
              height="600"
              alt="Image Slide"
              loading="lazy"
            />
            <div className="uk-position-center uk-panel">
              <h1>3</h1>
            </div>
          </div>
          <div>
            <img
              src="https://getuikit.com/docs/images/slider4.jpg"
              width="400"
              height="600"
              alt="Image Slide"
              loading="lazy"
            />
            <div className="uk-position-center uk-panel">
              <h1>4</h1>
            </div>
          </div>
          <div>
            <img
              src="https://getuikit.com/docs/images/slider5.jpg"
              width="400"
              height="600"
              alt="Image Slide"
              loading="lazy"
            />
            <div className="uk-position-center uk-panel">
              <h1>5</h1>
            </div>
          </div>
          <div>
            <img
              src="https://getuikit.com/docs/images/slider1.jpg"
              width="400"
              height="600"
              alt="Image Slide"
              loading="lazy"
            />
            <div className="uk-position-center uk-panel">
              <h1>6</h1>
            </div>
          </div>
          <div>
            <img
              src="https://getuikit.com/docs/images/slider2.jpg"
              width="400"
              height="600"
              alt="Image Slide"
              loading="lazy"
            />
            <div className="uk-position-center uk-panel">
              <h1>7</h1>
            </div>
          </div>
          <div>
            <img
              src="https://getuikit.com/docs/images/slider3.jpg"
              width="400"
              height="600"
              alt="Image Slide"
              loading="lazy"
            />
            <div className="uk-position-center uk-panel">
              <h1>8</h1>
            </div>
          </div>
          <div>
            <img
              src="https://getuikit.com/docs/images/slider4.jpg"
              width="400"
              height="600"
              alt="Image Slide"
              loading="lazy"
            />
            <div className="uk-position-center uk-panel">
              <h1>9</h1>
            </div>
          </div>
          <div>
            <img
              src="https://getuikit.com/docs/images/slider5.jpg"
              width="400"
              height="600"
              alt="Image Slide"
              loading="lazy"
            />
            <div className="uk-position-center uk-panel">
              <h1>10</h1>
            </div>
          </div>
        </div>

        <button
          className="uk-position-center-left uk-position-small uk-hidden-hover"
          uk-slidenav-previous=""
          uk-slider-item="previous"
        ></button>
        <button
          className="uk-position-center-right uk-position-small uk-hidden-hover"
          uk-slidenav-next=""
          uk-slider-item="next"
        ></button>
      </div>
    </section>
  );
};
