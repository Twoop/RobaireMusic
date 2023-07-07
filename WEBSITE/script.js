const panel = document.getElementById('panel');

window.addEventListener('mousemove', function(event) {
  if (event.clientX <= 50) {
    panel.classList.add('open');
  } else {
    panel.classList.remove('open');
  }
});

const iconElement = document.getElementById('icon');
const iconName = '271220.png'; 

iconElement.style.backgroundImage = `url('${iconName}')`;

const loader = document.querySelector('.loader');
let isLoading = false;

function toggleLoadingScreen() {
  isLoading = !isLoading;

  if (isLoading) {
    loader.classList.remove('hidden');
    startLoading();
  } else {
    loader.classList.add('hidden');
  }
}

function startLoading() {
  setTimeout(() => {
    toggleLoadingScreen();
  }, 5000);
}

