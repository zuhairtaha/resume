// init Masonry
import Masonry from "masonry-layout"
import imagesLoaded from "imagesloaded"

// =========== Masonry ===========================
// external js: masonry.pkgd.js, imagesloaded.pkgd.js

const grid = document.querySelector('.grid')
const masonryOptions = {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
    gutter: 16
}

export function fetchSamples(type = "all") {
    grid.innerHTML = `<div class="progress"><div class="indeterminate"></div></div>`
    fetch("./javascripts/samples.json")
        .then(data => data.json())
        .then(webObjects => {

            let samplesList = '<div class="grid-sizer"></div>'
            webObjects.forEach(web => {
                // filter results
                if (["php", "wordpress", "vbulletin", "android", "html"].includes(type)) {
                    if (web.programming !== type)
                        return
                }

                let divClass = "grid-item"
                if (web.width === "2") divClass = "grid-item grid-item--width2"
                samplesList += `
                <div class="${divClass}">
                    <a class="hvr-grow-shadow" href="images/websites/${web.id}.jpg"> 
                        <img class="responsive-img z-depth-2" src="images/thumb/thumb_${web.id}.jpg">
                    </a>
                </div>`
            })
            grid.innerHTML = samplesList
        })
        .then(() => {
            const masonryGrid = new Masonry(grid, masonryOptions)

            imagesLoaded(grid).on('progress', () => {
                // layout Masonry after each image loads
                masonryGrid.layout()
            })
        })
        .catch(err => console.log(err))
}

