/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    swc: {
      jsc: {
        parser: {
          syntax: "ecmascript",
          jsx: true,
          dynamicImport: true
        }
      }
    },
    styledComponents: true, // Next에게 styled-component도 처리해달라고 옵션을 설정해줌
  },
};

module.exports = nextConfig
