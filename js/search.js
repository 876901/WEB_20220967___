// document.getElementById("search_btn").addEventListener('click', search_message);

// function search_message(){
//    alert("검색을 수행합니다!"); 
// }

// document.getElementById("search_btn").addEventListener('click', search_message);

// function search_message(){
//    alert("검색을 수행합니다!");
//    let search_str = document.querySelector("#search_txt"); // 변수에 저장
//    document.getElementById("search_message").innerHTML = search_str.value; // 태그에 값 추가
//    console.log(search_str.value); // 콘솔에 출력
// }

document.getElementById("search_btn").addEventListener('click', search_message);
  // 검색 제한 단어 선언 및 초기화
var search_array=[];
  const filltering = ["미쳐", "죽을래", "뒤져라"];
function search_message() {
  if (filltering.includes(search_str.value)) {
    alert("검색어에 제한된 단어가 포함되어 있습니다!");

  }else{
	  alert("검색을 수행합니다");
	  search_array.push(search_str.value);
  }
  
	  let text = document.getElementById("search_message").innerHTML = search_array.toString(); // 값 변환
  document.querySelector("#form_main").submit();
  // 검색어 출력 및 로그
  search_message.innerHTML = search_str.value;
  console.log(search_str.value);
}
