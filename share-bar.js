const shareBar = document.querySelector("details");

shareBar.addEventListener("click", () => {
  if(shareBar.style.backgroundColor === "gray"){
    shareBar.style.backgroundColor = "red"
  } else {
    shareBar.style.backgroundColor = "gray"
  }
});