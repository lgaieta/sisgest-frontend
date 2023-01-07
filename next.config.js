/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    modularizeImports: {
        '@mui/material': {
            transform: '@mui/material/{{member}}',
        },
    },
};

export default nextConfig;
