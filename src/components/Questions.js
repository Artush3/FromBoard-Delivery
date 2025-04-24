function Questions() {
    return (
        <section className="questions">
            <div className="questions-form">
                <h1>Остались вопросы?</h1>
                <div className="questions-form-input">
                    <input type="text" placeholder="Имя"></input>
                    <input type="email" placeholder="Почта"></input>
                    <input type="tel" placeholder="Телефон"></input>
                    <input type="text" placeholder="Тема вопроса"></input>
                </div>
                <textarea type="text" placeholder="Сообщение..."></textarea>
                <button>Оставить заявку</button>
            </div>
        </section>
    );
}

export default Questions;