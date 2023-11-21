import { BsCloudCheckFill } from "react-icons/bs";

const Ourportal = () => {
  return (
    <section className="container our-portal-container">
      <h1 className="home-h1">
        <span>Our Portal </span> What we deliver
      </h1>
      <section className="grid-container">
        <div className="grid-item">
          <div>
            <BsCloudCheckFill
              style={{ color: "blue", width: "40px", height: "40px" }}
            />
          </div>
          <div>
            <h2 className="head2">Question, Quiz & Course</h2>
            <p className="para2">
              You bring the content and shikhasankalp makes it happen. This will
              be the beginning of a project we all do together, side by side.
            </p>
          </div>
        </div>
        <div className="grid-item">
          <div>
            <BsCloudCheckFill
              style={{ color: "blue", width: "40px", height: "40px" }}
            />
          </div>
          <div>
            <h2 className="head2">Dedicated Support provided</h2>
            <p className="para2">
              Inspire and get inspired alongside other creatives. Eduma is a
              community with millions of creatives who are eager to learn.
            </p>
          </div>
        </div>
        <div className="grid-item">
          <div>
            <BsCloudCheckFill
              style={{ color: "blue", width: "40px", height: "40px" }}
            />
          </div>
          <div>
            <h2 className="head2">Your creativity is golden</h2>
            <p className="para2">
              Harness your passion. Create a course for thousands of people
              around the world and generate an income stream with your creative
              knowledge.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Ourportal;
