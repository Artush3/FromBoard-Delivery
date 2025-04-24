import example1 from "../img/Rectangle 3.svg"
import example2 from "../img/Rectangle 3 (1).svg"
import example3 from "../img/Rectangle 3 (2).svg"
import example4 from "../img/Rectangle 3 (3).svg"

function Guarantee() {
    return (
        <section className="guarantee">
            <div className="guarantee-description">
                <h1>Гарантии качества</h1>
                <p>Наши гарантии качества включают в себя полный спектр документов, необходимых для ввоза и вывоза товаров, а также для успешного бизнеса на мировом рынке. Мы предоставляем вам надёжность и уверенность</p>
            </div>
            <div className="guarantee-example">
                <div className="guarantee-example-item">
                    <img src={example1} alt="пример №1"></img>
                    <p>Свидетельство о регистрации в РФ</p>
                </div>
                <div className="guarantee-example-item">
                    <img src={example2} alt="пример №2"></img>
                    <p>Свидетельство о регистрации в США</p>
                </div>
                <div className="guarantee-example-item">
                    <img src={example3} alt="пример №3"></img>
                    <p>Свидетельство о регистрации в Китае</p>
                </div>
                <div className="guarantee-example-item">
                    <img src={example4} alt="пример №4"></img>
                    <p>Свидетельство о регистрации в Великобритнии</p>
                </div>
            </div>
            <button>Показать больше документов</button>
        </section>
    );
}

export default Guarantee;