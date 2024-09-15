# Typing Practice Application

## Overview

This Typing Practice Application helps users improve their typing speed and accuracy by providing random motivational paragraphs to type. It tracks the user's progress by calculating metrics like words per minute (WPM), characters per minute (CPM), mistakes made, and the remaining time. The application also includes a visual indicator (blinking cursor) to highlight the active character during typing.

## Features

- **Random Paragraph Generation**: The application randomly selects one of several motivational paragraphs for the user to type.
- **Typing Metrics**: The app calculates and displays:
  - **WPM (Words per minute)**
  - **CPM (Characters per minute)**
  - **Mistakes Count**
  - **Time Remaining**
- **Active Character Indicator**: A blinking cursor highlights the current character the user should type next.
- **Timer**: Users have a limited time to complete the paragraph, after which the final metrics are shown.
- **Reset Functionality**: Allows users to reset the game and start over.

## Technologies Used

- **HTML/CSS**: The layout and styling of the app, including custom animations and highlighting of the active character.
- **JavaScript**: Controls the logic for random paragraph selection, typing mechanics, time tracking, and metric calculations.

## Demo

![image](https://github.com/user-attachments/assets/8fb4527a-c136-474b-bd94-68ba01d8022b)

## Setup and Usage

To run this project locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/Deeksha-R-Kunder/Typing-Speed-Game.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Typing-Speed-Game
    ```

3. Open the `index.html` file in your browser:
    ```bash
    open index.html
    ```

4. The app will randomly select a paragraph for you to type. Start typing in the text input box. Your progress will be tracked in real time.

## Code Breakdown

### HTML

- The app layout includes a `container` div with an input field for user input, a paragraph section (`#para`) for displaying the text, and elements for displaying typing metrics (WPM, CPM, mistakes, time).
  
### CSS

- **Active Cursor Blinking Effect**: The `#para span.active::before` pseudo-element is used to create a blinking cursor effect on the active character.
- **Selection Styling**: `#para::selection` is used to style the background of selected text.
  
### JavaScript

- **Random Paragraph Selection**: A random paragraph is chosen from a predefined list using `Math.random()`.
- **Typing Mechanics**: Tracks character-by-character typing, highlighting the current active character, and calculates typing speed and mistakes.
- **Timer**: A countdown timer of 120 seconds (`maxTime`) is used to track the user's time limit.
  
```javascript
const setParagraph = () => {
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    para.innerText = "";
    paragraphs[randomIndex].split("").forEach(char => {
        para.innerHTML += `<span>${char}</span>`;
    });
    para.querySelectorAll('span')[0].classList.add('active');
};
```

## Customization

### Add New Paragraphs
You can easily add new paragraphs to the app by modifying the `paragraphs` array in the JavaScript file:

```javascript
const paragraphs = [
    "Your new paragraph here...",
    "Another motivational message...",
    ...
];
```

### Adjust Time Limit
To change the time limit, update the `maxTime` variable in the JavaScript:

```javascript
let maxTime = 120;  // Time in seconds
```

## Future Enhancements

- **Leaderboard**: Implement a leaderboard feature to compare typing scores with other users.
- **Mobile Responsiveness**: Improve the UI for better compatibility with mobile devices.
- **Difficulty Levels**: Add different levels of typing difficulty (e.g., longer paragraphs or timed challenges).

## Contributing

Feel free to fork this repository and submit pull requests for new features, bug fixes, or other improvements.
