/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mp4$/,
      use: {
        loader: "file-loader",
        // options: {
        //   limit: 12000,
        //   name: 'videos/[name].[ext]'
        // }
      }
    })
    return config;
  }
};

export default nextConfig;
