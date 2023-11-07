/**
 * 모듈이란 재사용을 목적으로 프로그램 소스코드를 외부 파일로 분리한 형태
 * JS 소스코드를 별도의 '*.js' 파일에 작성해 놓으면
 * HTML 파일이 그 소스파일을 참조하여 활용할 수 있다.
 */

// 웹 브라우저가 모든 HTML 의 해석을 완료한 후에 실행되는 이벤트
// 이 이벤트를 적용하면 JS 코드가 <body> 보다 먼저 나타나도 문제가 없다.
// 하지만 실행 효율면에서 <body> 태그가 끝나기 직전에 script 가 위치하는 것이 좋다.
// script 가 맨 마지막에 배치될 경우 load 이벤트 적용은 생략해도 된다.
window.addEventListener('load', e => {
    document.querySelector("#title").innerHTML = "안녕하세요";
})
