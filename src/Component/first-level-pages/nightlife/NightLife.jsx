import { Outlet } from "react-router-dom";
import Row from "../../UI/Row/Row"

const NightLife = () => {
    return (
        <div className="App">
            <Outlet />
            <div className='title'>
                Almaty Guideliance - Where to Hangout
            </div>

            <div className="table">
                <Row cells={{
                    imgName1: "kowloon",
                    child1: "Kowloon Bar",
                    imgName2: "nikulin",
                    child2: "Никулин",
                    imgName3: "latenight",
                    child3: "Late Night Show",
                }} />
            </div>
        </div >
    );
}

export default NightLife;