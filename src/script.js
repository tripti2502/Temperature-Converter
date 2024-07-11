let cel = document.getElementById("cel");
let far = document.getElementById("far");


cel.addEventListener("input", function () {
  let c = this.value;
  let f = (c * 9) / 5 + 32;
  if (!Number.isInteger(f)) {
    f = f.toFixed(3);
  }
  far.value = f;
});

far.addEventListener("input", function () {
  let f = this.value;
  let c = (f * 9) / 5 + 32;
  if (!Number.isInteger(c)) {
    c = c.toFixed(3);
  }
  cel.value = c;
});
