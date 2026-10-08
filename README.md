# Color Picker

JavaScriptのDOM操作やイベント処理を学習するために制作した、
カラーコードを確認・コピーできるカラーピッカーです。

2色を選択して、その中間色を作成するMix Color機能も追加しています。

---

## Demo

https://hashio251.github.io/04_js_colorcode-map/index.html

---

## Features

### Color Picker

カラーピッカーから色を選択すると、以下の処理を行います。

- カラーコードを表示
- ページ背景色を選択した色に変更
- カラーコードをクリップボードへコピー

---

### Mix Color

2つのカラーを選択し、それぞれのRGB値の中間値を計算することで、
2色を混ぜたカラーを作成できます。

混色後は、以下の処理を行います。

- 混ぜた色をページ背景に表示
- 混色後のカラーコードを表示
- 混色したカラーコードをクリップボードへコピー

---

## How it works

### Color Picker

`input` イベントを使用して、
カラーピッカーの値が変更されたタイミングでカラーコードを取得しています。

取得した値を使用して、

- `textContent` によるカラーコード表示
- `style.backgroundColor` による背景色変更

を行っています。

```javascript
mainColorPicker.addEventListener('input', () => {
  document.body.style.backgroundColor = mainColorPicker.value;

  mainColorText.textContent =
    `カラーコード : ${mainColorPicker.value}`;
});
```

また、Clipboard APIを使用して、
表示したカラーコードをコピーできるようにしています。

```javascript
copyButton.addEventListener('click', async () => {
  await navigator.clipboard.writeText(mainColorPicker.value);

  alert('コピーしました！');
});
```

---

## Mix Color Logic

Mix Colorでは、
HEX形式のカラーコードを一度RGBへ変換しています。

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

HEXからRGBへの変換は、
カラーコードを2桁ずつ分割し、
16進数から10進数へ変換しています。

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

2色のRGB値を取得した後、
それぞれの平均を計算しています。

```javascript
const r = Math.round((color1.r + color2.r) / 2);
const g = Math.round((color1.g + color2.g) / 2);
const b = Math.round((color1.b + color2.b) / 2);
```

最後にRGB値を再びHEX形式へ変換し、
混色結果として表示しています。

```javascript
const rgbToHex = (r, g, b) => {
  return '#' + [r, g, b]
    .map((value) => value.toString(16).padStart(2, '0'))
    .join('');
};
```

---

## JavaScript

この制作では、主に以下のJavaScriptを使用しました。

- `document.querySelector()`
- `document.querySelectorAll()`
- `addEventListener()`
- `forEach()`
- DOM操作
- `textContent`
- `style.backgroundColor`
- 関数
- アロー関数
- 配列
- `map()`
- `join()`
- `parseInt()`
- `Math.round()`
- `padStart()`
- `navigator.clipboard.writeText()`

---

## What I learned

この制作を通して、
HTMLの要素をJavaScriptから取得し、
ユーザーの操作に応じて表示を変更するDOM操作について学習しました。

特に、

```javascript
document.querySelector()
```

や、

```javascript
addEventListener()
```

を使用することで、

```text
HTMLの要素を取得
↓
イベントを監視
↓
JavaScriptでHTMLやCSSを変更
```

という基本的な流れを理解することができました。

また、Mix Color機能を追加することで、
単純なDOM操作だけではなく、

- HEXとRGBの変換
- 数値計算
- 関数への処理分割
- 複数要素の取得と操作
- 配列処理

についても学習しました。

---

## Original additions

JavaScriptの学習内容をもとに、
以下の機能を追加・実装しました。

- 選択したカラーコードのコピー機能
- Mix Colorページの追加
- 2色のRGB値から中間色を計算する処理
- 混色したカラーコードの表示
- 混色したカラーコードのコピー機能
- 選択色に合わせた背景色の変更
- 混色結果に合わせた背景色の変更

---

## Directory

```text
04_js_colorcode-map/
├── index.html
│
├── mix-color/
│   └── index.html
│
├── assets/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   ├── main.js
│   │   └── mix.js
│   │
│   └── images/
│       └── parts/
│           └── header.png
│
└── README.md
```

---

## Technologies

- HTML
- CSS
- JavaScript
- Git
- GitHub
- GitHub Pages

---

## Reference

JavaScriptの学習・制作の参考として、
以下の書籍を使用しました。

**Mana 著  
『1冊ですべて身につくJavaScript入門講座』  
SBクリエイティブ**

書籍を参考にJavaScriptの基本やDOM操作、
イベント処理について学習しながら制作しました。

その後、学習した内容をもとに、
カラーコードのコピー機能やMix Color機能などを追加し、
自分で機能の拡張を行っています。

---

## About this project

この作品は、
JavaScriptのDOM操作を実際に動かしながら理解することを目的として制作しました。

色を選択することで画面が変化するという
視覚的に結果が分かりやすい題材を使用することで、

```text
取得
↓
イベント
↓
処理
↓
画面へ反映
```

というJavaScriptの基本的な流れを確認できる作品にしています。