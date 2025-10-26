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
        <div className='w-1/2 h-auto bg-linear-to-br from-purple-200 to-purple-300 rounded-3xl pt-5 pb-5 pl-6 pr-5 shadow-md ring-1 ring-purple-50'>
            <div className='w-full flex flex-row'>
                <div>
                    <p className='text-2xl font-bold text-slate-900 tracking-tight'>{data[currentIndex]?.title}</p>

                    <div className="mt-2">
                        <div className="w-10 h-1 bg-purple-600 rounded-full"></div>
                    </div>
                </div>

                {/* Arrow buttons */}
                <div className="mr-5 flex ml-auto items-center justify-center">
                    
                    <button 
                        onClick={previousInfo}
                        className="p-2 rounded-full hover:bg-purple-100 text-slate-900 transition-colors ring-0">
                        <img src={LeftArrow} alt="Left arrow image" className="w-4 h-4"/>
                    </button>

                    <button
                        onClick={nextInfo}
                        className="p-2 rounded-full hover:bg-purple-100 text-slate-900 transition-colors ring-0 ml-2">
                        <img src={RightArrow} alt="Right arrow image" className="w-4 h-4"/>
                    </button>

                </div>
            </div>
        
            <div className='flex flex-col mt-3'>
                <p className='text-lg text-slate-800 leading-relaxed'>{data[currentIndex]?.description}</p>
                <p className='mt-4'> 
                    <span className='font-semibold text-lg text-purple-700'>Why it matters?</span> <br />
                    <span className='text-slate-800'>{data[currentIndex]?.why_it_matters}</span>
                </p>
            </div>
        </div>
    )
}