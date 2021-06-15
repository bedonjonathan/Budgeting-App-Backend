# basic-express-app

This app is meant to serve as a quick-start for fellows to clone into and build on top of. 
If you will be pushing it to Heroku you will need to set your node engine version in `package.json`.
To set your node engine version: 
1. Go to the terminal, iTerm, or VSCode terminal and run `node -v`
2. Copy the output from the last command and paste it into your `package.json`, in `"engines.node"`

## Steps to clone and make your own

1. Navigate to the directory where you want this app to live
2. Clone the repo: `git clone https://github.com/joinpursuit/basic-express-app.git`
3. Create your own repo on Github 
4. Navigate to the cloned repo from step 2 (should be `cd ./basic-express-app`)
5. Reset the `origin` remote to now reference your newly created repo from step 3 (`git remote set-url origin git://your.new.url.here`)
6. Confirm this worked by running `git remote -v`. The output should match your new repo.
7. Further confirm by pushing to your new remote and seeing the changes in the repo on Github

## Steps to get the app working

1. Add a `.env` file, and write the following in it: `PORT=3001` (you can change the port number)
2. Run `npm i` (or `npm install`, same thing) to create your `node_modules`
3. Run `npm start` - this runs `nodemon server.js` and assumes you have `nodemon` installed
4. Navigate to `http://localhost:3001`, you should be seeing "Basic Express App - ROOT" in your browser 
