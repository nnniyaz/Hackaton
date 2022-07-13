import '../description.css'
import picOne from '../../../images/spasibeacoup-inside1.jpg'
import picTwo from '../../../images/spasibeacoup-inside2.jpg'
import picThree from '../../../images/spasibeacoup-inside3.jpg'

const Spasibeacoup = () => {
    return (
        <div className="main">
            <div className="pictures">
                <div className='img' style={{ backgroundImage: `url(${picOne})` }}></div>
                <div className='img' style={{ backgroundImage: `url(${picTwo})` }}></div>
                <div className='img' style={{ backgroundImage: `url(${picThree})` }}></div>
            </div>
            <div className="caption">
                <div className="place-name">
                    Spasibeacoup
                </div>

                <hr />

                <div className="block">
                    <div>Cuisine: European</div>
                    <div>Payment: Cash, Cards.</div>
                    <div>Music: DJ, Live-band</div>
                    <div>Contacts: +7‒776‒293‒21‒87</div>
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
                    <div>Mon-Tue not working</div>
                    <div>Wed-Thu 20:00 - 04:00</div>
                    <div>Fri-Sat: 22:00 - 05:00</div>
                    <div>Sun not working</div>
                </div>

                <hr />

                <div className="block">
                    <strong>Address:</strong> г. Алматы, пр. Назарбаева, 124 (уг. Карасай батыра)
                </div>
            </div>
        </div>
    );
}

export default Spasibeacoup;