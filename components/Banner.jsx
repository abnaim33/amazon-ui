import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {
    return (
        <div className='relative '>

            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-200
to-transparent bottom-0 z-50"/>

            {/* <Carousel
            // autoPlay
            //     infiniteLoop showStatus={false}
            //     showIndicators={false}
            //     showThumbs={false}
            //     interval={5000}
            >
                <div>
                    <Image src="https:links.papareact.com/gi1"
                        alt="" layout='fill' />
                    <p className="legend">Legend 2</p>
                </div>


                <div>
                    <Image loading='lazy' src="https:links.papareact.com/6ff"
                        alt="" layout='fill' />
                    <p className="legend">Legend 2</p>
                </div>

                <div>
                    <Image loading='lazy' src="https:links.papareact.com/7ma"
                        alt="" layout='fill' />
                    <p className="legend">Legend 2</p>
                </div>
            </Carousel> */}

            {/* <Image layout='fill' loading='lazy' src="https:links.papareact.com/7ma" /> */}




            <Carousel className=''
                showThumbs={false}
                autoPlay
                infiniteLoop showStatus={false}
                showIndicators={false}

                interval={5000}>
                <div className='relative '>
                    <Image width={1500} height={500} loading='lazy' src="https:links.papareact.com/7ma" alt="image1" />

                </div>
                <div className='relative '>
                    <Image width={1500} height={500} src="https:links.papareact.com/7ma" alt="image1" />

                </div>
                <div className='relative '>
                    <Image width={1500} height={500} src="https:links.papareact.com/7ma" alt="image1" />

                </div>
            </Carousel>


        </div>
    )
}

export default Banner