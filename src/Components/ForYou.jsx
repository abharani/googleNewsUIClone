import React from "react";
import { GrCircleQuestion } from "react-icons/gr";
import { MdKeyboardArrowRight } from "react-icons/md";

const ForYou = () => {
  return (
    <div className="   flex flex-col gap-7 py-4">
      <div className="  my-2 items-center h-[72px]">
        
          <div className=" flex flex-row font-sans gap-1 self-center font-normal text-3xl">
            For you <MdKeyboardArrowRight className=" self-center mt-2 " />
          </div>
          <div className=" font-sans flex flex-row  gap-1 self-center text-gray-600 size-sm mt-2">
            Recommended based on your interests
            <GrCircleQuestion className=" self-center" />
          </div>
        </div>
        {/* top part finishes here */}

        <div className=" bg-white rounded-2xl flex  p-2">
          <div className=" border-r-[1px] border-gray-300 pr-4">
            <div className="mt-4 pt-4 border-b-[1px]">
              {/* mintlogo */}
              <img
                src="https://lh3.googleusercontent.com/L1imb9PspOXypQXjt3yPQrnXFfVcixw7dkjrigkUH53Cpc4AsiTyoxBk5FT4icBvXqYVEPNy=h12-rw"
                className="mb-2"
              />
              <div className=" text-md self-center flex font-sans ">
                ‘I have no moral right to contest’: Congress leader nominated
                for Lok Sabha polls in Rajasthan
                <img
                  className="w-16 rounded-xl ml-1 h-16"
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQUT4VLkY01hVOYdZ1XzYYz-TGHXljVI2MmYuNND0wdUBhZpWkw2_laJnvX7OwpXeZunKyOJRbqbgPkUrbVL50e8yOKQ342R9BU7l8rLCv5_KG77Q"
                />
              </div>
              <div className="my-2 flex justify-between">
                <div className="text-[#444746] text-xs">15 hours ago</div>
                <div className="w-5 h-5">
                  <img src="https://lh3.googleusercontent.com/JDFOyo903E9WGstK0YhI2ZFOKR3h4qDxBngX5M8XJVBZFKzOBoxLmk3OVlgNw9SOE-HfkNgb=w40-rw" />
                </div>
              </div>
            </div>

            {/* 2 left */}
            <div className="mt-4 pt-4 border-b-[1px]">
              <img
                src="https://indianexpress.com/wp-content/themes/indianexpress/images/indian-express-logo-n.svg"
                className="mb-2 w-28"
              />
              <div className=" text-md self-center flex font-sans ">
                Solar Rooftop Subsidy Yojana 2024: Registration, Apply Online @
                pmsuryaghar.gov.in
                <img
                  className="w-16 rounded-xl mx-1 h-16"
                  src="https://duac.org/wp-content/uploads/2024/03/solar-rooftop-subsidy-yojana-2024.webp"
                />
              </div>
              <div className="my-2 flex justify-between">
                <div className="text-[#444746] text-xs">Yesterday</div>
                <div className="w-5 h-5">
                  <img src="https://lh3.googleusercontent.com/JDFOyo903E9WGstK0YhI2ZFOKR3h4qDxBngX5M8XJVBZFKzOBoxLmk3OVlgNw9SOE-HfkNgb=w40-rw" />
                </div>
              </div>
            </div>

            {/* 3 left */}
            <div className="mt-4 pt-4 border-b-[1px]">
              <img
                src="https://images.news18.com/static_news18/pix/ibnhome/news18/News18.svg"
                className="mb-2 w-12"
              />
              <div className=" text-md self-center flex font-sans ">
                Delhi High Court Rejects PIL For Removal Of Arvind Kejriwal From
                Post Of Chief Minister
                <img
                  className="w-16 rounded-xl mx-1 h-16"
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRXYKD8ayA-oHoe2g8hQE7nHzqEuEJ9dz8tn3_21ZU7bbBKjrnS5nNvF2u-tKX9rbWKttNYJhM0ZEhvkQteCRq3kaRtdakCYkrR830x5JPNSCS1Bw"
                />
              </div>
              <div className="my-2 flex justify-between">
                <div className="text-[#444746] text-xs">5 hours ago</div>
                <div className="w-5 h-5">
                  <img src="https://lh3.googleusercontent.com/JDFOyo903E9WGstK0YhI2ZFOKR3h4qDxBngX5M8XJVBZFKzOBoxLmk3OVlgNw9SOE-HfkNgb=w40-rw" />
                </div>
              </div>
            </div>
          </div>

          {/* right */}

          <div className=" pl-4">
            <div className="mt-4 pt-4 border-b-[1px]">
              {/* mintlogo */}
              <img
                src="https://lh3.googleusercontent.com/d9mz-OKghOQPsgxRv1BQzQAI44ifiA_6aAk-gRwo4_32mZXM-TSd5vIY1rL1P2LUH9mFQPnUSRE=h24-rw"
                className="mb-2 w-32"
              />
              <div className=" text-md self-center flex font-sans ">
                Baltimore bridge collapse: 'We are safe,' Indian crew told man
                who met them before boarding ship
                <img
                  className="w-16 rounded-xl mx-1 h-16"
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTs_XqWuJUL7MHJHZ8wIysqbECDFf6GkXMWePsYoPpFkAL8-7vysuvFpwUdb1sSBMgACvEjdl0Tsn7BjH-mnIgZuXk_l8mPqNUXCbrZcjOVFwuNQA"
                />
              </div>
              <div className="my-2 flex justify-between">
                <div className="text-[#444746] text-xs">23 hours ago</div>
                <div className="w-5 h-5">
                  <img src="https://lh3.googleusercontent.com/JDFOyo903E9WGstK0YhI2ZFOKR3h4qDxBngX5M8XJVBZFKzOBoxLmk3OVlgNw9SOE-HfkNgb=w40-rw" />
                </div>
              </div>
            </div>

            {/* 2 right */}
            <div className="mt-4 pt-4 border-b-[1px]">
              <img
                src="https://lh3.googleusercontent.com/J-YyMvY1q2skuu_Edi3G4Il3Ovb4IRsVXMNstpJJYmKamxqh7VK6ykjCt2POiO9NG49xPj4tbQ=h24-rw"
                className="mb-2 w-28"
              />
              <div className=" text-md self-center flex font-sans ">
                Lok Sabha 2024: EC issues notice to BJP MP Dilip Ghosh over
                'identify her father' jibe against Mamata Banerjee
                <img
                  className="w-16 rounded-xl mx-1 h-16"
                  src="https://www.livemint.com/lm-img/img/2024/03/27/600x338/PTI02-28-2024-000267A-0_1711540954618_1711540999672.jpg"
                />
              </div>
              <div className="my-2 flex justify-between">
                <div className="text-[#444746] text-xs">5 hours ago</div>
                <div className="w-5 h-5">
                  <img src="https://lh3.googleusercontent.com/JDFOyo903E9WGstK0YhI2ZFOKR3h4qDxBngX5M8XJVBZFKzOBoxLmk3OVlgNw9SOE-HfkNgb=w40-rw" />
                </div>
              </div>
            </div>
            {/* 3 right */}
            <div className="mt-4 pt-4 ">
              <img
                src="https://lh3.googleusercontent.com/d9mz-OKghOQPsgxRv1BQzQAI44ifiA_6aAk-gRwo4_32mZXM-TSd5vIY1rL1P2LUH9mFQPnUSRE=h24-rw"
                className="mb-2 w-32"
              />
              <div className=" text-md self-center  justify-between flex font-sans ">
                Bengaluru-Mysuru highway toll fee to go up from April 1
                <img
                  className="w-16 rounded-xl mx-1 h-16"
                  src="https://static.toiimg.com/thumb/msid-108835486,imgsize-2149066,width-400,height-225,resizemode-72/108835486.jpg"
                />
              </div>
              <div className="my-2 flex justify-between">
                <div className="text-[#444746] text-xs">10 hours ago</div>
                <div className="w-5 h-5">
                  <img src="https://lh3.googleusercontent.com/JDFOyo903E9WGstK0YhI2ZFOKR3h4qDxBngX5M8XJVBZFKzOBoxLmk3OVlgNw9SOE-HfkNgb=w40-rw" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default ForYou;
