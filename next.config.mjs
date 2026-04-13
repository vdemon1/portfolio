const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = ''
if (isGithubActions) {
  // Substitua 'portfolio' se mudar o nome do repositório no futuro
  repo = '/portfolio'
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: repo,
  assetPrefix: repo,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
