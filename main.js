var converter = document.querySelector(".btn");
var text = document.querySelector(".paragraph");


converter.addEventListener("click", function (evt) {
  evt.preventDefault();
  var currency = parseFloat(document.querySelector(".currency").value.trim(), 10);
  var sum = parseFloat(document.querySelector('.summa').value.trim(), 10);

  if (currency <= 0) {
    alert("valyutani tanlang");
  }
  if (sum < 0) {
    text.textContent = "Musbat son kiriting";
    text.style.color = "red";
  }
  else {
    var output = sum * currency;
    text.textContent = output + " so'm";
    text.style.color = "#000";
  }

});










