import { BaseElement, html, css } from '../../../base-element.mjs'

class HomeSection1 extends BaseElement {
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
                }

                .layout-left {
                    display: flex;
                    flex-basis: 50%;
                    position: relative;
                    justify-content: space-between;
                    background-image: url(images/home/robot-head.avif);
                    background-repeat: no-repeat;
                    background-position: calc(100% - 90px) 100%;
                    min-height: 800px;
                    width: 50%;
                }

                .layout-right {
                    display: flex;
                    flex-basis: 50%;
                    position: relative;
                    justify-content: space-between;
                    align-items: center;
                    min-height: 800px;
                    background-image: url(images/home/bgs1.avif);
                    background-repeat: no-repeat;
                    background-position: 0% 50%;
                    background-size: cover;
                    width: 50%;
                }

                .layout-middle {
                    display: flex;
                    margin-left: -70px;
                    flex-direction: column;
                    width: calc(100% + 70px);
                    overflow: hidden;
                }

                h4 {
                    margin: 20px 20px 0;
                    font-family: var(--ubuntu-font-family);
                    font-weight: 700;
                    line-height: 1.2;
                    font-size: 20px;
                }

                h1 {
                    font-size: clamp(1rem, 6.5vw, 55px);
                    font-weight: 700;
                    text-transform: uppercase;
                    margin: 20px 0 0;
                    font-family: var(--ubuntu-font-family);
                }

                h2 {
                    font-weight: 300;
                    line-height: 1.2;
                    font-size: 1.25rem;
                    font-family: var(--ubuntu-font-family);
                }

                p {
                    font-weight: 400;
                    font-size: 1.25rem;
                    line-height: 1.6;
                    word-break: break-word;
                    width: 60%;
                }

                a {
                    display: inline-block;
                    font-style: normal;
                    text-transform: uppercase;
                    margin: 20px auto 0 0;
                    color: #ffffff !important;
                    background-color: var(--background-green);
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
                    font-weight: 600;
                }

                a:hover {
                    background-color: var(--background-green-hover);
                }

                .horizontal-line {
                    width: 120px;
                    height: 6px;
                    margin-top: 24px;
                    background-color: var(--native-background-color);
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
                <div class="layout-left"></div>
                <div class="layout-right">
                    <div class="layout-middle">
                        <h2>Innovative programming</h2>
                        <h1>Reinforcement<br>learning<br>systems</h1>
                        <p>The future is already here. Аrtificial intelligence never sleeps and never gets bored</p>
                        <a href="#my-pride">Learn more</a>
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

customElements.define("home-section-1", HomeSection1);


// @media (max-width: 1100px) {
//     .layout-left {
//         background-position: -400px 100%;
//         min-height: 800px;
//     }
// }
// @media (max-width: 850px) {
//     .layout-left {
//         background-position: -500px 100%;
//         min-height: 800px;
//     }
// }
// @media (max-width: 700px) {
//     .layout-left {
//         background-position: -600px 100%;
//         min-height: 800px;
//     }
// }

// @media (max-width: 600px) {
//     .layout-left {
//         background-position: -700px 100%;
//         min-height: 800px;
//     }
// }
// @media (max-width: 500px) {
//     .layout-left {
//         display: none;
//     }
// }