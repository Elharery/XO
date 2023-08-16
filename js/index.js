const headerX = document.querySelector("header .x");
const headerO = document.querySelector("header .o");

const resultsX = document.querySelector("results .x");
const resultsO = document.querySelector("results .o");

const row1 = document.getElementById("row1");
const row2 = document.getElementById("row2");
const row3 = document.getElementById("row3");

const box = document.querySelectorAll(".box");

const box1 = document.getElementById("box-1");
const box2 = document.getElementById("box-2");
const box3 = document.getElementById("box-3");
const box4 = document.getElementById("box-4");
const box5 = document.getElementById("box-5");
const box6 = document.getElementById("box-6");
const box7 = document.getElementById("box-7");
const box8 = document.getElementById("box-8");
const box9 = document.getElementById("box-9");

// box.forEach((e) => {
//   e.classList.toggle("active")
// })
// document.addEventListener("click", (e) => {
//   headerX.classList.toggle("active")
//   headerO.classList.toggle("active")
//   // // resultsX.classList.toggle("active")
//   if (headerX.classList.contains("active")) {
//     e.target.innerHTML = "O"
//   } else {
//     e.target.innerHTML = "X"
//   }
// })

box.forEach((e) => {
  e.addEventListener("click", (e) => {
    box.forEach(() => {
      if (e.currentTarget.innerHTML === "") {
        headerX.classList.toggle("active");
        headerO.classList.toggle("active");
        if (headerX.classList.contains("active")) {
          e.currentTarget.style.color = "#000";
          e.currentTarget.innerHTML = "O";
        } else {
          e.currentTarget.style.color = "#fff";
          e.currentTarget.innerHTML = "X";
        }
      }
      console.log(e.currentTarget);
    });
    if (
      box1.textContent === box2.textContent &&
      box1.textContent === box3.textContent
    ) {
      if (
        box1.textContent === "X" &&
        box2.textContent === "X" &&
        box3.textContent === "X"
      ) {
        successGameX();
      }
      if (
        box1.textContent === "O" &&
        box2.textContent === "O" &&
        box3.textContent === "O"
      ) {
        successGameO();
      }
      console.log("Yes box1 = box2 = box3");
    }
    if (
      box4.textContent === box5.textContent &&
      box4.textContent === box6.textContent
    ) {
      if (
        box4.textContent === "X" &&
        box5.textContent === "X" &&
        box6.textContent === "X"
      ) {
        successGameX();
      }
      if (
        box4.textContent === "O" &&
        box5.textContent === "O" &&
        box6.textContent === "O"
      ) {
        successGameO();
      }
      console.log("Yes box4 = box5 = box6");
    }
    if (
      box7.textContent === box8.textContent &&
      box7.textContent === box9.textContent
    ) {
      if (
        box7.textContent === "X" &&
        box8.textContent === "X" &&
        box9.textContent === "X"
      ) {
        successGameX();
      }
      if (
        box7.textContent === "O" &&
        box8.textContent === "O" &&
        box9.textContent === "O"
      ) {
        successGameO();
      }
      console.log("Yes box7 = box68 = box9");
    }
    if (
      box1.textContent === box4.textContent &&
      box1.textContent === box7.textContent
    ) {
      if (
        box1.textContent === "X" &&
        box4.textContent === "X" &&
        box7.textContent === "X"
      ) {
        successGameX();
      }
      if (
        box1.textContent === "O" &&
        box4.textContent === "O" &&
        box7.textContent === "O"
      ) {
        successGameO();
      }
      console.log("Yes box1 = box4 = box7");
    }
    if (
      box1.textContent === box5.textContent &&
      box1.textContent === box9.textContent
    ) {
      if (box1.textContent === "X") {
        successGameX();
      }
      if (box1.textContent === "O") {
        successGameO();
      }
      console.log("Yes box1 = box5 = box9");
    }
    if (
      box2.textContent === box5.textContent &&
      box2.textContent === box8.textContent
    ) {
      if (
        box2.textContent === "X" &&
        box5.textContent === "X" &&
        box8.textContent === "X"
      ) {
        successGameX();
      }
      if (
        box2.textContent === "O" &&
        box5.textContent === "O" &&
        box8.textContent === "O"
      ) {
        successGameO();
      }
      console.log("Yes box2 = box5 = box8");
    }
    if (
      box3.textContent === box5.textContent &&
      box3.textContent === box7.textContent
    ) {
      if (
        box3.textContent === "X" &&
        box5.textContent === "X" &&
        box7.textContent === "X"
      ) {
        successGameX();
      }
      if (
        box3.textContent === "O" &&
        box5.textContent === "O" &&
        box7.textContent === "O"
      ) {
        successGameO();
      }
      console.log("Yes box3 = box5 = box7");
    }
    if (
      box3.textContent === box6.textContent &&
      box3.textContent === box9.textContent
    ) {
      if (
        box3.textContent === "X" &&
        box6.textContent === "X" &&
        box9.textContent === "X"
      ) {
        successGameX();
      }
      if (
        box3.textContent === "O" &&
        box6.textContent === "O" &&
        box9.textContent === "O"
      ) {
        successGameO();
      }
      console.log("Yes box3 = box6 = box9");
    }
    if (
      box3.textContent === box8.textContent &&
      box3.textContent === box9.textContent
    ) {
      if (
        box3.textContent === "X" &&
        box8.textContent === "X" &&
        box9.textContent === "X"
      ) {
        successGameX();
      }
      if (
        box3.textContent === "O" &&
        box8.textContent === "O" &&
        box9.textContent === "O"
      ) {
        successGameO();
      }
      console.log("Yes box3 = box8 = box9");
    }
  });
});

