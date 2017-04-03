$(document).ready(() => {

  $(".section").click(function() {
    if($(this).hasClass("reveal")) {
      $(this).find(".description").remove()
      $(this).children().fadeIn()
      $(this).removeClass("reveal")
    } else {
      $(this).children().hide()
      $(this).addClass("reveal")
      if($(this).hasClass("about")) {
        $(".about").append(descriptions.about)
      } else if($(this).hasClass("github")) {
        $(".github").append(descriptions.github)
      } else if($(this).hasClass("skills")) {
        $(".skills").append(descriptions.skills)
      } else if($(this).hasClass("other")) {
        $(".other").append(descriptions.otherSkills)
      } else if($(this).hasClass("projects")) {
        $(".projects").append(descriptions.projects)
      } else if($(this).hasClass("social")) {
        $(".social").append(descriptions.social)
      }

      // .append('<div class="description"></div>')
    }

  })

  let descriptions = {
    about: "<div class='description'><h3>About</h3><img class='portrait' src='http://i.imgur.com/3hr2dkk.jpg'><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div></div>",

    github: "<div class='description'><h3>Github Repo</h3><a href='https://github.com/fanelenan7'>https://github.com/fanelenan7</a></div>",

    skills: "<div class='description'><h3>Skills</h3><ul><li>JavaScript</li><li>Mongoose</li><li>Express.js</li><li>AngularJS</li><li>Node.js</li><li>ReactJS</li><li>jQuery</li><li>HTML5</li><li>CSS3</li><li>Ruby</li><li>Ruby on Rails</li><li>AJAX</li></ul></div>",

    otherSkills: "<div class='description'><h3>Other Skills</h3><ul><li>Graphic Design</li><li>Adobe Photoshop</li><li>Lean Startup</li><li>Brand Development</li><li>Agile Methodologies</li><li>Bilingual</li></ul></div>",

    projects:
    "<div class='description'><h3>Projects</h3><ul class='projectDesc'><li><a href='https://fanelenan7.github.io/towers-of-hanoi/'>Tower of Hanoi</a><div>A logic puzzle. Uses jQuery. Original graphics.</div><div><a class='desc' href='https://fanelenan7.github.io/towers-of-hanoi/'>Github Repo</a></div></li><li><a href='https://imaginariumapp.herokuapp.com/'>Imaginarium</a><div>A galery where people are able to display and organize their work. Built with Ruby on Rails.</div><div><a class='desc' href='https://github.com/fanelenan7/project-2'>Github Repo</a></div></li><li><a href='https://fanelenan7.github.io/project3/#/'>Bookaroo</a><div>A webapp that allows users to explore books and genres, providing exerpts and summaries of randomly chosen books Built in AngularJS with Rails API.</div><div><a class='desc' href='https://github.com/fanelenan7/project3'>Github Repo</a></div></li><li><a href='#'>Coder Ipsum</a><div>A custom Lorem Ipsum, for developers, of developers. Built in ReactJS.</div><div><a class='desc' href='https://github.com/fanelenan7/coder_ipsum'>Github Repo</a></div></li></ul></div>",

    social: "<div class='description'><h3>Contact Me</h3></div>"
    }
})
