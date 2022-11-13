import React from "react";

function placeToStay() {

    return (
        
        <div>

            <section className="md:mt-6 md:px-8 lg:px-14 sticky top-0 bg-white py-4">

                <div className="flex justify-between items-center">

                    <img src="./assets/img/metabnb_1.png" alt="" />

                    <nav className="hidden md:block">

                        <a href="#" className="mr-14 mimi">Home</a>
                        <a href="#" className="mr-14 mimi">Place to stay</a>
                        <a href="#" className="mr-14 mimi">NFTs</a>
                        <a href="#" className="mimi">Community</a>

                    </nav>

                    <button className="btn1 text-white px-6 py-2 rounded font-normal text-base hidden md:block">Connect
                        wallet</button>

                </div>

            </section>

            <section className="wrapper flex justify-between items-center mx-2 sm:mx-8 lg:mx-14 mt-8 lg:mt-16 lg:w-5/6">

                <a href="/" className="mimi p-2"> Resturant </a>
                <a href="/" className="mimi p-2"> Cottage </a>
                <a href="/" className="mimi p-2"> Castle </a>
                <a href="/" className="mimi p-2 whitespace-nowrap"> fantast city </a>
                <a href="/" className="mimi p-2"> beach </a>
                <a href="/" className="mimi p-2"> Carbins </a>
                <a href="/" className="mimi p-2 whitespace-nowrap"> Off-grid </a>
                <a href="/" className="mimi p-2"> Farm </a>


                <div className="flex rounded-lg py-2 px-4 border items-center cursor-pointer">

                    <p className="loca">Location</p>

                    <img src="./assets/img/location.png" alt="" className="h-5 w-5 ml-10 mr-4 lg:mr-0" />
                </div>

            </section>



            <section className="lg:mx-14 mb-14">

                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-center my-10 font-bold">Inspiration for your next adventure
                </h1>

                {/* Row 1 */}

                <div className="flex flex-col md:flex-row justify-between md:flex-wrap lg:flex-nowrap mimi">

                    <div className="border rounded-lg p-4 mx-10 sm:mx-44 md:mx-4 md:ml-10 lg:ml-0 mb-4 lg:mb-0">

                        <img src="./assets/img/row2_A.png" alt="" className="rows w-full" />

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

                    <div className="border rounded-lg p-4 mx-10 lg:mr-4 md:mr-10 md:ml-0 mb-4 lg:mb-0 sm:mx-44">

                        <img src="./assets/img/row2_B.png" alt="" className="rows w-full" />

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

                    <div className="border rounded-lg p-4 mx-10 md:mr-4 md:ml-10 lg:ml-0 mb-4 md:mb-0 sm:mx-44">

                        <img src="./assets/img/row2_C.png" alt="" className="rows w-full" />

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

                    <div className="border rounded-lg p-4 mx-10 md:mx-0 sm:mx-44 lg:mr-0 md:mr-10">

                        <img src="./assets/img/row2_D.png" alt="" className="rows w-full" />

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

                <div className="flex flex-col md:flex-row justify-between mt-4 md:flex-wrap lg:flex-nowrap mimi">

                    <div className="border rounded-lg p-4 mx-10 md:mr-4 md:ml-10 lg:ml-0 mb-4 lg:mb-0 sm:mx-44">

                        <img src="./assets/img/row1_A.png" alt="" className="rows w-full" />

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

                    <div className="border rounded-lg p-4 mx-10 lg:mr-4 md:mr-10 md:ml-0 mb-4 lg:mb-0 sm:mx-44">

                        <img src="./assets/img/row1_B.png" alt="" className="rows w-full" />

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

                    <div className="border rounded-lg p-4 mx-10 md:mr-4 md:ml-10 lg:ml-0 mb-4 md:mb-0 sm:mx-44">

                        <img src="./assets/img/row1_C.png" alt="" className="rows w-full" />

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

                    <div className="border rounded-lg p-4 mx-10 md:mx-0 sm:mx-44 lg:mr-0 md:mr-10">

                        <img src="./assets/img/row1_D.png" alt="" className="rows w-full" />

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

                <div className="flex flex-col md:flex-row justify-between mt-4 md:flex-wrap lg:flex-nowrap mimi">

                    <div className="border rounded-lg p-4 mx-10 md:mr-4 md:ml-10 lg:ml-0 mb-4 lg:mb-0 sm:mx-44">

                        <img src="./assets/img/row3_A.png" alt="" className="rows w-full" />

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

                    <div className="border rounded-lg p-4 mx-10 lg:mr-4 md:mr-10 md:ml-0 mb-4 lg:mb-0 sm:mx-44">

                        <img src="./assets/img/row3_B.png" alt="" className="rows w-full" />

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

                    <div className="border rounded-lg p-4 mx-10 md:mr-4 md:ml-10 lg:ml-0 mb-4 md:mb-0 sm:mx-44">

                        <img src="./assets/img/row3_C.png" alt="" className="rows w-full" />

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

                    <div className="border rounded-lg p-4 mx-10 md:mx-0 sm:mx-44 lg:mr-0 md:mr-10">

                        <img src="./assets/img/row3_D.png" alt="" className="rows w-full" />

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

                <div className="flex flex-col md:flex-row justify-between mt-4 md:flex-wrap lg:flex-nowrap mimi">

                    <div className="border rounded-lg p-4 mx-10 md:mr-4 md:ml-10 lg:ml-0 mb-4 lg:mb-0 sm:mx-44">

                        <img src="./assets/img/row4_A.png" alt="" className="rows w-full" />

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

                    <div className="border rounded-lg p-4 mx-10 lg:mr-4 md:mr-10 md:ml-0 mb-4 lg:mb-0 sm:mx-44">

                        <img src="./assets/img/row4_B.png" alt="" className="rows w-full" />

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

                    <div className="border rounded-lg p-4 mx-10 md:mr-4 md:ml-10 lg:ml-0 mb-4 md:mb-0 sm:mx-44">

                        <img src="./assets/img/row4_C.png" alt="" className="rows w-full" />

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

                    <div className="border rounded-lg p-4 mx-10 md:mx-0 sm:mx-44 lg:mr-0 md:mr-10">

                        <img src="./assets/img/row4_D.png" alt="" className="rows w-full" />

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

            <footer className="foot md:px-6 lg:px-14 py-10">

                <div className="flex flex-col md:flex-row justify-between">

                    <div>
                        <img src="./assets/img/metabnb_2.png" alt="" className="pl-6 md:pl-0" />

                        <div className="flex mt-12 md:mt-24 pl-10 md:pl-0">

                            <img src="./assets/img/facebook.png" alt="" className="mr-6" />
                            <img src="./assets/img/instagram.png" alt="" className="mr-6" />
                            <img src="./assets/img/twitter.png" alt="" />

                        </div>

                    </div>

                    <div className="text-white mt-6 md:mt-0 pl-10 md:pl-0">

                        <h1 className="font-bold text-lg mb-4">Community</h1>

                        <div className="text-sm">

                            <p className="mb-4">NFT</p>
                            <p className="mb-4">Tokens</p>
                            <p className="mb-4">Landlords</p>
                            <p>Discord</p>

                        </div>

                    </div>

                    <div className="text-white mt-10 md:mt-0 pl-10 md:pl-0">

                        <h1 className="font-bold text-lg mb-4">Places</h1>

                        <div className="text-sm">

                            <p className="mb-4">Castle</p>
                            <p className="mb-4">Farms</p>
                            <p className="mb-4">Beach</p>
                            <p>Learn more</p>

                        </div>

                    </div>

                    <div className="text-white mr-24 mt-10 md:mt-0 pl-10 md:pl-0">

                        <h1 className="font-bold text-lg mb-4">About us</h1>

                        <div className="text-sm">

                            <p className="mb-4">Road map</p>
                            <p className="mb-4">Creators</p>
                            <p className="mb-4">Career</p>
                            <p className="mb-4">Contact us</p>

                        </div>

                    </div>

                </div>

                <div className="text-white text-base mt-4 pl-10 md:pl-0">

                    <span className="copyright">&copy</span> 2022 Metabnb

                </div>

            </footer>

        </div>
    )

}

export default placeToStay;