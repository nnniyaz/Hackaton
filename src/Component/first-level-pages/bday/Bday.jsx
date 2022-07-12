import Row from "../../UI/Row/Row"

const Bday = () => {
    return (
        <div className="App">
            {/* <Outlet /> */}
            <div className='title'>
                Almaty Guideliance - Where to have a Birthday Party
            </div>

            <div className="table">
                <Row cells={{
                    imgName1: "rybamechty",
                    child1: "Рыба MM",
                    imgName2: "sadu",
                    child2: "Sadu",
                    imgName3: "manana",
                    child3: "Manana"
                }} />
            </div>
        </div >
    );
}

export default Bday;