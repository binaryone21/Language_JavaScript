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
    eng() {
        return "Hello Javascript";
    }
}

const my = new Singleton();
