import Head from "next/head"
import localFont from "next/font/local"

export default function Leafy(){
    return (
        <section>
            <div className='fex flex-wrap content-center text-center my-40'>
                <h1 className='font-bold text-8xl '
                >
                    UX / UI
                </h1>
                <p className='font-extralight text-4xl'
                > 
                    A new and ever changing industry, Cannabis from a cultural and businessas
                    prespective has much room for innovation. Designing from
                    wholesale and consumer stand point, I interprate and anticipate
                    the needs of the industry as it adapts to the gobal digital market
                </p>
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





