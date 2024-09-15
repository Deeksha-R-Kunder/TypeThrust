const paragraphs = [
  "Every great achievement begins with a single step, often taken in uncertainty. It's the courage to begin that sets you apart. Even when the road ahead seems long and filled with challenges, remember that persistence is what turns dreams into reality. Keep moving forward, no matter how slow, because every step brings you closer to your goal.",
  "Challenges are not there to break you but to mold you into the person you're meant to be. Each difficulty you overcome strengthens your resolve and sharpens your skills. Embrace these moments as opportunities to grow and learn, knowing that they are the stepping stones to your ultimate success.",
  "Success is not a destination, but a journey built on daily effort and small wins. It's easy to feel overwhelmed when you focus only on the end result. Instead, celebrate the small victories, because they accumulate into something much greater. Trust the process, stay consistent, and the results will follow.",
  "There will be days when doubt creeps in, when the voices around you or in your mind tell you that you're not enough. But remember, you are more capable than you realize. The strength to overcome adversity lies within you, waiting to be unleashed. Believe in yourself, push past the fear, and let your actions reflect your true potential.",
  "Progress often feels invisible in the moment, but it's happening. Like seeds planted in the soil, growth takes time before it becomes visible. Keep watering your dreams with effort and determination, even on the days when nothing seems to change. In time, the fruits of your labor will emerge, and you'll realize the power of persistence.", "Education is not just about memorizing facts, it's about unlocking your potential and discovering how far you can push your limits. Every class, every assignment, every exam is a chance to grow and sharpen your mind. Stay curious, stay determined, and remember that the knowledge you gain today will shape the opportunities you seize tomorrow.", "The journey through school is not always easy, but it's preparing you for greater challenges in life. When things get tough, know that resilience is built in these moments. Don't be discouraged by setbacks; they are temporary and can be overcome with hard work and a positive attitude. Keep believing in your ability to adapt and thrive.", "Studying can sometimes feel overwhelming, but success is a result of small, consistent efforts. Break down your tasks, focus on one step at a time, and keep moving forward. Remember, it's not about being perfect; it's about progress. Every hour you put into your studies is an investment in your future, and it will pay off.", "Your time as a student is your time to experiment, to fail, and to learn from it all. Don't be afraid to make mistakes—they are an essential part of growth. What matters most is that you learn from those experiences and come back stronger. Stay focused on your goals, trust in your process, and know that every challenge is teaching you something valuable.", "Success in school is not just about intelligence; it's about discipline, perseverance, and the willingness to put in the work. You have the power to achieve great things, no matter where you start. Set your sights high, work hard, and believe in the limitless potential within you. Every hour you dedicate to learning brings you one step closer to realizing your dreams."
];
const para = document.getElementById("para");
const userinput = document.querySelector(".textInput");
const resetbtn = document.querySelector(".containerin button");
const totalTime = document.querySelector(".time .value");
const totalWpm = document.querySelector(".wpm .value");
const totalMistake = document.querySelector(".mistake .value");
const totalCpm = document.querySelector(".cpm .value");

let timer;
let maxTime = 120;
let timeRemaining = maxTime;
let charIndex = 0;
let mistakes = 0;
let isTyping = 0;

const setParagraph = () => {
  const randomIndex = Math.floor(Math.random() * paragraphs.length);
  para.innerText = "";
  paragraphs[randomIndex].split("").forEach((char) => {
    //console.log(char);
    para.innerHTML += `<span>${char}</span>`;
  });

  para.querySelectorAll("span")[0].classList.add("active");

  document.addEventListener("keydown", () => userinput.focus());
  para.addEventListener("click", () => user.focus());

  totalMistake.innerText = 0;
  totalCpm.innerText = 0;
  totalWpm.innerText = 0;
  totalTime.innerText = timeRemaining;
};
const startTyping = () => {
  let characters = para.querySelectorAll("span");
  //console.log(characters);
  let typedChar = userinput.value.split("")[charIndex];
  if (charIndex < characters.length - 1 && timeRemaining > 0) {
    if (!isTyping) {
      // 0 or false
      timer = setInterval(startTimer, 1000);
      isTyping = 1;
    }
    if (typedChar == null) {
      if (charIndex > 0) {
        charIndex--;
        if (characters[charIndex].classList.contains("Incorrect")) {
          mistakes--;
        }
        characters[charIndex].classList.remove("Incorrect", "Correct");
      }
    } else {
      if (typedChar == characters[charIndex].innerText) {
        characters[charIndex].classList.add("Correct");
      } else {
        characters[charIndex].classList.add("Incorrect");
        mistakes++;
      }
      charIndex++;
    }

    characters.forEach((char) => {
      char.classList.remove("active");
    });
    characters[charIndex].classList.add("active");

    //wpm = (no. correctlyTyped char) / (avg no. of char per word) and dividing that result by hte time it took to type those words and then multiplying the result by 60 to convert to minutes

    let wpm = Math.round(
      ((charIndex - mistakes) / 5 / (maxTime - timeRemaining)) * 60
    );
    wpm = wpm < 0 || !wpm || wpm == Infinity ? 0 : wpm;
    totalWpm.innerText = wpm;
    totalCpm.innerText = charIndex - mistakes;
    totalMistake.innerText = mistakes;
  } else {
    clearInterval(timer);
    isTyping = false;
  }
};

const startTimer = () => {
  if (timeRemaining > 0) {
    timeRemaining--;
    totalTime.innerText = timeRemaining;
    let wpm = Math.round(
      ((charIndex - mistakes) / 5 / (maxTime - timeRemaining)) * 60
    );
    totalWpm.innerHTML = wpm;
  } else {
    clearInterval(timer);
    isTyping = false;
  }
};
const resetGame = () => {
  setParagraph();
  clearInterval(timer);
  timeRemaining = maxTime;
  charIndex = 0;
  isTyping = 0;
  userinput.value = "";
  totalTime.innerText = timeRemaining;
  totalWpm.innerText = 0;
  totalCpm.innerText = 0;
  totalMistake.innerText = 0;
};

setParagraph();
resetbtn.addEventListener("click", resetGame);
userinput.addEventListener("input", startTyping);
