# Build Instructions

This document serves as an instruction manual for how to build the project during development.


## 1. Install NPM

Open a terminal window and navigate inside the project folder.
Enter:
`npm install`

Wait for the process to finish, to ensure you have npm/npx installed.


## 2. Edit files

Edit files as usual.


## 3. Use Webpack to watch the files inside the /blocks/ folder and auto-build

Have Webpack watch the files and compile as necessary:
`npx webpack --watch`

The files will be automatically updated for you.

If you need to build a single time, you can use the command:
`npx webpack`


## Base Tutorials

This project was built by following these tutorials:

1. https://calderaforms.com/2019/01/convert-shortcode-gutenberg-block/
2. https://css-tricks.com/learning-gutenberg-1-series-intro/ ** <-- Steps 3 and 7 are the closest to this project
