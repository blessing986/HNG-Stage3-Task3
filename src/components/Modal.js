import React from "react";
import styles from "./Modal.module.css";
import { RiCloseLine, RiArrowRightSLine } from "react-icons/ri"; 


const Modal = ({ setIsOpen }) => {

    return (

        <>
            <div className={styles.darkBG} onClick={() => setIsOpen(false)} />

            <div className={styles.centered}>

                <div className={styles.modal}>

                    <div class="flex justify-between items-center p-6 border-b">

                        <p class="font-bold loca">Connect wallet</p>

                        <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                            <RiCloseLine style={{ marginBottom: "-3px" }} />

                        </button>

                    </div>

                    <div class="px-6 my-6">

                        <p class="font-semibold loca">Choose your preferred wallet: </p>

                        <div class="flex justify-between items-center border rounded-lg px-6 py-2 mt-2 cursor-pointer hover:bg-gray-100 ease-in duration-300">

                            <div class="flex items-center">

                                <img src="./assets/img/cat.png" alt="" />
                                <p class="font-semibold text-black pl-4 pr-24 sm:pr-60">Metamask</p>

                            </div>

                            <RiArrowRightSLine style={{ fontSize: "25px", color: "grey" }}/>

                        </div>

                        <div class="flex justify-between items-center border rounded-lg px-6 py-2 mt-4 cursor-pointer hover:bg-gray-100 ease-in duration-300">

                            <div class="flex items-center">

                                <img src="./assets/img/wifi.png" alt="" />
                                <p class="font-semibold text-black pl-4">WalletConnect</p>

                            </div>

                            <RiArrowRightSLine style={{ fontSize: "25px", color: "grey" }}/>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

};

export default Modal;