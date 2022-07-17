// copy to clipboard

const shareButton = document.querySelector(".button-group .share");
console.log(shareButton);

shareButton.addEventListener("click", (e) => {
  let value = e.currentTarget.name;
  navigator.clipboard.writeText(value);

  console.log("Copied Text: " + value);
});
