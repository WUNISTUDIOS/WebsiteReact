import React from "react";

// MachineButton component with unique IDs to prevent conflicts
const MachineButton = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="713"
      height="268"
      fill="none"
      viewBox="0 0 713 268"
      className={`w-full h-auto max-w-[300px] md:max-w-[400px] ${className}`}
    >
      <rect
        width="712.25"
        height="267.6"
        x="0.45"
        y="0"
        fill="url(#machine_a)"
        rx="61.325"
      />
      <rect
        width="700.1"
        height="255.45"
        x="6.525"
        y="6.075"
        fill="url(#machine_b)"
        rx="55.25"
      />
      <rect
        width="700.1"
        height="255.45"
        x="6.525"
        y="6.075"
        stroke="#000"
        strokeWidth="1"
        rx="55.25"
      />
      <g filter="url(#machine_c)">
        <rect
          width="678.8"
          height="234.15"
          x="17.175"
          y="16.725"
          fill="url(#machine_d)"
          rx="44.6"
        />
        <g filter="url(#machine_e)">
          <path
            fill="url(#machine_f)"
            d="m175.237 98.04.268 64.76h-2.676c0-19.089-.178-23.37-.268-63.867-12.131 21.229-23.816 42.548-35.947 63.867h-4.46c-11.953-21.319-23.46-42.638-35.413-63.867-.089 21.854-.178 40.497-.178 63.867h-2.676V98.04h5.352c11.864 21.32 23.281 42.46 35.145 63.779 12.131-21.319 23.638-42.459 35.769-63.778h5.084Zm84.809 64.76c-5.441-10.08-5.887-10.882-9.812-18.018h-48.971c-3.033 5.798-6.155 11.774-9.455 18.018h-2.944c11.418-21.319 22.925-43.44 34.342-64.76h4.995c11.596 21.32 23.192 43.441 34.788 64.76h-2.943Zm-57.534-20.338h46.473c-3.657-6.868-10.08-18.732-23.46-43.618-8.295 15.966-15.52 29.525-23.013 43.618Zm109.257 21.319c-27.741 0-43.44-12.399-43.44-33.628 0-20.784 16.413-33.093 43.44-33.093 9.991 0 21.051 1.516 34.877 7.492v2.944c-13.915-6.422-25.332-8.028-34.877-8.028-25.065 0-40.586 11.328-40.586 30.685 0 19.535 14.629 31.22 40.586 31.22 11.507 0 23.46-1.963 35.323-11.507v2.944c-9.276 7.314-19.98 10.971-35.323 10.971Zm112.966-65.74h2.676V162.8h-2.676v-30.328h-59.764V162.8h-2.676V98.04h2.676v32.113h59.764V98.041Zm22.339 64.759V98.04h2.676v64.76h-2.676Zm96.182 0h-4.282c-22.389-20.873-44.511-41.835-66.9-62.618V162.8h-2.676V98.04h4.103c22.3 21.052 44.779 41.925 67.079 62.887-.089-20.962-.089-41.835-.179-62.886h2.676c.09 21.675.09 43.173.179 64.759Zm17.847 0V98.04c20.427.09 40.676.09 61.102.18v2.497l-58.515-.268v29.079h51.915v2.498H563.69c0 8.563 0 18.821.089 28.098 19.535.089 38.892-.089 58.426 0v2.676h-61.102Z"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="machine_a"
          x1="356.575"
          x2="356.575"
          y1="0"
          y2="267.6"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#891212" />
          <stop offset="1" stopColor="#AA1F1F" />
        </linearGradient>
        <linearGradient
          id="machine_b"
          x1="356.575"
          x2="356.575"
          y1="5.575"
          y2="262.025"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DC7979" />
          <stop offset=".5" stopColor="#570E0E" />
          <stop offset="1" stopColor="#DC7979" />
        </linearGradient>
        <linearGradient
          id="machine_d"
          x1="356.575"
          x2="356.575"
          y1="16.725"
          y2="250.875"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E4E4E4" />
          <stop offset="1" stopColor="#4E0000" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="machine_f"
          x1="356.575"
          x2="356.575"
          y1="105.883"
          y2="181.258"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F5F5F5" />
          <stop offset="1" stopColor="#F0CFCF" />
        </linearGradient>
        <filter
          id="machine_c"
          width="678.8"
          height="234.15"
          x="17.175"
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
          <feBlend in2="shape" result="effect1_innerShadow_2006_22" />
        </filter>
        <filter
          id="machine_e"
          width="539.468"
          height="77.872"
          x="85.525"
          y="94.272"
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
            result="effect1_dropShadow_2006_22"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_2006_22"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

// LoveButton component with unique IDs to prevent conflicts
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
        x="0.95"
        y="0"
        fill="url(#love_a)"
        rx="61.325"
      />
      <rect
        width="477.1"
        height="255.45"
        x="7.025"
        y="6.075"
        fill="url(#love_b)"
        rx="55.25"
      />
      <rect
        width="477.1"
        height="255.45"
        x="7.025"
        y="6.075"
        stroke="#000"
        strokeWidth="1"
        rx="55.25"
      />
      <g filter="url(#love_c)">
        <rect
          width="455.8"
          height="234.15"
          x="17.675"
          y="16.725"
          fill="url(#love_d)"
          rx="44.6"
        />
        <g filter="url(#love_e)">
          <path
            fill="url(#love_f)"
            d="M94.387 162.8V98.04h2.676c-.178 20.874-.268 41.211-.446 62.084h58.604v2.676H94.387Zm108.802.714c-26.135 0-41.745-12.221-41.745-32.915 0-21.319 15.521-33.272 41.745-33.272 26.136 0 41.657 12.131 41.657 33.272 0 20.694-15.521 32.915-41.657 32.915Zm0-2.498c23.817 0 38.802-10.793 38.802-30.417 0-19.178-14.985-30.863-38.802-30.863-24.173 0-38.891 11.685-38.891 30.863 0 19.624 14.718 30.417 38.891 30.417Zm116.798-62.975h3.033a42934.413 42934.413 0 0 1-34.164 64.759h-4.638c-11.329-21.586-22.657-43.084-33.985-64.76h3.122c11.06 21.23 22.121 42.371 33.093 63.511 11.15-21.229 22.3-42.281 33.539-63.51Zm44.691 65.473c-10.972 0-24.887-2.498-30.953-7.226v-3.3c4.46 4.46 19 8.385 30.953 8.385 19.98 0 31.398-5.531 31.398-15.432 0-11.596-15.878-14.629-35.769-14.629h-15.61v-2.586h15.521c24.708 0 31.398-6.869 31.398-14.897 0-11.685-13.648-14.004-27.474-14.004-11.239 0-21.408 1.605-30.417 6.422v-3.479c9.277-3.478 21.141-5.44 30.417-5.44 18.465 0 30.15 5.262 30.15 16.501 0 10.347-12.577 14.986-22.746 15.967v.178c16.502.714 27.295 6.244 27.295 15.967 0 13.469-17.751 17.573-34.163 17.573Z"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="love_a"
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
          id="love_b"
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
          id="love_d"
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
          id="love_f"
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
          id="love_c"
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
          id="love_e"
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

export { LoveButton, MachineButton };