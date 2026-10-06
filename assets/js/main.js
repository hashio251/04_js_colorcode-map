const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

const colorBg = () => {
  document.body.style.backgroundColor = color.value;

  if (color.value === '#ffffff') {
    text.textContent = `カラーコード : ${color.value} (white)`;
  } else if (color.value === '#000000') {
    text.textContent = `カラーコード : ${color.value} (black)`;
  } else if (color.value === '#ff0000') {
    text.textContent = `カラーコード : ${color.value} (red)`;
  } else if (color.value === '#00ff00') {
    text.textContent = `カラーコード : ${color.value} (green)`;
  } else if (color.value === '#0000ff') {
    text.textContent = `カラーコード : ${color.value} (blue)`;
  } else {
    text.textContent = `カラーコード : ${color.value}`;
  }
}

color.addEventListener('input', colorBg);