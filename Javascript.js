const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const video = document.getElementById('video');

yesBtn.addEventListener('click', () => {
  video.style.display = 'block';
  setTimeout(() => {
    video.style.opacity = 1;
    video.style.transform = 'scale(1)';
    video.play();
  }, 100);
});

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('click', moveButton);

function moveButton() {
  const containerWidth = window.innerWidth;
  const containerHeight = window.innerHeight;
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const padding = 50;
  const maxX = containerWidth - btnWidth - padding;
  const maxY = containerHeight - btnHeight - padding;

  const randomX = Math.floor(Math.random() * maxX) + padding / 2;
  const randomY = Math.floor(Math.random() * maxY) + padding / 2;

  noBtn.style.position = 'absolute';
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

