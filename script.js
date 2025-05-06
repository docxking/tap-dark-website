
let slaps = 0;
const slapButton = document.getElementById('slapButton');
const slapCount = document.getElementById('slapCount');

slapButton.addEventListener('click', () => {
  slaps++;
  slapCount.textContent = slaps + ' SLAPS DELIVERED';
});
