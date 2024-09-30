setInterval(() => {
    let a = document.querySelector(".aa")
    let b = new Date();
    let soat = b.getHours()
    let minut = b.getMinutes()
    let sicund = b.getSeconds()
    document.querySelector(".clock").innerHTML = `${soat}:${minut}:${sicund}`;
    a.style.color = "blue",
    a.style.fontSize = "50px";
  });