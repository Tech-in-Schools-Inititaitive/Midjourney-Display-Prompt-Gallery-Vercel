![Midjourney_Display1](https://github.com/Tech-in-Schools-Inititaitive/Midjourney-Display/assets/6137292/4d844720-847a-4bf7-8bd4-1c07b0ef70ce)

# Midjourney Display 🎨🖥️ 

Midjourney Display is a futuristic, web-based gallery that showcases a mesmerizing collection of AI-generated images 🤖🎭. Immerse yourself in the extraordinary world of AI creativity with our interactive and vibrant platform!

*Please note: Midjourney Display requires an active subscription to [Midjourney](https://www.midjourney.com/) in order to fully operate as an autonomous portfolio.*

## 🛠️ Prerequisites

Before embarking on this setup journey, ensure that you have:

- An active subscription to [Midjourney](https://www.midjourney.com/).
- [Node.js](https://nodejs.org/en/download/) 🟩 (version 12.0.0 or higher) installed.
- An account on [Discord](https://discord.com/) 🎙️.
- Basic familiarity with JavaScript ☕ and React ⚛️.

## 🔧 Setup Instructions

### Step 1️⃣: Clone the Repository 📥

First, duplicate this repository to your local machine using Git. Execute the following command:

```bash
git clone https://github.com/yourusername/midjourney-display.git
```

### Step 2️⃣: Install Dependencies 📦

Next, navigate into the project directory and install the essential dependencies with npm. Important: Due to a dependency conflict with `react-image-lightbox`, use the `--legacy-peer-deps` flag:

```bash
cd midjourney-display
npm install --legacy-peer-deps
```

### Step 3️⃣: Setup Discord Bot 🤖

Follow these steps to set up a new Discord bot:

1. Visit the [Discord Developer Portal](https://discord.com/developers/applications) and log in to your account.
2. Hit "New Application", then provide a name and confirm by clicking "Create".
3. Go to the "Bot" tab and click "Add Bot". Affirm by clicking "Yes, do it!".
4. Under the "Token" section, click "Copy" to get your bot's token. Safeguard this token as it will be used in the subsequent step.

Now that your bot is created, you need to invite it to your server. Here's how:

1. Visit the 'OAuth2' tab in your bot's application page.
2. Check the 'bot' box in the 'scopes' section.
3. Then, in the 'Bot Permissions' section, select 'Administrator'.
4. You will see a generated URL at the bottom of the scopes section, copy this URL.
5. Paste this URL into a new browser tab and select your server.
6. Click 'Authorize', and your bot should now be in your server.

### Step 4️⃣: Environment Variables 🌍

In the root of your project, create a `.env` file. This file will store environmental variables, including the Discord bot token and the IDs for the server, channel, and session.

Your `.env` file should resemble this:

```bash
SALAI_TOKEN=<your-bot-token>
CHANNEL_ID=<your-channel-id>
SERVER_ID=<your-server-id>
SESSION_ID=<your-session-id>
```

Replace `<your-bot-token>` with the token obtained from the Discord Developer Portal. The `<your-channel-id>`, `<your-server-id>`, and `<your-session-id>` must be replaced with the relevant IDs from your Discord server.

### Step 5️⃣: Run the App 🚀

Now, it's time to run the app using the following command:

```bash
npm run dev
```

Open localhost:3000 in your browser, and you should see the Midjourney Display in all its glory!

## 🚀 New Features

💥 BOOM! We have some fresh updates in the Beta branch! This includes:

- Download Image 📥 
- Fast Reload ⚡
- Prompt text of images 📃

Remember to check out the Beta branch to explore these new features!

## 🌍 For You, Developers of The World!

We would absolutely love to see the following enhancements and additions to Midjourney Display:

- Login/Auth system 🛂: A secure method for users to access the platform.
- Database Integration 🗄️: To manage the AI-generated images efficiently.
- Better Loading Experience 🔄: Enhancing the user experience by making the loading process smooth.
- Tailwind Integration 💨: To make the UI sleeker and more efficient.

This is a grand journey, and we're open-sourcing this project to collaborate and create a phenomenal platform. Join us in shaping the future of AI creativity! 

## 🤝 Contributing

Your contributions can make this display even more stunning! We warmly welcome changes from the community. If you wish to contribute, please fork this repository, make your changes, and submit a pull request.

## 📜 License

This project is licensed under the MIT License. You can find more details in the [LICENSE](./LICENSE) file.
