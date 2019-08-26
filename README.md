# AKITA Virtual DLT Lab <br> Machine Economy (M2M) live demonstrator based on IOTA

This is an open source project with the goal to demonstrate real live Use Cases on a Virtual Lab.
The first Use Case shows an abstract, high level Machine-to-Machine (M2M) Supply Chain, where each machine has its own decentralized, dedicated service unit (no central controlling unit) called "machines".
machines enables each machine to have its own "machine bank account", send & receive value and trigger automated processes based on payments. the first Use Case is based on IOTA Tangle a DLT technology beyond blockchain, that is open source, permissionless and 0 transaction costs.

![alt text](https://github.com/machineeconomy/m2m.akitablock.io/blob/master/public/img/AKITA%20-%20Virtual%20Lab%20-%20M2M%20Supply%20Chain%20-%20landing%20page%20.png)

The website offers:
1. bold landing page
2. short demo video
3. virtual lab live use case demonstration user experience (linked to the IOTa DevNet)
4. dedeciated process description
5. modular service design of "machines"
6. Opportunity to engage and build the future with us today! (Links: E-Mail, Twitter, Linkedin, github, IOTA)

Roadmap 2019
June      alpha version promo
July      Public release of the alpha version website
July      optimize and extend functions
Augut     extend other Use Cases
September implement virtual lab code on physical components
...


/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

internal checklist:
- we want to make a website with some functions and integrated IOTA transactions based on the current DevNet
- FrontEnd = VUE
- server = node.js
- server based on google micro VM?
- hosting = github
- docu = github

## Development

To setup this app for development, you need to setup a few things for the live payment demo.

The demo consists of the folloing parts

- an [IOTA Devnet Faucet](https://github.com/machineeconomy/faucet), to send Tokens to the User Wallet in the Browser.
- Four running [machines](https://github.com/machineeconomy/machine): two configured as robots and two as energy providers.


#### Step 1
Follow the setup steps on the [IOTA Devnet Faucet](https://github.com/machineeconomy/faucet) README.md file.

#### Step 2

- Clone the machine repository and prepare the env files

```bash
git clone https://github.com/machineeconomy/machine
cd machine
```

- create the env files

```bash
touch .env
touch .env_provider
touch .env_robot2
touch .env_provider2
```

- Add this content to the `.env` file
```bash
PORT=3001
NAME=dev robot 1	
SEED=ADD...YOUR...FIRST...ROBOT...SEED
IS_PROVIDER=false
PROVIDER_URL="http://localhost:3002"
DEVELOPMENT=true
VALUE=0
```
- Add this content to the `.env_provider` file
```bash
PORT=3002
NAME=dev provider 1	
SEED=ADD...YOUR...FIRST...PROVIDER...SEED
IS_PROVIDER=true
DEVELOPMENT=true
VALUE=0
```

- Add this content to the `.env_robot2` file
```bash
PORT=3003
NAME=dev robot 2	
SEED=ADD...YOUR...SECOND...ROBOT...SEED
IS_PROVIDER=false
PROVIDER_URL="http://localhost:3004"
DEVELOPMENT=true
VALUE=0
```

- Add this content to the `.env_provider2` file
```bash
PORT=3004
NAME=dev provider 2	
SEED=ADD...YOUR...SECOND...PROVIDER...SEED
IS_PROVIDER=true
DEVELOPMENT=true
VALUE=0
```

#### Step 3

Start everything

- Faucet:
npm start
```bash
npm start
```

- machines:
open 4 new terminal tabs and start 4 nodejs apps

```bash
npm start
npm run start-provider
npm run start-robot2
npm run start-provider2
```

- setup and run this web application

```bash
git clone https://github.com/machineeconomy/m2m.akitablock.io.git
cd m2m.akitablock.io
npm install
touch .env
npm run serve
```

Add this content to the `.env` file
```
VUE_APP_MACHINE_1_URL=http://localhost:3001
VUE_APP_PROVIDER_1_URL=http://localhost:3002
VUE_APP_MACHINE_2_URL=http://localhost:3003
VUE_APP_PROVIDER_2_URL=http://localhost:3004
```

run the app
```bash
npm run serve
```