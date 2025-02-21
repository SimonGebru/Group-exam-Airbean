import "./About.scss"; 
import headerImg from "../assets/header.png"
import footerImg from "../assets/footer.png"
import menuImg from "../assets/menu.png"

function About(){
    return (
        <div className="about-container">
            {/*Header*/}
            <header className="about-header">
                <img src={headerImg} alt="Bilder på blad" />
                <img src={menuImg} alt="Hamburgarmeny" className="menu-icon" />
                 
            </header>
            {/*Innehåll*/}
            <section className="about-content">
                <h1>Vårt Kaffe</h1>
                <p className="bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus error corrupti illum. Enim assumenda, nostrum beatae fugit eaque ullam, tempore quae illo qui, consequuntur earum doloribus cupiditate. Ab, quaerat atque?
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima incidunt ratione iure rem aperiam omnis eaque quasi, natus saepe maiores quis dolorem repellendus nam commodi autem, error aliquam illo at!
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero aut illo quo dicta impedit, incidunt nam eos alias quam omnis itaque, distinctio optio harum ratione nulla nemo sequi voluptatibus ea!
                </p>
            </section>
            {/*Profil*/}
            <section className="about-profile">
                {/* <img src={} alt="" /> */}
                <h3>Mandus Lindström</h3>
                <p>Ansvarig för kaffekulturen</p>
            </section>
            {/*Footer*/}
            <footer className="about-footer">
                <img src={footerImg} alt="Bilder på blad längst ner på sdian" />
             </footer>
        </div>
        );
}

export default About;