// const spreadshetID = "1N953wTDqsIZpkrwvCsFZxcMcihv2MalB5pTn3SzonL4"
const url = "https://script.google.com/macros/s/AKfycbxZLKkOAio18qbU9V9-Du3AT5ELmfv0xBjsFCUjDMfTULOjhoo0MUM28FMTtwrLeMSy/exec"
const setting = {
  "url": url,
  "method": "GET",
  "timeout": 0,
  "headers": ""
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbxZLKkOAio18qbU9V9-Du3AT5ELmfv0xBjsFCUjDMfTULOjhoo0MUM28FMTtwrLeMSy/exec'
const form = document.forms['submit-to-google-sheet']
const btnKirim = document.querySelector('.btn-kirim')
const btnLoading = document.querySelector('.btn-loading')
const bWrapper = document.querySelector('.bwrapper-default')
const bwrapperUpdated = document.querySelector('.bwrapper-updated')

form.addEventListener('submit', e => {
  e.preventDefault()
  btnLoading.classList.toggle('d-none')
  btnKirim.classList.toggle('d-none')
  $("#myChart").remove();
  $("#boxChart").load("chart.html")
  fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form)
    })
    .then(response => {
      // console.log('Success!', response)
      btnLoading.classList.toggle('d-none')
      btnKirim.classList.toggle('d-none')
      form.reset()
      location.reload();
      

    })
    .catch(error => console.error('Error!', error.message))
})


// mp3 player

var x = document.getElementById("myAudio");
var play = document.getElementById("play");
var stop = document.getElementById("stop");

function playAudio() {
  play.style.display = "none";
  stop.style.display = "block";
  stop.style.color = "red";
  x.play();
}

function pauseAudio() {
  play.style.display = "block";
  play.style.color = "rgb(0, 152, 240)";
  stop.style.display = "none";
  x.pause();
  x.currentTime = 0;
}

let text = "";
const gallery = ["DSC_1591-min.jpg", "DSC_1598-min.jpg", "depan-mobile-min.jpg", "DSC_1511-min.jpg", "1-slide.jpg", "maried-min.jpg", "DSC_1543-min.jpg", "DSC_1550-min.jpg", "DSC_1639-min.jpg", "DSC_1690-min.jpg", "slide2-min.jpg", "vote2bg-min.jpg", "slide-min.jpg", "votebg-min.jpg", "slide4-min.jpg", "b-min.jpg", "DSC_1789-min.jpg", "sukac-min.jpg", "min-min.jpg"];
gallery.forEach(arrayGallery);

document.getElementById("fh5co-gallery-list").innerHTML = text;

function arrayGallery(item) {
  text += '<li class="one-third animate-box" data-animate-effect="fadeIn" style="background-image: url(images/gallery/' + item + '); background-repeat:no-repeat; " data-responsive="images/gallery/' + item + '" data-src="images/gallery/' + item + '" data-sub-html=""> <a href="images/gallery/' + item + '"></a></li>';
}
lightGallery(document.getElementById('fh5co-gallery-list'))