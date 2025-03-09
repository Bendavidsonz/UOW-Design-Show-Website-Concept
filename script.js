function openNav() {
  document.getElementById("mySidenav").style.left = "0px";
}

function closeNav() {
  document.getElementById("mySidenav").style.left = "-280px";
}

var pageName;

function pageLoad(page) {
  pageName = page;
  if (page == "index") {
    /*document.getElementById('stripes').style='width:100%;'*/
    /*document.getElementById('stripe1').style='width:100%;'
    document.getElementById('stripe2').style='width:100%;'
    document.getElementById('stripe3').style='width:100%;'
    document.getElementById('stripe4').style='width:100%;'
    document.getElementById('stripe5').style='width:100%;'*/
    document.getElementById('svgStripe').style = 'width:100%;'
    return;
  }
  else if (page == "info") {
  }
  else if (page == "student") {

    let name = window.location.toString().split("#")[1];
    let pfp = document.getElementById('student-profile');
    let studName = document.getElementById('studentName');
    let bach = document.getElementById('bachelor');
    let maj = document.getElementById('major');
    let projName = document.getElementById('projectName');
    let studentVid = document.getElementById('student-vid')
    let portBut = document.getElementById('portfolio');

    let file1 = "images/profiles/" + name + "1.jpg";
    let file2 = "images/profiles/" + name + "2.jpg";
    let vid = "videos/students/" + name + "Project.mp4"; 

    pfp.src = file1;
    pfp.setAttribute('onmouseover', 'this.src="' + file2 + '"');
    pfp.setAttribute('onmouseout', 'this.src="' + file1 + '"');

    //studentVid.src = vid;

    // Create a new script element
    var script = document.createElement('script');

    // Set the source attribute to the URL of the script you want to add
    script.src = 'text/' + name + '.js';

    // Optionally, you can set other attributes like type, async, defer, etc.
    script.type = 'text/javascript';

    // Append the script element to the document head or body
    document.head.appendChild(script); // or document.body.appendChild(script);

    script.onload = function () {
      studName.innerHTML = studentName
      bach.innerHTML = bachelor;
      maj.innerHTML = major

      bio.innerHTML = bioText;
      productDesc.innerHTML = productDescText;
      projName.innerHTML = projectName;

      if (name != "Adam"){
        studentVid.src = "videos/students/placeholderProject.mp4"; 
      }
      else {
        studentVid.src = vid;
      }

      if (portfolio != ""){
          portBut.style= 'display:block;'
          portBut.setAttribute("href", portfolio);
      }
    }

  }
}

const popup = document.getElementById("popup");
const popupContent = document.getElementById('popup-content');
const closeBtn = document.getElementById('close');
const popupPrev = document.getElementById("popupLeft");
const popupNext = document.getElementById("popupRight");

// Set the date we're counting down to
var countDownDate = new Date("Oct 25, 2024 17:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  if (pageName == "info") {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("countdown").innerHTML = "<p>" + days + "d " + hours + "h "
      + minutes + "m " + seconds + "s </p>";

    // If the count down is finished, write some text
    if (distance < 0) {
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }
}, 1000);

function filterProjects(tag) {
  const projects = document.querySelectorAll('.flex-project');

  projects.forEach(project => {
    const projectTags = project.getAttribute('data-tags').split(',');

    if (tag === 'all' || projectTags.includes(tag)) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}