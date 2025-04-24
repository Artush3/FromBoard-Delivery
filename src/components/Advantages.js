import example1 from "../img/Board.svg"
import example2 from "../img/Package.svg"
import example3 from "../img/Delivery.svg"
import example4 from "../img/best support.svg"
import example5 from "../img/clear info.svg"
import example6 from "../img/garantee.svg"

function Advantages() {
    return (
        <section className="advantages">
            <h1>Наши преимущества</h1>
            <div className="advantages-example">
                <div className="advantages-example-item">
                    <img src={example1} alt="пример №1"></img>
                    <div className="advantages-example-item-desc">
                        <h2>Растоможка груза</h2>
                        <p>Мы берём на себя все формальности и бумажную волокиту, связанную с растаможкой груза</p>
                    </div>
                </div>
                <div className="advantages-example-item">
                    <img src={example2} alt="пример №2"></img>
                    <div className="advantages-example-item-desc">
                        <h2>Надёжная упаковка</h2>
                        <p>Все товары упаковываются нашими специалистами с особым вниманием к деталям, гарантируя, что они дойдут в безопасности и в отличном состоянии</p>
                    </div>
                </div>
                <div className="advantages-example-item">
                    <img src={example3} alt="пример №3"></img>
                    <div className="advantages-example-item-desc">
                        <h2>Быстро и выгодно</h2>
                        <p>Мы предлагаем быструю и выгодную доставку, чтобы вы могли насладиться покупками как можно скорее.</p>
                    </div>
                </div>
                <div className="advantages-example-item">
                    <img src={example4} alt="пример №4"></img>
                    <div className="advantages-example-item-desc">
                        <h2>Удобный сервис</h2>
                        <p>Стремимся сделать процесс доставки максимально удобным для вас, чтобы опыт остался приятным и беззаботным</p>
                    </div>
                </div>
                <div className="advantages-example-item">
                    <img src={example5} alt="пример №5"></img>
                    <div className="advantages-example-item-desc">
                        <h2>Прозрачность работы</h2>
                        <p>Мы предоставляем полный контроль над каждым этапом доставки, от момента заказа до момента прибытия заказа</p>
                    </div>
                </div>
                <div className="advantages-example-item">
                    <img src={example6} alt="пример №6"></img>
                    <div className="advantages-example-item-desc">
                        <h2>Страхование груза</h2>
                        <p>Наше страхование обеспечивает полную защиту и покрытие почти все неприятные и неожиданные ситуации</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Advantages;