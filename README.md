# 🏆 Score Keeper: Track Your Game Night Victories! 🎲

**Keep tabs on your favorite games effortlessly! This digital score keeper is perfect for board games, card games, or any multi-player fun.**

## ✨ Features

* **Intuitive Scoring:** Increment or decrement scores with dedicated buttons for each player.
* **Reset Game:** Quickly clear all scores and start a new round.
* **Responsive Design:** Works seamlessly across desktops, tablets, and smartphones, ensuring your game night runs smoothly wherever you are.

## 🚀 Technologies Used

This project is built with core web technologies:

* **HTML5:** Providing the structure for player scorecards and controls.
* **CSS3 (with SCSS):** Crafting a visually appealing and easy-to-read score display.
  * Utilizes variables for consistent theming and colors.
  * Employs flexible layouts for responsiveness.
* **JavaScript (ES6+):** Manages all scoring logic, player additions/removals, and UI updates.

## 🎮 How to Use

1. **Set Target Score (Optional):** Define the winning score if your game has one.
2. **Adjust Scores:** Use the "+" and "-" buttons next to each player's name to update their score.
3. **Reset:** Click the "Reset" button to clear all scores and prepare for a new game.

## ⚙️ Installation & Setup

To run this score keeper locally:

1. **Clone the Repository:**

    ```bash
    git clone [your-repository-url]
    cd score-keeper-project
    ```

2. **Open `index.html`:** Simply open the `index.html` file in your web browser.

    *(Note: As a client-side application, it does not require a backend server to run.)*

3. **Compile SCSS (if making changes):** If you modify any `.scss` files, you will need a Sass compiler:

    ```bash
    # Example using npm:
    npm install -g sass # If you don't have it
    sass css/main.scss:style.css
    # Or for continuous watching during development:
    sass --watch css/main.scss:style.css
    ```

## 🗺️ Project Structure

.
├── index.html              # Main score keeper page
├── js/
│   └── main.js             # All score keeping logic and DOM manipulation
└── css/
├── main.scss           # Main SCSS file, imports other modules
├── abstracts/          # SCSS variables and mixins
│   ├── _variables.scss
│   └──_mixins.scss
├── base/               # Base styles and resets
│   ├── _reset.scss
│   └──_typography.scss
├── components/         # Reusable UI components (e.g., buttons, player cards)
│   └── _player-card.scss
└── pages/              # Page-specific styles (e.g., overall layout)
└──_score-keeper.scss

## 💡 Future Enhancements

* Set custom player names.
* Save game state to local storage.
* Display game history.
* Animations for score changes.
* Add sound effects.
* Different scoring modes (e.g., countdown, target score).

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

Made with ❤️ by Hazel Cunuder
