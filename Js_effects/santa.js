window.addEventListener("DOMContentLoaded", () => {
  const santa = document.createElement("img");
  santa.src = "./Images/santa.png";
  santa.style.position = "absolute";
  santa.style.width = "220px";
  santa.style.left = "100px";
  santa.style.top = "100px";
  santa.style.pointerEvents = "none";
  santa.style.willChange = "transform, left, top";
  document.body.appendChild(santa);

  let x = 100;
  let y = 100;

  let dx = (Math.random() - 0.5) * 2;
  let dy = (Math.random() - 0.5) * 2;

  const speed = 2.3;

  function animate() {
    const maxX = document.documentElement.scrollWidth - santa.offsetWidth;
    const maxY = document.documentElement.scrollHeight - santa.offsetHeight;

    x += dx * speed;
    y += dy * speed;

    if (x <= 0 || x >= maxX) dx *= -1;
    if (y <= 0 || y >= maxY) dy *= -1;

    santa.style.left = `${x}px`;
    santa.style.top = `${y}px`;

    dx += (Math.random() - 0.5) * 0.01;
    dy += (Math.random() - 0.5) * 0.01;

    const len = Math.hypot(dx, dy);
    dx /= len;
    dy /= len;

    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    santa.style.transform = `rotate(${angle}deg)`;

    requestAnimationFrame(animate);
  }

  animate();
});

