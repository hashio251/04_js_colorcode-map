const mainColorPicker = document.querySelector('#colorPicker');
const mainColorText = document.querySelector('#colorText');
const copyButton = document.querySelector('.copy-btn');

// カラーコードを表示させる
if (mainColorPicker) {
  mainColorPicker.addEventListener('input', () => {
    document.body.style.backgroundColor = mainColorPicker.value;
    mainColorText.textContent =
      `カラーコード : ${mainColorPicker.value}`;
      copyButton.style.display = 'inline-block';
      copyButton.style.marginTop = '1.5em';
  });
}

// 出力されたカラーコードをコピーする
if (copyButton) {
  copyButton.addEventListener('click', async () => {
    await navigator.clipboard.writeText(mainColorPicker.value);
    alert('コピーしました！');
  })
  
}
