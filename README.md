# Next.js Zero-Time Redirect App

A simple, lightweight Next.js application that performs instant, invisible redirects using middleware. Perfect for URL shortening, domain forwarding, or any scenario requiring fast redirects.

## Features

- ⚡ **Zero-time redirects** - Redirects happen at the edge via middleware before any page loads
- 🔒 **Query parameter preservation** - Automatically preserves URL query parameters during redirect
- 🎯 **Configurable redirect status** - Support for both permanent (301) and temporary (302) redirects
- 🚀 **Railway-ready** - Pre-configured for one-click deployment to Railway
- 📦 **Minimal footprint** - Lightweight with no unnecessary dependencies

## Quick Start

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nextjs-redirect.git
cd nextjs-redirect
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env.local
```

4. Edit `.env.local` and set your redirect URL:
```env
REDIRECT_URL=https://your-target-domain.com
REDIRECT_STATUS=302
```

5. Run the development server:
```bash
npm run dev
```

Visit http://localhost:3000 and you'll be instantly redirected to your configured URL.

## Environment Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `REDIRECT_URL` | The URL to redirect all traffic to | - | ✅ |
| `REDIRECT_STATUS` | HTTP status code (301 or 302) | `302` | ❌ |

## Deployment to Railway

### One-Click Deploy

1. Push this repository to your GitHub account
2. Connect your GitHub account to Railway
3. Create a new project in Railway and select this repository
4. Add environment variables in Railway:
   - `REDIRECT_URL`: Your target URL
   - `REDIRECT_STATUS`: 301 or 302 (optional)
5. Railway will automatically build and deploy your app

### Manual Deployment

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Initialize new project
railway init

# Add environment variables
railway variables set REDIRECT_URL=https://your-target-domain.com
railway variables set REDIRECT_STATUS=302

# Deploy
railway up
```

## How It Works

The app uses Next.js middleware to intercept all incoming requests and perform redirects before any page rendering occurs. This ensures:

- Maximum performance with minimal latency
- No JavaScript execution on the client
- SEO-friendly redirects with proper status codes
- Preservation of query parameters and URL fragments

## Configuration Examples

### Simple Domain Redirect
```env
REDIRECT_URL=https://new-domain.com
```

### Permanent Redirect (SEO)
```env
REDIRECT_URL=https://new-domain.com
REDIRECT_STATUS=301
```

### Temporary Campaign Redirect
```env
REDIRECT_URL=https://campaign-site.com/special-offer
REDIRECT_STATUS=302
```

## Production Considerations

- **SSL/TLS**: Ensure your Railway deployment has HTTPS enabled
- **Domain Setup**: Configure your custom domain in Railway settings
- **Monitoring**: Use Railway's built-in metrics to monitor redirect performance
- **Caching**: Consider CDN caching for frequently accessed redirects

## License

MIT

## Support

For issues or questions, please open an issue on GitHub.