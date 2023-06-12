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

var search_array = [];
const filltering = ["시발","미친","개새끼"];

function search_message(){
   let search_str = document.getElementById("search_txt").value;
   if(filltering.includes(search_str)){
      alert("검색 제한");
   }
   else{
      alert("검색 수행");
      document.querySelector("#form_main").submit();
      search_array.push(search_str.value);      
   }
   let text = document.getElementById("search_message").innerHtml = search_array.toString();
   search_message.innerHTML = search_str.value;