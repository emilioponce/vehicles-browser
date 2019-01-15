# Vehicle Browser frontend

A frontend application with React for retrieving two types of vehicles in the Barcelona area and visualizing them.

We have two kind of visualizations: a paginated vehicle List with the cars detail, and a map where vehicles are located on their own coordinates and shows some info.

In this approach, we have only one list with all the vehicles mixed. When you click in a new page, you can obtain new cars in the list and also on the map.

It is a responsive application and it has been checked on mobile devices.

## Technical features

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Some technical features that you could find interesting:

- Eslint and prettier were used during all the process.
- Webpack is the bundler tool.
- It uses CSS-GRID and Flex for responsive design.
- It contain Proptypes definitions.
- It uses the react API Context for sharing info between some components.
- It uses Jest for testing.
- Component render testing, snapshots and async requests testing are available.
- Leafletjs and OpenStreetMaps layers where used for the map representation.
- It uses CSS-Modules for styles.

Possible improvements:

- Adding Error Boundaries to show an Error Component if something goes wrong.
- Adding a Toggle selector to filter only one type of cars (taxi or uber).

## How to run the project

```sh
npm install
npm start
```

## Testing

```sh
npm run test
```

## How to create an optimized production build

```sh
npm run build
```

## Author

Emilio Ponce
ponce.alcalde@gmail.com
