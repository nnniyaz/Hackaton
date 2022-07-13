import '../description.css'
import picOne from '../../../images/coffeeboom-inside1.jpg'
import picTwo from '../../../images/coffeeboom-inside2.jpg'
import picThree from '../../../images/coffeeboom3.jpg'

const Coffeeboom = () => {
    return (
        <div className="main">
            <div className="pictures">
                <div className='img' style={{ backgroundImage: `url(${picOne})` }}></div>
                <div className='img' style={{ backgroundImage: `url(${picTwo})` }}></div>
                <div className='img' style={{ backgroundImage: `url(${picThree})` }}></div>
            </div>
            <div className="caption">
                <div className="place-name">
                    Coffeeboom
                </div>

                <hr />

                <div className="block">
                    <div>Cuisine: European</div>
                    <div>Payment: Cash, Cards.</div>
                    <div>Music: DJ, Live-band</div>
                    <div>Contacts: +7‒778‒191‒11‒99</div>
                </div>

                <hr />

                <div className="block">
                    <strong>Minimum age:</strong>
                    <div>For men +0</div>
                    <div>For women +0</div>
                </div>

                <hr />

                <div className="block">
                    <strong>Working Period:</strong>
                    <div>Mon-Tue 9:00-24:00 </div>
                    <div>Wed-Thu 9:00-24:00</div>
                    <div>Fri-Sat: 9:00-24:00</div>
                    <div>Sun not working</div>
                </div>

                <hr />

                <div className="block">
                    <strong>Address:</strong> г. Алматы, пр. Сейфуллина, 617
                </div>
            </div>
        </div>
    );
}

export default Coffeeboom;