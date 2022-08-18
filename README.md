# Interview Scheduler

## Description

Interview Scheduler, a single page application, allows users to add, edit, and delete appointments in real time. This app uses React built-in and data is persisted by the API server using a PostgreSQL database. The client application communicates with an API server over HTTP, using the JSON format. Jest tests are used through the development of the project.

## Feature Highlights

Interviews can be booked between Monday and Friday.
A user can switch between weekdays.
A user can book an interview in an empty appointment slot.
Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.
A user can cancel an existing interview.
A user can edit the details of an existing interview.
The list of days informs the user how many slots are available for each day.
The expected day updates the number of spots available when an interview is booked or canceled.
A user is presented with a confirmation when they attempt to cancel an interview.
A user is shown an error if an interview cannot be saved or deleted.
A user is shown a status indicator while asynchronous operations are in progress.
When the user presses the close button of the error they are returned to the Form or Show view (skipping Status and Confirm).
The application makes API requests to load and persist data. We do not lose data after a browser refresh.

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Project Stack

Front-End: React, Axios, JSX, HTML, SASS, JavaScript
Back-End: Express, Node.js, PostgreSQL
Testing: Storybook, Webpack Dev Server, Jest, Testing Library and Cypress

## Dependencies
Axios, Classnames, Normalize.css, React, React-dom, React-scripts, Babel/core
Storybook/addon-actions, Storybook/addon-backgrounds, Storybook/addon-links
Storybook/addons, Storybook/react, Testing-library/jest-dom
Testing-library/react, Testing-library/react-hooks, Babel-loader
Node-sass, Prop-types, React-test-renderer