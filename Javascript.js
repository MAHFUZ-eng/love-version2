const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const video = document.getElementById('video');

yesBtn.addEventListener('click', () => {
  video.style.display = 'block';
  video.play();
});

// Move NO button on hover and click
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('click', moveButton);

function moveButton() {
  const containerWidth = window.innerWidth;
  const containerHeight = window.innerHeight;
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * (containerWidth - btnWidth));
  const randomY = Math.floor(Math.random() * (containerHeight - btnHeight));

  noBtn.style.position = 'absolute';
  noBtn.style.left = randomX + 'px';
  noBtn.style.top = randomY + 'px';
}