function successGameX() {
  document.getElementById("result-x").innerHTML++;
  let div = document.createElement("div");
  div.className = "win";
  let text = document.createElement("div");
  text.className = "text";
  let h3 = document.createElement("h3");
  let h3T = document.createTextNode("X Win");
  h3.appendChild(h3T);
  div.appendChild(text);
  text.appendChild(h3);
  document.body.appendChild(div);
  setTimeout(() => {
    div.remove();
    box[0].innerHTML = "";
    box[1].innerHTML = "";
    box[2].innerHTML = "";
    box[3].innerHTML = "";
    box[4].innerHTML = "";
    box[5].innerHTML = "";
    box[6].innerHTML = "";
    box[7].innerHTML = "";
    box[8].innerHTML = "";
    headerX.classList.toggle("active");
    headerO.classList.toggle("active");
  }, 2000);
}
function draw() {
  let div = document.createElement("div");
  div.className = "win";
  let text = document.createElement("div");
  text.className = "text";
  let h3 = document.createElement("h3");
  let h3T = document.createTextNode("Draw");
  h3.appendChild(h3T);
  div.appendChild(text);
  text.appendChild(h3);
  document.body.appendChild(div);
  setTimeout(() => {
    div.remove();
    box[0].innerHTML = "";
    box[1].innerHTML = "";
    box[2].innerHTML = "";
    box[3].innerHTML = "";
    box[4].innerHTML = "";
    box[5].innerHTML = "";
    box[6].innerHTML = "";
    box[7].innerHTML = "";
    box[8].innerHTML = "";
  }, 2000);
}

function successGameO() {
  document.getElementById("result-o").innerHTML++;
  let div = document.createElement("div");
  div.className = "win";
  let text = document.createElement("div");
  text.className = "text";
  let h3 = document.createElement("h3");
  let h3T = document.createTextNode("O Win");
  h3.appendChild(h3T);
  div.appendChild(text);
  text.appendChild(h3);
  document.body.appendChild(div);
  setTimeout(() => {
    div.remove();
    box[0].innerHTML = "";
    box[1].innerHTML = "";
    box[2].innerHTML = "";
    box[3].innerHTML = "";
    box[4].innerHTML = "";
    box[5].innerHTML = "";
    box[6].innerHTML = "";
    box[7].innerHTML = "";
    box[8].innerHTML = "";
    headerX.classList.toggle("active");
    headerO.classList.toggle("active");
  }, 2000);
}

document.querySelector("button").onclick = () => {
  location.reload();
};
