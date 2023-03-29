$(document).ready(function(){
        $("#modalbukaundangan").modal('show');
    });
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
      // location.reload();
      $(".cvote").remove();
      $(".modal-backdrop").remove();
      $('.modal').hide();     
      
      $.ajax(setting).done(function (datas) {
            const data = datas.GoogleSheetData
            var data_guest = ''
            for (var i = data.length - 1; i >= 1; i--) {
              data_guest += '<div class="inlineContainer cvote"></div><span class="other cvote">' + data[i][1] + ' | <strong>' + data[i][3] + '</strong></span><img class="inlineIcon cvote" src="https://pngimage.net/wp-content/uploads/2018/05/cuore-emoji-png-4.png"><div class="otherBubble other cvote">' + data[i][2] + '</div>'
            }
            $('.bwrapper-default').append(data_guest);
          })
    })
    .catch(error => console.error('Error!', error.message))
})

// waktu dan sesi
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const tamu = document.querySelector('.tamu')
const waktu = document.querySelector('.waktu')
const waktu2 = document.querySelector('.waktu2')
tamu.innerHTML = params['hi']
if (params['sesi'] == 1) {
  waktu.innerHTML = '31 Maret 2023 | 12.00 - 18.00 WITA'
  waktu2.innerHTML = '31 Maret 2023 | 12.00 - 18.00 WITA'
  document.querySelector('.maps').src = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3949.954869416963!2d115.11408911411212!3d-8.106077983335693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMDYnMjEuOSJTIDExNcKwMDYnNTguNiJF!5e0!3m2!1sen!2sid!4v1680090086450!5m2!1sen!2sid"
}else{
  waktu.innerHTML = '31 Maret 2023 | 12.00 - 18.00 WITA'
  waktu2.innerHTML = '31 Maret 2023 | 12.00 - 18.00 WITA'
  document.querySelector('.maps').src = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3949.954869416963!2d115.11408911411212!3d-8.106077983335693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMDYnMjEuOSJTIDExNcKwMDYnNTguNiJF!5e0!3m2!1sen!2sid!4v1680090086450!5m2!1sen!2sid"
}
// console.log(params['sesi'])
// end waktu dan sesi

// mp3 player

var xMusik = document.getElementById("myAudio");
var play = document.getElementById("play");
var stop = document.getElementById("stop");

function playAudio() {
  play.style.display = "none";
  stop.style.display = "block";
  stop.style.color = "red";
  xMusik.play();
  $('#staticBackdrop').modal('hide');
}

function pauseAudio() {
  play.style.display = "block";
  play.style.color = "rgb(0, 152, 240)";
  stop.style.display = "none";
  xMusik.pause();
  xMusik.currentTime = 0;
}

// $(document).ready(function() {
//   $(window).on('load',function(){
//     $('#staticBackdrop').Modal('show');});
// });

// $(document).ready(function() {
//     $("#myAudio").get(0).play();
// });

// $(window).on('load',function(){
//         $('#staticBackdrop').modal('show');
        
//     });

window.onload = function () {
        $('#staticBackdrop').modal('show');
    };
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

