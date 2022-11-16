import React, { useState } from "react";
import Modal from "../components/Modal";
import Footer from "../components/Footer"
import { RiCopyrightLine } from "react-icons/ri";
import { Link } from 'react-router-dom'
import Navbar from "../components/Navbar";

function placeToStay() {

    return (

        <div>

            {/* Navbar Section */}

            <Navbar/>

            {/* Section 2 */}

            <section className="wrapper flex justify-between items-center mx-2 sm:mx-8 lg:mx-14 mt-8 lg:mt-16 lg:w-5/6">

                <a href="/" className="mimi p-2"> Resturant </a>
                <a href="/" className="mimi p-2"> Cottage </a>
                <a href="/" className="mimi p-2"> Castle </a>
                <a href="/" className="mimi p-2 whitespace-nowrap"> fantast city </a>
                <a href="/" className="mimi p-2"> beach </a>
                <a href="/" className="mimi p-2"> Carbins </a>
                <a href="/" className="mimi p-2 whitespace-nowrap"> Off-grid </a>
                <a href="/" className="mimi p-2"> Farm </a>


                <div className="flex rounded-lg py-2 px-4 border items-center cursor-pointer  hover:bg-gray-200 ease-in duration-300">

                    <p className="loca">Location</p>

                    <img src="./assets/img/location.png" alt="" className="h-5 w-5 ml-10 mr-4 lg:mr-0" />
                </div>

            </section>

            {/* Section 3 */}

            <section className="lg:mx-14 mb-14">

                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-center my-10 font-bold">Inspiration for your next adventure
                </h1>

                {/* Row 1 */}

                <div className="flex flex-col md:flex-row justify-between md:flex-wrap lg:flex-nowrap card">

                    <div className="border rounded-lg p-4 mx-10 sm:mx-44 md:mx-4 md:ml-10 lg:ml-0 mb-4 lg:mb-0 cursor-pointer ">

                        <img src="./assets/img/row2_A.png" alt="" className="w-full" />

                        <div className="flex justify-between text-xs my-2">

                            <p>Desert King</p>
                            <p className="font-bold">1MBT per night</p>

                        </div>

                        <div className="flex justify-between text-xs">

                            <p>2345km away</p>
                            <p>available for 2weeks stay</p>

                        </div>

                        <div className="flex mt-2">

                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" />

                        </div>

                    </div>

                    <div className="border rounded-lg p-4 mx-10 lg:mr-4 md:mr-10 md:ml-0 mb-4 lg:mb-0 sm:mx-44 cursor-pointer ">

                        <img src="./assets/img/row2_B.png" alt="" className="w-full" />

                        <div className="flex justify-between text-xs my-2">

                            <p>Desert King</p>
                            <p className="font-bold">1MBT per night</p>

                        </div>

                        <div className="flex justify-between text-xs">

                            <p>2345km away</p>
                            <p>available for 2weeks stay</p>

                        </div>

                        <div className="flex mt-2">

                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" />

                        </div>

                    </div>

                    <div className="border rounded-lg p-4 mx-10 md:mr-4 md:ml-10 lg:ml-0 mb-4 md:mb-0 sm:mx-44 cursor-pointer ">

                        <img src="./assets/img/row2_C.png" alt="" className="w-full" />

                        <div className="flex justify-between text-xs my-2">

                            <p>Desert King</p>
                            <p className="font-bold">1MBT per night</p>

                        </div>

                        <div className="flex justify-between text-xs">

                            <p>2345km away</p>
                            <p>available for 2weeks stay</p>

                        </div>

                        <div className="flex mt-2">

                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" />

                        </div>

                    </div>

                    <div className="border rounded-lg p-4 mx-10 md:mx-0 sm:mx-44 lg:mr-0 md:mr-10 cursor-pointer ">

                        <img src="./assets/img/row2_D.png" alt="" className="w-full" />

                        <div className="flex justify-between text-xs my-2">

                            <p>Desert King</p>
                            <p className="font-bold">1MBT per night</p>

                        </div>

                        <div className="flex justify-between text-xs">

                            <p>2345km away</p>
                            <p>available for 2weeks stay</p>

                        </div>

                        <div className="flex mt-2">

                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" />

                        </div>

                    </div>

                </div>

                {/* Row 2 */}

                <div className="flex flex-col md:flex-row justify-between mt-4 md:flex-wrap lg:flex-nowrap card">

                    <div className="border rounded-lg p-4 mx-10 md:mr-4 md:ml-10 lg:ml-0 mb-4 lg:mb-0 sm:mx-44 cursor-pointer ">

                        <img src="./assets/img/row1_A.png" alt="" className="w-full" />

                        <div className="flex justify-between text-xs my-2">

                            <p>Desert King</p>
                            <p className="font-bold">1MBT per night</p>

                        </div>

                        <div className="flex justify-between text-xs">

                            <p>2345km away</p>
                            <p>available for 2weeks stay</p>

                        </div>

                        <div className="flex mt-2">

                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" />

                        </div>

                    </div>

                    <div className="border rounded-lg p-4 mx-10 lg:mr-4 md:mr-10 md:ml-0 mb-4 lg:mb-0 sm:mx-44 cursor-pointer ">

                        <img src="./assets/img/row1_B.png" alt="" className="w-full" />

                        <div className="flex justify-between text-xs my-2">

                            <p>Desert King</p>
                            <p className="font-bold">1MBT per night</p>

                        </div>

                        <div className="flex justify-between text-xs">

                            <p>2345km away</p>
                            <p>available for 2weeks stay</p>

                        </div>

                        <div className="flex mt-2">

                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" />

                        </div>

                    </div>

                    <div className="border rounded-lg p-4 mx-10 md:mr-4 md:ml-10 lg:ml-0 mb-4 md:mb-0 sm:mx-44 cursor-pointer ">

                        <img src="./assets/img/row1_C.png" alt="" className="w-full" />

                        <div className="flex justify-between text-xs my-2">

                            <p>Desert King</p>
                            <p className="font-bold">1MBT per night</p>

                        </div>

                        <div className="flex justify-between text-xs">

                            <p>2345km away</p>
                            <p>available for 2weeks stay</p>

                        </div>

                        <div className="flex mt-2">

                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" />

                        </div>

                    </div>

                    <div className="border rounded-lg p-4 mx-10 md:mx-0 sm:mx-44 lg:mr-0 md:mr-10 cursor-pointer ">

                        <img src="./assets/img/row1_D.png" alt="" className="w-full" />

                        <div className="flex justify-between text-xs my-2">

                            <p>Desert King</p>
                            <p className="font-bold">1MBT per night</p>

                        </div>

                        <div className="flex justify-between text-xs">

                            <p>2345km away</p>
                            <p>available for 2weeks stay</p>

                        </div>

                        <div className="flex mt-2">

                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" />

                        </div>

                    </div>

                </div>

                {/* Row 3 */}

                <div className="flex flex-col md:flex-row justify-between mt-4 md:flex-wrap lg:flex-nowrap card">

                    <div className="border rounded-lg p-4 mx-10 md:mr-4 md:ml-10 lg:ml-0 mb-4 lg:mb-0 sm:mx-44 cursor-pointer ">

                        <img src="./assets/img/row3_A.png" alt="" className="w-full" />

                        <div className="flex justify-between text-xs my-2">

                            <p>Desert King</p>
                            <p className="font-bold">1MBT per night</p>

                        </div>

                        <div className="flex justify-between text-xs">

                            <p>2345km away</p>
                            <p>available for 2weeks stay</p>

                        </div>

                        <div className="flex mt-2">

                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" />

                        </div>

                    </div>

                    <div className="border rounded-lg p-4 mx-10 lg:mr-4 md:mr-10 md:ml-0 mb-4 lg:mb-0 sm:mx-44 cursor-pointer ">

                        <img src="./assets/img/row3_B.png" alt="" className="w-full" />

                        <div className="flex justify-between text-xs my-2">

                            <p>Desert King</p>
                            <p className="font-bold">1MBT per night</p>

                        </div>

                        <div className="flex justify-between text-xs">

                            <p>2345km away</p>
                            <p>available for 2weeks stay</p>

                        </div>

                        <div className="flex mt-2">

                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" />

                        </div>

                    </div>

                    <div className="border rounded-lg p-4 mx-10 md:mr-4 md:ml-10 lg:ml-0 mb-4 md:mb-0 sm:mx-44 cursor-pointer ">

                        <img src="./assets/img/row3_C.png" alt="" className="w-full" />

                        <div className="flex justify-between text-xs my-2">

                            <p>Desert King</p>
                            <p className="font-bold">1MBT per night</p>

                        </div>

                        <div className="flex justify-between text-xs">

                            <p>2345km away</p>
                            <p>available for 2weeks stay</p>

                        </div>

                        <div className="flex mt-2">

                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" />

                        </div>

                    </div>

                    <div className="border rounded-lg p-4 mx-10 md:mx-0 sm:mx-44 lg:mr-0 md:mr-10 cursor-pointer ">

                        <img src="./assets/img/row3_D.png" alt="" className="w-full" />

                        <div className="flex justify-between text-xs my-2">

                            <p>Desert King</p>
                            <p className="font-bold">1MBT per night</p>

                        </div>

                        <div className="flex justify-between text-xs">

                            <p>2345km away</p>
                            <p>available for 2weeks stay</p>

                        </div>

                        <div className="flex mt-2">

                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" />

                        </div>

                    </div>

                </div>

                {/* Row 4 */}

                <div className="flex flex-col md:flex-row justify-between mt-4 md:flex-wrap lg:flex-nowrap card">

                    <div className="border rounded-lg p-4 mx-10 md:mr-4 md:ml-10 lg:ml-0 mb-4 lg:mb-0 sm:mx-44 cursor-pointer ">

                        <img src="./assets/img/row4_A.png" alt="" className="w-full" />

                        <div className="flex justify-between text-xs my-2">

                            <p>Desert King</p>
                            <p className="font-bold">1MBT per night</p>

                        </div>

                        <div className="flex justify-between text-xs">

                            <p>2345km away</p>
                            <p>available for 2weeks stay</p>

                        </div>

                        <div className="flex mt-2">

                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" />

                        </div>

                    </div>

                    <div className="border rounded-lg p-4 mx-10 lg:mr-4 md:mr-10 md:ml-0 mb-4 lg:mb-0 sm:mx-44 cursor-pointer ">

                        <img src="./assets/img/row4_B.png" alt="" className="w-full" />

                        <div className="flex justify-between text-xs my-2">

                            <p>Desert King</p>
                            <p className="font-bold">1MBT per night</p>

                        </div>

                        <div className="flex justify-between text-xs">

                            <p>2345km away</p>
                            <p>available for 2weeks stay</p>

                        </div>

                        <div className="flex mt-2">

                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" />

                        </div>

                    </div>

                    <div className="border rounded-lg p-4 mx-10 md:mr-4 md:ml-10 lg:ml-0 mb-4 md:mb-0 sm:mx-44 cursor-pointer ">

                        <img src="./assets/img/row4_C.png" alt="" className="w-full" />

                        <div className="flex justify-between text-xs my-2">

                            <p>Desert King</p>
                            <p className="font-bold">1MBT per night</p>

                        </div>

                        <div className="flex justify-between text-xs">

                            <p>2345km away</p>
                            <p>available for 2weeks stay</p>

                        </div>

                        <div className="flex mt-2">

                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" />

                        </div>

                    </div>

                    <div className="border rounded-lg p-4 mx-10 md:mx-0 sm:mx-44 lg:mr-0 md:mr-10 cursor-pointer ">

                        <img src="./assets/img/row4_D.png" alt="" className="w-full" />

                        <div className="flex justify-between text-xs my-2">

                            <p>Desert King</p>
                            <p className="font-bold">1MBT per night</p>

                        </div>

                        <div className="flex justify-between text-xs">

                            <p>2345km away</p>
                            <p>available for 2weeks stay</p>

                        </div>

                        <div className="flex mt-2">

                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" className="mr-2" />
                            <img src="./assets/img/star.png" alt="" />

                        </div>

                    </div>

                </div>

            </section>

            {/* Footer Section */}

            <Footer/>

        </div>
    )

}

export default placeToStay;