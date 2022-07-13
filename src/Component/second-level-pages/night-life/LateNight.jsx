import '../description.css'
import picOne from '../../../images/latenight-inside1.jpeg'
import picTwo from '../../../images/latenight-inside2.jpeg'
import picThree from '../../../images/latenight-inside3.jpeg'

const LateNight = () => {
    return (
        <div className="main">
            <div className="pictures">
                <div className='img' style={{ backgroundImage: `url(${picOne})` }}></div>
                <div className='img' style={{ backgroundImage: `url(${picTwo})` }}></div>
                <div className='img' style={{ backgroundImage: `url(${picThree})` }}></div>
            </div>
            <div className="caption">
                <div className="place-name">
                    Late Night Show Bar
                </div>

                <hr />

                <div className="block">
                    <div>Cuisine: No cuisine</div>
                    <div>Payment: Cash, Cards.</div>
                    <div>Music: DJ, Tech</div>
                    <div>Contacts: +7 (705) 676‒73‒33</div>
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
                    <div>Mon-Sun 18:00 - 06:00</div>

                </div>

                <hr />

                <div className="block">
                    <strong>Address:</strong> г. Алматы, пр. Назарбаева, 124 (уг. Кабанбай батыра)
                </div>
            </div>
        </div>
    );
}

export default LateNight