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

function search_message() {
  alert("검색을 수행합니다!");
  
  let search_str = document.querySelector("#search_txt"); // 검색어 입력 필드
  let search_message = document.getElementById("search_message"); // 검색 결과 메시지 출력 영역
  
  // 검색 제한 단어 선언 및 초기화
  const restrictedWords = ["미친", "개새끼", "병신"];

  // 검색어가 공백인 경우
  if (search_str.value.trim() === "") {
    alert("검색어를 입력해주세요!");
    return; // 검색 중단
  }
  
  // 검색어가 제한 단어인 경우
  if (restrictedWords.includes(search_str.value)) {
    alert("검색어에 제한된 단어가 포함되어 있습니다!");
    return; // 검색 중단
  }
  
  // 검색어 출력 및 로그
  search_message.innerHTML = search_str.value;
  console.log(search_str.value);
}
