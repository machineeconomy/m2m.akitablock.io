# AKITA Virtual Lab
# Machine Economy (M2M) live demonstrator

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

## setup repository

you need an `.env` file in the root directory with this content:

```
VUE_APP_MACHINE_1_URL=http://localhost:3001
VUE_APP_PROVIDER_1_URL=http://localhost:3002
VUE_APP_MACHINE_2_URL=http://localhost:3003
VUE_APP_PROVIDER_2_URL=http://localhost:3004
```

