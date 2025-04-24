import delivery from "../img/Rectangle 2.svg"

function Details() {
    return (
        <section className="details">
            <div className="details-description">
                <div className="details-description-text">
                    <h1>Без проблемная доставка купленных вещей из США, Европы и Азии в Россию</h1>
                    <p>Сэкономьте на покупках и наслаждайтесь мировыми брендами — наш сервис позволяет вам легко и удобно заказывать товары со всего мира и получать их в России</p>
                </div>
                <img src={delivery} alt="доставка"></img>
            </div>
            <div className="details-calculator">
                <div className="details-calculator-conteiner">
                    <div className="details-calculator-conteiner-desc">
                        <h1>Калькулятор доставки</h1>
                        <p>Посчитайте, сколько будет стоить перевозка покупки из зарубежа</p>
                    </div>
                    <form>
                        <input type="text" placeholder="Имя"></input>
                        <div className="details-calculator-conteiner-form">
                            <input type="email" placeholder="Почта"></input>
                            <input type="tel" placeholder="Телефон"></input>
                            <input type="number" placeholder="Общая площадь, м²"></input>
                            <input type="number" placeholder="Вес, кг"></input>
                            <input type="text" placeholder="Страна покупки"></input>
                            <input type="text" placeholder="Город покупки"></input>
                            <input type="text" placeholder="Область доставки"></input>
                            <input type="text" placeholder="Город доставки"></input>
                        </div>
                        <button>Заказать расчёт</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Details;