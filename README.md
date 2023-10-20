# listeningRoulette 0.1
An app for listening to music with friends. Listening Roulette presents a fun way to get several friends to pick an album of their choice, spin the wheel to decide which one to listen to, then listen together while chatting and commenting on the music.

## Features
* Main view:
  * Displays a form to input your album selection and see other's choices
  * The roulette displays the current album selections
  * When the selections have been decided for everyone, the form disappears and "Time to Spin" appears
* Secondary view:
  * The album selections disappear and are replaced by a message board where the listening chat takes place
  * The wheel remains, but the "spin" button is replaced by "home" and a form for inputting messages appears below.

## Preview
<p float="left">
  <img alt="demo image" src="https://user-images.githubusercontent.com/76603041/235333458-fc702e3d-d464-4e60-a749-a7b8ab66036c.gif" width="49%"/>
  <img alt="demo image2" src="https://user-images.githubusercontent.com/76603041/235333421-504245a9-74a4-49b3-9054-9fe3f244d491.gif" width="49%"/>
</p>

## Tech Stack
* **Client:** React, styled-components
* **Server:** Node, Express
* **Database:** MongoDB

## Run Locally
```bash
  git clone https://github.com/BrettEastman/listeningRoulette.git
```

#### Go to the project directory
```bash
  cd listeningRoulette
```
- Create a `.env` file like `example.env`

#### Install dependencies
```bash
  npm install
```

#### Start the server
```bash
  npm run server-dev
```

#### Make sure mongoDB is running locally

#### Start webpack
```bash
  npm run client-dev
```
The app is ready at http://localhost:3000/
