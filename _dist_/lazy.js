const isIntersecting = (entry) => {
    return entry.isIntersecting; //!true si esta en la pantalla
}

const loadImage = (entry) => {
    const container = entry.target; //! (DIV)
    const image = container.firstChild;
    const url = image.dataset.src;
    //! load image to the browser
    image.src = url;
    //! no escuchar la imagen
    observer.unobserve(container);
}

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage);
})

export const registerImage = (image) => {
    // Intersection Observer
    observer.observe(image);
}