// [...slug].js
import nc from 'next-connect'

const dev = process.env.NODE_ENV !== 'production'

const handler = nc()

if (dev) {
  const { createProxyMiddleware } = require('http-proxy-middleware')
  handler.use(createProxyMiddleware({
    target: 'https://staging.mainteny.com/api/',
    pathRewrite: { '^/api': '/' },
    // pathRewrite: {
    //   [`^/api`]: '',
    // },
    //pathRewrite: function (path, req) { console.log('path',path); return path },
    changeOrigin: true,
  }))
}

export default handler