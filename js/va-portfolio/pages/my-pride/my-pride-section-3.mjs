import { BaseElement, html, css } from '../../../base-element.mjs'

class MyPrideSection3 extends BaseElement {
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
                    color: black;
                }

                * {
                    box-sizing: border-box;
                    -webkit-touch-callout: none;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }

                .container {
                    position: relative;
                    display: flex;
                    width: 100%;
                    gap: 20px;
                }

                .layout-left {
                    display: flex;
                    width: 100%;
                    justify-content: left;
                    align-items: center;
                }

                .layout-right {
                    display: flex;
                    width: 100%;
                    justify-content: center;
                    align-items: center;
                }

                .layout-middle {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    width: 90%;
                    gap: 20px;
                }

                .image-right {
                    width: 80%;
                    cursor: pointer;
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
                    font-size: clamp(1rem, 8vw, 3.75rem);
                    font-weight: 400;
                    font-family: var(--ubuntu-font-family);
                }

                p {
                    line-height: 1.6;
                    font-weight: 700;
                    font-size: clamp(1vw, 3vw, 1.25rem);
                    word-wrap: break-word;
                    text-align: justify;
                }

                a {
                    position: relative;
                    font-style: normal;
                    text-transform: uppercase;
                    margin: 0 auto 0 0;
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


                @media (max-width: 768px) {
                    .container {
                        flex-wrap: wrap;
                        flex-direction: column-reverse;
                    }
                    .layout-left {
                        justify-content: center;
                    }
                    a {
                        margin: 0 0 0 auto;
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
                    <img class="image-right" src="images/my-pride/neuro-raccoon.avif" title="Watch Code" @click=${() => window.open('https://github.com/neuro-rsu/neuro-raccoon/blob/main/index.html', '_blank')} alt="">
                </div>
                <div class="layout-left">
                    <div class="layout-middle">
                        <h2>Crazy Raccoon</h2>
                        <h3>AI wanna live</h3>
                        <p>Thе crazy raccoon rides in the back of an old pickup truck to the music of Sting. He is very hungry. He imagines goldfish flying across the sky. He catches them and increases his energy. The black fish are killing him. If he just sits in the pickup truck, he'll starve to death. Do you want to know how quickly artificial intelligence will learn to survive in such strange conditions?</p>
                        <a href="https://neuro-rsu.github.io/neuro-raccoon" target="_blank" title="Watch Crazy Raccoon">Crazy Raccoon Show</a>
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

customElements.define("my-pride-section-3", MyPrideSection3);

// Безумный енот едет в кузове старого пикапа. Он очень хочет есть. Ему мерещатся золотые рыбки, которые летят по небу. Он ловит их и увеличивает свою энергии. Черные рыбки убивают его. Если он будет просто сидеть в пикапе, то он умрет от голода. Хотите узнать, как быстро исскуственный интеллект научится выжить в таких странных условиях.