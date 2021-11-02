const add = document.querySelector('body');

const arr_Stickers = new Array ("./css/stickers/1.png", "./css/stickers/2.png", "./css/stickers/3.png", "./css/stickers/4.png", "./css/stickers/5.png",
"./css/stickers/6.png", "./css/stickers/7.png", "./css/stickers/8.png", "./css/stickers/9.png", "./css/stickers/10.png");

const dragHandler = function(e){
    console.log('play');
   
   
} 

function add_Sticker(){
    let random_Sticker = Math.floor(Math.random() * arr_Stickers.length);
    const add_Div = document.createElement('div');
    const add_Img = document.createElement('img');
    add_Img.setAttribute('src', arr_Stickers[random_Sticker]);
    const add_Input = document.createElement('input');
    const add_Butt_Input = document.createElement('button');
    add_Butt_Input.innerHTML = `<img src=./css/check.png>`
    const add_Butt = document.createElement('button');
    // add_Butt_Input.addEventListener('click', )

    add_Img.addEventListener('mousedown', () => {
        console.log('op');
        document.addEventListener('mousemove', dragHandler)

        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', dragHandler)
            console.log('up');
        })
       
    })

    add_Butt.addEventListener('click', () =>{
        add_Div.remove();
    })
    add_Butt.innerHTML = `<img src=./css/close.png>`
    add_Div.append(add_Img,add_Input,add_Butt,add_Butt_Input);
    add.append(add_Div);
    return [add_Div, arr_Stickers[random_Sticker]];


}



add.addEventListener('click',  e => {
    if(e.target == add){
        const [sticker, url] =  add_Sticker(); 
        // console.log(sticker, url);
        sticker.style.top = e.offsetY + 'px';
        sticker.style.left = e.offsetX + 'px'; 
    }

});








// drug.onmousedown = function(e){
//     console.log(drug);

//     let coords = getCoords(drug);
//     let shiftX = e.pageX - coords.left;
//     let shiftY = e.pageY - coords.top;

//     drug.style.position = 'absolute';
//     moveAt(e);
//     document.body.appendChild(drug);
//     drug.style.zIndex = 1000;

//     function moveAt(e){
//         drug.style.left = e.pageX - shiftX + 'px';
//         drug.style.top = e.pageY - shiftY + 'px';
//     }

//     document.onmousemove = function(e) {
//         moveAt(e);
//     }

//     drug.onmouseup = function(){
//         document.onmousemove = null;
//         drug.onmouseup = null;
//     }
// }

// drug.ondragstart = function() {
//     return false;
//   };

//   function getCoords(elem) {
//     let box = elem.getBoundingClientRect();
//     return {
//       top: box.top + pageYOffset,
//       left: box.left + pageXOffset
//     };
// }
