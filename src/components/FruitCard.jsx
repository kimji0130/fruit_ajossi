// import apple from "../assets/apple.png"
// import banana from "../assets/banana.png"
// import abocado from "../assets/abocado.png"
// 이미 App.jsx에서 import 하고 있으므로 재차 불러올 필요없음..

function FruitCard({name, price, img}) {
  return (
    <div>
      <h3>{name}</h3>
      {/* <img src={apple} alt="사과" width="100" /> */}
      <img src={img} alt={name} width="100" />
      <p>{price}원</p>
    </div>
  )

}

export default FruitCard;