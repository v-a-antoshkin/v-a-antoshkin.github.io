import { BaseElement, html, css } from '../../../base-element.mjs'

class MyStackSection5 extends BaseElement {
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
                    display: flex;
                    position: relative;
                    justify-content: space-between;
                    width: 100%;
                    width: 100%;
                }

                .layout-left {
                    display: flex;
                    flex-basis: 50%;
                    position: relative;
                    justify-content: center;
                }

                .image-left {
                    position: absolute;
                    bottom: 0;
                    object-position: 50% 50%;
                    object-fit: cover;
                    width: 212px;
                    height: 471px;
                }

                .image-right-1 {
                    object-position: 50% 50%;
                    object-fit: cover;
                    cursor: pointer;
                    width: 80%;
                }

                .image-right-2 {
                    object-position: 50% 50%;
                    object-fit: cover;
                    border-radius: 50%;
                    width: 60%;
                    margin: -50% 0px 0px -50%;
                    z-index: -1;
                }


                .layout-right {
                    display: flex;
                    flex-basis: 50%;
                    flex-direction: column;
                    position: relative;
                    justify-content: center;
                    align-items: center;
                }

                .layout-center {

                }

                .layout-middle {
                    display: flex;
                    width: 90%;
                    flex-direction: column;
                    justify-content: center;
                    z-index: 1;
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 79px;
                    max-width: 600px;
                }

                h4 {
                    margin: 20px 20px 0;
                    font-family: var(--ubuntu-font-family);
                    font-weight: 700;
                    line-height: 1.2;
                    font-size: 20px;
                }

                h3 {
                    font-size: 3.75rem;
                    font-weight: 300;
                    line-height: 1.2;
                    margin: 25px 0 0;
                    font-family: var(--ubuntu-font-family);
                }

                h2 {
                    font-weight: 300;
                    line-height: 1.2;
                    font-size: 1.25rem;
                    font-family: var(--ubuntu-font-family);
                    margin: 79px 0 0;
                }

                p {
                    font-weight: 700;
                    font-size: 1.25rem;
                    // margin: 21px 207px 21px 0;
                    line-height: 1.6;
                    word-wrap: break-word;
                }

                a {
                    font-style: normal;
                    text-transform: uppercase;
                    margin: 20px auto 0 0;
                    color: #ffffff !important;
                    background-color: #17cad0 !important;
                    position: relative;
                    letter-spacing: 1px;
                    font-size: 1rem;
                    line-height: 1.4;
                    vertical-align: middle;
                    text-align: center;
                    text-decoration: none;
                    white-space: nowrap;
                    user-select: none;
                    padding: 10px 30px;
                    border-radius: 0;
                }

                a:hover {
                    background-color: #15b6bb !important;
                }

                .horizontal-line {
                    width: 120px;
                    height: 6px;
                    margin-top: 24px;
                    background-color: var(--native-background-color);
                }

                @media (max-width: 1100px) {
                    .layout-left {
                        background-position: -400px 100%;
                        min-height: 800px;
                    }
                }
                @media (max-width: 850px) {
                    .layout-left {
                        background-position: -500px 100%;
                        min-height: 800px;
                    }
                }
                @media (max-width: 700px) {
                    .layout-left {
                        background-position: -600px 100%;
                        min-height: 800px;
                    }
                }

                @media (max-width: 600px) {
                    .layout-left {
                        background-position: -700px 100%;
                        min-height: 800px;
                    }
                }
                @media (max-width: 500px) {
                    .layout-left {
                        display: none;
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
                <div class="layout-right">
                    <img class="image-right-1" src="images/my-stack/federation.avif" alt="" title="Show site">
                </div>
                <div class="layout-left">
                    <div class="layout-middle">
                        <h2>I know PHP</h2>
                        <h3>I love Polyathlon</h3>
                        <p>For many years I have been working for the All-Russian Polyathlon Federation. I like competitions, athletes, GTO standards. I like people who support this sport. I like helping them with IT technologies</p>
                        <a href="https://github.com/polyathlon/polyathlon-presidium" title="Polyathlon Presidium" target="_blank">KNOW MORE</a>
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

customElements.define("my-stack-section-5", MyStackSection5);