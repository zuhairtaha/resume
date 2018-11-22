let programmingSkills = ''

export function fetchSkills() {
  fetch("./javascripts/skills.json")
    .then(data => data.json())
    .then(skills => {
      skills.forEach(skill => {
        programmingSkills +=
          `<div class="col s6 m4">
                    <p>${skill.id}</p>
                    <div class="progress grey lighten-2">
                        <div class="determinate  red darken-4" style="width: ${skill.progress}%"></div>
                    </div></div>`
      })
      document.querySelector('.programming-skills')
        .innerHTML = programmingSkills
    })


}