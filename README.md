![Midjourney_Display1](https://github.com/Tech-in-Schools-Inititaitive/Midjourney-Display/assets/6137292/4d844720-847a-4bf7-8bd4-1c07b0ef70ce)

# Midjourney Display 🎨🖥️  

Midjourney Display is a cutting-edge, web-based gallery that offers a compelling array of AI-generated images 🤖🎭. Dive into the amazing world of AI creativity with our dynamic and lively platform!

*Please note: Full functionality of Midjourney Display requires an active subscription to [Midjourney](https://www.midjourney.com/).*

## 🎉 Introducing New Updates!

We're ecstatic to present a remarkable update to our application – the **Live Viewing** feature! Now, watch as your Midjourney AI images evolve in real-time during their generation. This interactive feature elevates your user experience, offering a sneak peek into the real-time creative process of the AI. It feels like embarking on a shared artistic journey with the AI!

But wait, there's more! We're delighted to announce that **GPT-3.5** is on the horizon! This upgrade aims to improve your prompts and allows you to generate content directly within the app using AI. Furthermore, it will empower you to remix images from the AI Gallery into new prompts. Keep an eye out for these exciting enhancements!

## 🛠️ Prerequisites

Before you start this setup journey, ensure that you have:

- An active subscription to [Midjourney](https://www.midjourney.com/).
- [Node.js](https://nodejs.org/en/download/) 🟩 (version 12.0.0 or higher) installed.
- An account on [Discord](https://discord.com/) 🎙️.
- Basic knowledge of JavaScript ☕ and React ⚛️.

## 🔧 Setup Instructions

### Step 1️⃣: Clone the Repository 📥

Start by cloning this repository to your local machine using Git. Run the following command:

```bash
git clone https://github.com/yourusername/midjourney-display.git
```

### Step 2️⃣: Install Dependencies 📦

Then, move into the project directory and install the necessary dependencies with npm. Important: Due to a dependency conflict with `react-image-lightbox`, use the `--legacy-peer-deps` flag:

```bash
cd midjourney-display
npm install --legacy-peer-deps
```

### Step 3️⃣: Setup Discord Bot 🤖

Follow these steps to set up a new Discord bot:

1. Visit the [Discord Developer Portal](https://discord.com/developers/applications) and log in to your account.
2. Click "New Application", provide a name and confirm by clicking "Create".
3. Go to the "Bot" tab and click "Add Bot". Confirm by clicking "Yes, do it!".
4. Under the "Token" section, click "Copy" to get your bot's token. Keep this token safe as it will be used in the next step.

Now, you need to invite the bot to your server:

1. Visit the 'OAuth2' tab in your bot's application page.
2. Check the 'bot' box in the 'scopes' section.
3. In the 'Bot Permissions' section, select 'Administrator'.
4. A URL will be generated at the bottom of the scopes section, copy this URL.
5. Paste this URL into a new browser tab and select your server.
6

. Click 'Authorize', and your bot should now be in your server.

### Step 4️⃣: Environment Variables 🌍

Create a `.env` file in the root of your project. This file will hold environment variables, including the Discord bot token and the IDs for the server, channel, and session.

Your `.env` file should look like this:

```bash
SALAI_TOKEN=<your-bot-token>
CHANNEL_ID=<your-channel-id>
SERVER_ID=<your-server-id>
SESSION_ID=<your-session-id>
```

Replace `<your-bot-token>` with the token obtained from the Discord Developer Portal. The `<your-channel-id>`, `<your-server-id>`, and `<your-session-id>` should be replaced with the respective IDs from your Discord server.

### Step 5️⃣: Run the App 🚀

Now, run the app using the following command:

```bash
npm run dev
```

Open `localhost:3000` in your browser to witness the stunning Midjourney Display!

## 🚀 New Features

We have fresh updates in the Beta branch, including:

- Download Image 📥 
- Fast Reload ⚡
- Prompt text of images 📃

Check out the Beta branch to explore these new features!

## 🌍 For Developers Everywhere!

We'd love to see the following enhancements and additions to Midjourney Display:

- Login/Auth system 🛂: A secure method for users to access the platform.
- Database Integration 🗄️: For efficient management of the AI-generated images.
- Improved Loading Experience 🔄: Enhance the user experience by making the loading process seamless.
- Tailwind Integration 💨: To refine the UI and make it more efficient.

We're open-sourcing this project to collaborate and create an exceptional platform. Join us in shaping the future of AI creativity! 

## 🤝 Contributing

We appreciate contributions that can make this display even more spectacular! We warmly welcome changes from the community. If you wish to contribute, please fork this repository, make your changes, and submit a pull request.

## 📜 License

This project is licensed under the MIT License. More details can be found in the [LICENSE](./LICENSE) file.

