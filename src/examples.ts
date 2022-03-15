// this file implements some examples if you haven't read the other files yet go ahead and read them!

//-----------------------------------------------

interface Cube {
    type : "Cube"
    width : number
}

interface Ball {
    type : "Ball"
    radius : number
}

type Shape = Cube | Ball

function calculateAreaCube(shape : Cube) {
    return (shape.width*shape.width)
}

function calculateAreaBall(shape : Ball) {
    return ((4/3)*Math.PI*(shape.radius**3))
}

function calculateArea(shape : Shape) {
    if(shape.type == "Cube")
     return calculateAreaCube(shape)
    else
     return calculateAreaBall(shape)

}