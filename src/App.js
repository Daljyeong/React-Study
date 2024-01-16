import Home from "./pages/Home";

function App() {
  return (
    // 아래 부분이 html 태그처럼 보이지만, jsx 문법임(xml임) => 따라서, html 문법과 유사하지만 동일하진 않음에 주의
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
