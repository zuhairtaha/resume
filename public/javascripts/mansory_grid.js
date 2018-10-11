// init Masonry
import Masonry from "masonry-layout"
import imagesLoaded from "imagesloaded"
import "lightgallery.js"
import "./../libs/lightGallery1.1/js/lg-fullscreen"
import "./../libs/lightGallery1.1/js/lg-hash"
import "./../libs/lightGallery1.1/js/lg-pager"
import "./../libs/lightGallery1.1/js/lg-autoplay"
import "./../libs/lightGallery1.1/js/lg-share"
//import "./../libs/lightGallery1.1/js/lg-thumbnail"
import "./../libs/lightGallery1.1/js/lg-video"
import "./../libs/lightGallery1.1/js/lg-zoom"

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

            let samplesList = '<li class="grid-sizer"></li>'
            webObjects.forEach(web => {
                // filter results
                if (["php", "wordpress", "vbulletin", "android", "html"].includes(type)) {
                    if (web.programming !== type)
                        return
                }

                let divClass = "grid-item"
                if (web.width === "2") divClass = "grid-item grid-item--width2"
                samplesList += `
                <li class="${divClass}" data-src="images/websites/${web.id}.jpg"
                    data-sub-html="<span class='galleryIcons'>
                      <i class='material-icons'> date_range </i>  ${web.year}
                      <i class='material-icons'> code </i> ${web.programming}
                      `
                if (web.link) samplesList += `<i class='material-icons'> link </i> 
                         <a target='_blank' href='${web.link}'>${web.link}</a>`
                samplesList += `</span>"
                    data-pinterest-text="Pin it1" 
                >
                    <a class="hvr-grow-shadow" href=""> 
                        <img class="responsive-img z-depth-2" 
                              src="images/thumb/thumb_${web.id}.jpg"
                              alt="thumb_${web.id}"
                              >
                    </a>
                </li>`
            })
            grid.innerHTML = samplesList
        })
        .then(() => {
            const masonryGrid = new Masonry(grid, masonryOptions)

            imagesLoaded(grid).on('progress', () => {
                // layout Masonry after each image loads
                masonryGrid.layout()
                lightGallery(grid, {
                    thumbnail: true
                })
            })
        })
        .catch(err => console.log(err))
}

