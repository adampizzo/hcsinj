const resizeObserver = new ResizeObserver(entries => {
    if (entries[0].target.clientWidth < 992 && entries[0].target.clientWidth > 576) {
        console.log("Width > 576 and Width < 992px")
        brandImg.setAttribute('width', '80')
        navBar.classList.add('bg-casual', 'sticky-top')
        navBar.classList.remove('bg-transparent', 'fixed-top')

    } else if (entries[0].target.clientWidth < 992) {
        console.log("Width < 992px")

        brandImg.setAttribute('width', '48')
    } else {
        console.log("Width > 992px")
        navBar.classList.remove('bg-casual', 'sticky-top')
        navBar.classList.add('bg-transparent', 'fixed-top')
        brandImg.setAttribute('width', '96')
    }
});
const navBar = document.getElementById("mainNavbar");
const brandImg = document.getElementById("brandImg");
// const carouselInner = document.getElementById("mainCarousel")
resizeObserver.observe(document.body);


window.onscroll = function (e) {
    console.log(window.scrollY); // Value of scroll Y in px
    // console.log(carouselInner.scrollHeight)
};


window.addEventListener('load', resizeNav);

function resizeNav() {
    const body = window.innerWidth;
    console.log(`This is my body width: ${body} px.`)

    if (body < 992 && body > 576) {
        brandImg.setAttribute('width', '80')

    } else if (body < 576) {
        brandImg.setAttribute('width', '48')
        navBar.classList.add('bg-casual', 'sticky-top')
        navBar.classList.remove('bg-transparent', 'fixed-top')
    } else {
        navBar.classList.remove('bg-casual', 'sticky-top')
        navBar.classList.add('bg-transparent', 'fixed-top')
        brandImg.setAttribute('width', '96')
    }

}

// Contact Us Modal
const contactUs = document.getElementById('contactUs');
const contactModal = document.getElementById('contactModal');

contactModal.addEventListener('shown.bs.modal', () => myInput.focus())