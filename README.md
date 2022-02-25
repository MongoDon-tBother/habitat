# Habit@ by MongoDon'tBother


Create your own account, add all of your habits and start tracking! 

## Installation & Usage

### Installation

- Clone or fork the repo
- Navigate to the habitat folder at the command line 
- Navigate to the client folder using `cd client` and run `npm install` to install dependencies, `npm run watch` to run the compiled javascript modules and `npm run build` to run the css styling

### Usage

- Create a `.env` file in the `/server/api` folder and add a key of `SECRET` assigned anything you like eg `SECRET=my_super_secret`
-  To start the client, navigate to the client folder using `cd client` and then either `http-server` (node) / `python -m http.server` / open the `index.html` file in your browser
- To start the server and database, navigate to the server folder using `cd server` and then run `npm run dev` 
- Once you are done, stop the server and database using `npm stop`
- Stop the client using <kbd>Ctrl</kbd> + <kbd>C</kbd>

### Deployment

- View the client live with its database on [Netlify](https://habitat-tracker.netlify.app/) 

### Testing

- To run tests in the client folder, navigate to the client folder and run `npm run test` to launch the jest test suite
- To run tests in the server folder, navigate to the api folder inside the server folder and run `npm run test`
- To stop tests in the server folder, run `npm run stop`

## Changelog

- To see a our changelog, run `git log --pretty="- %s"` in the command line

## Wins & Challenges

### Wins

* Successfully created a functional habit tracking website and implemented CRUD

### Challenges

* No challenges as of 10:35am 25/02/22
