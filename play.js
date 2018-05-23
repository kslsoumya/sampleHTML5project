

let makeCanvas = () =>{
	// Get the object
	// Text
	let canvas1 = document.getElementById("canvas1")
	let ctx1 = canvas1.getContext('2d')
// Set properties
	ctx1.font = '32pt Arial'
	ctx1.fillStyle = 'DeepSkyBlue'
	ctx1.strokeStyle = 'black'

	// Actions
	
	ctx1.fillText ("I Love HTML5",45,150)
	ctx1.strokeText("I Love HTML5",45,150)

   // Get the object
	let canvas2 = document.getElementById("canvas2")
	let ctx2 = canvas2.getContext('2d')
	// Properties
	ctx2.fillStyle = '#ff0000'
	ctx2.strokeStyle = '#000000'
	ctx2.lineWidth = 10
	// Rectangle
	ctx2.fillRect(45,5,135,135)
	ctx2.strokeRect(45,5,135,135,)

	ctx2.fillRect(45,5,135,135)
	ctx2.strokeRect(45,5,135,135,)

	ctx2.fillRect(210,150,135,135)
	ctx2.strokeRect(210,150,135,135,)

	ctx2.fillStyle = '#666666'
	ctx2.fillRect(210,5,135,135)
	ctx2.fillRect(45,150,135,135)


}


// Get object
// Lines

let canvas3 = document.getElementById('canvas3');
	let ctx3 = canvas3.getContext('2d')

	// properties

	ctx3.strokeStyle = "#666666"
	ctx3.fillStyle ="#ff0000"
	ctx3.lineWidth = 5

	ctx3.beginPath()
	ctx3.moveTo(100,100)
	ctx3.lineTo(150,200)
	ctx3.lineTo(200,200)
	ctx3.lineTo(200,290)
	ctx3.lineTo(290,290)
	ctx3.lineTo(290,100)
	ctx3.lineTo(290,290)
	ctx3.lineTo(290,100)
	ctx3.lineTo(100,100)
	ctx3.stroke()
	ctx3.fill()
	ctx3.closePath()

	// circles----

	let canvas4 = document.getElementById('canvas4');
	let ctx4 = canvas4.getContext('2d')

	ctx4.fillStyle = "blue"

	ctx4.beginPath()
	ctx4.arc(200,30,25,0,Math.PI *2)
	ctx4.fill()
	// ctx4.closePath()

	ctx4.beginPath()
	ctx4.fillStyle = "red"
	ctx4.arc(200,100,45,0,Math.PI *2)
	ctx4.fill()
	ctx4.closePath()

	ctx4.beginPath()
	ctx4.fillStyle = "black"
	ctx4.arc(200,220,75,0,Math.PI *2)
	ctx4.fill()
	ctx4.closePath()


	// Animation

	let canvas5 = document.getElementById('canvas5');
	let ctx5 = canvas5.getContext('2d')
	let posX = 0
	let posY = 0
	let posZ1 = 400
	let posZ2 = 300


	setInterval(function(){
		posX++
		posY++
		posZ1--
		posZ2--

		ctx5.fillStyle ="black"
		ctx5.fillRect(0,0,canvas5.width,canvas5.height)

		ctx5.fillStyle ="white"
		ctx5.beginPath()
		ctx5.arc(posX,120,55,0,Math.PI*2)
		ctx5.fill()
		
		ctx5.fillStyle ="red"
		ctx5.beginPath()
		ctx5.arc(150,posY,45,0,Math.PI*2)
		ctx5.fill()

		ctx5.fillStyle ="blue"
		ctx5.beginPath()
		ctx5.arc(posZ1,posZ2,75,0,Math.PI*2)
		ctx5.fill()

	},30)











