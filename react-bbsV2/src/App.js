import BackImg from "./Landscape.jpg";
import "./App.css";
import BBsMain from "./main/BBsMain";

import BBsAdmin from "./main/BBsAdmin";
/**
 * react-router-dom을 이용한 singepage navigation
 * 한 화면에서 여러개의 컴포넌트를 번갈아 보여주기 위해 사용하는 메뉴시스템
 * 사용자가 선택한 메뉴에 따라 컴포넌트를 번갈아 ㅂ죠여주지만, 전체적인 화면은
 * rendering 되지 않기때문에  static(정적) 페이지를 구성할때도
 * 서버에 request를 보내고 서버가 ㅏㄴ응하는 것에 따라 전체홤녀이 refresh되는
 * 전통적인 web서버 구성보다 통신적인
 *
 * 2. link 컴포넌트로 만든 nav.jsx컴포넌트를 생성하여, 메뉴외 렌더링 화면을 분리한다
 * <BrowserRouter>
 *    <nav.jsx />
 *    <Route path="/" component={컴포넌트}
 * </BrowserRouter>
 */
import BBsNav from "./main/BBsNav";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const background = {
    backgroundImage: `url(${BackImg})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "100wh 50vh",
  };
  return (
    <div className="App">
      <header className="App-header" style={background}>
        <h3>REACT BBS 2020</h3>
        <p>React로 구현하는 BBS Project</p>
      </header>
      <input></input>
      <Router>
        <BBsNav />
        <Route exact path="/" component={BBsMain} />
        <Route path="/notice" component={BBsAdmin} />
      </Router>
      <footer className="footer">
        <address>CopyRigh &copy; callor@callor.com</address>
      </footer>
    </div>
  );
}

export default App;
