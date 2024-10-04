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


//visualizations using Vegalite:

//visualization 1
async function render() {
    //load data
    const data = await d3.csv("../A2-Personal-Website/data/videogames_long.csv");
    const datawide = await d3.csv("../A2-Personal-Website/data/videogames_wide.csv");

    const specone = vl
    .markBar()
    .data(data)
    .transform(
        vl.fold("Action", "Adventure", "Fighting", "Misc", "Platform", "Puzzle", "Racing", "Role-Playing", "Shooter", "Simulation", "Sports", "Strategy")
    )
    .encode(
        vl.x().fieldN('platform').title("Platform"),
        vl.y().fieldQ('global_sales').title("Global Sales (In Millions of Units)").aggregate("sum"),
        vl.color()
            .fieldN("genre")
            .title("Genre")
            .scale({
                domain: ["Action", "Adventure", "Fighting", "Misc", "Platform", "Puzzle", "Racing", "Role-Playing", "Shooter", "Simulation", "Sports", "Strategy"], // Sales regions
                range: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf", "#aec7e8", "#ffbb78"]
            })
    ).width(1100)
    .height(700)
    .toSpec();
  vegaEmbed("#visone", specone).then((result) => {
    const view = result.view;
    view.run();
  });

  //visulization 2
  const spectwo = vl
  .markCircle()
  .data(data)
  .encode(
      vl.x().fieldT('year').title("Year"),
      vl.y().fieldN('platform').title("Platform"),
      vl.size().fieldQ("global_sales").title("Global Sales (In Millions of Units)"),
      vl.color()
      .fieldN("genre")
      .title("Genre")
      .scale({
          domain: ["Action", "Adventure", "Fighting", "Misc", "Platform", "Puzzle", "Racing", "Role-Playing", "Shooter", "Simulation", "Sports", "Strategy"], // Sales regions
          range: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf", "#aec7e8", "#ffbb78"]
      })
  )
  .width(1100)
  .height(800)
  .toSpec();
  vegaEmbed("#vistwo", spectwo).then((result) => {
  const view = result.view;
  view.run();
});


    //visualization 3
  const specthree = vl
    .markBar()
    .data(data)
    .transform(
        vl.fold("eu_sales", "jp_sales", "na_sales", "other_sales")
    )
    .encode(
        vl.x().fieldN('platform').title("Platform"),
        vl.xOffset().fieldN('sales_region').title("Sales Region"),
        vl.y().fieldQ('sales_amount').title("Sales Amount (In Millions of Units)").aggregate("sum"),
        vl.color().fieldN("sales_region").title("Sales Region")
    ).width(1000)
    .height(800)
    .toSpec();
 vegaEmbed("#visthree", specthree).then((result) => {
    const view = result.view;
    view.run();
  });

  //visualization 4 part 1
  const specfour = vl
    .markArc()
    .data(datawide)
    .title('North American Game Sales (In Millions of Units) by Genre')
    .encode(
        vl.color().fieldN('Genre').title("Genre"),
        vl.theta().fieldQ('NA_Sales').title("North American Sales (In Millions of Units)").aggregate("sum"),
        vl.color()
            .fieldN("Genre")
            .title("Genre")
            .scale({
                domain: ["Action", "Adventure", "Fighting", "Misc", "Platform", "Puzzle", "Racing", "Role-Playing", "Shooter", "Simulation", "Sports", "Strategy"], // Sales regions
                range: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf", "#aec7e8", "#ffbb78"]
            }),
        vl.tooltip()
            .fieldN('Genre')
            .fieldQ('NA_Sales').aggregate("sum")
            .title('Sales Amount (In Millions of Units)')
    )
    .width(500)
    .height(500)
    .toSpec();
 vegaEmbed("#visfour", specfour).then((result) => {
    const view = result.view;
    view.run();
  });

  //visualization 4 part 2
  const specfive = vl
    .markArc()
    .data(datawide)
    .title('Japanese Game Sales (In Millions of Units) by Genre')
    .encode(
        vl.color().fieldN('Genre').title("Genre"),
        vl.theta().fieldQ('JP_Sales').title("Japanese Sales (In Millions of Units)").aggregate("sum"),
        vl.color()
            .fieldN("Genre")
            .title("Genre")
            .scale({
                domain: ["Action", "Adventure", "Fighting", "Misc", "Platform", "Puzzle", "Racing", "Role-Playing", "Shooter", "Simulation", "Sports", "Strategy"], // Sales regions
                range: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf", "#aec7e8", "#ffbb78"]
            }),
        vl.tooltip()
            .fieldN('Genre')
            .fieldQ('JP_Sales').aggregate("sum")
            .title('Sales Amount (In Millions of Units)')
    )
    .width(500)
    .height(500)
    .toSpec();
 vegaEmbed("#visfive", specfive).then((result) => {
    const view = result.view;
    view.run();
  });


}
render();

