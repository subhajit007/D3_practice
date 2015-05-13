

// d3.selectAll('p').style('color','red').style("background-color", 'yellow');
// d3.select('body').style("background-color", 'green').style("font-size","60px")


// It is not working
// d3.selectAll('p').style('color'.function(){
//     return "hsl(" + Math.random() * 360 + ", 100%, 50%)";

// });

// d3.selectAll('p').style('color', function(d, i){

//     return i % 2? "red": "blue";
// })


// d3.selectAll('p').data([90, 8, 15]).style('font-size', function(d, i){

//     return d + 'px';
// });
// var p = d3.selectAll('p').data( [' wifi', ' lowfi ', ' hifi '] ).text(String);
// p.enter().append('p').text(String);
// p.exit().remove();

// d3.select('body').transition().duration(3000).style('background-color', 'green');
// function update(){
//  var numbers = [];

//  for(var i = 0; i < 4; i++){
//    var rand = Math.floor(Math.random()*100);
//    numbers.push(rand);
//  }

//  var selection = d3.select("#chart").selectAll(".bar").data(numbers).style("height", function(d){
//    return d + "px";
//  }).style("margin-top", function(d){
//    return 100 - d + "px";
//  }).text(String);
// }

// var numbers = [15, 8, 42, 4];

// var bars = d3.select("#chart").selectAll(".bar").data(numbers).style("height", function(d){
//  return d + "px";
// })
// .style("margin-top", function(d){
//  return 100 - d + "px";
// }).text(String).on('click', function(e, i){
//  update();
// });




// NOw going to make some animations
//
// var circle=d3.selectAll('circle').style('fill', 'steelblue').attr('r', 40);

// function setRandom(){
//     // var circle = d3.selectAll("circle");
//     circle.transition().duration(1500).ease('linear').attr("cx", function(){
//         return Math.random() * 720;
//     }).attr('cy', function(){
//         return Math.random() * 120;
//     }).each('end', setRandom);
// }

// setRandom();

// For different colors

function setRandom(){
   var circle = d3.selectAll('circle').style('fill', function(){
       return "hsl(" + Math.random() * 360 + ", 100%, 50%)";
   }).attr('r','30');
   circle.transition().duration(2000).ease('linear').attr('cx', function(){
       return Math.random() * 1020;
   }).attr('cy', function(){
       return Math.random() * 720;
   }).attr('r', function(){
       return Math.random() * 380;
   }).style('fill', function(){
       return "hsl(" + Math.random() * 360 + ", 100%, 50%)";
   }).each('end', setRandom);
}
setRandom();


// // for rectangle shape
// var rect= d3.selectAll('rect').attr({
//     'fill': 'green',
//     'height': 50,
//     'width' :50
// });

// d3.selectAll('elliplse').attr({

//     'cx':180,
//     'cy': 100,
//     'rx': 50,
//     'ry': 70
// });