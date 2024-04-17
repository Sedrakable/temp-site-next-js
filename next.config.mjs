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
    deviceSizes: [640, 1200, 1680],
  },
  // output: "export",  // <=== enables static exports
  // distDir: "dist",  // <=== change the build directory
};
export default nextConfig;
