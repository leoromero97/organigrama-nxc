import type { NextConfig } from "next";
import { INFINITE_CACHE } from "next/dist/lib/constants";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
        port: "",
        pathname: "/e3dd1d15-e027-427f-86ac-806101de075b/**",
      },
    ],
  },
  experimental: {
    //reactCompiler: true,
    //dynamicIO: true,
    cacheLife: {
      months: {
        stale: 60 * 60 * 24 * 30,
        revalidate: 60 * 60 * 24 * 30,
        expire: INFINITE_CACHE,
      },
    },
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
