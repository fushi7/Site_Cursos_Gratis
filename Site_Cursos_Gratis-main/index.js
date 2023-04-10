const input = document.getElementById("imagem");
const preview = document.getElementById("preview");

input.addEventListener("change", function () {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      preview.setAttribute("src", this.result);
    });

    reader.readAsDataURL(file);
  }
});