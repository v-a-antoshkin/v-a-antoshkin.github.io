import { BaseElement, html, css } from '../../../base-element.mjs'

class HomeSection5 extends BaseElement {
    static get properties() {
        return {
            isShow: { type: Boolean, default: false },
            isVertical: { type: Boolean, default: true },
            version: { type: String, default: '1.0.0', save: true },
        }
    }

    get title() {
        return 'Vladislav Antoshkin';
    }

    static get styles() {
        return [
            css`
                :host {
                    display: flex;
                    position: relative;
                    justify-content: center;
                    align-items: center;
                    box-sizing: border-box;
                    -webkit-touch-callout: none;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    color: black;
                }

                * {
                    box-sizing: border-box;
                }

                .container {
                    position: relative;
                    display: flex;
                    width: 100%;
                    gap: 20px;
                    min-height: 800px;
                }

                .layout-left {
                    display: flex;
                    flex-basis: 50%;
                    justify-content: right;
                    align-items: center;
                    background-image: url(images/home/bgs5-left.avif);
                    background-size: 40%;
                    background-position: 0px 100%;
                    background-repeat: no-repeat;
                }

                .layout-right {
                    display: flex;
                    flex-basis: 50%;
                    position: relative;
                    justify-content: center;
                    align-items: center;
                }

                .image-left {
                    object-position: 50% 50%;
                    object-fit: cover;
                    width: 100%;
                    border-radius: 50%;
                    padding: 0 0 6% 6%;
                }

                .image-right-1 {
                    object-position: 50% 50%;
                    object-fit: cover;
                    width: 80%;
                    border-radius: 50%;
                }

                .image-right-2 {
                    object-position: 50% 50%;
                    object-fit: cover;
                    border-radius: 50%;
                    width: 60%;
                    margin: -50% 0px 0px -50%;
                    z-index: -1;
                }

                .image-left-container {
                    background-image: url("images/home/bgs5.avif");
                    background-repeat: no-repeat;
                    background-position: 0% 50%;
                    background-size: cover;
                    border-radius: 50%;
                    flex-basis: fit-content;
                }

                .image-left-1 {
                    width: 20%;
                    height: 50%;
                    object-fit: contain;
                    object-position: 0% 100%;
                    align-self: flex-start;
                    margin-top: -50%;
                    z-index: -1;
                }

                .layout-middle {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    width: 90%;
                    margin: 40px 0px;
                    gap: 20px;
                }

                h2 {
                    margin: 0;
                    line-height: 1.2;
                    font-weight: 300;
                    font-size: 1.25rem;
                    font-family: var(--ubuntu-font-family);
                }

                h3 {
                    margin: 0;
                    line-height: 1.2;
                    font-family: var(--ubuntu-font-family);
                    font-size: clamp(1rem, 8vw, 3.75rem);
                    font-weight: 400;
                }

                p {
                    line-height: 1.6;
                    font-weight: 700;
                    font-size: clamp(1vw, 3vw, 1.25rem);
                    word-wrap: break-word;
                    max-width: 400px;
                }

                a {
                    position: relative;
                    font-style: normal;
                    text-transform: uppercase;
                    margin: 0 0 0 auto;
                    color: #ffffff !important;
                    background-color: var(--background-green);
                    font-size: 1rem;
                    line-height: 1.4;
                    vertical-align: middle;
                    text-align: center;
                    text-decoration: none;
                    white-space: nowrap;
                    user-select: none;
                    padding: 10px 30px;
                    border-radius: 0;
                    font-weight: 600;
                    &:hover {
                        background-color: var(--background-green-hover);
                    }
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
                <div class="layout-left">
                    <div class="image-left-container">
                        <img class="image-left" src="images/home/robot-2.avif" alt="">
                    </div>
                </div>
                <div class="layout-right">
                    <div class="layout-middle">
                        <h2>My courses</h2>
                        <h3>I'm a good teacher</h3>
                        <p>The best way to understand yourself is to explain it to someone else</p>
                        <a href="#my-courses" title="I'm a teacher">Explain it</a>
                    </div>
                </div>
            </div>
        `;
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

customElements.define("home-section-5", HomeSection5);