export const Galery = () => {
  return (
    <section className="uk-section">
      <h2>Galery</h2>
      <div
        className="uk-grid-collapse uk-child-width-expand@s uk-text-center uk-margin-large-top"
        uk-grid=""
      >
        <div>
          <img
            src="https://getuikit.com/docs/images/slider1.jpg"
            width="400"
            height="600"
            alt="Image Slide"
            loading="lazy"
          />
        </div>
        <div>
          <img
            src="https://getuikit.com/docs/images/slider2.jpg"
            width="400"
            height="600"
            alt="Image Slide"
            loading="lazy"
          />
        </div>
        <div>
          <img
            src="https://getuikit.com/docs/images/slider3.jpg"
            width="400"
            height="600"
            alt="Image Slide"
            loading="lazy"
          />
        </div>
        <div>
          <img
            src="https://getuikit.com/docs/images/slider4.jpg"
            width="400"
            height="600"
            alt="Image Slide"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
