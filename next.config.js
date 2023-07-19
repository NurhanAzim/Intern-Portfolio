/** @type {import('next').NextConfig} */
const nextConfig = {webpack: (config) => {
      config.module.rules.push({
        test: /\.(pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '/', // Change the output path as needed
              publicPath: '/', // Change the public path as needed
            },
          },
        ],
      });
  
      return config;
    },}

module.exports = nextConfig;
