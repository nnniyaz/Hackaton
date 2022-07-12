import Row from "../../UI/Row/Row";

const Cafe = () => {
    return (
        <div className="App">
            {/* <Outlet /> */}
            <div className='title'>
                Almaty Guideliance - Where to Eat
            </div>

            <div className="table">
                <Row cells={{
                    imgName1: "coffeeboom",
                    child1: "Coffee Boom",
                    imgName2: "ziyafet",
                    child2: "Ziyafet",
                    imgName3: "afanasich",
                    child3: "У Афанасича"
                }} />
            </div>
        </div >
    );
}

export default Cafe;