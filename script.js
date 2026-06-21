function addMemory(){

const div=
document.createElement(
"div"
)

div.className=
"memory"

div.innerHTML=`

<input
placeholder=
"Photo URL">

<textarea
placeholder=
"Message">

</textarea>

`

document
.getElementById(
"memories"
)
.appendChild(
div
)

}

function generate(){

const id=

Math.random()

.toString(36)

.slice(2)

window.location=

`../view.html?id=${id}`

}
