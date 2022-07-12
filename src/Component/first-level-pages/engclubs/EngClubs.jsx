import Row from "../../UI/Row/Row";

const EngClubs = () => {
    return (
        <div className="App">
            {/* <Outlet /> */}
            <div className='title'>
                Almaty Guideliance - Where to Practice English
            </div>

            <div className="table">
                <Row cells={{
                    imgName1: "americanspace",
                    child1: "American Space",
                    imgName2: "spasibeacoup",
                    child2: "SpasiBeacoup",
                    imgName3: "skillsacademy",
                    child3: "Skills Academy"
                }} />
            </div>
        </div>
    );
}

export default EngClubs