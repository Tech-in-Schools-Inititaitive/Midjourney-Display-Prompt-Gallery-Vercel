# Midjourney Display 🎨🖥️  

Midjourney Display is a cutting-edge, web-based gallery that offers a compelling array of AI-generated images 🤖🎭. Dive into the amazing world of AI creativity with our dynamic and lively platform!

*Please note: Full functionality of Midjourney Display requires an active subscription to [Midjourney](https://www.midjourney.com/).*

## 🛠️ Prerequisites

Before you start this setup journey, ensure that you have:

- An active subscription to [Midjourney](https://www.midjourney.com/).
- [Node.js](https://nodejs.org/en/download/) 🟩 (version 12.0.0 or higher) installed.
- An account on [Discord](https://discord.com/) 🎙️.
- Basic knowledge of JavaScript ☕ and React ⚛️.

## 🔧 Setup Instructions

### Step 1️⃣: Clone the Repository 📥

To start, clone this repository to your local machine using Git. Execute the following command:

```bash
git clone https://github.com/yourusername/midjourney-display.git
```

### Step 2️⃣: Install Dependencies 📦

Navigate into the project directory and install the necessary dependencies with npm. Note: Due to a dependency conflict with `react-image-lightbox`, use the `--legacy-peer-deps` flag:

```bash
cd midjourney-display
npm install --legacy-peer-deps
```

### Step 3️⃣: Setup Discord Bot 🤖

Create a new Discord bot by following these steps:

1. Log into your account on the [Discord Developer Portal](https://discord.com/developers/applications).
2. Click "New Application", give it a name, and confirm by clicking "Create".
3. Navigate to the "Bot" tab and click "Add Bot". Confirm by clicking "Yes, do it!".
4. Copy your bot's token from the "Token" section. Keep this token safe, as it will be used in the next step.

After creating your bot, invite it to your server:

1. Navigate to the 'OAuth2' tab on your bot's application page.
2. Tick the 'bot' checkbox in the 'scopes' section.
3. In the 'Bot Permissions' section, select 'Administrator'.
4. Copy the generated URL from the bottom of the scopes section.
5. Open this URL in a new browser tab, select your server, and click 'Authorize'. Your bot should now be on your server.

### Step 4️⃣: Environment Variables 🌍

Create a `.env` file at the root of your project. This file will hold environment variables, including the Discord bot token and IDs for the server, channel, and session.

Your `.env` file should look like this:

```bash
SALAI_TOKEN=<your-bot-token>
CHANNEL_ID=<your-channel-id>
SERVER_ID=<your-server-id>
SESSION_ID=<your-session-id>
```

Replace `<your-bot-token>` with your bot's token from the Discord Developer Portal. Replace `<your-channel-id>`, `<your-server-id>`, and `<your-session-id>` with the appropriate IDs from your Discord server.

### Step 5️⃣: Run the App 🚀

It's time to run the app. Use the following command:

```bash
npm run dev
```

Open `localhost:3000` in your browser. You should now see Midjourney Display in all its vibrant, AI-generated splendor!

## 🚀 New Features

💥 Get excited for some fresh updates in the

 Beta branch! These include:

- Image Download 📥 
- Rapid Reload ⚡
- Display of Image Prompt Text 📃

Explore these new features by checking out the Beta branch!

## 🌍 Calling All Developers!

We're eager to see the following enhancements and additions to Midjourney Display:

- Login/Auth system 🛂: A secure way for users to access the platform.
- Database Integration 🗄️: Efficient management of AI-generated images.
- Improved Loading Experience 🔄: Smooth loading to enhance user experience.
- Tailwind Integration 💨: Sleeker, more efficient UI.

This project is a collaborative journey. We've open-sourced it to unite creative minds in crafting an extraordinary platform. Help us shape the future of AI creativity!

## 🤝 Contributing

Your contributions can make Midjourney Display even more stunning! We warmly welcome contributions from the community. If you're interested in contributing, fork this repository, make your changes, and submit a pull request.

## 📜 License

This project is licensed under the MIT License. For more details, check out the [LICENSE](./LICENSE) file.
