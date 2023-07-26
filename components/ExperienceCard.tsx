import React from 'react'
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]
    snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='data:image/png;base64,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' alt=""/>
      
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Student Assistant</h4>
        <p className='font-bold text-2xl mt-1'>Wayne State University</p>
        <div className='flex space-x-2 my-2'>

          <img className="h-10 w-10 rounded-full" src="https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" alt=""/>
          <img className="h-10 w-10 rounded-full" src="https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" alt=""/>
          <img className="h-10 w-10 rounded-full" src="https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" alt=""/>
          
        </div>
        <p className='uppercase py-5 text-gray-300'>
          Started work... - Ended...
        </p>
        
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary pointsSummary pointsSummary points
            Summary pointsSummary pointsSummary points
          </li>
          <li>Summary pointsSummary pointsSummary points
            Summary pointsSummary pointsSummary points
          </li>
          <li>Summary pointsSummary pointsSummary points
            Summary pointsSummary pointsSummary points
          </li>
          <li>Summary pointsSummary pointsSummary points
            Summary pointsSummary pointsSummary points
          </li>
          <li>Summary pointsSummary pointsSummary points
            Summary pointsSummary pointsSummary points
          </li>
        </ul>

      </div>
    </article>
  );
}