const a = document.getElementById("a");
const s = document.getElementById("s");
const d = document.getElementById("d");
const audio1 = new Audio('a.mp3');
const audio2 = new Audio('s.mp3');
const audio3 = new Audio('d.mp3');
const arr =[a,s,d];
const sound = [audio1, audio2, audio3]

arr.forEach((element, index) => {
    if(element){
        element.addEventListener("click", (event)=> {
            element.classList.add("pressDown");
            sound[index].play();
            setTimeout(()=> element.classList.remove("pressDown"), 100);
        });
    }
    else {
        console.log("element not found");
    }
});

document.addEventListener("keypress", (event)=>{
    if(event.key === 'a'){
        arr[0].classList.add("pressDown");
        setTimeout(()=> arr[0].classList.remove("pressDown"), 100);
        audio1.play();
    }
    else if(event.key === 's'){
        arr[1].classList.add("pressDown");
        setTimeout(()=> arr[1].classList.remove("pressDown"), 100);
        audio2.play();
    }
    else if(event.key === 'd'){
        arr[2].classList.add("pressDown");
        setTimeout(()=> arr[2].classList.remove("pressDown"), 100);
        audio3.play();
    }
});