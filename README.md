# Hogwarts Sorting Hat App - React Application with Tailwind CSS

## Overview

This project I built to practice React Hooks and try out Tailwind CSS. It acts as frontend for a [Serverless Sorting Service](https://github.com/evagrean/random-sorting-service) I built before.

The app mimics the sorting ceremony that takes place for new students at Hogwarts, the School of Whitchcraft and Wizardy. Users can click a button to initiate the sorting process and will be randomly assigned to one of the four Hogwarts houses. They are directed to their corresponding house view, that represents the colors of the certain house and presents a few of their new housemates. The house view also includes a button to restart the sorting ceremony.

## Deployment

App life at: (https://sorting-hat-app.netlify.app/).

## Tech Stack

- JavaScript
- React ([Create React App](https://github.com/facebook/create-react-app))
- [Tailwind CSS](https://tailwindcss.com/)

## Application

### Dependendies

- `react`
- `react-dom`
- `react-scripts`
- `axios`
- `tailwindcss`
- `autoprefixer`
- `postcss`
- `craco`

### Initalizing

- Fork and clone the project and cd into `sorting-hat-app` directory.
- Run `npm install` to fetch dependencies.
- In `package.json` change `start` and `build` scripts to `craco start` and `craco build`.
- Run `npm start` to run app in development mode.
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- Run `npm build` to build the app for production to the `build` folder (it correctly bundles React in production mode and optimizes the build for the best performance).
- See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Components

At the moment of writing this documentation, the page rendering depends on state changes. React Router may be added in a further iteration.

#### `<App />`

Acts as a container for the overall structure of the app (`<Header />`, `<CeremonyView />`, `<Footer />`) as well as sets a customized background image for the entire app.

#### `<Header />`

Holds a welcome message and invites user to start the sorting ceremony.

#### `<Footer />`

Contains information about copyright, picture credits and intellectual properties of mentioned content.

#### `<CeremonyView />`

Data from 3rd party API is fetched here and state and data is stored. It is also the container for secondary components (`<SortingButton />`, `<HatImg />`, `<HouseView />`). Once users click the `PUT ON THE SORTING HAT` button, the app starts fetching house data from API, and a bouncing Sorting Hat appears while data is loading (loading time extended with `setTimeout()` of 4ms). When finished, `<HouseView />` component is rendered.

#### `<HouseView />`

Receives data about the assigned house and housemates from `<CeremonyView />`'s state and displays a list of housemates (`<HousematesList />`). It also renders a `<GoBackButton />` that calls the `goBackToCeremony` function when clicked and `<SortingButton />` renders again instead of `<HouseView />`. In this component, a `getHouseColors` handler function sets colors for text and background according to the house selected. These colors are passed through props to every child component (`<HousematesList />`, `<HousemateCard />`, `<GoBackButton />`).

#### `<HousematesList />`

This component maps a `<HousemateCard />` for every entry of the `housemates-array` received through props.

#### `<HousemateCard />`

Displays an image and the name of each housemate as received through props.
