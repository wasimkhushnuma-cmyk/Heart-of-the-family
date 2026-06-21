document.addEventListener(
"DOMContentLoaded",
()=>{

window.addMemory=
function(){

const memories=
document.getElementById(
"memories"
)

const box=
document.createElement(
"div"
)

box.className=
"memory"

box.innerHTML=`

<input
type="file"
accept="image/*">

<textarea
placeholder="Write message">
</textarea>

`

memories.appendChild(
box
)

}

window.generate=
function(){

alert(
"Upload enabled"
)

}

}
)
