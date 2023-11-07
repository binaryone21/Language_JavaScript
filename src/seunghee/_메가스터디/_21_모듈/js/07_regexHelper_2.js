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

    /**
     * 입력값이 지정된 글자수를 초과했는지 검사한다.
     * @param   {string}  selector    검사할 대상에 대한 <input> 요소의 selector
     * @param   {int}     len         최대 글자수
     * @param   {string}  msg         값이 없을 경우 표시될 메시지
     * @returns {boolean}
     */
    maxLength(selector, len, msg) {
        this.value(selector, msg);
        const content = document.querySelector(selector).value;
        if(content.trim().length > len) {
            throw new StringFormatException(msg, selector);
        }
        return true;
    }

    /**
     * 입력값이 지정된 글자수 미만인지 검사한다.
     * @param   {string}    selector    검사할 대상에 대한 <input> 요소의 selector
     * @param   {int}       len         최소 글자수
     * @param   {string}    msg         값이 없을 경우 표시될 메시지
     * @returns {boolean}
     */
    minLength(selector, len, msg) {
        this.value(selector, msg);
        let content = document.querySelector(selector).value;
        if(content.trim().length < len) {
            throw new StringFormatException(msg, selector);
        }
        return true;
    }

    /**
     * 두 값이 동일한지 검사한다.
     * @param   {string}    origin      원본에 대한 <input> 요소의 selector
     * @param   {string}    compare     검사 대상에 대한 <input> 요소의 selectr
     * @param   {string}    msg         검사에 실패할 경우 표시할 메시지
     * @returns {boolean}
     */
    compareTo(origin, compare, msg) {
        this.value(origin, msg);
        this.value(compare, msg);

        let src = document.querySelector(origin).value.trim();  // 원본값을 가져온다.
        let dsc = document.querySelector(compare).value.trim()  // 비교할 값을 가져온다.

        if(src !== dsc) {
            throw new StringFormatException(msg, origin);
        }
        return true;
    }

    /**
     * 라디오나 체크박스가 선택된 항목인지 확인한다.
     * @param   {string}    selector    검사할 CheckBox 에 대한 selector
     * @param   {string}    msg         검사에 실패할 경우 표시할 메시지
     */
    check(selector, msg) {
        const elList = document.querySelectorAll(selector);
        const checkedItem = Array.from(elList).filter((v, i) => v.checked );

        if(checkedItem.length === 0) {
            throw new StringFormatException(msg, selector);
        }
    }

    /**
     * 라디오나 체크박스의 최소 선택 갯수를 제한한다.
     * @param   {string}    selector    검사할 CheckBox 에 대한 selector
     * @param   {string}    msg         검사에 실패할 경우 표시할 메시지
     */
    checkMin(selector, len, msg) {
        const elList = document.querySelectorAll(selector);
        const checkedItem = Array.from(elList).filter((v, i) => v.checked);

        if(checkedItem.length < len) {
            throw new StringFormatException(msg, selector);
        }
    }

    /**
     * 라디오나 체크박스의 최대 선택 갯수를 제한한다.
     * @param   {string}    selector    검사할 CheckBox 에 대한 selector
     * @param   {string}    msg         검사에 실패할 경우 표시할 메시지
     */
    checkMax(selector, len, msg) {
        const elList = document.querySelectorAll(selector);
        const checkedItem = Array.from(elList).filter((v, i) => v.checked);

        if(checkedItem.length > len) {
            throw new StringFormatException(msg, selector);
        }
    }
}

const regexHelper = RegexHelper.getInstance();