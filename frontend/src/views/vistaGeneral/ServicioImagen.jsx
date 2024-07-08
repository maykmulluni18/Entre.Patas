import { Button } from "primereact/button";

import Slide0 from "../../assets/images/slide.jpg";
import Slide1 from "../../assets/images/slide1.jpg";
import Slide2 from "../../assets/images/slide2.jpg";
import Slide3 from "../../assets/images/slide3.jpg";

export const ServicioImagen = {
  getData() {
    return [
      {
        itemImageSrc: Slide0,
        thumbnailImageSrc: Slide0,
        alt: (
          <>
            <h2>
              Brindas una segunda oportunidad de ser feliz a un ser sintiente, que ha sufrido el
              abandono, maltrato o la indiferencia del ser humano.
            </h2>
            <div className="card flex justify-content-center">
              <Button label="Contactanos" />
            </div>{" "}
          </>
        ),
        title: "ADOPTA UNA MASCOTA",
      },
      {
        itemImageSrc: Slide1,
        thumbnailImageSrc: Slide1,
        alt: (
          <>
            <h2>
              Brindas una segunda oportunidad de ser feliz a un ser sintiente, que ha sufrido el
              abandono, maltrato o la indiferencia del ser humano.
            </h2>
            <div className="card flex justify-content-center">
              <Button label="Contactanos" />
            </div>{" "}
          </>
        ),
        title: "ADOPTA UNA MASCOTA",
      },
      {
        itemImageSrc: Slide2,
        thumbnailImageSrc: Slide2,
        alt: (
          <>
            <h2>
              Brindas una segunda oportunidad de ser feliz a un ser sintiente, que ha sufrido el
              abandono, maltrato o la indiferencia del ser humano.
            </h2>
            <div className="card flex justify-content-center">
              <Button label="Contactanos" />
            </div>{" "}
          </>
        ),
        title: "ADOPTA UNA MASCOTA",
      },
      {
        itemImageSrc: Slide3,
        thumbnailImageSrc: Slide3,
        alt: (
          <>
            <h2>
              Brindas una segunda oportunidad de ser feliz a un ser sintiente, que ha sufrido el
              abandono, maltrato o la indiferencia del ser humano.
            </h2>
            <div className="card flex justify-content-center">
              <Button label="Contactanos" />
            </div>{" "}
          </>
        ),
        title: "ADOPTA UNA MASCOTA",
      },
    ];
  },

  getImages() {
    return Promise.resolve(this.getData());
  },
};
