# WalletWatch
<div align="center">
  <img src="https://github.com/Ruigetsu/project/assets/158806109/0737e805-99a0-4418-b5de-dd29a7055665" width="250" height="250"/>
</div>

<div align="center">
  <a href="https://www.npmjs.com/package/npm">
    <img src="https://img.shields.io/npm/v/npm.svg?style=flat-square" alt="npm"/>
  </a>
  </a>
  <a href="https://github.com/Louis3797/awesome-readme-template/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="license" />
  </a>
</div>

<h3 align="center">
    <a href="http://8adbbe6d6a9d.vps.myjino.ru/">View Demo</a>
</h3>

## Requirements

- Python 3.6+
- Node.js
- Postgresql
- Redis
- Redux Toolkit

## Installation 

1. Clone the repository and activate python virtual venv:

```bash
git clone https://github.com/Ruigetsu/project.git
cd project

python3 -m venv env
source env/bin/activate
```

2. Install Python dependencies:

```bash
make prepare-python
```

3. Install Node.js dependencies:

```bash
make prepare-npm
```

4. Start the application:

To start the server, use:
```bash
make run
```

To start the client application:
```bash
make run-client
```

5. Go to [http://localhost:8000](http://localhost:8000/) in your web browser.
