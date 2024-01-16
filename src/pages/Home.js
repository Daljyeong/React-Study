// 함수형 컴포넌트 방식 => 최근 개발 추세임
import React from "react"; // jsx(js에서 xml 태그를 쓸 수 있게 확장해준 것)를 쓰기 위해 import해줌

// function Home(){
// 	return <h1>Home 화면 입니다.</h1>;
// }

const Home = () => {
	return <h1>Home 화면 입니다.</h1>;
}

export default Home;


// // 클래스형 컴포넌트 방식
// import React, {Component} from "react";

// class Home extends Component {
//     render(){
// 		return <h1>Home 화면 입니다.</h1>;
// 	}
// }

// export default Home;