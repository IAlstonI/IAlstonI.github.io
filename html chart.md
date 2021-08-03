# EASILY CREATE STUNNING ANIMATED CHARTS WITH CHART.JS
Charts are far better for displaying data visually than tables and have the added benefit that no one is ever going to press-gang them into use as a layout tool.

The first thing we need to do is download Chart.js.

Drawing a line chart

create a canvas element in our HTML in which Chart.js can draw our chart.
write a script that will retrieve the context of the canvas
create our data

# Basic usage of canvas
The <canvas> element has only two attributes, width and height.
The <canvas> element can be styled just like any normal image (margin, border, background…). These rules, however, don't affect the actual drawing on the canvas.
The canvas is initially blank. To display something, a script first needs to access the rendering context and draw on it.
The <canvas> element has a method called getContext(), used to obtain the rendering context and its drawing functions. getContext() takes one parameter, the type of context.
For 2D graphics, such as those covered by this tutorial, you specify "2d" to get a CanvasRenderingContext2D.
  
# Drawing paths
A path is a list of points, connected by segments of lines that can be of different shapes, curved or not, of different width and of different color,Here are the functions used to perform these steps:

beginPath() Creates a new path. Once created, future drawing commands are directed into the path and used to build the path up.
Path methods : Methods to set different paths for objects.
closePath() Adds a straight line to the path, going to the start of the current sub-path.
stroke() Draws the shape by stroking its outline.
**fill()**Draws a solid shape by filling the path's content area.
