# AI Software Tester

## Project Overview

**AI Software Tester** is a powerful tool designed to automate test creation, execution, and bug resolution for software projects. Using event-driven architecture powered by Vercel serverless functions, the AI integrates seamlessly with Jira, GitHub, Discord, and various testing tools to enhance development workflows. It offers robust automation, efficient test management, and rapid issue resolution, empowering teams to focus on innovation.

### Key Features
- **Test Creation:** Automatically generates unit, UI, and API test scripts based on Jira task requirements.
- **Test Execution:** Runs automated tests across multiple platforms, including SikuliX for UI, Postman for API, and platform-specific tools like XCTest and Espresso.
- **Bug Resolution:** Reviews failed tests and attempts automated bug fixes, creating Jira tickets and GitHub pull requests when necessary.
- **Event-Driven Workflows:** Triggers workflows based on Jira task changes, GitHub commits, or Discord commands.
- **Communication Integration:** Provides real-time updates and requests assistance via Discord.
- **Environment Flexibility:** Supports both hosted environments using Vercel and local execution for testing and debugging.

---

## How to Use

### Prerequisites
- **Node.js** (Latest LTS version recommended)
- **npm** (Comes with Node.js installation)
- **Vercel Account** (For serverless functions)
- **Docker** (For hosted environment setup)
- API Keys for:
  - Jira API
  - GitHub API
  - Discord Bot
  - OpenAI API

---

### Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/<Benjosm>/ai-software-tester.git
   cd ai-software-tester
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory with the following variables:
   ```env
   JIRA_API_KEY=<your-jira-api-key>
   GITHUB_API_KEY=<your-github-api-key>
   DISCORD_BOT_TOKEN=<your-discord-bot-token>
   OPENAI_API_KEY=<your-openai-api-key>
   ```

4. **Setup Hosted Environment with Docker**
   The hosted environment will use a Docker container deployed on Vercel to manage workflows. The container will:
   - Pull code from the GitHub repository to ensure up-to-date functionality.
   - Provide an isolated environment to execute commands, run tests, and interact with APIs.

   **Steps to Deploy:**
   - Create a `Dockerfile` in the repository root (example provided below):
     ```dockerfile
     FROM node:alpine
     WORKDIR /app
     COPY . .
     RUN npm install
     CMD ["npm", "start"]
     ```
   - Deploy the Docker container to Vercel:
     ```bash
     vercel --prod
     ```
   - Configure Vercel to use the `.env` file for environment variables.

5. **Run Locally** (Optional)
   ```bash
   npm run dev
   ```
   This sets up a local server for debugging and testing workflows.

---

### Usage

- **Event Triggers:**
  - **Jira:** Automatically triggers test creation or updates when tasks move to "Testing."
  - **GitHub:** Initiates workflows on commits or pull requests.
  - **Discord:** Allows manual commands to trigger test creation, bug resolution, or updates.

- **Run Tests Locally:**
  Use the following commands to manually execute specific tests:
  ```bash
  npm run test:unit      # Run unit tests
  npm run test:ui        # Run UI tests
  npm run test:api       # Run API tests
  ```

- **Monitor Results:**
  - Check Discord for real-time updates on progress and issues.
  - View logs and reports in the `/logs` directory or through Vercel dashboards.

---

## Contribution Guidelines

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of your changes"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Submit a pull request.

---

## License

This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.
