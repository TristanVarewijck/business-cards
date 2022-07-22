// copy to clipboard
const shareButton = document.querySelector(".button-group .share");
const copieMessage = document.querySelector(".copied-message");

//
shareButton.addEventListener("click", (e) => {
  let value = e.currentTarget.name;
  navigator.clipboard.writeText(value);

  // pop-up
  copieMessage.classList.remove("hidden");
  copieMessage.classList.add("show");
  setTimeout(myGreeting, 2000);
  function myGreeting() {
    copieMessage.classList.remove("show");
    copieMessage.classList.add("hidden");
  }
});
