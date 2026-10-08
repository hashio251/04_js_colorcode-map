# Color Picker

JavaScriptのDOM操作やイベント処理を学習するために制作した、カラーコードを確認できるカラーピッカーです。

選択した色のカラーコード表示・コピーに加えて、2色から中間色を作成する **Mix Color** 機能を実装しています。

---

## Demo

https://hashio251.github.io/04_js_colorcode-map/index.html

---

## Features

### Color Picker

カラーピッカーから色を選択すると、選択した色をページに反映します。

- 選択したカラーコードを表示
- ページの背景色を選択した色に変更
- カラーコードをクリップボードへコピー

### Mix Color

2つの色を選択し、それぞれのRGB値の平均を計算することで中間色を作成します。

- 2つのカラーを選択
- HEXからRGBへ変換
- RGBそれぞれの平均値を計算
- 計算結果をHEXへ再変換
- 混色結果をページ背景に反映
- 混色後のカラーコードをコピー

---

## How it works

### Color Picker

`input` イベントを使用して、カラーピッカーの値が変更されたタイミングでカラーコードを取得しています。

取得した値を `textContent` と `style.backgroundColor` に反映することで、カラーコードと背景色を変更しています。

```javascript
mainColorPicker.addEventListener('input', () => {
  document.body.style.backgroundColor = mainColorPicker.value;

  mainColorText.textContent =
    `カラーコード : ${mainColorPicker.value}`;
});
```

また、Clipboard APIを使用して、選択したカラーコードをクリップボードへコピーできるようにしています。

```javascript
copyButton.addEventListener('click', async () => {
  await navigator.clipboard.writeText(mainColorPicker.value);

  alert('コピーしました！');
});
```

---

## Mix Color Logic

Mix Colorでは、HEX形式のカラーコードをRGBへ変換し、2色のRGB値から中間値を求めています。

```text
Color A
#ff0000
↓
RGB(255, 0, 0)

+

Color B
#0000ff
↓
RGB(0, 0, 255)

↓

RGBそれぞれの平均値を計算

↓

Mixed Color
```

### 1. HEX → RGB

カラーコードから `#` を取り除き、RGBそれぞれの値を2桁ずつ取得します。

`parseInt()` を使用して16進数から10進数へ変換しています。

```javascript
const hexToRgb = (hex) => {
  const value = hex.replace('#', '');

  return {
    r: parseInt(value.slice(0, 2), 16),
    g: parseInt(value.slice(2, 4), 16),
    b: parseInt(value.slice(4, 6), 16)
  };
};
```

### 2. RGBの平均値を計算

2色のRGB値を取得し、それぞれの平均値を計算します。

```javascript
const r = Math.round((color1.r + color2.r) / 2);
const g = Math.round((color1.g + color2.g) / 2);
const b = Math.round((color1.b + color2.b) / 2);
```

### 3. RGB → HEX

計算したRGB値を16進数へ変換し、再びHEX形式のカラーコードを作成します。

```javascript
const rgbToHex = (r, g, b) => {
  return '#' + [r, g, b]
    .map((value) => value.toString(16).padStart(2, '0'))
    .join('');
};
```

---

## Original Additions

書籍で学習した内容をベースに、学んだJavaScriptを実際に使ってみるため、機能の追加・拡張を行いました。

- カラーコードのコピー機能
- Mix Colorページの追加
- HEX / RGBの変換処理
- 2色のRGB値から中間色を計算する処理
- 混色したカラーコードの表示
- 混色したカラーコードのコピー機能
- 選択色・混色結果に応じた背景色の変更

---

## What I Learned

この制作を通して、JavaScriptによるDOM操作の基本的な流れを学習しました。

```text
HTML要素を取得
↓
イベントを監視
↓
JavaScriptで処理
↓
DOM / CSSへ反映
```

主に使用したJavaScriptの機能・APIは以下です。

- `document.querySelector()`
- `document.querySelectorAll()`
- `addEventListener()`
- `forEach()`
- `textContent`
- `style.backgroundColor`
- アロー関数
- `map()`
- `join()`
- `parseInt()`
- `Math.round()`
- `padStart()`
- `navigator.clipboard.writeText()`

Mix Color機能の制作では、DOM操作だけでなく、HEXとRGBの変換や配列処理、関数への処理分割についても学習しました。

---

## Design

ヘッダー画像は **Adobe Photoshop** を使用して制作しました。

カラーピッカーによってページの背景色が変化するため、どの背景色でもヘッダー画像を表示できるよう、背景を透過したPNG画像として作成しています。

---

## Directory

```text
04_js_colorcode-map/
├── index.html
├── mix-color/
│   └── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── main.js
│   │   └── mix.js
│   └── images/
│       └── parts/
│           └── header.png
└── README.md
```

---

## Technologies

- HTML
- CSS
- JavaScript
- Adobe Photoshop
- Git
- GitHub
- GitHub Pages

---

## Reference

JavaScriptの学習・制作の参考として、以下の書籍を使用しました。

**Mana 著  
『1冊ですべて身につくJavaScript入門講座』  
SBクリエイティブ**

書籍を参考にJavaScriptの基本やDOM操作、イベント処理を学習し、その内容をもとに機能の追加・拡張を行いました。