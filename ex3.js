let name;
let age;
let member;
let coding;
let game;
let robotics;
let club;
let total;
const register = document.getElementById("register");
const results = document.getElementById("results");

register.addEventListener("click", function () {
  name = document.getElementById("name").value;
  age = Number(document.getElementById("age").value);
  member = document.getElementById("member");
  coding = document.getElementById("coding");
  game = document.getElementById("game");
  robotics = document.getElementById("robotics");
  while (true) {
    if (name == "" || age == "") {
      results.innerHTML =
        "one or more pieces of information are missing, please try again";
      break;
    }
    if (!coding.checked && !game.checked && !robotics.checked) {
      results.innerHTML =
        "one or more pieces of information are missing, please try again";
      break;
    }
    if (age < 10) {
      results.innerHTML = "activities are only for ages 10 and up";
      break;
    }
    if (coding.checked) {
      club = "Coding Club";
    } else if (game.checked) {
      club = "Game Design";
    } else if (robotics.checked) {
      club = "Robotics";
    }
    switch (club) {
      case "Coding Club":
        total = 20;
        break;
      case "Game Design":
        total = 25;
        break
      case "Robotics":
        total = 30;
        break
    }
    results.innerHTML = `${name}${member.checked?" is a school member ($5 discount) and ":" "}registered for ${club} ($${total}). The final fee is $${member.checked? total-5:total}`
    break;
}
});
