
import '../homepage/Homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCodeBranch, faHouse } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane, faUser } from '@fortawesome/free-regular-svg-icons';
import About from '../aboutme/About';
import Home from '../home/Home';
import { useState } from 'react';
export default function Homepage() {

    const [currentPage, setCurrentPage] = useState("home");

    function changePage(page) {

        setCurrentPage(page);
    }



    return (
        <>
            <div className='row'>

                <div style={{ color: "#0d6353", width: "10vh" }} className=''>
                    <button className='m-2' id='home' onClick={() => changePage("home")}><FontAwesomeIcon icon={faHouse} /></button>
                    <button className='m-2' id='about' onClick={() => changePage("about")}><FontAwesomeIcon icon={faUser} /></button>
                    <button className='m-2'><FontAwesomeIcon icon={faCode} /> </button>
                    <button className='m-2'><FontAwesomeIcon icon={faPaperPlane} /> </button>
                    <button className='m-2'><FontAwesomeIcon icon={faCodeBranch} /> </button>
                </div>
                <div className='homepage-header d-flex justify-content-center' id='divvone'>
                    {currentPage == "home" && <Home />}
                    {currentPage == "about" && <About />}
                </div>

            </div>

        </>
    );
}