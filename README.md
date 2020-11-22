# Rick and Morty App

**Hello there and welcome to Rick and Morty App. This is an educational and demonstrative project - WORK IN PROGRESS 😉**

## Requirements

-   **React Native**

Set the [react native cli](https://reactnative.dev/docs/environment-setup) development environment.

-   **Node.js**

Install [Node.js](https://nodejs.org/es/) or check if you already have it running `node -v`

Life's easy, use [NVM](https://github.com/nvm-sh/nvm) (Node Version Manager)

-   **Yarn**

Please use [yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable) to manage your packages, **DON'T USE NPM INSTALL** on this project, this will cause unexpected bugs between the lock's files.

-   **Linter**

We use both [eslint](https://eslint.org/) and [prettier](https://prettier.io/).

Please review [VS Code](https://code.visualstudio.com/) plugins at [dev dependencies](https://github.com/ramirogavagnin/rick-and-morty/blob/master/package.json).

## Intallation

1- Clone this repository

```
git clone https://github.com/ramirogavagnin/rick-and-morty.git
```

2- Install packages:

**DON'T USE NPM INSTALL!!**

```
yarn install
```

3- Install Cocopods

```
cd ios/ && pod install && cd ..
```

## Running

Review this scripts on [package.json[scripts]](https://github.com/ramirogavagnin/rick-and-morty/blob/master/package.json)

**Android**

Running Debug Mode

```
npm run android
```

Build App

```
npm run build-android
```

Install App

```
npm run run-android-prod
```

**IOS**

Running Debug Mode on Simulator

```
npm run ios
```

Running Debug Mode on Device

```
npm run run-ios
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

**Enjoy! 👩‍💻🤖🧑‍💻**
