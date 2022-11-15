import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { RiCopyrightLine } from "react-icons/ri";
import placeToStay from "./pages/placeToStay";

function App() {

  return (

    <div>

      <Navbar/>

      {/* Section 2 */}

      <section className="md:mt-6 md:mx-8 lg:mx-14">

        <div className="flex flex-col md:flex-row mt-10 md:mt-20 mx-4 md:mx-0">

          <div className="md:w-1/2 md:mt-12 mt-6 order-last md:order-none md:mr-6 lg:mr-0 mimi">

            <h1 class="lg:text-5xl lg:leading-normal text-3xl sm:text-4xl"> Rent a
              <span class="unique"> Place</span> away from
              <span class="unique"> Home</span> in the
              <span class="unique"> Metaverse</span>
            </h1>

            <p className="text-lg lg:text-xl font-normal md:mt-12"> we provide you access to luxury and affordable
              houses in the
              metaverse, get a chance to turn your imagination to reality at your comfort zone </p>

            <div className="flex mt-6 md:mt-12">

              <input type="text" placeholder="search for location"
                className="p-3 border rounded-l-lg focus:outline-none md:w-4/5 w-3/5" />

              <button className="btn1 text-white lg:px-20 rounded-r-lg w-2/5 md:w-none">Search</button>

            </div>

          </div>

          <div className="md:w-1/2 lg:pl-24 sm:ml-14 md:ml-0">

            <img src="./assets/img/pic.png" alt="" />

          </div>

        </div>

      </section>

      {/* Section 3 */}

      <section className="mbtoken flex justify-between px-4 mt-14 md:px-8 lg:px-14 py-2">

        <img src="./assets/img/mbtoken.png" alt="" className="lg:h-10 h-4 sm:h-6" />
        <img src="./assets/img/metamask.png" alt="" className="lg:h-10 h-4 sm:h-6" />
        <img src="./assets/img/opensea.png" alt="" className="lg:h-10 h-4 sm:h-6" />

      </section>

      {/* Section 4 */}

      <section className="lg:mx-14">

        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-center my-10 font-bold">Inspiration for your next adventure</h1>

        {/* Row 1 */}

        <div className="flex flex-col md:flex-row justify-between md:flex-wrap lg:flex-nowrap card ">

          <div className="border rounded-lg p-4 mx-10 sm:mx-44 md:mx-4 md:ml-10 lg:ml-0 mb-4 lg:mb-0 cursor-pointer">

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

        <div className="flex flex-col md:flex-row justify-between mt-4 md:flex-wrap lg:flex-nowrap card">

          <div className="border rounded-lg p-4 mx-10 md:mr-4 md:ml-10 lg:ml-0 mb-4 lg:mb-0 sm:mx-44 cursor-pointer ">

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

      </section>

      {/* Section 5 */}

      <section className="mbtoken flex flex-col md:flex-row px-4 md:px-8 lg:px-14 mt-12 py-20 items-center">

        <div className="text-white md:w-1/2 lg:pr-24 order-last md:order-none">

          <h1 className="font-bold text-4xl md:text-5xl mt-10 md:mt-0">Metabnb NFTs</h1>

          <p className="text-lg my-6 md:my-10">Discover our NFT gift cards collection. Loyal customers gets amazing gift cards
            which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive
            services.</p>

          <button className="unique bg-white px-10 py-2 rounded-lg hover:bg-gray-200 ease-in duration-300">Learn more</button>

        </div>

        <div className="md:w-1/2">

          <img src="./assets/img/multiple.png" alt="" />

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

        <div className="flex items-center text-white text-base mt-4 pl-10 md:pl-0">

          <div className="mr-2"> <RiCopyrightLine /> </div>
          <p> 2022 Metabnb </p>

        </div>

      </footer>


    </div>
  )


}

export default App;