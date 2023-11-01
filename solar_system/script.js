const solarSystem = document.querySelector('.solar-system');
const planet = document.querySelector('.planet');
let angle = 0;

function animate() {
  angle += 0.01; // Adjust for speed
  const x = 160 * Math.cos(angle);
  const y = 160 * Math.sin(angle);
  solarSystem.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
  planet.style.transform = `translateX(-50%) rotate(${angle}rad)`;
  requestAnimationFrame(animate);
}

animate();
