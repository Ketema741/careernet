import React from 'react';
import feelingProud from '../../assets/svg/undraw_feeling_proud_qne1.svg'


const HeaderCarousel = () => {
    return (
        <div className="overflow-hidden pt-32 md:py-12 xl:container m-auto px-6 md:px-12">
            <div aria-hidden="true" className="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-50 dark:opacity-20"></div>
            <div className="relative lg:flex lg:items-center lg:gap-12">
                <div className="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
                    <h1 className="text-gray-900 font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl dark:text-white">
                        Build in your way but with our experts
                        <span className="text-primary dark:text-primaryLight">Support.</span>
                    </h1>
                    <p className="mt-8 text-gray-600 dark:text-gray-300">
                        Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!
                    </p>
                    
                </div>
                <div className="overflow-hidden w-full lg:w-7/12 lg:-mr-16">
                    <img src={feelingProud} alt="feeling Proud" style={{width:'550px', height:"510px"}} />
                </div>
            </div>
        </div>
    )
};
export default HeaderCarousel;
