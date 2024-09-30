let a = document.querySelector(".randomchislo");
a.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    let b = Math.floor(Math.random() * 1000) + 1;
    a.value = b;
  }
});