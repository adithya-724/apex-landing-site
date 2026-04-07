# Deployment Guide — Apex Karting

## 1. Configure GitHub Secrets

Go to your repo on GitHub: **Settings > Secrets and variables > Actions > New repository secret**

Add these 3 secrets:

| Secret Name    | Value                                          |
| -------------- | ---------------------------------------------- |
| `FTP_SERVER`   | Your Hostinger FTP hostname (e.g. `ftp.yourdomain.com`) |
| `FTP_USERNAME` | Your Hostinger FTP username                    |
| `FTP_PASSWORD` | Your Hostinger FTP password                    |

### Where to find FTP credentials

1. Log into https://hpanel.hostinger.com
2. Go to **Files > FTP Accounts**
3. Your FTP hostname, username, and password are listed there
4. If no FTP account exists, create one from the same page

## 2. Map Your Domain

Since you bought the domain through Hostinger, the DNS is already managed by Hostinger. You just need to connect it to your hosting plan:

1. Log into https://hpanel.hostinger.com
2. Go to **Domains** in the left sidebar
3. Find your domain and click **Manage**
4. Under **Website**, click **Change website** or **Connect to hosting**
5. Select the hosting plan where your site is deployed (the one with `public_html`)
6. Hostinger will automatically configure DNS records (A record pointing to your server IP)

If the domain is already connected to the hosting plan (likely if you bought hosting + domain together), it should already be pointing to `public_html/`. You can verify:

1. Go to **Hosting > Manage**
2. Under **Domains**, check that your domain is listed and pointing to `/public_html`

### SSL Certificate (HTTPS)

1. In hPanel, go to **Security > SSL**
2. Click **Install SSL** for your domain (Hostinger provides free Let's Encrypt SSL)
3. Wait a few minutes for it to activate
4. Enable **Force HTTPS** in the same section

## 3. How Deployment Works

Every push to `main` triggers the GitHub Actions workflow:

1. Installs dependencies (`npm ci`)
2. Builds the site (`npm run build`)
3. Deploys the `dist/` folder to `public_html/` via FTP

The `.htaccess` file in `public/` handles SPA client-side routing on Apache.

## 4. Troubleshooting

- **Site shows directory listing**: Make sure `index.html` exists in `public_html/`
- **Routes return 404**: Verify `.htaccess` was deployed to `public_html/`
- **Deploy action fails**: Check the GitHub Actions tab for logs; verify FTP secrets are correct
- **Domain not resolving**: DNS propagation can take up to 48 hours (usually under 30 minutes with Hostinger)
