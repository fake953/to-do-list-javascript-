let inputHeader = document.querySelector("#head input");
let listItem = document.querySelector("ul");
let footInput = document.querySelector("#footer input");
// delete to Do items
listItem.addEventListener("click", (e) => {
  if (e.target.className != "btn") return;
  e.target.parentNode.remove();
  if (listItem.children.length <= 1) {
    let result = document.createElement("div");
    result.innerText = "there is no work to do!";
    result.className = "n";
    listItem.appendChild(result);
  }
});
// add to Do items
footInput.addEventListener(
  "input",
  (e) => {
    document
      .querySelector("#footer span")
      .addEventListener("click", (element) => {
        if (document.querySelector("#footer input").value == "") return;
        listItem.append(render(e.target.value));
        footInput.value = "";
        if (document.querySelector("ul").children.length > 0) {
          document.querySelector(".n").remove();
        }
      });
  },
  { once: true }
);
function render(value) {
  let newSpan = document.createElement("span");
  let newBtn = document.createElement("span");
  let newLi = document.createElement("li");

  newBtn.className = "btn";
  newSpan.className = "title";

  newSpan.innerText = value;
  newBtn.innerText = "delete";

  newLi.appendChild(newSpan);
  newLi.appendChild(newBtn);
  return newLi;
}
// search to Do items
inputHeader.addEventListener("input", (e) => {
  const searcheadValue = e.target.value;
  const result = Array.from(listItem.children)
    .filter((element) => {
      element.style.display = "flex";
      return !element.innerText.toLowerCase().includes(searcheadValue.toLowerCase());
    })
    .map((r) => {
      r.style.display = "none";
    });
});
