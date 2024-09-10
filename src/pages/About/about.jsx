import Collapse from "../../components/Collapse/collapse";
import Banner from "../../components/Banner/banner";
import collapseData from "../../data/collapse.json";
import pictureAboutPage from "../../assets/images/banner-about.jpg";

function About () {
    return (
        <div className="about-page">
          <Banner image={pictureAboutPage} altText="Bannière À propos" />
          <div className="about-page-collapses">
            {collapseData.map((item, index) => (
              <Collapse key={index} title={item.title}>
                <p>{item.content}</p>
              </Collapse>
            ))}
          </div>
        </div>
      );
    }
    
export default About;