
import '../homepage/Homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCodeBranch, faHouse } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane, faUser } from '@fortawesome/free-regular-svg-icons';
import About from '../aboutme/About';
import Home from '../home/Home';
import { useState } from 'react';
import Contacts from '../contacts/Contacts';
import Skills from '../skills/Skills';
import Git from '../git/Git';
export default function Homepage() {

    const [currentPage, setCurrentPage] = useState("home");

    function changePage(page) {

        setCurrentPage(page);
    }



    return (
        <>
            <div className='row' style={{ position: 'relative' }}>

                <div style={{ color: 492E87, width: "10vh" }} className=''>
                    <button className='m-2 button-home mt-5' onClick={() => changePage("home")}><FontAwesomeIcon icon={faHouse} /></button>
                    <button className='m-2 button-about' onClick={() => changePage("about")}><FontAwesomeIcon icon={faUser} /></button>
                    <button className='m-2 button-skills' onClick={() => changePage("skills")}><FontAwesomeIcon icon={faCode} /> </button>
                    <button className='m-2 button-contact' onClick={() => changePage("contacts")} ><FontAwesomeIcon icon={faPaperPlane} /> </button>
                    <button className='m-2 button-git' onClick={() => changePage("git")}><FontAwesomeIcon icon={faCodeBranch} /> </button>
                </div>
                <div className='homepage-header ' id='divvone'>
                    {currentPage == "home" && <Home />}
                    {currentPage == "about" && <About />}
                    {currentPage == "contacts" && <Contacts />}
                    {currentPage == "skills" && <Skills />}
                    {currentPage == "git" && <Git />}
                </div>


            </div>
        </>
    );
}