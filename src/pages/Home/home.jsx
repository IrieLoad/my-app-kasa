import pictureHomePage from "../../assets/images/banner-home.jpg";
import Banner from "../../components/Banner/banner";
import Card from "../../components/Card/card";
import lodging from "../../data/lodging.json";

function Home () {
    return (
        <div className="home">
            <Banner image={pictureHomePage} text="Chez vous, partout et ailleurs" altText="Bannière d'accueil" />
            
            <div className="gallery-cards">
                <Card lodging={lodging}/>
            </div>
        </div>
    );
};

export default Home;