# Deployment Guide: Human Anatomy Atlas

This guide explains how to deploy the **Human Anatomy Atlas** to a public URL using **Vercel**, including the **Syntara AI** backend proxy.

## 1. Prerequisites

- A [GitHub](https://github.com/) account.
- A [Vercel](https://vercel.com/) account (Free tier is sufficient).
- Your **DeepSeek API Key**.

## 2. Prepare the Repository

1.  **Create a GitHub Repository**:
    - Go to GitHub and create a new repository (e.g., `anatomy-atlas`).
    - Push your project code to this repository.

    ```bash
    git init
    git add .
    git commit -m "Initial deploy"
    git branch -M main
    git remote add origin <your-repo-url>
    git push -u origin main
    ```

## 3. Deploy to Vercel

1.  **Login to Vercel**: Go to [vercel.com](https://vercel.com) and log in.
2.  **Add New Project**:
    - Click **"Add New..."** -> **"Project"**.
    - Select your `anatomy-atlas` repository from the list.
3.  **Configure Project**:
    - **Framework Preset**: Select "Other" (since this is Vanilla JS + Python).
    - **Root Directory**: Leave as `./` (default).
    - **Build Command**: Leave empty.
    - **Output Directory**: Leave empty.
4.  **Environment Variables** (CRITICAL):
    - Expand the "Environment Variables" section.
    - Add the following variable:
        - **Name**: `DEEPSEEK_API_KEY`
        - **Value**: `your_actual_api_key_here` (Copy from `js/secrets.js` before deleting it from there!)
    - Click **Add**.
5.  **Deploy**:
    - Click **"Deploy"**.

## 4. Post-Deployment Verification

Vercel will build your project. Once done, you will get a public URL (e.g., `https://anatomy-atlas.vercel.app`).

1.  **Visit the URL**.
2.  **Test Syntara AI**:
    - Go to the "Syntara AI" tab.
    - Type a message (e.g., "Hello").
    - **Verify**: It should respond *without* needing `js/secrets.js` in the production build, because it uses the `api/chat.py` proxy we created.

## 5. Security Note

- **Delete `js/secrets.js` content** or replace the key with `""` before pushing the final version to GitHub publicly.
- The `vercel.json` and `api/chat.py` files handle the routing and secure proxying, so your API key stays safe in Vercel's environment variables.

## 6. Project Structure Overview

- `index.html`: Main entry point.
- `api/chat.py`: Serverless function acting as the AI proxy.
- `vercel.json`: Tells Vercel how to route `/api/chat` to the Python script.
- `js/components/SyntaraAI.js`: Updated to use the relative `/api/chat` endpoint automatically.
