import Row from "../../UI/Row/Row";
import { Outlet } from "react-router-dom";

const Study = () => {
    return (
        <div className="App">
            <Outlet />
            <div className='title'>
                Almaty Guideliance - Where to Study
            </div>

            <div className="table">
                <Row cells={{
                    imgName1: "smartpoint",
                    child1: "Smart.Point",
                    imgName2: "level8",
                    child2: "LEVEL8",
                    imgName3: "terra",
                    child3: "Terra Coworking"
                }} />
            </div>
        </div >
    );
}

export default Study;