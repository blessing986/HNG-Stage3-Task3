import React from 'react';
import { RiCopyrightLine } from "react-icons/ri";
import './Footer.css'

const Footer = () => {

    return (

        <div>

            <footer className="foot md:px-6 lg:px-14 py-10">

                <div className="flex flex-col md:flex-row justify-between">

                    <div>
                        <img src="./assets/img/metabnb_2.png" alt="" className="pl-6 md:pl-0" />

                        <div className="flex mt-12 md:mt-24 pl-10 md:pl-0 cursor-pointer">

                            <img src="./assets/img/facebook.png" alt="" className="mr-6" />
                            <img src="./assets/img/instagram.png" alt="" className="mr-6" />
                            <img src="./assets/img/twitter.png" alt="" />

                        </div>

                    </div>

                    <div className="text-white mt-6 md:mt-0 pl-10 md:pl-0">

                        <h1 className="font-bold text-lg mb-4">Community</h1>

                        <div className="text-sm cursor-pointer">

                            <p className="mb-4">NFT</p>
                            <p className="mb-4">Tokens</p>
                            <p className="mb-4">Landlords</p>
                            <p>Discord</p>

                        </div>

                    </div>

                    <div className="text-white mt-10 md:mt-0 pl-10 md:pl-0">

                        <h1 className="font-bold text-lg mb-4">Places</h1>

                        <div className="text-sm cursor-pointer">

                            <p className="mb-4">Castle</p>
                            <p className="mb-4">Farms</p>
                            <p className="mb-4">Beach</p>
                            <p>Learn more</p>

                        </div>

                    </div>

                    <div className="text-white mr-24 mt-10 md:mt-0 pl-10 md:pl-0">

                        <h1 className="font-bold text-lg mb-4">About us</h1>

                        <div className="text-sm cursor-pointer">

                            <p className="mb-4">Road map</p>
                            <p className="mb-4">Creators</p>
                            <p className="mb-4">Career</p>
                            <p className="mb-4">Contact us</p>

                        </div>

                    </div>

                </div>

                <div className="flex items-center text-white text-base mt-4 pl-10 md:pl-0">

                    <div className="mr-2"> <RiCopyrightLine /> </div>
                    <p> 2022 Metabnb </p>

                </div>

            </footer>

        </div>

    )

}

export default Footer;