// document.getElementById("spotify").onload(refreshSpotify);
// document.addEventListener("scroll", refreshSpotify);

// var isSpotifyLoading = false;

// async function refreshSpotify() {
//   if (isInViewport(document.getElementById("spotify"))) {
//     while (!isSpotifyLoading) {
//       isSpotifyLoading = true;
//       console.log("started loading");
//       var prom = Promise((resolve, reject) => {
//         setTimeout(async function () {
//           document.getElementById("spotify").src =
//             "https://spotify-github-profile.vercel.app/api/view?uid=dtv9558tisremh6c1beqk9w9k&cover_image=false&theme=default&show_offline=true&background_color=121212&bar_color=53b14f&bar_color_cover=true";
//         }, 5000);
//       });
//       console.log("ended loading");
//       isSpotifyLoading = false;
//     }
//   }
//   console.log("is not in viewport");
// }
const ball = document.querySelector(".cursor-follower");

let mouseX = 0;
let mouseY = 0;

let ballX = 0;
let ballY = 0;

let speed = 0.085;

// Update ball position
function animate() {
  //Determine distance between ball and mouse
  let distX = mouseX - ballX - 20;
  let distY = mouseY - ballY - 20;

  // Find position of ball and some distance * speed
  ballX = ballX + distX * speed;
  ballY = ballY + distY * speed;

  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";

  requestAnimationFrame(animate);
}
animate();

// Move ball with cursor
document.addEventListener("mousemove", function (event) {
  mouseX = event.pageX;
  mouseY = event.pageY;
});

$(document).ready(function () {
  // Transition effect for navbar
  $(window).scroll(function () {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(this).scrollTop() > 30) {
      $(".custom-navbar").addClass("navbar-solid");
    } else {
      $(".custom-navbar").removeClass("navbar-solid");
    }
  });
});

// function isInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }
