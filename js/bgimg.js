const images = ["1.jpg","2.jpeg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg",];

const chosenImage=images[Math.floor(Math.random()*images.length)]; //이미지를 랜덤으로 가져옴.

const bgImage=document.createElement("img");
//html에서 img src하는 것과 같음.
bgImage.src = `img/${chosenImage}`;
//style
document.body.appendChild(bgImage); 