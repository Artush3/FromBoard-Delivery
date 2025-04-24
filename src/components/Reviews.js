import prev from "../img/Vector.svg"
import next from "../img/Vector (1).svg"
import { useState, useEffect, useRef } from "react";
import quote from "../img/Quotes.svg"

function Reviews() {
    const slides = useRef(null)
    const [slideCount, setSlideCount] = useState(document.querySelectorAll(".slide").length)
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        setSlideCount(document.querySelectorAll(".slide").length)
    }, []);

    const goToSlide = (index) => {
        if(index < 0) {
            index = slideCount - 2
        } else if (index >= slideCount - 1) {
            index = 0
        }
        
        setCurrentIndex(index)
        slides.current.style.transform  = `translateX(${-index * 50}%)`
    }

    return (
        <section className="reviews">
            <h1>Отзывы</h1>
            <div className="reviews-example">
                <button onClick={() => goToSlide(currentIndex - 1)}><img src={prev} alt="назад"></img></button>
                <div className="slider">
                    <div ref={slides} className="slides">
                        <div className="slide">
                            <h1>Я заказала последний iPhone из США через ваш сервис, и доставка прошла быстро и без каких‑либо проблем. Гарантии качества и надёжная упаковка сделали мой опыт покупки невероятно позитивным</h1>
                            <img src={quote} alt="цитата"></img>
                            <p>Анна</p>
                        </div>
                        <div className="slide">
                            <h1>Я уже несколько лет заказываю дизайнерскую одежду из Франции через ваш сервис, и он никогда меня не подводил. Важно иметь надёжную компанию, которая позаботится о вашем заказе и предоставит все необходимые документы для ввоза в Россию</h1>
                            <img src={quote} alt="цитата"></img>
                            <p>Алексей</p>
                        </div>
                        <div className="slide">
                            <h1>Я уже несколько лет заказываю дизайнерскую одежду из Франции через ваш сервис, и он никогда меня не подводил. Важно иметь надежную компанию, которая позаботится о вашем заказе и предоставит все необходимые документы для ввоза в Россию</h1>
                            <img src={quote} alt="цитата"></img>
                            <p>Ольга</p>
                        </div>
                        <div className="slide">
                            <h1>Заказал шикарные часы из Швейцарии, и доставка была невероятно быстрой. Ваш сервис делает интернет-шоппинг более доступным и удобным</h1>
                            <img src={quote} alt="цитата"></img>
                            <p>Игорь</p>
                        </div>
                        <div className="slide">
                            <h1>Ваш сервис действительно изменил мой способ покупок. Я больше не переживаю о таможенных вопросах и документах - все у вас в порядке. Спасибо за ваше качество и надежность</h1>
                            <img src={quote} alt="цитата"></img>
                            <p>Екатерина</p>
                        </div>
                        <div className="slide">
                            <h1>Я заказал редкий антикварный предмет из Японии через ваш сервис, и остался впечатлен. Все пришло в отличном состоянии, и ваша гарантия качества действительно работает. Спасибо за ваше профессиональное обслуживание</h1>
                            <img src={quote} alt="цитата"></img>
                            <p>Дмитрий</p>
                        </div>
                        <div className="slide">
                            <h1>Я заказал редкий антикварный предмет из Японии через ваш сервис, и остался впечатлен. Все пришло в отличном состоянии, и ваша гарантия качества действительно работает. Спасибо за ваше профессиональное обслуживание</h1>
                            <img src={quote} alt="цитата"></img>
                            <p>Дмитрий</p>
                        </div>
                    </div>
                </div>
                <button onClick={() => goToSlide(currentIndex + 1)}><img src={next} alt="назад"></img></button>
            </div>
        </section>
    );
}

export default Reviews;