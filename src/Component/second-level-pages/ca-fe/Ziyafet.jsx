import '../description.css'
import picOne from '../../../images/ziyafet-inside1.jpg'
import picTwo from '../../../images/ziyafet-inside2.jpg'
import picThree from '../../../images/ziyafet-inside3.jpg'

const Ziyafet = () => {
    return (
        <div className="main">
            <div className="pictures">
                <div className='img' style={{ backgroundImage: `url(${picOne})` }}></div>
                <div className='img' style={{ backgroundImage: `url(${picTwo})` }}></div>
                <div className='img' style={{ backgroundImage: `url(${picThree})` }}></div>
            </div>
            <div className="caption">
                <div className="place-name">
                    Ziyafet
                </div>

                <hr />

                <div className="block">
                    <div>Cuisine: European, Turkish</div>
                    <div>Payment: Cash, Cards.</div>
                    <div>Music: DJ, Live-band</div>
                    <div>Contacts: +7‒777‒404‒33‒33</div>
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
                    <div>Mon-Tue 10:30-24:00</div>
                    <div>Wed-Thu 10:00 - 24:00</div>
                    <div>Fri-Sat 10:00 - 24:00</div>
                    <div>Sun not working</div>
                </div>

                <hr />

                <div className="block">
                    <strong>Address:</strong> г. Алматы, Желтоксан, 172
                </div>
            </div>
        </div>
    );
}

export default Ziyafet;