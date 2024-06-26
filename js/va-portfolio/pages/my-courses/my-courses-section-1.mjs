import { BaseElement, html, css } from '../../../base-element.mjs'

import '../../../../components/icon/icon.mjs';

import courses from './courses.mjs';

class MyCoursesSection1 extends BaseElement {
    static get properties() {
        return {
            isShow: { type: Boolean, default: false },
            isVertical: { type: Boolean, default: true },
            currentCourse: { type: BigInt, default: 0, local: true },
            version: { type: String, default: '1.0.0', save: true },
        }
    }

    get title() {
        return 'Vladislav Antoshkin';
    }

    static get styles() {
        return [
            BaseElement.styles,
            css`
                :host {
                    display: flex;
                    position: relative;
                    justify-content: center;
                    color: black;
                    height: 100vh;
                }

                .container {
                    display: grid;
                    grid-template-columns: repeat(16, 1fr);
                    grid-template-rows: repeat(16, 1fr);
                    width: 90%;
                    height: 100%;
                    max-width: 1000px;
                }


                .writer-image {
                    background: url("images/my-courses/teacher.avif") 50% center / cover no-repeat;
                    border-radius: 50%;
                    grid-area: 3 / 8 / 12 / 15;
                }

                .circle-image {
                    background-image: linear-gradient(#c37cd8, #ab4ec7);
                    border-radius: 50%;
                    aspect-ratio: 1 / 1;
                    grid-area: 12 / 12 / 15 / 15;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 8vw;
                    font-weight: bold;
                    color: white;
                    cursor: pointer;
                }

                simple-icon {
                    grid-column: 1 / 17;
                    grid-row: 1 / 16;
                }

                .container-layout-1 {
                    display: flex;
                    flex-direction: column;
                    grid-column: 2 / 9;
                    grid-row: 7 / 13;
                    padding: 24px 40px;
                    border-radius: 30px;
                    text-align: left;
                    text-size-adjust: 100%;
                    background-color: white;
                    box-shadow: 5px 5px 20px 0 rgba(0,0,0,0.15);
                    max-width: 350px;
                    min-width: 280px;
                    justify-content: center;
                }

                .layout-right {
                    display: flex;
                    position: relative;
                    justify-content: space-between;
                    min-height: 800px;
                }

                .layout-left {
                    display: flex;
                    position: relative;
                    justify-content: center;
                    align-items: center;
                }

                h1 {
                    font-size: clamp(1rem, 2rem, 10vw);
                    font-weight: 700;
                    text-transform: uppercase;
                    margin: 10px 0px;
                    font-family: var(--ubuntu-font-family);
                }

                h2 {
                    font-weight: 300;
                    line-height: 1.2;
                    font-size: 1.25rem;
                    font-family: var(--ubuntu-font-family);
                    margin: 0;
                }
                
                p {
                    font-weight: 400;
                    font-size: 1.25rem;
                    line-height: 1.6;
                    word-wrap: break-word;
                    margin: 0;
                }
                a {
                    text-decoration: underline;
                    color: gray;
                    font-weight: 700;
                }
                a:hover {
                    color: black;
                }
                a:active {
                    color: red;
                }
            `
        ]
    }

    constructor() {
        super();
        this.version = "1.0.0";
    }

    render() {
        return html`
            <div class="container">
                <simple-icon icon-name="bgs-1-my-publications" fill="orange"></simple-icon>
                <div class="writer-image"></div>
                <div class="circle-image" @click=${this.publicationClick}>${courses[this.currentCourse].links.length}</div>
                <div class="container-layout-1">
                    <h2>I'm a good teacher</h2>
                    <h1>If you want to understand yourself, explain it to others</h1>
                </div>
            </div>
        `;
    }

    publicationClick() {
        window.open('https://www.elibrary.ru/author_items.asp?authorid=261293', '_blank');
    }

    firstUpdated() {
        super.firstUpdated();
        const md = window.matchMedia( "(min-width: 920px)" );
        this.isVertical = md.matches;
        md.addEventListener('change', this.matchMediaChange.bind(this), false);
    }

    matchMediaChange(e) {
        this.isVertical = e.matches;
    }

}

customElements.define("my-courses-section-1", MyCoursesSection1);