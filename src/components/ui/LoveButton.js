import React from "react";

const LoveButton = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="491"
      height="268"
      fill="none"
      viewBox="0 0 491 268"
      className={`w-full h-auto max-w-[200px] md:max-w-[250px] ${className}`}
    >
      <rect
        width="489.25"
        height="267.6"
        x=".95"
        fill="url(#a)"
        rx="61.325"
      />
      <rect
        width="477.1"
        height="255.45"
        x="7.025"
        y="6.075"
        fill="url(#b)"
        rx="55.25"
      />
      <rect
        width="477.1"
        height="255.45"
        x="7.025"
        y="6.075"
        stroke="#000"
        rx="55.25"
      />
      <g filter="url(#c)">
        <rect
          width="455.8"
          height="234.15"
          x="17.675"
          y="16.725"
          fill="url(#d)"
          rx="44.6"
        />
        <g filter="url(#e)">
          <path
            fill="url(#f)"
            d="M94.387 162.8V98.04h2.676c-.178 20.874-.268 41.211-.446 62.084h58.604v2.676H94.387Zm108.802.714c-26.135 0-41.745-12.221-41.745-32.915 0-21.319 15.521-33.272 41.745-33.272 26.136 0 41.657 12.131 41.657 33.272 0 20.694-15.521 32.915-41.657 32.915Zm0-2.498c23.817 0 38.802-10.793 38.802-30.417 0-19.178-14.985-30.863-38.802-30.863-24.173 0-38.891 11.685-38.891 30.863 0 19.624 14.718 30.417 38.891 30.417Zm116.798-62.975h3.033a42934.413 42934.413 0 0 1-34.164 64.759h-4.638c-11.329-21.586-22.657-43.084-33.985-64.76h3.122c11.06 21.23 22.121 42.371 33.093 63.511 11.15-21.229 22.3-42.281 33.539-63.51Zm44.691 65.473c-10.972 0-24.887-2.498-30.953-7.226v-3.3c4.46 4.46 19 8.385 30.953 8.385 19.98 0 31.398-5.531 31.398-15.432 0-11.596-15.878-14.629-35.769-14.629h-15.61v-2.586h15.521c24.708 0 31.398-6.869 31.398-14.897 0-11.685-13.648-14.004-27.474-14.004-11.239 0-21.408 1.605-30.417 6.422v-3.479c9.277-3.478 21.141-5.44 30.417-5.44 18.465 0 30.15 5.262 30.15 16.501 0 10.347-12.577 14.986-22.746 15.967v.178c16.502.714 27.295 6.244 27.295 15.967 0 13.469-17.751 17.573-34.163 17.573Z"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="a"
          x1="245.575"
          x2="245.575"
          y1="0"
          y2="267.6"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#891212" />
          <stop offset="1" stopColor="#AA1F1F" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="245.575"
          x2="245.575"
          y1="5.575"
          y2="262.025"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DC7979" />
          <stop offset=".5" stopColor="#570E0E" />
          <stop offset="1" stopColor="#DC7979" />
        </linearGradient>
        <linearGradient
          id="d"
          x1="245.575"
          x2="245.575"
          y1="16.725"
          y2="250.875"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E4E4E4" />
          <stop offset="1" stopColor="#4E0000" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="f"
          x1="245.575"
          x2="245.575"
          y1="105.883"
          y2="181.258"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F5F5F5" />
          <stop offset="1" stopColor="#F0CFCF" />
        </linearGradient>
        <filter
          id="c"
          width="455.8"
          height="234.15"
          x="17.675"
          y="16.725"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="-5.575" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.24 0" />
          <feBlend in2="shape" result="effect1_innerShadow_5_3039" />
        </filter>
        <filter
          id="e"
          width="315.604"
          height="77.336"
          x="86.025"
          y="94.54"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="-2.788" dy="2.788" />
          <feGaussianBlur stdDeviation="2.788" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_5_3039"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_5_3039"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default LoveButton;