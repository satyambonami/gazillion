// let play = document.querySelector(".bx-play");
// let videos = document.querySelector('.videos');

// let pause = document.querySelector('.bx-pause');
// let a = false


// play.addEventListener('click', function() {

// function myfun() {
//     if (!a) {
//         a = true;
//         videos.play();
//         play.classList.replace('bx-play', 'bx-pause');
//     } else {
//         a = false;
//         videos.pause();
//         play.classList.replace('bx-play', 'bx-pause');
//     }
// }



// let play = document.querySelector(".bx-play");
// let videos = document.querySelector('.videos');
// let a = false
// let parent = document.querySelectorAll('.parent');


// parent.forEach(item => {
//     const arr = [...item.children];
//     console.log(arr);
//     let a = false;
//     for (let i = 0; i < arr.length; i++) {
//         arr[i].addEventListener('click', function(e) {
//             if (!a) {
//                 a=true;
//                 arr[0].play();
//                 console.log(arr);
//                 play.classList.replace('bx-play', 'bx-pause');

//             } else {
//                 arr[0].pause();
//                 plays.classList.replace('bx-pause', 'bx-play');
//                 console.log(arr);
//             }


//         })
//     }
// })

let play = document.querySelectorAll(".plays");

play.forEach((item) => {
  let playAndPause = false;
  item.addEventListener("click", function (e) {
    const arrChild = [...item.parentNode.children];
    console.log(arrChild);
    if (!playAndPause) {
      playAndPause = true;
      arrChild[0].play();
      arrChild[1].classList.replace("bx-play", "bx-pause");
    } else {
      playAndPause = false;
      arrChild[0].pause();
      arrChild[1].classList.replace("bx-pause", "bx-play");
    }
  });
});


// let fun = () => {
//     for (i = 0; i < plays.length; i++) {
//         let vid = vid[i];
//         let plays = play[i];

//         play.addEventListener('click', function() {
//             if (!a) {
//                 a = true;
//                 vid.play();
//                 plays.classList.replace('bx-play', 'bx-pause');
//             } else {
//                 a = false;
//                 vid.pause();
//                 plays.classList.replace('bx-pause', 'bx-play');
//             }
//         })

//     }
//     console.log(plays)
// }

// play.addEventListener('click', function() {
//     if (!a) {
//         a = true;
//         videos.play();
//         play.classList.replace('bx-play', 'bx-pause');
//     } else {
//         a = false;
//         videos.pause();
//         play.classList.replace('bx-pause', 'bx-play');
//     }
// })


// mouse move


// const cursor = document.querySelector('.cursor');

// document.addEventListener('mousemove', e => {
//     cursor.setAttribute("style", "top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px;");
//     console.log(e);
// })
// document.addEventListener("mouseout", function(){
//         cursor.style.display ="none";
// })

// window.addEventListener("scroll", function (e) {
//     let scroll = this.scrollY;
//     cursor.setAttribute("styel","top: "+(scroll)+'px;')
  
//   ;
//   });

Splitting();