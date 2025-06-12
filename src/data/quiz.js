const quizData = [
  {
    question: "Reactの仮想DOMとは何ですか？",
    options: [
      "ブラウザのDOMを直接操作する仕組み",
      "JavaScriptで表現された軽量なDOMのコピー",
      "サーバー上のデータベース",
      "CSSのスタイル管理方法"
    ],
    answerIndex: 1
  }, {
    question: "Reactコンポーネントの状態(state)を管理するためのフックはどれ？",
    options: [
      "useEffect",
      "useState",
      "useContext",
      "useRef"
    ],
    answerIndex: 1
  }, {
    question: "propsについて正しい説明はどれ？",
    options: [
      "コンポーネント内でのみ変更できる値",
      "親コンポーネントから子コンポーネントに渡す値",
      "Reactのビルトイン関数",
      "スタイルを適用するための属性"
    ],
    answerIndex: 1
  }, {
    question: "useEffectフックの主な用途は？",
    options: [
      "状態の初期化",
      "副作用の処理",
      "スタイルの適用",
      "イベントのバブリング"
    ],
    answerIndex: 1
  }, {
    question: "JSXについて正しい説明はどれ？",
    options: [
      "JavaScriptの拡張構文で、HTMLのように記述できる",
      "Reactの状態管理ライブラリ",
      "CSSを管理する仕組み",
      "Node.jsのフレームワーク"
    ],
    answerIndex: 0
  }, {
    question: "useStateの初期値を設定する正しい方法はどれ？",
    options: [
      "useState()",
      "useState(null)",
      "useState(初期値)",
      "useState = 初期値"
    ],
    answerIndex: 2
  }, {
    question: "Reactでイベントハンドラを設定する正しい方法はどれ？",
    options: [
      "onClick={handleClick}",
      "onclick=\"handleClick()\"",
      "onClick: handleClick()",
      "click={handleClick}"
    ],
    answerIndex: 0
  }, {
    question: "JavaScriptのconstで宣言した変数の特徴は？",
    options: [
      "再代入できる",
      "再宣言できる",
      "再代入できない",
      "グローバル変数になる"
    ],
    answerIndex: 2
  }, {
    question: "配列のmapメソッドの主な用途は？",
    options: [
      "配列をフィルタリングする",
      "配列の各要素を変換して新しい配列を作る",
      "配列をソートする",
      "配列の要素を削除する"
    ],
    answerIndex: 1
  }, {
    question: "Reactでコンポーネントをimportする正しい方法はどれ？",
    options: [
      "import Button from './components/Button'",
      "require('./components/Button')",
      "import './components/Button'",
      "include './components/Button'"
    ],
    answerIndex: 0
  }, {
    question: "Reactでpropsを受け取る関数コンポーネントの書き方はどれ？",
    options: [
      "function MyComponent(props) { ... }",
      "function MyComponent { ... }",
      "const MyComponent = () => { ... }",
      "function MyComponent = (props) { ... }"
    ],
    answerIndex: 0
  }
]
export default quizData;