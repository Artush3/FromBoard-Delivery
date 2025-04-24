import Details from "./Details";
import Advantages from "./Advantages";
import Guarantee from "./Guarantee";
import Reviews from "./Reviews";
import Questions from "./Questions";

function Main() {
    return (
        <main className="main">
            <div className="conteiner_content">
                <Details></Details>
                <Advantages></Advantages>
                <Guarantee></Guarantee>
                <Reviews></Reviews>
                <Questions></Questions>
            </div>
        </main>
    );
}

export default Main;