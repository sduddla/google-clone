const input = document.querySelector('.input');

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const website = encodeURIComponent(input.value);
    window.location.href = 'https://www.google.com/search?q=' + website;
  }
});

window.addEventListener('pageshow', function () {
  input.value = '';
});
