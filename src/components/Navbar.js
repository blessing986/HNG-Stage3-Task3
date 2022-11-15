import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    const [isOpen, setIsOpen] = useState(false);

    isOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

    return (

        <div className='navbar'>

            <div>
                <img src="./assets/img/metabnb_1.png" alt="" className="h-auto w-40 lg:h-auto lg:w-auto" />
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                <Link to="/" className="nav-item mr-14 md:mr-8 mimi">Home</Link>

                <Link to="/placeToStay" className="nav-item mr-14 md:mr-8  mimi">Place to stay</Link>

                <Link to="#" className="nav-item mr-14 md:mr-8  mimi">NFTs</Link>

                <Link to="#" className="nav-item mimi ">Community</Link>

                <button className="btn1 text-white px-6 py-2 rounded font-normal text-base" onClick={() => setIsOpen(true)}>Connect
                wallet</button>

            {isOpen && <Modal setIsOpen={setIsOpen} />}

            </ul>

            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={25} style={{ color: '#000000' }} />) : (<FaBars size={25} style={{ color: '#000000' }} />)}

            </div>
            
        </div>
    )
}

export default Navbar;