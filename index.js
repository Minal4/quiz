const valentineQuestions = [
  {
    id: 1,
    question: "Do you feel happy when you’re with me?",
  },

  {
    id: 2,
    question: "Am I someone you see in your future?",
  },

  {
    id: 3,
    question: "Do you feel loved and cared for by me?",
  },

  {
    id: 4,
    question: "Would you choose me again if we met for the first time today?",
  },

  {
    id: 5,
    question: "Can we keep making more beautiful memories together?",
  },
];

let body = document.body;

const valentineQuizAppends = () => {
  const valentineWraps = document.querySelector(".valentine-form form");
  const questionWraps = document.querySelector(
    ".valentine-form .question-wrap",
  );
  if (valentineWraps !== null) {
    const valentineQuestion = document.querySelector(".valentine-question");
    for (let i = 1; i <= valentineQuestions.length; i++) {
      const div = document.createElement("div");
      div.classList.add("appendClass");
      const cloneNodes = div.cloneNode(true);
      valentineQuestion.append(div);
    }

    const valentineQuestionDivs = document.querySelectorAll(".appendClass");
    valentineQuestionDivs.forEach((item, ind) => {
      item.append(valentineQuestions[ind].question);
    });
  }
};

setTimeout(() => {
  valentineQuizAppends();
}, 500);

