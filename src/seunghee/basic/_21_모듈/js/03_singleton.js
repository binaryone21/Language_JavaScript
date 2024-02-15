/**
 * 클래스가 독립적인 멤버변수가 없고
 * 단순히 비슷한 용도의 함수를 그룹으로 묶기 위한 목적으로 작성된 경우
 * 객체를 불필요하게 많이 생성하는 것을 방지하기 위한 코드 작성 패턴
 */
class Singleton {
    static #current = null;

    constructor() {
        if(!Singleton.#current) {
            Singleton.#current = this;
        }
        return Singleton.#current;
    }

    static getInstance() {
        return this.#current;
    }
    kor() {
        return "안녕하세요 자바스크립트.";
    }
    ent() {
        return "Hello Javascript";
    }
}

const my = Singleton.getInstance();
