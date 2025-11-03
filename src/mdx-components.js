import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import localFont from 'next/font/local';

const MonumentExtended = localFont({
    src: "../public/typeface/MonumentExtended-Bold.otf",
    weight: "1 999",
    variable: "--Font-MonumentExtended",
})

const components = {
    img: (props) => (
    <Image  
    width={5000}
    height={5000}
    className='lg:w-full h-auto py-10 ' {...props} />
    ),
    h1: (props) => (
        <h1 className={`${MonumentExtended.className} xl:text-5xl md:text-4xl mb-0 px-10 py-10 font-extrabold text-center`} {...props} />
    ),
    h2: (props) => (
        <h2
            className="text-gray-800 dark:text-zinc-200 font-medium mt-8 mb-3"
            {...props}
        />
    ),
    h3: (props) => (
        <h3
            className="text-gray-800 dark:text-zinc-200 font-medium mt-8 mb-3"
            {...props}
        />
    ),
    h4: (props) => <h4 className="font-medium" {...props} />,
    p: (props) => (
        <p className="p-2 text-sm md:text-base leading-snug" {...props} />
    ),
    ol: (props) => (
        <ol
            className="text-gray-800 dark:text-zinc-300 list-decimal pl-5 space-y-2"
            {...props}
        />
    ),
    ul: (props) => (
        <ul
            className="text-gray-800 dark:text-zinc-300 list-disc pl-5 space-y-1"
            {...props}
        />
    ),
    li: (props) => <li className="pl-1" {...props} />,
    em: (props) => (
        <em className="font-medium" {...props} />
    ),
    strong: (props) => (
        <strong className="font-medium" {...props} />
    ),
    a: ({ href, children, ...props }) => {
        const className =
            'text-blue-500 hover:text-blue-700 dark:text-gray-400 hover:dark:text-gray-300 dark:underline dark:underline-offset-2 dark:decoration-gray-800';
        if (href?.startsWith('/')) {
            return (
                <Link href={href} className={className} {...props}>
                    {children}
                </Link>
            )
        }
        if (href?.startsWith('#')) {
            return (
                <a href={href} className={className} {...props}>
                    {children}
                </a>
            )
        }
        return (
        <a
            href = { href }
            target = "_blank"
            rel = "noopener noreferrer"
            className = { className }
            {...props}
            >
            { children }
        </a >
    )
},

}

export function useMDXComponents() {
    return components;
}