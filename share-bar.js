const shareButtons = document.querySelectorAll(".arrow-share-icon");
const shareBar = document.querySelector(".share-bar");
const shareArrowButton = document.querySelector(".card__arrow-share");

shareButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    if(shareBar.classList.contains("share-bar-open")){
      shareBar.classList.remove("share-bar-open");
      shareArrowButton.style.backgroundColor = "hsl(210, 46%, 95%)";
      shareArrowButton.style.color = "hsl(217, 19%, 35%)";
      console.log(shareArrowButton);
    } else {
      shareBar.classList.add("share-bar-open");
      shareArrowButton.style.backgroundColor = "hsl(217, 19%, 35%)";
      shareArrowButton.style.color = "white";
    }
  })
});