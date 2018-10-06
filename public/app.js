import M from "./javascripts/materialize.min"
import {fetchSamples} from "./javascripts/mansory_grid"
import {fetchSkills} from "./javascripts/skills"
import "./javascripts/scrollTo"
M.AutoInit()
fetchSamples()
fetchSkills()

document.querySelectorAll('#filter-samples li')
    .forEach(tab => {
        tab.addEventListener("click", function () {
            fetchSamples(this.dataset.filter)
        })
    })
