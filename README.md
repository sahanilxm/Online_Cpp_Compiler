# Online C++ Compiler

## Overview
This repository contains a full stack C++ compiler and code runner, designed to compile and execute C++ code directly within the application environment. It provides a convenient way for developers and learners to write, test, and debug C++ programs without the need for external compilers or IDEs.

## Functionalities
1. **Code Compilation**: The application allows users to input C++ code and compiles it within the application environment.
2. **Code Execution**: Compiled code can be executed directly within the application, providing immediate feedback on its functionality and correctness.
3. **Error Handling**: The system provides detailed error messages in case of compilation or runtime errors, aiding users in debugging their code.
4. **Input/Output Support**: Users can provide input to their C++ programs and view the corresponding output, facilitating testing and validation of code logic.
5. **Syntax Highlighting**: The code editor provides syntax highlighting for better code readability and comprehension.


## Usage Instructions

- To run the application on local machine, clone this repository to your local machine:
```
git clone https://github.com/sahanilxm/Online_Cpp_Compiler.git
```
- Make sure you have the following installed on your system: `node` and `redis`.
- To run the client-written code in their corresponding languages, you need to have `GCC` compiler on your machine.
Then follow the below guide to start frontend and backend part of the application.

## Initiate frontend
1. Open Terminal.

2. Go to the frontend directory inside the project codespace.
```
cd frontend
```
3. Install the dependencies:
```
npm install
```
4. Run `npm start`. This will open the frontend part build with React on port 3000 on your local machine.

## Initiate Server 
1. Open Terminal.

2. Go to the backend directory inside the project codespace.
```
cd backend
```
3. Install the dependencies:
```
npm install
```
4. Set up your MongoDB.

5. Create a .env file in the root directory and update the following information:
```
PORT = '5000'
DB_URI = 'your-mongoDB-URI'
```
3. Run `npm start`. If you have the above mentioned entities installed on your machine, you should be able to see on the terminal window a log of :
```
Server runing at Port number:  5000
DB connection successfull.
```




