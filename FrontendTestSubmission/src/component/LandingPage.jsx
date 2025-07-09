import React from 'react'
import Card from './Card'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useStoreContext } from '../contextApi/ContextAPI'

  let desc=
  "Shortly is a URL shortening service that allows users to create short, easy-to-share links. It provides features like link management, analytics, and custom URLs to enhance the sharing experience. Whether for personal use or business, Shortly simplifies the process of sharing links online."

const LandingPage = () => {
  const navigate=useNavigate();
  const {token}=useStoreContext();
   console.log("Token from LandingPage :", token); 
  const dashBoardNavigateHandler=()=>{

  };
  return (
  <div className="min-h-[calc(100vh-64px)]  lg:px-14 sm:px-8 px-4">
      <div className="lg:flex-row flex-col    lg:py-5   pt-16   lg:gap-10 gap-8 flex justify-between items-center">
        <div className=" flex-1">
        <motion.h1 
        initial={{ opacity: 0, y: -80 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        className='font-bold font-roboto text-slate-800 md:text-5xl text-3xl md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full'>
            Shortly Simplyfies URL For Efficient Access And Sharing.
        </motion.h1>
        <p className='text-slate-800 text-sm my-5 '>
            Shortly is a powerful and widely used tool in digital communication, marketing, and social media due to their convenience, tracking capabilities, and ability to present links more effectively. 
            They allow users to create shorter, more manageable links that redirect to longer URLs, making them easier to share and remember. 
            URL shorteners often come with features like link tracking, analytics, and customization options, enabling users to monitor the performance of their links and tailor them to their branding needs. 
            Whether for personal use or business purposes, URL shorteners play a crucial role in enhancing the sharing experience online.
        </p>
        <div className="flex items-center gap-3">
            <motion.button 
             initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              // onClick={dashBoardNavigateHandler}
            className='bg-custom-gradient w-40 text-white rounded-md py-2'>
                Manage Links
            </motion.button>
            <motion.button 
             initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            className='border-btnColor border w-40 text-btnColor rounded-md py-2'>
                Create Short Link 
            </motion.button>
        </div>
        </div>
       <div className="flex-1 flex justify-centre w-full">
        <motion.img 
         initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        className='sm:w-[480px] w-[420px] object-cover rounded-md ml-[0%] ' 
        src="/image/img2.png" alt="" />
       </div>
        </div>
         <div className='sm:pt-12 pt-7 flex justify-center items-center '>
          <motion.p 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-bold font-roboto text-slate-800 lg:w-[60%] md:w-[70%] sm:w-[80%] md:text-3xl text-center">
        Trusted and used by individuals and world top companies.
    </motion.p>
    
       </div>
       <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
          <Card
            title="Simple URL Shortening"
            desc="Experience the ease of creating short, memorable URLs in just a few clicks. Our intuitive interface and quick setup process ensure you can start shortening URLs without any hassle."
          />
          <Card
            title="Powerful Analytics"
            desc="Gain insights into your link performance with our comprehensive analytics dashboard. Track clicks, geographical data, and referral sources to optimize your marketing strategies."
          />
          <Card
            title="Enhanced Security"
            desc="Rest assured with our robust security measures. All shortened URLs are protected with advanced encryption, ensuring your data remains safe and secure."
          />
          <Card
            title="Fast and Reliable"
            desc="Enjoy lightning-fast redirects and high uptime with our reliable infrastructure. Your shortened URLs will always be available and responsive, ensuring a seamless experience for your users."
          />
        </div>
        </div>
  )
}

export default LandingPage