const colors = document.querySelectorAll('.color-picker');
const texts = document.querySelectorAll('.color-text');
const circles = document.querySelectorAll('.circle');

const firstColor = document.querySelector('.first-color .color-picker');
const secondColor = document.querySelector('.second-color .color-picker');

const mixButton = document.querySelector('#mixColorBg');


colors.forEach((color, index) => {
  color.addEventListener('input', () => {
    circles[index].style.backgroundColor = color.value;
    texts[index].textContent = `カラーコード : ${color.value}`;
  });
});


const hexToRgb = (hex) => {
  const value = hex.replace('#', '');

  return {
    r: parseInt(value.slice(0, 2), 16),
    g: parseInt(value.slice(2, 4), 16),
    b: parseInt(value.slice(4, 6), 16)
  };
};


const rgbToHex = (r, g, b) => {
  return '#' + [r, g, b]
    .map((value) => value.toString(16).padStart(2, '0'))
    .join('');
};


const mixColorBg = () => {
  const color1 = hexToRgb(firstColor.value);
  const color2 = hexToRgb(secondColor.value);

  const r = Math.round((color1.r + color2.r) / 2);
  const g = Math.round((color1.g + color2.g) / 2);
  const b = Math.round((color1.b + color2.b) / 2);

  const mixedColor = rgbToHex(r, g, b);

  document.body.style.backgroundColor = mixedColor;

  console.log(mixedColor);
};


if (mixButton) {
  mixButton.addEventListener('click', mixColorBg);
}


const mainColorPicker = document.querySelector('#colorPicker');
const mainColorText = document.querySelector('#colorText');

if (mainColorPicker) {
  mainColorPicker.addEventListener('input', () => {
    document.body.style.backgroundColor = mainColorPicker.value;
    mainColorText.textContent =
      `カラーコード : ${mainColorPicker.value}`;
  });
}