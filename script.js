const iphone = document.getElementById('iphone');

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX - window.innerWidth / 2) / 25;
  const y = -(e.clientY - window.innerHeight / 2) / 25;
  iphone.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
});
