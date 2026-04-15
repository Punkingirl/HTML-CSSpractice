let likesCounter = 0;
const likeButton = document.getElementById("likesButton");
//a function that increments the likesCounter variable and updates the like button text
const addLike = (incrementValue) => {
  likesCounter += incrementValue;

  //show number of likes on the button, like this: Like (1)
  likeButton.innerText = `Like (${likesCounter})`;

  if (likesCounter === 3) {
    alert("Congratulations! You've reached 3 likes!");
  }
};

likeButton.addEventListener("click", () => {
  addLike(1);
});
