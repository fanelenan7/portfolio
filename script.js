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

    }

  })

  let descriptions = {
    about: "<div class='description'><h3>About</h3><div>Hi, my name is Lena Santana. I am a Web Developer, an alum of General Assembly DC. My background is in graphic design. I take advantage of it to create visually appealing, user-friendly work.</div><div>Over the course of 12 weeks I have learned and worked with over a dozen different languages and frameworks, and while I can't say I mastered them, I am now able to teach myself what I need to know moving into the future.</div><div>I have a strong preference for Front-End, but I can work with Back-End as well. Check out my Skills and Projects sections to learn more.</div></div>",
    github: "<div class='description'><h3 class='gh'>Github Repo</h3><a href='https://github.com/fanelenan7'>https://github.com/fanelenan7</a></div>",
    skills: "<div class='description'><h3>Skills</h3><ul><li>JavaScript</li><li>Ruby</li><li>AngularJS</li><li>Express.js</li><li>Mongoose</li><li>Node.js</li><li>Rails</li><li>ReactJS</li><li>jQuery</li><li>HTML5</li><li>CSS3</li><li>Sinatra</li></ul></div>",
    otherSkills: "<div class='description'><h3>Other Skills</h3><ul><li>Graphic Design</li><li>Adobe Photoshop</li><li>Lean Startup</li><li>Brand Development</li><li>Agile Methodologies</li><li>Bilingual (Russian/English)</li></ul></div>",
    projects: "<div class='description'><h3>Projects</h3><ul class='projectDesc'><li><a href='https://fanelenan7.github.io/towers-of-hanoi/'>Tower of Hanoi</a><div>A logic puzzle. Uses jQuery. Original graphics.</div><div><a class='desc' href='https://github.com/fanelenan7/towers-of-hanoi'>Github Repo</a></div></li><li><a href='https://imaginariumapp.herokuapp.com/'>Imaginarium</a><div>A galery where people are able to display and organize their work. Built with Ruby on Rails.</div><div><a class='desc' href='https://github.com/fanelenan7/project-2'>Github Repo</a></div></li><li><a href='https://fanelenan7.github.io/project3/#/'>Bookaroo</a><div>A webapp that allows users to explore books and genres, providing exerpts and summaries of randomly chosen books Built in AngularJS with Rails API.</div><div><a class='desc' href='https://github.com/fanelenan7/project3'>Github Repo</a></div></li><li><a href='#'>Coder Ipsum</a><div>A custom Lorem Ipsum for developers, of developers. Built in ReactJS.</div><div><a class='desc' href='https://github.com/fanelenan7/coder_ipsum'>Github Repo</a></div></li></ul></div>",
    social: "<div class='description'><h4><a href='https://www.linkedin.com/in/lena-santana-6277a297/'>LinkedIn</a></h4>\n<h4><a href='https://drive.google.com/file/d/0B4gjTdu9xyyDb3pRMnJ5ekZyS3M/view?usp=sharing'>Resume</a></h4>\n<h4><a href='https://profiles.generalassemb.ly/profiles/elena-santana'>GA Profiles</a></h4></div>"
    }
})
