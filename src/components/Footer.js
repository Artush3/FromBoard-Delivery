import logo from "../img/Frame 1.svg"
import smile from "../img/Quotes1.svg"

function Footer() {
    return (
        <footer className="footer">
            <div className="conteiner_content">
                <section className="footer-description">
                    <div className="footer-description-logo">
                        <img src={logo} alt="логотип"></img>
                        <div className="footer-description-logo-smile">
                            <p>2025 © Ни одно право не защищено, копируйте сколько влезет</p>
                            <img src={smile} alt="смайл"></img>
                        </div>
                    </div>
                    <nav className="footer-description-navigation">
                        <a href="/">Калькулятор</a>
                        <a href="/">О нас</a>
                        <a href="/">Гарантии</a>
                        <a href="/">Отзывы</a>
                    </nav>
                    <div className="footer-description-contact">
                        <h1>+7 (800) 123 45-67</h1>
                        <h2>Звонки по России бесплатны</h2>
                    </div>
                </section>
                <section className="footer-author">
                    <p>НЕ ЯВЛЯЕТСЯ ПУБЛИЧНОЙ ОФЕРТОЙ. Просим обратить внимание на то, что цены носят информационный и ознакомительный характер, а значит ни в какой мере не являются публичной офертой, которая определена в ст. 437 ГК РФ. Вся информация на сайте может содержать неточности, орфографические и иные ошибки, она не является полной, окончательно и исчерпывающей</p>
                    <nav className="footer-description-author-way">
                        <p href="/">Разработкой макета занимался</p>
                        <a href="/">Васильев Александр | Что-то на IT’шном</a>
                    </nav>
                </section>
            </div>
        </footer>
    );
}

export default Footer;