import logo from "../img/Frame 2.svg"

function Header() {
    return (
        <header className="header">
            <div className="conteiner_content">
                <section className="header-description">
                    <img src={logo} alt="логотип"></img>
                    <div className="header-description-price">
                        <div className="header-description-price-text">
                            <p>Доставляем товары из заграницы в Россию</p>
                            <p>Стоимость от 550 рублей за заказ</p>
                            <p>1 $ = 93 ₽ | 1 € = 99 ₽ | 1 ¥ = 13 ₽</p>
                        </div>
                        <hr></hr>
                        <div className="header-description-price-contact">
                            <h1>+7 (800) 123 45-67</h1>
                            <h2>Звонки по России бесплатны</h2>
                        </div>
                    </div>
                </section>
                <section className="header-navigation">
                    <nav className="header-navigation_way">
                        <a href="/">Калькулятор</a>
                        <a href="/">О нас</a>
                        <a href="/">Гарантии</a>
                        <a href="/">Отзывы</a>
                    </nav>
                    <a href="/"><button>Оставить заявку</button></a>
                </section>
            </div>
        </header>
    );
}

export default Header;