import pictureHomePage from "../../assets/images/banner-home.jpg";
import Card from "../../components/Card/card";
import lodging from "../../data/lodging.json";

function Home () {
    return (
        <div className="home">
            <div className="banner">
                <img src={pictureHomePage} alt=""/>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="gallery-cards">
                <Card lodging={lodging}/>
            </div>
        </div>
    );
};

export default Home;