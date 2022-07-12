import Row from "../../UI/Row/Row";

const Resort = () => {
    return (
        <div className="App">
            {/* <Outlet /> */}
            <div className='title'>
                Almaty Guideliance - Where to Relax
            </div>

            <div className="table">
                <Row cells={{
                    imgName1: "tauspa",
                    child1: "Tau Spa",
                    imgName2: "eightlakes",
                    child2: "8 Озёр",
                    imgName3: "office",
                    child3: "Office Resto Spa"
                }} />
            </div>
        </div >
    );
}

export default Resort;