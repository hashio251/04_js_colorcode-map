const mainColorPicker = document.querySelector('#colorPicker');
const mainColorText = document.querySelector('#colorText');

if (mainColorPicker) {
  mainColorPicker.addEventListener('input', () => {
    document.body.style.backgroundColor = mainColorPicker.value;
    mainColorText.textContent =
      `カラーコード : ${mainColorPicker.value}`;
  });
}