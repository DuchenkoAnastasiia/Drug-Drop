const add = document.querySelector('body');
const div = document.querySelector('div');

const arr_Stickers = new Array ("./css/stickers/1.png", "./css/stickers/2.png", "./css/stickers/3.png", "./css/stickers/4.png", "./css/stickers/5.png",
"./css/stickers/6.png", "./css/stickers/7.png", "./css/stickers/8.png", "./css/stickers/9.png", "./css/stickers/10.png");

function add_Sticker(){
    let random_Sticker = Math.floor(Math.random() * arr_Stickers.length);
    const add_Div = document.createElement('div');
    const add_Img = document.createElement('img');
    add_Img.setAttribute('src', arr_Stickers[random_Sticker]);
    const add_Input = document.createElement('input');
    const add_Butt_Input = document.createElement('button');
    add_Butt_Input.innerHTML = `<img src=./css/check.png>`
    const add_Butt = document.createElement('button');
    add_Butt_Input.addEventListener('click', )
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
        console.log(sticker, url);
        sticker.style.top = e.offsetY + 'px';
        sticker.style.left = e.offsetX + 'px'; 
    }
});



const input = document.querySelector('input');
 {
   
    
}
