import React, { useState } from 'react'
import Graph from './Graph'
import { dummyData } from '../dummyData/Data'
import { useStoreContext } from '../contextApi/ContextAPI'
import { useFetchTotalClicks } from '../hooks/useQuery'
import { p } from 'motion/react-client'
const DashboardLayout = () => {
  const { token } = useStoreContext();

  const [shortenPopUp,setShortenPopUp]=useState(false);
  // const totalClicksQuery = useFetchTotalClicks(token, onError);

  function onError() {
    console.log("ERROR");
  }

  const { isLoading: loader, data: totalClicks} = useFetchTotalClicks(token, onError)
  // console.log(totalClicksQuery);


  return (

    <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]">
      { loader ? (
        <p>Loading.......</p>
      ) : (
        <div className="lg:w-[90%] w-full mx-auto py-16">
          <div className="h-96 relative">
            {Array.isArray(totalClicks) && totalClicks.length === 0 && (
              <div className="absolute flex flex-col  justify-center sm:items-center items-end  w-full left-0 top-0 bottom-0 right-0 m-auto">
                     <h1 className=" text-slate-800 font-serif sm:text-2xl text-[18px] font-bold mb-1">
                       No Data For This Time Period
                     </h1>
                     <h3 className="sm:w-96 w-[90%] sm:ml-0 pl-6 text-center sm:text-lg text-sm text-slate-600 ">
                       Share your short link to view where your engagements are
                       coming from
                     </h3>
                   </div>
            )}
            <Graph graphData={ totalClicks } />
          </div>

          <div className="py-5 sm:text-end text-center">
            <button className='bg-custom-gradient-2 py-2 px-4 rounded-md'
            onClick={()=>setShortenPopUp(true)}>
              Create a new short url
            </button>
          </div>

        </div>
      ) }
    </div>
  );
};
export default DashboardLayout