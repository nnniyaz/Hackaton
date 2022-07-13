import '../description.css'
import picOne from '../../../images/afanasich-inside1.jpg'
import picTwo from '../../../images/afanasich-inside2.jpg'
import picThree from '../../../images/afanasich-inside3.jpg'

const Afanasich = () => {
    return (
        <div className="main">
            <div className="pictures">
                <div className='img' style={{ backgroundImage: `url(${picOne})` }}></div>
                <div className='img' style={{ backgroundImage: `url(${picTwo})` }}></div>
                <div className='img' style={{ backgroundImage: `url(${picThree})` }}></div>
            </div>
            <div className="caption">
                <div className="place-name">
                    Afanasich
                </div>

                <hr />

                <div className="block">
                    <div>Cuisine: Russian, Italian</div>
                    <div>Payment: Cash, Cards.</div>
                    <div>Music: DJ, Live-band</div>
                    <div>Contacts: +7‒705‒139‒25‒24</div>
                </div>

                <hr />

                <div className="block">
                    <strong>Minimum age:</strong>
                    <div>For men: any</div>
                    <div>For women: any</div>
                </div>

                <hr />

                <div className="block">
                    <strong>Working Period:</strong>
                    <div>Mon-Tue 9:30 - 22:00</div>
                    <div>Wed-Thu 9:30 - 22:00</div>
                    <div>Fri-Sat: 9:30 - 22:00</div>
                    <div>Sun not working</div>
                </div>

                <hr />

                <div className="block">
                    <strong>Address:</strong> г. Алматы, пр. Достык, 123/8 (уг. Карасай батыра)
                </div>
            </div>
        </div>
    );
}

export default Afanasich;