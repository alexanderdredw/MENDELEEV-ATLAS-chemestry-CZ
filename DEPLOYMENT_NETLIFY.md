# Netlify Deployment Guide

This guide explains how to deploy the **Human Anatomy Atlas** to Netlify.

## 1. Prerequisites

- A [GitHub](https://github.com/) repository with your project code.
- A [Netlify](https://www.netlify.com/) account.
- Your **DeepSeek API Key**.

## 2. Configuration Files (Already Created)

The project is already configured for Netlify:
- `netlify.toml`: Tells Netlify how to build and route the site.
- `netlify/functions/chat.py`: A serverless function that securely proxies requests to the DeepSeek API.

## 3. Deployment Steps

### Option A: Connect via Git (Recommended)

1.  **Push to GitHub**:
    -   Initialize a git repo if you haven't:
        ```bash
        git init
        git add .
        git commit -m "Netlify config"
        ```
    -   Push to your GitHub repository.

2.  **New Site from Git**:
    -   Log in to [Netlify](https://app.netlify.com).
    -   Click **"Add new site"** -> **"Import an existing project"**.
    -   Select **GitHub** and choose your repository.

3.  **Build Settings**:
    -   Netlify should detect the settings from `netlify.toml` automatically.
    -   **Build command**: (Leave empty)
    -   **Publish directory**: `.` (Current directory)
    -   **Functions directory**: `netlify/functions`

4.  **Environment Variables** (Crucial for AI):
    -   In Netlify, go to **Site Settings** -> **Environment variables**.
    -   Click **"Add a variable"**.
    -   **Key**: `DEEPSEEK_API_KEY`
    -   **Value**: (Copy your key from `js/secrets.js`. Do NOT commit `secrets.js` to public GitHub).
    -   Click **Create variable**.

5.  **Deploy**:
    -   Trigger a deploy if it didn't start automatically.

### Option B: Netlify CLI (Manual)

If you have `netlify-cli` installed:
1.  Run `netlify login`.
2.  Run `netlify deploy --prod`.
    -   Publish directory: `.`
3.  Set the environment variable in the dashboard as shown above.

## 4. Verification

1.  Open your Netlify site URL.
2.  Go to the **Syntara AI** tab.
3.  Ask a question (e.g., "What is the heart?").
4.  If it responds, the backend proxy matches the frontend and is working!

## 5. Troubleshooting

-   **404 on /api/chat**: Ensure `netlify.toml` redirects are working. The file should contain `[[redirects]] from="/api/chat" to="/.netlify/functions/chat"`.
-   **500 Error**: Check Netlify Function logs in the dashboard. Usually means missing `DEEPSEEK_API_KEY`.
