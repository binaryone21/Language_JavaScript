class UtilHelper {
    static #current = null;

    /**
     * 싱글톤 객체를 할당하여 리턴한다.
     * @returns UtilHelper 클래스의 객체
     */
    static getInstance() {
        if(UtilHelper.#current != null) {
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
}

const utilHelper = UtilHelper.getInstance();