import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contacts() {

    return (
        <>
            <div style={{ position: 'absolute', top: 70, right: 350 }}>
                <img src="cielopixel.png" className="" style={{ width: '60%' }} />
            </div>
            <div style={{ width: '70%' }}>
                <h1 className="mb-5 satisfy-regular">Contacts</h1>
                <h2 className="my-4 comfortaa-about" style={{ fontSize: '25px' }}><FontAwesomeIcon icon={faPhone} /> Tel: +39 3404031190</h2>
                <h2 className="my-4 comfortaa-about" style={{ fontSize: '25px' }}><FontAwesomeIcon icon={faEnvelope} /> email: belfiorechi@gmail.com</h2>
                <h2 className="my-4 comfortaa-about" style={{ fontSize: '25px' }}><FontAwesomeIcon icon={faLinkedin} /> LinkedIn:<a href="https://www.linkedin.com/in/chiara-belfiore-ab17532b4/"> https://www.linkedin.com/in/chiara-belfiore</a></h2>
                <h2 className="my-4 comfortaa-about" style={{ fontSize: '25px' }}><FontAwesomeIcon icon={faGithub} /> LaFantoma</h2>
            </div>
        </>
    );
}