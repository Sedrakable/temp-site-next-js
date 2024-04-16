/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  // output: "export",  // <=== enables static exports
  reactStrictMode: true,
};
export default nextConfig;
