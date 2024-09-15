# TypeThrust

**TypeThrust** is an engaging typing speed game designed to improve your typing skills while providing real-time feedback on your performance. Test your typing speed and accuracy against randomly selected paragraphs and challenge yourself to beat your own records.

## Features

- **Dynamic Text**: Randomly selected paragraphs from a pre-defined set for each game.
- **Real-Time Feedback**: Track your Words Per Minute (WPM), Characters Per Minute (CPM), and mistakes as you type.
- **Blinking Cursor**: Visual indicator with a blinking cursor effect for better focus.
- **Reset Functionality**: Restart the game anytime to improve your performance or practice a new paragraph.

## Technologies Used

- **HTML/CSS**: The layout and styling of the app, including custom animations and highlighting of the active character.
- **JavaScript**: Controls the logic for random paragraph selection, typing mechanics, time tracking, and metric calculations.


## How to Use

1. **Start the Game**: Open the game in your browser. A random paragraph will be displayed.
2. **Type the Paragraph**: Begin typing the text shown in the provided input field.
3. **Track Your Progress**: Observe your WPM, CPM, mistakes, and time remaining in the game.
4. **Reset**: Click the "Reset" button to start a new game.


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


## Demo

![image](https://github.com/user-attachments/assets/17d151a0-7edb-48fa-a9f8-2c79368ff7de)

## Setup and Usage

To run this project locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/typing-practice-app.git
    ```

2. Navigate to the project directory:
    ```bash
    cd typing-practice-app
    ```

3. Open the `index.html` file in your browser:
    ```bash
    open index.html
    ```

4. The app will randomly select a paragraph for you to type. Start typing in the text input box. Your progress will be tracked in real time.


## Contributing

Feel free to fork the repository, make improvements, and submit pull requests. All contributions are welcome!

---

Happy typing! 🚀

---
