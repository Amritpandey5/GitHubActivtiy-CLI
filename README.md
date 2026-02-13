# 🚀 GitHub Activity CLI

A simple Command Line Interface (CLI) tool that fetches and displays a user's recent GitHub activity directly from the terminal.

Built using Node.js and the native `fetch` API (no external libraries for API requests).

---

## 📌 Features

- Fetches recent public GitHub activity
- Handles:
  - Invalid usernames
  - API rate limits
  - Network errors
- Clean and colored terminal output using Chalk
- No external libraries used for API fetching

---

## 🛠️ Technologies Used

- Node.js (v18+ required for native fetch)
- Commander (for CLI commands)
- Chalk (for colored output)

---

## 📦 Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/github-activity-cli.git
```

### 2️⃣ Navigate into the project
```bash
cd github-activity-cli
```
###3️⃣ Install dependencies
```bash
npm install
```
▶️ Usage

Run the CLI using:
```bash
node index.js github-activity <username>
```
Example:
```bash
node index.js github-activity torvalds
```
--------------------------------------------------- GETTING USER ACTIVITY ------------------------------------

- PushEvent at torvalds/linux
- description: No description
- createdAt :2026-02-13T12:45:32Z

- CreateEvent at torvalds/subsurface
- description: Initial commit
- createdAt :2026-02-12T10:11:21Z

--------------------------------------------------- ENDING USER ACTIVITY ------------------------------------




```bash
git clone https://github.com/your-username/github-activity-cli.git
```
Repo Link:https://github.com/Amritpandey5/GitHubActivtiy-CLI
https://roadmap.sh/projects/github-user-activity
