//container for the svg drawing
const canvas = document.getElementById('myCanvas');

//getting an instance of svg circle
const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

//set location and general appearance of circle
circle.setAttribute("cx", 250);
circle.setAttribute("cy", 250);
circle.setAttribute("r", 50);
circle.setAttribute("fill", "blue");
circle.setAttribute("stroke", "black");
circle.setAttribute("stroke-width", 4); 
//add the circle to the canvas
canvas.appendChild(circle);
//function which constantly grows/shrinks the circle
function circleAnimate() {
    let growing = true;
    let radius = 50;
    let colors = ['blue', 'green', 'red']; //colors for the circle 
    let colorIndex = 0; //value used to change the colors

    function update() {
        //add/subtract the size of the circle depending on whether its too large/small
        if (growing) {radius += 1;
        } else {radius -= 1;}
        //shrink if the radius is more than 300, grow if radius is less than 50
        if (radius>245) growing = false;
        if (radius<50) growing = true;
        //change the radius of the circle
        circle.setAttribute("r", radius);

        //change the color of the circle when the radius is exactly divisible by 20
        if (radius%20 === 0) {
            colorIndex = (colorIndex+1)%colors.length;
            circle.setAttribute("fill", colors[colorIndex]);
        }
        //update the animation constantly
        requestAnimationFrame(update);
    }
    //start animating
    update();
}
//start circle animation
circleAnimate();