import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

import { GrCircleQuestion } from "react-icons/gr";
import { IoIosPartlySunny } from "react-icons/io";
import { MdOutlineMyLocation } from "react-icons/md";
// https://www.hindustantimes.com/static-content/1y/ht/ht-logo2.webp
// https://indianexpress.com/wp-content/themes/indianexpress/images/indian-express-logo-n.svg

// https://images.news18.com/static_news18/pix/ibnhome/news18/News18.svg
// https://d3lzcn6mbbadaf.cloudfront.net/static/img/logo-white.png
// https://www.thehindu.com/theme/images/th-online/h-circle-black-white-new.svg

//  https://lh3.googleusercontent.com/xzPt0e97Ja5Gt8DehLhtbIKrlbEYv3BFqYGMvpTfcEPQebipShnBjy2NtGUYGqhdfdVHiJTCDA=h24-rw
const Briefing = () => {
  return (
    <div className="  flex flex-col gap-7">
      <div className=" flex  justify-between items-center h-[72px]">
        <div className="my-2">
          <div className=" font-sans font-normal text-3xl">Your briefing</div>
          <div className=" font-sans  text-gray-600 size-sm mt-2">
            Wednesday, 28 July
          </div>
        </div>
        {/* top left part */}
        <div className="bg-white p-2 rounded-xl">
          <div className="ml-2 flex">
            <div className="self-center text-gray-500  font-bold text-xl pr-2">
              <MdKeyboardArrowLeft />
            </div>
            <div className="self-center text-5xl pr-2 text-gray-400 ">
              <IoIosPartlySunny />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row justify-between">
                <div className="text-xs">Delhi</div>
                <div>
                  <MdOutlineMyLocation className="text-gray-500" />
                </div>
              </div>
              <div className="text-2xl">33°C</div>
              <div className="text-[#1a73e8] text-sm">More on weather.com</div>
            </div>
          </div>
        </div>
      </div>
      {/* top part finishes here */}

      {/* bottom part starts here */}
      <div className="  flex justify-between  items-start gap-5">
        <div className=" bg-white rounded-3xl p-4 w-[66%]">
          <div>
            {/* topmost heading */}
            <div className=" text-[#1867DC]  bg-white text-xl font-sans font-normal flex">
              Top stories
              <MdKeyboardArrowRight className="self-center size-7" />
            </div>

            {/* first element */}
            <div className="mt-4  pt-4 border-t-[1px]">
              <div className=" flex flex-row  items-start gap-4">
                <div className=" w-[50%] text-xl  ">
                  <img
                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRuPcVvFKgDYLc9H-fq9q3TWXVeChOV4sZ-kyVAHk0g_TtQglyZCmbJPxBZPot2fU44uKWjX8qGXgfxFtvtenGVpl4hMbHBql2sjLv6-TDk8dqW1A"
                    className="rounded-lg mb-2"
                  />
                  <img
                    src="https://lh3.googleusercontent.com/J-YyMvY1q2skuu_Edi3G4Il3Ovb4IRsVXMNstpJJYmKamxqh7VK6ykjCt2POiO9NG49xPj4tbQ=s0-h24-rw"
                    className=" w-28 mb-2"
                  />
                  Over 600 lawyers write to CJI Chandrachud raising alarm on
                  threats to judiciary's integrity
                  <span className=" flex text-[#444746] mt-2 text-xs">
                    1 hour ago
                  </span>
                </div>
                <div className=" w-[50%] ">
                  <div className="flex flex-col text-[#444746] text-sm  ">
                    <img
                      src="https://lh3.googleusercontent.com/xzPt0e97Ja5Gt8DehLhtbIKrlbEYv3BFqYGMvpTfcEPQebipShnBjy2NtGUYGqhdfdVHiJTCDA=h24-rw"
                      className="w-12 h-4 pb-2"
                    />
                    Lawyers Write To Chief Justice Of India, Claim Group Trying
                    To "Pressure" Judiciary
                    <span className=" text-[#444746] mt-1 text-sm p-1">
                      42 minutes ago
                    </span>
                  </div>
                  <div className=" flex flex-col text-[#444746] text-sm mt-3">
                    <img
                      src="https://image.cnbcfm.com/api/v1/image/106318412-1577983609514preview.png?v=1577983656&w=115"
                      className=" pb-2 w-7"
                    />
                    600 lawyers write to CJI, complain of ‘vested interest
                    group’ trying ‘to pressure judiciary’
                    <span className="mt-1">36 minutes ago</span>
                  </div>
                  <div className="flex flex-col text-[#444746] text-sm mt-4 ">
                    <img
                      src="https://indianexpress.com/wp-content/themes/indianexpress/images/indian-express-logo-n.svg"
                      className="w-24 pb-2"
                    />
                    'Vested interests' trying to influence judiciary: 600
                    lawyers to Chief Justice
                    <span className=" text-[#444746] text-sm p-1">
                      2 hours ago
                    </span>
                  </div>

                  <div className="relative">
                    <div className=" bg-gray-100 flex text-sm gap-2 justify-end absolute text-gray-600  font-normal pr-2 p-1 rounded-full right-1 ">
                      <div className="w-5 h-5 ml-2  ">
                        <img src="https://lh3.googleusercontent.com/JDFOyo903E9WGstK0YhI2ZFOKR3h4qDxBngX5M8XJVBZFKzOBoxLmk3OVlgNw9SOE-HfkNgb=w40-rw" />
                      </div>
                      Full coverage
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* second element */}
            <div className="mt-2  pt-4 border-t-[1px]">
              <div className=" flex flex-row  items-start gap-4">
                <div className=" w-[50%] text-xl  ">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQljNaJwBqU9w1W6SMXIUMY_LCBbhzXApswhK88Bakrc5KmhEAB63gNHGn-7aibYWFD-yzmD0AmziQyJp7SWrUGzsc7kLgkIaBTXMw3ZmYm3K-H9g"
                    className="rounded-lg mb-2"
                  />
                  <img
                    src="https://lh3.googleusercontent.com/J-YyMvY1q2skuu_Edi3G4Il3Ovb4IRsVXMNstpJJYmKamxqh7VK6ykjCt2POiO9NG49xPj4tbQ=s0-h24-rw"
                    className=" w-28 mb-2"
                  />
                  Baltimore bridge collapse: How Indian crew's mayday warning
                  saved US from major disaster
                  <span className=" flex text-[#444746] mt-2 text-xs">
                    8 hours ago
                  </span>
                </div>
                <div className=" w-[50%] ">
                  <div className="flex flex-col text-[#444746] text-sm  ">
                    <img
                      src="https://encrypted-tbn2.gstatic.com/faviconV2?url=https://timesofindia.indiatimes.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL"
                      className="w-5 pb-2"
                    />
                    'Had about 90 seconds': How officials managed to save lives
                    before Baltimore bridge fell
                    <span className=" text-[#444746] mt-1 text-sm p-1">
                      5 hours ago
                    </span>
                  </div>
                  <div className=" flex flex-col text-[#444746] text-sm mt-3">
                    <img
                      src="https://image.cnbcfm.com/api/v1/image/106318412-1577983609514preview.png?v=1577983656&w=115"
                      className=" pb-2 w-7"
                    />
                    Baltimore port bridge collapse: Global ocean carriers
                    declare 'force majeure,' leaving U.S. companieson hook for
                    urge...
                    <span className="mt-1">1 hour ago</span>
                  </div>
                  <div className="flex flex-col text-[#444746] text-sm mt-3 ">
                    <img
                      src="https://www.hindustantimes.com/static-content/1y/ht/ht-logo2.webp"
                      className="w-36 pb-2"
                    />
                    Baltimore bridge collapse: Crew of cargo ship that lost
                    power and collided with bridge in Baltimore, U.S. are all
                    Indian, says shipping company
                    <span className=" text-[#444746] text-sm p-1">
                      5 hours ago
                    </span>
                  </div>

                  <div className="relative">
                    <div className=" bg-gray-100 flex text-sm gap-2 justify-end absolute text-gray-600  font-normal pr-2 p-1 rounded-full right-1 ">
                      <div className="w-5 h-5 ml-2  ">
                        <img src="https://lh3.googleusercontent.com/JDFOyo903E9WGstK0YhI2ZFOKR3h4qDxBngX5M8XJVBZFKzOBoxLmk3OVlgNw9SOE-HfkNgb=w40-rw" />
                      </div>
                      Full coverage
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 4th element */}
            <div className="mt-8 pt-4  border-t-[1px]">
              {/* livelaw logo */}
              <img
                src="https://www.livelaw.in/images/logo.png?v=8"
                className="mb-2 w-8 h-5"
              />
              <div className=" text-xl self-center flex ">
                'Will Take Action If Required': Delhi High Court On Plea Against
                Protests In Court Premises On Arvind Kejriwal's Arrest
                <img
                  className="w-28 rounded-xl h-24"
                  src="https://www.livelaw.in/h-upload/2022/03/17/750x450_412417-aap-arvind-kejriwal.jpg"
                />
              </div>
              <div className="mt-2 flex justify-between">
                <div className="text-[#444746] text-xs">4 hours ago</div>
                <div className="w-5 h-5">
                  <img src="https://lh3.googleusercontent.com/JDFOyo903E9WGstK0YhI2ZFOKR3h4qDxBngX5M8XJVBZFKzOBoxLmk3OVlgNw9SOE-HfkNgb=w40-rw" />
                </div>
              </div>
            </div>
            {/* 5th element */}
            <div className="mt-4 pt-4 border-t-[1px]">
              {/* mintlogo */}
              <img
                src="https://lh3.googleusercontent.com/L1imb9PspOXypQXjt3yPQrnXFfVcixw7dkjrigkUH53Cpc4AsiTyoxBk5FT4icBvXqYVEPNy=h12-rw"
                className="mb-2"
              />
              <div className=" text-xl self-center flex font-sans ">
                Lok Sabha 2024: EC issues notice to BJP MP Dilip Ghosh over
                'identify her father' jibe against Mamata Banerjee
                <img
                  className="w-24 rounded-xl h-20"
                  src="https://www.livemint.com/lm-img/img/2024/03/27/600x338/PTI02-28-2024-000267A-0_1711540954618_1711540999672.jpg"
                />
              </div>
              <div className="mt-2 flex justify-between">
                <div className="text-[#444746] text-xs">5 hours ago</div>
                <div className="w-5 h-5">
                  <img src="https://lh3.googleusercontent.com/JDFOyo903E9WGstK0YhI2ZFOKR3h4qDxBngX5M8XJVBZFKzOBoxLmk3OVlgNw9SOE-HfkNgb=w40-rw" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="  w-[33%]  flex flex-col gap-4">
          <div className="bg-white rounded-xl p-4 ">
            {/* topmost heading */}
            <div className=" text-[#00758C]  bg-white text-xl font-sans font-normal flex">
              Local news
              <MdKeyboardArrowRight className="self-center size-7" />
            </div>

            {/* 1st element */}
            <div className="mt-4 pt-4 border-t-[1px]">
              {/* mintlogo */}
              <img
                src="https://lh3.googleusercontent.com/L1imb9PspOXypQXjt3yPQrnXFfVcixw7dkjrigkUH53Cpc4AsiTyoxBk5FT4icBvXqYVEPNy=h12-rw"
                className="mb-2"
              />
              <div className=" text-md  flex ">
                'India a key country for us': Bill Gates hails New Delhi's
                central role in global progress
                <img
                  className=" w-20 h-20 pt-0 rounded-xl "
                  src="https://www.bing.com/th?id=OIP.DALvGGLUr5QBOuVSbfY6rgHaE8&w=156&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
                />
              </div>
              <div className="mt-0 flex justify-between">
                <div className="text-[#444746] text-xs">5 hours ago</div>
                <div className="w-5 h-5">
                  <img src="https://lh3.googleusercontent.com/JDFOyo903E9WGstK0YhI2ZFOKR3h4qDxBngX5M8XJVBZFKzOBoxLmk3OVlgNw9SOE-HfkNgb=w40-rw" />
                </div>
              </div>
            </div>

            {/* 2nd element */}
            <div className="mt-2 pt-2 border-t-[1px]">
              {/* logo */}
              <img
                src="https://lh3.googleusercontent.com/xzPt0e97Ja5Gt8DehLhtbIKrlbEYv3BFqYGMvpTfcEPQebipShnBjy2NtGUYGqhdfdVHiJTCDA=h24-rw"
                className="mb-2 w-16 "
              />
              <div className=" text-md  flex ">
                Subsidies, schemes in Delhi to continue without disruption, says
                Delhi Planning Department
                <img
                  className=" w-16 h-16 mt-0 pt-0 rounded-xl "
                  src="https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20240326095236.jpg"
                />
              </div>
              <div className="mt-1 flex justify-between">
                <div className="text-[#444746] text-xs">Yesterday</div>
                <div className="w-5 h-5">
                  <img src="https://lh3.googleusercontent.com/JDFOyo903E9WGstK0YhI2ZFOKR3h4qDxBngX5M8XJVBZFKzOBoxLmk3OVlgNw9SOE-HfkNgb=w40-rw" />
                </div>
              </div>
            </div>
          </div>
          {/* upper finish */}
          {/* lower starts  */}
          <div className=" ">
            <div className="bg-white rounded-xl p-4 ">
              {/* topmost heading */}
              <div className=" text-[#592FD0] justify-between bg-white text-xl font-sans font-normal flex">
                Picks for you
                <GrCircleQuestion className="self-center  text-gray-500 size-6" />
              </div>

              {/* 1st element */}
              <div className="mt-2 pt-2 border-t-[1px]">
                {/* logo */}
                <img
                  src="https://images.news18.com/static_news18/pix/ibnhome/news18/News18.svg"
                  className="mb-2 w-12"
                />
                <div className=" text-md  flex ">
                  Solar module duty sop under ALMM may not continue after March
                  31
                  <img
                    className=" w-16  pt-0 rounded-xl "
                    src="https://img.etimg.com/thumb/msid-108799966,width-300,height-225,imgsize-30640,resizemode-75/solar-cell-and-module-manufacturer-premier-energies.jpg"
                  />
                </div>
                <div className="mt-2 flex justify-between">
                  <div className="text-[#444746] text-xs">15 hours ago</div>
                  <div className="w-5 h-5">
                    <img src="https://lh3.googleusercontent.com/JDFOyo903E9WGstK0YhI2ZFOKR3h4qDxBngX5M8XJVBZFKzOBoxLmk3OVlgNw9SOE-HfkNgb=w40-rw" />
                  </div>
                </div>
              </div>

              {/* 2nd element */}
              <div className="mt-2 pt-2 border-t-[1px]">
                {/* logo */}
                <img
                  src="https://www.hindustantimes.com/static-content/1y/ht/ht-logo2.webp"
                  className="mb-2 w-36 "
                />
                <div className=" text-md  flex ">
                  Paytm FASTag: Here's how you can recharge FASTag on Paytm now
                  in just 5 steps
                  <img
                    className=" w-16 h-16 mt-0 pt-0 rounded-xl "
                    src="https://www.hindustantimes.com/ht-img/img/2024/03/27/550x309/20231123-DGG-PK-MN-Gurugram-Faridabad-road-toll-pl_1708326518261_1711508233940.jpg"
                  />
                </div>
                <div className="mt-2 flex justify-between">
                  <div className="text-[#444746] text-xs">Yesterday</div>
                  <div className="w-5 h-5">
                    <img src="https://lh3.googleusercontent.com/JDFOyo903E9WGstK0YhI2ZFOKR3h4qDxBngX5M8XJVBZFKzOBoxLmk3OVlgNw9SOE-HfkNgb=w40-rw" />
                  </div>
                </div>
              </div>
              <div className="mt-2 pt-2 border-t-[1px]">
                {/* logo */}
                <img
                  src="https://indianexpress.com/wp-content/themes/indianexpress/images/indian-express-logo-n.svg"
                  className="mb-2 w-20"
                />
                <div className=" text-md  flex ">
                  What can microplastics do to the human body? | In Focus
                  podcast
                  <img
                    className=" w-16  pt-0 rounded-xl "
                    src="https://th.bing.com/th?id=OSK.HEROJTojTFDq1qEh6Kir7enZ31wMuxGkqIEyVmMsothno14&w=296&h=176&c=1&rs=2&o=6&dpr=1.5&pid=SANGAM"
                  />
                </div>
                <div className="mt-2 flex justify-between">
                  <div className="text-[#444746] text-xs">Yesterday</div>
                  <div className="w-5 h-5">
                    <img src="https://lh3.googleusercontent.com/JDFOyo903E9WGstK0YhI2ZFOKR3h4qDxBngX5M8XJVBZFKzOBoxLmk3OVlgNw9SOE-HfkNgb=w40-rw" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Briefing;
