class Gallery {
    generateGallery() {
        const numberImages = 16;
        const gallery = document.querySelector('#gallery');
        for(let i = 1; i <= numberImages ; i++) {
            const image = document.createElement('img');
            image.src = `src/img/gallery/full/${i}.jpg`;
            image.alt = 'Imagen Gallery';
            gallery.append(image);
        }
    }
}

const ui = new Gallery();
console.log(ui.generateGallery());