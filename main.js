const PROMPT = "What is the square root of nine?";
const SOLUTION = ["3", 3, "three"];

document.getElementById("prompt").innerHTML = PROMPT;

document.getElementById("submit").onclick = check;
function check() {
  let ans = document.getElementById("ans").value;
  let res;
  let color;
  if (SOLUTION.includes(ans.toLowerCase())) {
    res = "Correct!";
    color = "green";
  } else {
    res = "Sorry, wrong!";
    color = "red";
  }
  let resp = document.getElementById("res");
  resp.innerHTML = res;
  resp.setAttribute("class", color);
}
