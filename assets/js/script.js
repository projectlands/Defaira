// const spreadshetID = "1N953wTDqsIZpkrwvCsFZxcMcihv2MalB5pTn3SzonL4"
const url = "https://script.google.com/macros/s/AKfycbxZLKkOAio18qbU9V9-Du3AT5ELmfv0xBjsFCUjDMfTULOjhoo0MUM28FMTtwrLeMSy/exec"
const setting = {
  "url": url,
  "method": "GET",
  "timeout": 0,
  "headers": ""
}

$.ajax(setting).done(function (datas) {
  // console.log(datas.GoogleSheetData[0])
  const data = datas.GoogleSheetData
  // const finalArray = data.map(function () {return obj.datas.GoogleSheetData})
  function arrayColumn(array, columnName) {
    return array.map(function (value, index) {
      return value[columnName];
    })
  }
  const finalArray = arrayColumn(data, 3)
  // console.log(hadir)

  const arrayCounts = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0)
  const tHadir = arrayCounts(finalArray, 'Tidak Hadir')
  const ragu = arrayCounts(finalArray, 'Ragu - Ragu')
  const hadir = arrayCounts(finalArray, 'Hadir')
  var data_guest = ''
  const totalKonfirm = data.length - 1
  for (var i = data.length - 1; i >= 1; i--) {
    data_guest += '<div class="inlineContainer cvote"></div><span class="other cvote">' + data[i][1] + ' | <strong>' + data[i][3] + '</strong></span><img class="inlineIcon cvote" src="https://pngimage.net/wp-content/uploads/2018/05/cuore-emoji-png-4.png"><div class="otherBubble other cvote">' + data[i][2] + '</div>'
    // console.log(data[i][2])
  }
  const totalData = '<span id="cdefault" class="counter js-counter" data-from="0" data-speed="5000" data-to= "' + totalKonfirm + '" data-refresh-interval="10">1</span>'

  // $('.total-vote').append(totalData)
  $('.bwrapper-default').append(data_guest)
  // $('.chart').load('chart.html')

  // const datachart = {
  //   labels: ['Hadir', 'Ragu', 'Tidak Hadir'],
  //   datasets: [{
  //     label: 'Voting',
  //     data: [hadir, ragu, tHadir],
  //     backgroundColor: [
  //       'rgba(54, 162, 235, 0.2)',
  //       'rgba(255, 206, 86, 0.2)',
  //       'rgba(255, 26, 104, 0.2)',
  //       'rgba(75, 192, 192, 0.2)',
  //       'rgba(153, 102, 255, 0.2)',
  //       'rgba(255, 159, 64, 0.2)',
  //       'rgba(0, 0, 0, 0.2)'
  //     ]
  //   }]
  // };

  // config 
  // const config = {
  //   type: 'bar',
  //   data: datachart,
  //   options: {
  //     indexAxis: 'y',
  //     scales: {
  //       y: {
  //         grid: {
  //           display: false
  //         },
  //         beginAtZero: true
  //       }
  //     }
  //   }
  // };

  // render init block
  // const myChart = new Chart(
  //   document.getElementById('myChart'),
  //   config
  // );

})


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

var xMusik = document.getElementById("myAudio");
var play = document.getElementById("play");
var stop = document.getElementById("stop");

function playAudio() {
  play.style.display = "none";
  stop.style.display = "block";
  stop.style.color = "red";
  xMusik.play();
}

function pauseAudio() {
  play.style.display = "block";
  play.style.color = "rgb(0, 152, 240)";
  stop.style.display = "none";
  xMusik.pause();
  xMusik.currentTime = 0;
}

// $(document).ready(function() {
//   $(window).on('load',function(){$('#myAudio').play();});
// });

$(document).ready(function() {
    $("#myAudio").get(0).play();
});

// let text = "";
// const gallery = ["DSC_1591-min.jpg", "DSC_1598-min.jpg", "depan-mobile-min.jpg", "DSC_1511-min.jpg", "1-slide.jpg", "maried-min.jpg", "DSC_1543-min.jpg", "DSC_1550-min.jpg", "DSC_1639-min.jpg", "DSC_1690-min.jpg", "slide2-min.jpg", "vote2bg-min.jpg", "slide-min.jpg", "votebg-min.jpg", "slide4-min.jpg", "b-min.jpg", "DSC_1789-min.jpg", "sukac-min.jpg", "min-min.jpg"];
// gallery.forEach(arrayGallery);

// document.getElementById("fh5co-gallery-list").innerHTML = text;

// function arrayGallery(item) {
//   text += '<li class="one-third animate-box" data-animate-effect="fadeIn" style="background-image: url(images/gallery/' + item + '); background-repeat:no-repeat; " data-responsive="images/gallery/' + item + '" data-src="images/gallery/' + item + '" data-sub-html=""> <a href="images/gallery/' + item + '"></a></li>';
// }
// lightGallery(document.getElementById('fh5co-gallery-list'))