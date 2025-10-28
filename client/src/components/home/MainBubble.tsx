import FeatureImage from '../../assets/home/metadata-image.png';

export default function MainBubble() {
    return(
        <div className ='w-[99%] bg-white/90 h-auto pb-2 flex rounded-3xl items-center'>
            {/* Heading section */}
            <div className ='w-1/2 h-full pl-20 pt-10'>
                <p className = 'text-6xl font-bold leading-20'>
                    What's hiding <br /> 
                    behind the <br />
                    <span className='text-pink-300'>photo?</span>
                </p>

                <p className ='text-lg mt-6 mb-10'>
                    Upload a photo and instantly uncover its hidden details
                </p>

                {/* Button Group */}
                <div className ='flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10'>
                    <button
                        className='w-auto sm:mb-0 mb-1 py-3 px-6 sm:py-5 sm:px-10 flex items-center text-white/90 text-base sm:text-lg bg-zinc-900 rounded-full transition-colors duration-400 ease-in-out shadow-md focus:shadow-2xl hover:bg-zinc-800 hover:shadow-2xl active:scale-95 hover:text-pink-300'>
                        <p className='whitespace-nowrap'>Get started</p>
                    </button>

                    <button
                        className='w-auto py-3 px-6 sm:py-5 sm:px-10 flex items-center border rounded-full text-base sm:text-lg hover:bg-pink-100/50 hover:shadow-lg transition-colors duration-400 ease-in-out'
                    >
                        <p className='whitespace-nowrap'>Find out more</p>
                    </button>
                </div>

            </div>

            {/* Feature Image For Desktop Only */}
            <div className ='w-1/2 h-full pr-2 pt-2 md:block hidden'>
                <img src={FeatureImage} alt="Feature" className ='w-full h-auto rounded-3xl shadow-md' />
            </div>

        </div>
    )
}