import Head from "next/head"
import localFont from "next/font/local"
import Image from "next/image"

export default function Leafy(){
    return (
        <section className='my-40'>
            <div className='flex flex-col content-center justify-evenly text-center space-y-2'>
                <h1 className='font-bold text-8xl '
                >
                    UI - UX
                </h1>
                <h1 className='font-bold text-4xl '
                >
                    Product Design
                </h1>
                <h1 className='font-bold text-2xl '
                >
                    automation
                </h1>
                <p className='font-extralight xl:text-2xl md:text-4xl text-4xl m-5'
                > 
                    A new and ever changing industry, Cannabis from a cultural and business
                    prespective has much room for innovation. Designing from
                    wholesale and consumer stand point, I interprate and anticipate
                    the needs of the industry as it adapts to the gobal digital market
                </p>
                {/* <div className="flex justify-center">
                    <Image
                        src="/images/busy_bee_alpha.png"
                        width={2000}
                        height={2000}
                        className="max-w-[80%] md:max-w-[60%] h-auto"
                    />
                </div> */}
            </div>
            <div className='content-center m-5'>
            <Image
                    src="/images/buzzed_papers.png"
                    width={2000}
                    height={500}
                    className='shadow-sm rounded-xl'
                />
            </div>
            <section className="flex flex-wrap justify-start p-5 ">
                <div className="w-full sm:w-1/2 lg:w-1/2 ">
                <Image
                    src="/images/buzzd_baggy.png"
                    width={3000}
                    height={3000}
                    className="w-full h-auto shadow-sm rounded-xl"
                /> 
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/2 ">
                    <Image
                        src="/images/bussy_baggy.png"
                        width={5000}
                        height={5000}
                        className="w-full h-auto shadow-sm rounded-xl"
                    /> 
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/2 ">
                <Image
                    src="/images/bussy_tray_large.png"
                    width={5000}
                    height={5000}
                    className="w-full h-auto shadow-sm rounded-xl"
                /> 
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/2 ">
                    <Image
                        src="/images/buzzd_tray_large.png"
                        width={5000}
                        height={5000}
                        className="w-full h-auto shadow-sm rounded-xl"
                    /> 
                </div>
            </section>
            <div className="flex flex-col items-center justify-center text-center space-y-2">
                <p className="font-extralight text-sm m-5"> 
                    concept package designs for buzzd and busy bee
                </p>
            </div>

            <div>
                </div>
            <div className="flex flex-wrap justify-center relative p-5">
                <iframe
                    src="https://embed.figma.com/design/rn1ZgoMlzSsIbvMH9JemnY/ProductPageLeafyThings?node-id=0-1&embed-host=share"
                    width="1000"
                    height="450"
                    allowFullScreen
                    style={{ border: 'none' }}
                />
            </div>
            <div className="flex flex-wrap justify-center relative p-5">
                <iframe
                    src="https://embed.figma.com/design/vxbySv183edvLMm1qJ3x8G/EatMe?node-id=0-1&embed-host=share"
                    width="1000"
                    height="450"
                    allowFullScreen
                    style={{ border: 'none' }}
                />
            </div>
        </section>
    )
}





