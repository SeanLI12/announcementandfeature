function loadAnimation(player) {
  return new Promise(resolve => {
    player.load("../../animations/data.json");
    player.addEventListener("ready", () => {
      resolve('animation1 loaded');
    });
  });
}

const player = document.querySelector(".lottie");
async function asyncCall() {
  await loadAnimation(player);
  player.play();

}

asyncCall();