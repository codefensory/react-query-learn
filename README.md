# React-Learn
This is a project made entirely for learning. Everything you are going to add in this repository is done with the purpose of learning and finding a solid architecture using React-Query and Jotai.

## Technologies
For the development of this project we are using common and uncommon packages, this to keep learning. The most important packages are the following:

- React 18
- Snowpack (compiler)
- Chakra-ui
- Tanstack Router (Beta)
- Tanstack Query (React-Query v4)
- Jotai (State management)
- pnpm

## Development
To run this project you need to use pnpm (Not mandatory but it is what is used).

First we install the packages with the command:
```
pnpm i
```

Then to start this project in development use the command:
```
pnpm start
```

And to compile:
```
pnpm build
```

## Deploy
This project integrates express to serve the compiled application. To run the server you first need to do a build, and then run the command:
```
pnpm serve
```

To make the deployment of this project we are using [DETA](https://www.deta.sh/) so it is for this reason that in the index.js we make a `module.exports = app`, since deta needs this for the deployment to work.
