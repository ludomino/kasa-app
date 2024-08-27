import "../scss/about.scss";
import Banner from "../components/banner"
import Collapse from "../components/collapse.jsx";
import dataAbout from "../../public/data_about.js";

function About() {
  return (
    <>
      <Banner extraClass="about-us" />
      <section className="about-container">
        {dataAbout.map((data, idx) => (
          <Collapse
            {...data}
            collapseState={true}
            key={`${data.title}-${idx}`}
          />
        ))}
      </section>
    </>
  );
}

export default About;
