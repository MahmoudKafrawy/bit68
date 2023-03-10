/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: { domains: ["gazef.s3.amazonaws.com"], formats: ["image/avif", "image/webp"] },
};
