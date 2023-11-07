/**
 * 함수 단위의 코드 분리
 * - 분리된 js 소스에 함수 단위의 기능들을 구현해 놓고,
 *  html 파일에서 이 함수들을 호출하는 경우
 *  - 가장 일반적인 모듈화 예시
 */

function plus(x, y) {
    return x + y;
}

const minus = function(x, y) {
    return x - y;
}

const times = (x, y) => x * y;
const divide = (x, y) => x / y;