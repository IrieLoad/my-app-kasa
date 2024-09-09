import CollapsePanel from "../../components/Collapse/collapse";
import Banner from "../../components/Banner/banner";
import collapseData from "../../data/collapse.json";
import pictureAboutPage from "../../assets/images/banner-about.jpg";

function About () {
    return (
        <div className="about">
          <Banner image={pictureAboutPage} altText="Bannière À propos" />
          <div className="collapses">
            {collapseData.map((item, index) => (
              <CollapsePanel key={index} title={item.title}>
                <p>{item.content}</p>
              </CollapsePanel>
            ))}
          </div>
        </div>
      );
    }
    
export default About;