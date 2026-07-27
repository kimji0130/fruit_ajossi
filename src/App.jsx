// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import Header from "./components/Header"
import Search from "./components/Search"
import FruitList from "./components/FruitList"
import "./App.css"
import apple from "./assets/apple.png";
import banana from "./assets/banana.png";
import abocado from "./assets/abocado.png";


function App() {
  // const [count, setCount] = useState(0)
  
 const fruits= [
  // console.log()는 확인하고 싶은 변수와 같은 범위(scope) 안에서 써야 해.
    {
      id: 1,
      name:"사과",
      price: 3000,
      img: apple,

    },
    {
      id: 2,
      name: "바나나",
      price: 2500,
      img: banana,
    },
    {
      id: 3,
      name: "아보카도",
      price: 1500,
      img: abocado,
    }
  ];

  const result= fruits.filter((fruit)=>{
    console.log("사");
    return fruit.name.includes("사");
  });
  
  return (
    <>
    <Header />
    <Search />
    {/* Search fruits={result} => 이건 검색창을 그리는 컴포넌트기 떄문에 과일 목록인 fruits를 받을 필요가 없는거야.*/}
    {/* <FruitList fruits={fruits} />  과일 목록을 그리는 건 FruitList야.. 그러므로 result를 넘기는곳은 FruitList fruits={result}가 되는거지..*/}
    <FruitList fruits={result}/>

    {/* react가 내부적으로 FruitList({fruits:fruits}); 이렇게 호출한 것과 동일 */}

  
      {/* <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>

        <div className="container">
          <h1>과일가게 아죠씨</h1>
          <input type="text" placeholder="과일을 검색하세요." />
          <h2>오늘의 과일</h2>
          <div className="fruit-list">
            <div>사과</div>
            <div>바나나</div>
            <div>수박</div>
            <div>참외</div>
            <div>복숭아</div>
            <div>포도</div>
          </div>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section> */}
    </>
  )
  
  
}


export default App;
