import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        use: ['raw-loader', 'glslify-loader'],
      });
  
      return config;
    },
    images: {
      domains: ['d6wod28es4wuu.cloudfront.net'],
    },
  };

export default withNextVideo(nextConfig);