// import apple from "../assets/apple.png"
// import banana from "../assets/banana.png"
// import abocado from "../assets/abocado.png"

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