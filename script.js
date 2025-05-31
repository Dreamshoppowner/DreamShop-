
(function(){
  emailjs.init("ERbeB2y-lQbvkKU9g");
})();

document.getElementById("order-form").addEventListener("submit", function(event){
  event.preventDefault();
  emailjs.sendForm("service_hxbfxle", "template_r7kmqe1", this)
    .then(() => {
      alert("Order sent successfully!");
      this.reset();
    }, (error) => {
      alert("Failed to send order: " + error);
    });
});

function selectProduct(name, price) {
  document.getElementById("product").value = name;
  document.getElementById("price").value = price;
}

// Stars effect
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for (let i = 0; i < 100; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    speed: Math.random() * 3 + 2,
    radius: Math.random() * 2 + 1
  });
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  for (let star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  }
  requestAnimationFrame(animateStars);
}
animateStars();
