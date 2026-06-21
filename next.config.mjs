import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        use: ['raw-loader', 'glslify-loader'],
      });

      return config;
    },
    images: {
      unoptimized: true,
      domains: ['d6wod28es4wuu.cloudfront.net'],
    },
};

const withMDX = createMDX({ extension: /\.(md|mdx)$/ });
export default withMDX(nextConfig);