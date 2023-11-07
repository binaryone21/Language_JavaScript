class UtilHelper {
    static #current = null;

    /**
     * 싱글톤 객체를 할당하여 리턴한다.
     * @returns UtilHelper 클래스의 객체
     */
    static getInstance() {
        if(UtilHelper.#current === null) {
            UtilHelper.#current = new UtilHelper();
        }
        return UtilHelper.#current;
    }

    /**
     * URL 의 querystring 을 JSON 객체로 변환하여 리턴한다.
     * @returns json object
     */
    getQuery() {
        const query = new URLSearchParams(location.search);
        return Object.fromEntries(query);
    }

    /**
     * 쿠키에 저장된 값을 반환한다. 값이 없을 경우 undefined 를 반환한다.
     * @param {string} name - 쿠키의 이름
     * @returns {string|undefined}
     */
    getCookie(name) {
        const regex = new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)");

        let matches = document.cookie.match(regex);

        return matches ? decodeURIComponent(matches[1]) : undefined;
    };

    /**
     * 쿠키를 저장한다.
     * @param {string} name - 쿠키 이름
     * @param {*} value - 저장할 값
     * @param {number} maxAge - 유효시간(초단위)
     */
    setCookie(name, value, maxAge) {
        const encName = encodeURIComponent(name);
        const encValue = encodeURIComponent(value);
        let updatedCookie = `${encName}=${encValue};`;

        updatedCookie += "path=/;";

        if(maxAge !== undefined) {
            updatedCookie += `max-age=${maxAge}`;
        }

        document.cookie = updatedCookie;
    };
}

const utilHelper = UtilHelper.getInstance();