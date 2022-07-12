import '../description.css'
import picOne from '../../../images/nikulin-inside1.jpeg'
import picTwo from '../../../images/nikulin-inside2.jpeg'
import picThree from '../../../images/nikulin-inside3.jpeg'

const Nikulin = () => {
    return (
        <div className="main">
            <div className="pictures">
                <div className='img' style={{ backgroundImage: `url(${picOne})` }}></div>
                <div className='img' style={{ backgroundImage: `url(${picTwo})` }}></div>
                <div className='img' style={{ backgroundImage: `url(${picThree})` }}></div>
            </div>
            <div className="caption">
                <div className="place-name">
                    Nikulin Bar
                </div>

                <hr />

                <div className="block">
                    <div>Cuisine: Special</div>
                    <div>Payment: Cash, Cards.</div>
                    <div>Music: DJ, Live-band</div>
                    <div>Contacts: +7(707)777-99-39</div>
                </div>

                <hr />

                <div className="block">
                    <strong>Minimum age:</strong>
                    <div>For men +23</div>
                    <div>For women +21</div>
                </div>

                <hr />

                <div className="block">
                    <strong>Working Period:</strong>
                    <div>Mon not working</div>
                    <div>Tue-Sun 20:00 - 04:00</div>
                </div>

                <hr />

                <div className="block">
                    <strong>Address:</strong> пр. Назарбаева, 124
                </div>
            </div>
        </div>
    );
}

export default Nikulin;