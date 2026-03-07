let opened=false

const message=[

"❤️ Mẹ Nguyễn Thị Thanh Thảo thân yêu của con",

"Nhân ngày Quốc tế Phụ nữ 8/3, con chúc mẹ luôn mạnh khỏe, vui vẻ và lúc nào cũng hạnh phúc.",

"Cảm ơn mẹ vì đã luôn yêu thương, chăm sóc và hi sinh rất nhiều cho gia đình.",

"Con thật sự rất may mắn khi được làm con của mẹ.",

"Con và em Nguyễn Phương Uyên Nhi luôn yêu mẹ rất nhiều.",

"Chúng con sẽ cố gắng học tập thật tốt để mẹ luôn tự hào.",

"Mong rằng mỗi ngày của mẹ đều tràn đầy niềm vui và nụ cười.",

"💐 Con và em yêu mẹ rất nhiều 💖"

]

function openGift(){

if(opened) return

opened=true

let box=document.getElementById("wishBox")

let i=0

let interval=setInterval(()=>{

if(i>=message.length){

clearInterval(interval)

heartExplosion()

return

}

let p=document.createElement("p")

p.innerHTML=message[i]

box.appendChild(p)

i++

},1200)

}

function createFlower(){

let flower=document.createElement("div")

flower.className="flower"

flower.innerHTML="🌸"

flower.style.left=Math.random()*100+"vw"

flower.style.animationDuration=(Math.random()*5+5)+"s"

document.body.appendChild(flower)

setTimeout(()=>flower.remove(),10000)

}

function createHeart(){

let heart=document.createElement("div")

heart.className="heart"

heart.innerHTML="❤️"

heart.style.left=Math.random()*100+"vw"

heart.style.animationDuration=(Math.random()*4+4)+"s"

document.body.appendChild(heart)

setTimeout(()=>heart.remove(),10000)

}

function heartExplosion(){

for(let i=0;i<40;i++){

setTimeout(()=>{

createHeart()

},i*80)

}

}

setInterval(createFlower,400)

setInterval(createHeart,900)