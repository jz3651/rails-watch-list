import Typed from 'typed.js';

const loadDynamicBannerText = () => {
    new Typed('#banner-typed-text', {
        strings: ["Welcome to your Watchlists", "Add a list now!"],
        typeSpeed: 80,
        loop: true
    });    
}

export { loadDynamicBannerText };
