const main_section = document.getElementById("main_section");
const start_game_btn = document.getElementById("start_game_btn");

let random_number;

start_game_btn.addEventListener("click", () => {
  random_number = Math.floor(Math.random() * 100) + 1;
  console.log(random_number);
});

start_game_btn.classList.add("start_game_btn:hover");

const check_guess_btn = document.getElementById("check_guess_btn");
const user_guess_number = document.getElementById("input_number");

let new_p = document.createElement("p");
new_p.textContent = " ";
new_p.style.color = "white";
new_p.style.marginLeft = "36%";
new_p.style.fontSize = "35px";
main_section.appendChild(new_p);

check_guess_btn.addEventListener("click", () => {
  let difference = Math.abs(user_guess_number.value - random_number);

  if (
    (user_guess_number.value > random_number && difference > 20) ||
    (user_guess_number.value < random_number && difference > 20)
  ) {
    new_p.textContent = "You are too far! try again";
    // main_section.appendChild(new_p_high);
  } else if (
    (user_guess_number.value > random_number && difference <= 20) ||
    (user_guess_number.value < random_number && difference <= 20)
  ) {
    // const new_p_close = document.createElement("p");
    new_p.textContent = "You are close! try again";
    // main_section.appendChild(new_p_close);
  } else if (Number(user_guess_number.value) === random_number) {
    // const success = document.createElement("p");
    new_p.textContent = "YOU MADE IT";
    new_p.style.marginLeft = "40%";
    new_p.style.color = "green";
    // main_section.appendChild(success);
  }
});
