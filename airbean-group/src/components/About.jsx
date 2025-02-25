import { useEffect, useState } from "react";
import "./About.scss"; 
import headerImg from "../assets/header2.png"
import footerImg from "../assets/header3.png"
import menuImg from "../assets/menu.png"
import ownerImg from "../assets/owner.png"
import { useNavigate } from "react-router-dom";

function About(){
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);
    return (
        <div className={`about-container ${isVisible ? "fade-in" : ""}`}>
            {/*Header*/}
            <header className="about-header">
                <img src={headerImg} alt="Bilder på blad" className="header-img"/>
                <img src={menuImg} alt="Hamburgarmeny" className="menu-icon" onClick={() => navigate("/nav")}/>
                 
            </header>
            {/*Innehåll*/}
            <section className="about-content">
                <h1>Vårt Kaffe</h1>
                <p className="bold">
                En kopp av ren magi! <br />På Airbean tar vi kaffe på största allvar – men utan att tappa vår lekfullhet! Våra kaffebönor är noggrant utvalda från världens bästa kaffeodlingar, där varje böna fått växa i sin egen takt, smeks av solens strålar och vattnas av molnens mildaste droppar.
                </p>
                <p>
                Vårt kaffe är inte bara en dryck, det är en upplevelse. Vi tror på att varje kopp ska vara en smakresa – från första doften av nybryggt kaffe till den där perfekta första klunken som får dig att le. Vill du ha en fyllig och mörk espresso? En len och krämig cappuccino? Eller kanske en klassisk bryggkaffe som värmer själen? Vi har allt!
                </p>
                <p>
                <strong>Kaffe och drönarleverans – framtiden är här!</strong> <br />Glöm köer och stressiga morgnar – hos oss beställer du ditt kaffe och får det levererat av våra blixtsnabba drönare. Vi lovar att de varken spiller eller smakar på ditt kaffe (vi har testat… de föredrar batterier). <br /> <br />

<strong>Hantverk, kvalitet och hållbarhet</strong> <br />
Vi strävar efter att vara så hållbara som möjligt – från böna till kopp. Våra kaffeodlare får rättvist betalt och vi använder biologiskt nedbrytbara förpackningar. För vi tycker att gott kaffe ska smaka ännu bättre när man vet att det gör gott för världen.

Så nästa gång du behöver en riktig energikick, en smakexplosion eller bara en riktigt schysst kaffestund – låt Airbean ta hand om det. Vi lovar, det är kärlek vid första klunken!
                </p>
            </section>
            {/*Profil*/}
            <section className="about-profile">
                 <img src={ownerImg} alt="Bild på vår skapare" />
                
            </section>
            {/*Footer*/}
            <footer className="about-footer">
                <img src={footerImg} alt="Bilder på blad längst ner på sdian" />
             </footer>
        </div>
        );
}

export default About;