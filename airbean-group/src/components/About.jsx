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
                <img src={headerImg} alt="Bilder på blad" />
                <img src={menuImg} alt="Hamburgarmeny" className="menu-icon" onClick={() => navigate("/nav")}/>
                 
            </header>
            {/*Innehåll*/}
            <section className="about-content">
                <h1>Vårt Kaffe</h1>
                <p className="bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus error corrupti illum. Enim assumenda, nostrum beatae fugit eaque ullam, tempore quae illo qui, consequuntur earum doloribus cupiditate. Ab, quaerat atque?
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima incidunt ratione iure rem aperiam omnis eaque quasi, natus saepe maiores quis dolorem repellendus nam commodi autem, error aliquam illo at! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quo veniam eligendi! Nisi expedita nostrum reprehenderit earum repellendus, aspernatur blanditiis temporibus tempora magnam fugit at nulla ipsa enim obcaecati vel!
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero aut illo quo dicta impedit, incidunt nam eos alias quam omnis itaque, distinctio optio harum ratione nulla nemo sequi voluptatibus ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod animi nemo quisquam a voluptatem perspiciatis dolorem dolore consequuntur totam aspernatur magnam voluptas culpa, corrupti impedit et amet! Tempora, aperiam labore?
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