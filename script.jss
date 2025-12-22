document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("reviewForm");
  const thankYou = document.getElementById("thankYou");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // 🔥 no refresh

    form.style.display = "none";   // hide form
    thankYou.style.display = "block"; // show thank you
  });

});
