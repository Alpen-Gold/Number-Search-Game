const randomNumber = (min, max) => {
  return Math.trunc(Math.random() * (max - min) + min);
};
let imkoniyat = document.getElementById("imkoniyat");
let haqiqiyRandom = randomNumber(1, 100);
let winer = document.querySelector("#winer");
winer.style.display = "none";
let lost = document.querySelector("#lost");
lost.style.display = "none";
// let random = document.getElementById("random");
// random.innerHTML = haqiqiyRandom;

let index = 10;
const bosildi = () => {
  const inputNumber = document.getElementById("inputNumber");
  let kirNumber = inputNumber.value;

  console.log(haqiqiyRandom);
  console.log(+kirNumber);

  if (+kirNumber === haqiqiyRandom) {
    let blur = document.getElementById("bg");
    let audioWiner = document.getElementById("audioWiner");
    winer.style.display = "flex";
    blur.style.filter = "blur(5px)";
    blur.style.opacity = "0.4";
    audioWiner.play();
  } else {
    document.getElementById("inputNumber").value = null;
    index--;
  }

  if (index === 0) {
    let audioLost = document.getElementById("audioLost");
    let blur = document.getElementById("bg");
    blur.style.filter = "blur(5px)";
    blur.style.opacity = "0.4";
    lost.style.display = "flex";
    audioLost.play();
  }
  if (+kirNumber < haqiqiyRandom) {
    let yordam = document.querySelector("#yordam");
    yordam.innerHTML = "Siz kiritgan son kichkina";
  } else {
    let yordam = document.querySelector("#yordam");
    yordam.innerHTML = "Siz kiritgan son katta";
  }
  imkoniyat.innerHTML = index;
};

let toptim = document.getElementById("toptim");

toptim.addEventListener("click", bosildi);
