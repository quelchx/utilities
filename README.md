# Random Utility Functions

## Table of Contents

- [About Respository](#about-repository)
- [Clone Project](#clone-project)
- [Generate Unique Identifier](#generate-unique-id)
- [Password Check](#password-check)
- [More Information](#more-information-about-repository)

## About repository

This reposity contains a few utility functions that could be used in replacement of other node module packages currently available.

## Clone project

If your wanting to grab the contents of this repository I recommend using the degit package to copy the contents of this repository for your own project.

From your project directory inside the terminal run `npm degit quelchx/utilities utils`. This will grab everything except the .git files and git history

### Generate Unique ID

This function takes in a number as a parameter to figure out how many times to chain a set of 4 random characters.

Here is an example of this function use case:

```js
const guid = require("./utilities/generate-uid");

guid(4); // output: 9769-9c3d-2b0f-f736
```

Another use case of this function could be creating id's for a React map function or any other case where you need a random unique identifier.

### Password Check

This function will check if a password contains the following paramaters:

- Contains 1 uppercase character [A-Z]
- Contains 1 lowercase character [a-z]
- Contains 1 number character [0-9]
- Contains one special character[@#$*&%]
- Password is at least 8 - 255 characters in length

An example of using this function:

```js
const passwordCheck = require('./utilities/check-password)

passWordCheck('Hello World')
// output {verification: {status: false, message: 'Password contains whitespace'}}
```

#### More Information about repository

This repository is mainly intended for personal usecase. Contents are left open for educational or individual usecase.

If you experience any issues or want to contribute or modify the code please feel free to post an issue or fork the repository for your own liking.