const valentineQuiz = () => {
  const valentineSection = document.querySelector(".valentine-form");
  const valentineWraps = document.querySelector(".valentine-form form");
  if (valentineWraps !== null) {
    let count = 1;
    const valentineQuestion = document.querySelectorAll(".appendClass");
    valentineQuestion.forEach((item, ind) => {
      item.style.display = "none";
      valentineQuestion[0].style.display = "block";
    });

    const questionNum = valentineSection.querySelector(".active-question");
    const gifs = valentineSection.querySelectorAll(".gifs img");
    const yesBtn = valentineWraps.querySelectorAll(".action-btns span");
    const noAudio = valentineSection.querySelector(".audio-wrap audio");
    const movieAudio = valentineSection.querySelector(".audio-wrap .movie");
    const rizzAudio = valentineSection.querySelector(".audio-wrap .rizz");
    const tfAudio = valentineSection.querySelector(".audio-wrap .tf");
    const cryAudio = valentineSection.querySelector(".audio-wrap .cry");
    const wthAudio = valentineSection.querySelector(".audio-wrap .wth");
    const asambhavAudio = valentineSection.querySelector(
      ".audio-wrap .asambhav",
    );

    const messaggeAudio = valentineSection.querySelector(
      ".audio-wrap .message",
    );
    const element = document.querySelector(".form-bg-overlay");

    const totalNum = valentineSection.querySelector(".total-question");
    const noBtn = valentineWraps.querySelector(".no-btn");
    totalNum.textContent = valentineQuestions.length;
    noBtn.addEventListener("mouseover", () => {
      noAudio.currentTime = 0;
      // TODO noAudio.play().catch((error) => {
      //   console.log(
      //     "Browser blocked autoplay until user interacts with the page.",
      //   );
      // });
    });

    noBtn.addEventListener("mouseleave", () => {
      noAudio.pause();
    });

    noBtn.addEventListener("click", () => {
      body.classList.add("reject");
      body.classList.remove("accepted");
      gifs[3].style.display = "none";
      rizzAudio.pause();

      if (noBtn.textContent === "No") {
        noBtn.textContent = "Think again!";
        tfAudio.play();
        wthAudio.pause();
        gifs[0].style.display = "block";
        gifs[1].style.display = "none";
        gifs[2].style.display = "none";
        gifs[3].style.display = "none";
        gifs[4].style.display = "none";
        gifs[5].style.display = "none";
      } else if (noBtn.textContent === "Think again!") {
        noBtn.textContent = "seriously";
        tfAudio.pause();
        movieAudio.play();
        gifs[0].style.display = "none";
        gifs[1].style.display = "block";
        gifs[2].style.display = "none";
        gifs[3].style.display = "none";
        gifs[4].style.display = "none";
        gifs[5].style.display = "none";
      } else if (noBtn.textContent === "seriously") {
        noBtn.textContent = "you can change your mind though!";
        cryAudio.play();
        wthAudio.pause();
        gifs[3].style.display = "none";
        gifs[2].style.display = "block";
        gifs[0].style.display = "none";
        gifs[1].style.display = "block";
        gifs[4].style.display = "none";
        gifs[5].style.display = "none";
      }
    });

    // Event for yes button
    yesBtn.forEach((btn, ind) => {
      if (btn.classList.contains("yes-btn")) {
        btn.addEventListener("mouseenter", () => {
          document.body.classList.add("happy");
        });
        btn.addEventListener("mouseleave", () => {
          document.body.classList.remove("happy");
        });
      }
      questionNum.textContent = count;
      let currentTranslate = 0;

      btn.addEventListener("click", () => {
        if (btn.classList.contains("yes-btn")) {
          const audios = valentineSection.querySelectorAll(".audio-wrap audio");
          audios.forEach((audio) => {
            audio.pause();
          });

          body.classList.add("accepted");
          body.classList.remove("reject");
          gifs[0].style.display = "none";
          gifs[1].style.display = "none";
          gifs[2].style.display = "none";
          gifs[5].style.display = "none";
          gifs[3].style.display = "block";

          count++;
          valentineQuestion.forEach((item, index) => {
            questionNum.textContent = count;
            item.style.display = "none";
            noBtn.textContent = "No";
            if (count === index + 1) {
              valentineQuestion[index].style.display = "block";
              rizzAudio.currentTime = 0;
              rizzAudio.play();

              if (count === 3) {
                rizzAudio.currentTime = 0;
                rizzAudio.pause();
                asambhavAudio.play();
                gifs[3].style.display = "none";
                gifs[4].style.display = "block";
              }

              if (count === 4) {
                gifs[3].style.display = "none";
                gifs[4].style.display = "none";
                gifs[5].style.display = "block";
              }
              if (count === 5) {
                rizzAudio.pause();
                wthAudio.play();
                gifs[4].style.display = "none";
                gifs[5].style.display = "none";
              }

              // const maxTranslate = 100;
              // const step = maxTranslate / 6;

              // if (currentTranslate < maxTranslate) {
              //   currentTranslate += step;
              //   element.style.transform = `translateX(${currentTranslate}%)`;
              // }
            } else if (count > valentineQuestion.length) {
              count = null;
              rizzAudio.currentTime = 0;
              rizzAudio.pause();
              body.classList.add("complete");
              rizzAudio.muted;
              messaggeAudio.play();
            }
          });
        }
      });
    });
  }
};

setTimeout(() => {
  valentineQuiz();
}, 500);

const typewriterElement = document.querySelector(".valentine-message p");
const kpop = document.querySelector(".kpop");
const formWrap = document.querySelector(".form-wrap");
const initialBtn = document.querySelector(".click-me button");
const joeGif = document.querySelector(".joe-gif");

const hydAudio = document.querySelector(".audio-wrap .hyd");

initialBtn.addEventListener("click", () => {
  initialBtn.style.display = "none";
  hydAudio.play();
  joeGif.style.display = "block";
  hydAudio.addEventListener("ended", () => {
    setTimeout(() => {
      formWrap.style.display = "inline-flex";
    }, 100);
    joeGif.style.display = "none";
  });
});

const text = `Happy Valentine’s Day ❤️
You make my days brighter, my heart lighter, and my life sweeter
just by being in it.`;

let index = 0;
const speed = 50;

function typeWriter() {
  if (index < text.length) {
    typewriterElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

const observer = new MutationObserver(() => {
  if (body.classList.contains("complete")) {
    observer.disconnect(); // stop watching
    typeWriter();
  }
});

observer.observe(body, { attributes: true });
