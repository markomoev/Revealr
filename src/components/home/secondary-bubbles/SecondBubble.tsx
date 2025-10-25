import LeftArrow from '../../../assets/home/arrow-left.svg';
import RightArrow from '../../../assets/home/arrow-right.svg';

import BubbleData from './SecondBubbleData.json';

import { useState } from 'react';

export default function SecondBubble() {
    const data = Array.isArray(BubbleData) ? (BubbleData as any[]) : [BubbleData as any];

    const [currentIndex, setCurrentIndex] = useState(0);

    const previousInfo = () => {
        setCurrentIndex(i => (i - 1 + data.length) % data.length);
    }

    const nextInfo = ()  => {
        setCurrentIndex(i => (i + 1) % data.length);
    }

    return(
        <div className = 'w-1/2 h-auto bg-purple-300 rounded-3xl pt-4 pb-4 pl-5'>
            <div className = 'w-full flex flex-row'>
                <div>
                    <p className ='text-2xl font-bold'>{data[currentIndex]?.title}</p>
                </div>

                {/* Arrow buttons */}
                <div className="mr-5 flex ml-auto items-center justify-center">
                    
                    <button 
                        onClick = {previousInfo}
                        className="p-2 rounded-full hover:bg-gray-200 text-black">
                        <img src={LeftArrow} alt="Left arrow image" />
                    </button>

                    <button
                        onClick = {nextInfo}
                        className="p-2 rounded-full hover:bg-gray-200 text-black">
                        <img src={RightArrow} alt="Right arrow image" />
                    </button>

                </div>
            </div>
           
            <div className ='flex flex-col'>
                <p>{data[currentIndex]?.description}</p>
                <p className ='mt-4'> 
                    <span className = 'font-semibold text-lg'>Why it matters?</span> <br />
                    <span>{data[currentIndex]?.why_it_matters}</span>
                </p>
            </div>
        </div>
    )
}