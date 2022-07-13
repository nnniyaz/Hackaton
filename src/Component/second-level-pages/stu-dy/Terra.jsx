import '../description.css'
import picOne from '../../../images/terra-inside1.jpg'
import picTwo from '../../../images/terra-inside2.png'
import picThree from '../../../images/terra-inside3.png'

const Terra = () => {
    return (
        <div className="main">
            <div className="pictures">
                <div className='img' style={{ backgroundImage: `url(${picOne})` }}></div>
                <div className='img' style={{ backgroundImage: `url(${picTwo})` }}></div>
                <div className='img' style={{ backgroundImage: `url(${picThree})` }}></div>
            </div>
            <div className="caption">
                <div className="place-name">
                    Terra
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

export default Terra;