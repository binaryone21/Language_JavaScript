class StringFormatException extends Error {
    // 입력 요소에 대한 selector (추가)
    #selector;

    // 입력요소를 두 번째 파라미터로 전달받는다. (수정)
    constructor(msg = "잘못된 요청 입니다", selector = undefined) {
        super(msg);
        super.name = "StringFormatException";
        // 멤버변수에 입력요소를 참조시킨다(추가)
        this.#selector = selector;
    }

    // 입력요소의 selector 에 대한 getter (추가)
    get selector() {
        return this.#selector;
    }

    // 입력요소의 selector 에 해당하는 HTMLElement 객체 변환
    get element() {
        const e1 = this.#selector !== null
            ? document.querySelector(this.#selector)
            : undefined;
        return e1;
    }
}

/**
 * 정규표현식을 기반으로 입력값에 대한 유효성 검사를 수행하는 클래스.
 * HTML 문서에서 사용하기 위해 input selector 에 대한 입력값을 검사한다.
 */
class RegexHelper {
    static #current = null;

    static getInstance() {
        if(RegexHelper.#current === null) {
            RegexHelper.#current = new RegexHelper();
        }
        return RegexHelper.#current;
    }

    value(selector, msg) {
        const content = document.querySelector(selector).value;
        if(!content) {
            throw new StringFormatException(msg, selector);
        }
        return true;
    }
}

const regexHelper = RegexHelper.getInstance();