import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import people from "../../assets/people.jpg";

const Peoplessay = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="container peoples-container">
      <h1 className="home-h1">
        <span>People </span> Say
      </h1>
      <Carousel
        responsive={responsive}
        infinite={true}
        swipeable={true}
        draggable={true}
      >
        <div className="peoples">
          <div className="peoples-review">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
              illum accusantium eum debitis quas ab dicta hic atque minus id
              ducimus dolorem repudiandae consequuntur a recusandae, nobis
              laborum fuga ipsam!There are millions of people out there who want
              to learn from creatives like you.
            </p>
          </div>
          <div className="people-img">
            <img src={people} alt="" />
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default Peoplessay;
