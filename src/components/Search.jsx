function Search({search, setSearch}){
  return(
    <input 
    value = {search} placeholder="과일을 검색하세요."
    onChange = {(e) => {
      setSearch(e.target.value);
    }}
    />
    
    // <input type="text" placeholder="과일을 검색하세요." />
    // <input
    // value ={search}
    // onChange={""} // onChange는 입력값을 저장하는 역할만 한다. 즉, onChange:입력 감지, setSearch:값 저장, search:현재 검색어, filter:검색, FruitList: 화면 출력
    // >
    
  );
 
}


export default Search;