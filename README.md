# nodejs

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-≥14-green.svg)](https://nodejs.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#contributing)
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/Abo1zu?referralCode=alphasec)

A minimal Node.js web application that serves a "Hello World!" response over HTTP. This project demonstrates the basics of creating an HTTP server using Node.js's built-in `http` module, with no external dependencies.

## Features

- Lightweight HTTP server with zero external dependencies
- Serves plain text responses on port 3000
- Simple and easy to understand for beginners
- Ready for deployment on [Railway](https://railway.app/?referralCode=alphasec)

## Prerequisites

- [Node.js](https://nodejs.org/) version 14 or higher
- [npm](https://www.npmjs.com/) (included with Node.js)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/alphasec/nodejs.git
   cd nodejs
   ```

2. Install dependencies (none required, but initializes the project):

   ```bash
   npm install
   ```

## Usage

Start the server:

```bash
npm start
```

The server will start on [http://localhost:3000](http://localhost:3000). Open this URL in your browser or use a tool like `curl`:

```bash
curl http://localhost:3000
# Output: Hello World!
```

### Development

To run with automatic restarts during development, install [nodemon](https://nodemon.io/) globally and use it instead of `node`:

```bash
npm install -g nodemon
npx nodemon index.js
```

## Project Structure

```
nodejs/
├── .github/
│   ├── dependabot.yml    # Dependabot config for monthly npm updates
│   └── FUNDING.yml       # GitHub Sponsors / Ko-fi funding link
├── .gitignore            # Git ignore rules for Node.js projects
├── index.js              # Main application entry point (HTTP server)
├── LICENSE               # MIT License
├── package.json          # Project metadata and scripts
└── README.md             # Project documentation
```

## Deployment

Click the button below to deploy this app on [Railway](https://railway.app/?referralCode=alphasec):

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/Abo1zu?referralCode=alphasec)

For a step-by-step guide, see [How to Deploy a Node.js App on Railway](https://alphasec.io/how-to-deploy-a-nodejs-app-on-railway/).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

If you found this project helpful, consider supporting the author:

- [Ko-fi](https://ko-fi.com/alphasec)
