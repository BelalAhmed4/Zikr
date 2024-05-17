## README for Azkar and Sebha Application

### Project Overview

This project is a simple web application that displays a list of Islamic Azkar (remembrances) and includes a digital Sebha (prayer beads) counter. The page content is dynamically generated and manipulated using JavaScript. The application leverages SASS for styling and ensures a responsive and interactive user interface.

### Features

- **Display Azkar:** Shows a list of Azkar from the Quran and Sunnah.
- **Digital Sebha Counter:** Provides a digital counter for Tasbeeh (prayer beads).
- **Dynamic Content:** Uses JavaScript to switch between the Azkar list and Sebha counter.
- **Interactive Interface:** Allows decrementing the Azkar counter and incrementing the Sebha counter.
- **Responsive Design:** Ensures compatibility across different devices and screen sizes.
- **SASS for Styling:** Utilizes SASS for structured and maintainable CSS.

### Technologies Used

- **JavaScript**
- **HTML**
- **CSS**
- **SASS**

### File Structure

```
project-root/
├── index.html
├── main.js
├── styles.scss
├── icons/
│   ├── undo.png
│   ├── ...
├── images/
│   ├── ...
```

### JavaScript Code

The main functionality of the application is handled in the `main.js` file. Here is a brief overview of the key JavaScript components:

```javascript
/* Page 1 */
let quranAndSunnah = `
<div class="zekr">
  <h3>(رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ)
  <br><br>
  [سورة البقرة، آية:201].</h3>
  <span class="counter">1</span>
</div>
...
`;

/* Page 2 */
let sebhaBox = `<div class="sebha">
<p class="tasbehCount">0</p>
<h4>سَبِّح</h4>
</div>
<div class="undo"><img src="./icons/undo.png" alt="" /></div>`;

/* Get Elements */
let prepare = document.querySelector(".prepare");
let headerTitle = document.querySelector(".headerTitle");
let azkarSection = document.querySelector(".azkarSection");
let zekrs = document.querySelectorAll(".zekr");
let holders = document.querySelectorAll(".holder");

// Pages
const page1 = document.querySelector(".pageOne");
const page2 = document.querySelector(".pageTwo");

// Check What Section Choosed
function check() {
  if (page2.classList.contains("selected")) {
    azkarSection.innerHTML = sebhaBox;
    headerTitle.textContent = "مسبحة";
    azkarSection.style.justifyContent = "center";
  } else {
    azkarSection.style.justifyContent = null;
    azkarSection.innerHTML = quranAndSunnah;
    headerTitle.textContent = " أذكار  من الكتاب والسُّنّة ";
  }
}

/*  Hide Prepare Section */
setTimeout(function start() {
  prepare.classList.add("hide");
  check();
}, 2000);

// Function to Decrement The Counter In Zekr
function decrementCounter(event) {
  const target = event.target.closest(".zekr");
  if (!target) return;
  const counter = target.querySelector(".counter");
  let counterValue = parseInt(counter.textContent);
  if (counterValue > 0) {
    counterValue--;
    counter.textContent = counterValue;
  }
  if (counterValue === 0) {
    target.classList.add("lowOpacity");
  }
}

azkarSection.addEventListener("click", decrementCounter);

// Sebha Counter Function
azkarSection.addEventListener("click", incrementCounter);
function incrementCounter(event) {
  var element = event.target;
  if (element.classList.contains("sebha")) {
    let tasbehCount = document.querySelector(".tasbehCount");
    tasbehValue = parseInt(tasbehCount.textContent);
    tasbehValue++;
    tasbehCount.textContent = tasbehValue;
    var undoBtn = document.querySelector(".undo");
    undoBtn.addEventListener("click", reset);
    function reset() {
      tasbehCount.innerHTML = "0";
    }
  }
}

// Add Class "selected" To Page Btn When Click
holders.forEach((holder) => {
  holder.addEventListener("click", function () {
    holders.forEach((holder) => {
      holder.classList.remove("selected");
    });
    this.classList.add("selected");
    check();
  });
});
```

### SASS Code

The styling is done using SASS for better structure and maintainability. Below is the reference to the key parts of the `styles.scss` file:

```scss
:root {
  --mainColor: #077667;
  --darkColor: #252525;
  --lightGray: #eee;
  --specialGold: #fbbd00;
  --mainFontfamily: El Messiri;
}

.prepare {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--darkColor);
  width: 100vw;
  height: 100vh;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 30vw;
      max-width: 200px;
    }
    .loadCircle {
      height: 40px;
      width: 40px;
      border-style: solid;
      border-color: transparent var(--lightGray) transparent transparent;
      border-radius: 50%;
      animation: rotate 0.5s linear infinite;
    }
  }
  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
}

.azkarSection {
  display: flex;
  flex-direction: column;
  align-items: center;
  .zekr {
    background-color: var(--mainColor);
    border-left: 3px solid #fbbc00;
    &:active {
      transform: scale(0.96);
      opacity: 0.7;
    }
    .counter {
      background-color: var(--lightGray);
      border-radius: 50%;
    }
  }
  .sebha {
    background-color: var(--mainColor);
    &:active { transform: scale(0.96); }
  }
}

.footer {
  background-color: var(--darkColor);
  .holder:hover {
    background-color: #474747d2;
  }
}
```

### Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```
2. **Navigate to the project directory:**
   ```bash
   cd project-directory
   ```
3. **Open `index.html` in your browser to view the application.**

### Usage

- Click on a Zekr to decrement its counter.
- Switch to the Sebha counter by selecting the appropriate section.
- Use the undo button to reset the Sebha counter.

### Acknowledgements

- The application uses [El Messiri font](https://fonts.google.com/specimen/El+Messiri) for typography.

### License

This project is licensed under the MIT License.

For any further details or contributions, please refer to the project repository.
