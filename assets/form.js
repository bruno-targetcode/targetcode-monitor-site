/* Fallback do formulário: enquanto a chave do Web3Forms não for configurada
   (valor "WEB3FORMS_ACCESS_KEY"), o envio abre o e-mail do visitante (mailto)
   com os campos preenchidos. Com a chave real, o formulário é enviado normalmente
   ao Web3Forms, que redireciona para thanks.html. Sem cookies, sem rastreamento. */
(function () {
  var form = document.getElementById("report-form");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    var key = form.elements["access_key"].value;
    if (key && key !== "WEB3FORMS_ACCESS_KEY") return; // chave real: envio normal
    e.preventDefault();
    if (!form.reportValidity()) return;
    var f = form.elements;
    var body = "Name: " + f["name"].value + "\r\nEmail: " + f["email"].value +
      "\r\nBrand website: " + f["brand_website"].value + "\r\nCompetitors:" +
      "\r\n1. " + f["competitor_1"].value + "\r\n2. " + f["competitor_2"].value +
      "\r\n3. " + f["competitor_3"].value + "\r\n";
    var base = document.getElementById("mailto-fallback").href.split("?")[0];
    window.location.href = base + "?subject=" + encodeURIComponent("Free competitor report") +
      "&body=" + encodeURIComponent(body);
  });
})();
