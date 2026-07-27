import FruitCard from "./FruitCard.jsx"

function FruitList({fruits}){
  
  // console.log(fruits);
  // console.log(fruits[0]);
  return(
    // <div>
    //   Fruit LIst
    // </div>

    <div>
      {fruits.map((fruit) => (
        <FruitCard
          key = {fruit.id}
          name = {fruit.name}
          price = {fruit.price}
          img = {fruit.img}
        // <p>{fruit.name}</p>
        />
      ))}
    </div>
  
    
  );
}

    {/* function FruitList({ fruits}){
    console.log(fruits);} >>>> Array(2)가 출력*/}

export default FruitList;