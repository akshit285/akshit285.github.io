🔑**Site Link -** https://akshit285.github.io/

# Tic Tac Toe Game Documentation
### Introduction
This documentation provides an overview of a simple Tic Tac Toe game implemented as a web application using HTML, CSS, and JavaScript. The game allows two players to take turns marking cells on a 3x3 grid with their respective symbols ("X" and "O") and determines the winner or a tie based on the rules of the game.

### Table of Contents
#### 1. Overview
Brief description of the game and its purpose.

#### 2. Getting Started
Instructions for setting up and running the game on a web browser.

#### 3. HTML Structure
Explanation of the HTML structure used to create the game interface.

#### 4. CSS Styling
Description of the CSS styles applied to achieve the desired visual appearance.

#### 5. JavaScript Logic
Explanation of the JavaScript functions responsible for game mechanics.

#### 6. Gameplay Instructions
Clear instructions on how to play the game.

#### 7. Conclusion
Recap of the implemented features and potential areas for further improvement.

### 1. Overview
The Tic Tac Toe game is a classic two-player game where each player takes turns marking a cell on a 3x3 grid. The objective is to form a horizontal, vertical, or diagonal line of three matching symbols before the opponent does.

### 2. Getting Started
To play the game, follow these steps:

1. Open the "index.html" file in a modern web browser.
2. The game board will be displayed, showing an empty grid and the current player's turn.
3. Click on an available cell to place your symbol (either "X" or "O").
4. The game will automatically determine the winner or a tie and display the result.
5. To start a new game, click the "Reset" button.

### 3. HTML Structure
The game interface is structured using HTML elements. Key elements include:

- The main <div> container with the ID "main."
- Heading elements to display the game title and instructions.
- A <table> element with cells represented as <input> elements.

### 4. CSS Styling
CSS styles are applied to enhance the visual presentation of the game. Notable styles include:

- Centering the game board using the "center" class.
- Styling the cells with borders, rounded corners, and hover effects.
- Styling the reset button and result message.

### 5. JavaScript Logic
The JavaScript code in "Logic.js" is responsible for handling game mechanics, including:

- Assigning event listeners to cells and the reset button.
- Implementing functions for each cell's click event.
- Keeping track of the current player's turn using a flag.
- Checking for a win or tie condition after each move.

### 6. Gameplay Instructions
- Player 1 is assigned the symbol "O," and Player 2 is assigned the symbol "X."
- Players take turns clicking on an empty cell to place their symbol.
- The game automatically checks for a win or tie condition after each move.
- The result is displayed in the "result" element.
- To start a new game, click the "Reset" button.

### 7. Conclusion
The implemented Tic Tac Toe game provides a basic version of the classic game. It demonstrates the use of HTML, CSS, and JavaScript to create an interactive web-based game. Future enhancements could include improved styling, additional features, and enhanced user experience.
