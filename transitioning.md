# Transforms :
With CSS3 came new ways to position and alter elements. Now general layout techniques can be revisited with alternative ways to size, position, and change elements.
All of these new techniques are made possible by the transform property.

The transform property comes in two different settings, two-dimensional and three-dimensional. Each of these come with their own individual properties and values.

Within this lesson we’ll take a look at both two-dimensional and three-dimensional transforms.
Generally speaking, browser support for the transform property isn’t great, but it is getting better every day.
For the best support vendor prefixes are encouraged, however you may need to download the nightly version of Chrome to see all of these transforms in action.

The actual syntax for the transform property is quite simple, including the transform property followed by the value. The value specifies the transform type
followed by a specific amount inside parentheses.

div { -webkit-transform: scale(1.5); -moz-transform: scale(1.5); -o-transform: scale(1.5); transform: scale(1.5); }

## 2D Transforms :
Elements may be distorted, or transformed, on both a two-dimensional plane or a three-dimensional plane.
Two-dimensional transforms work on the x and y axes, known as horizontal and vertical axes. Three-dimensional transforms work on both the x and y axes,
as well as the z axis. These three-dimensional transforms help define not only the length and width of an element, but also the depth. We’ll start by discussing
how to transform elements on a two-dimensional plane, and then work our way into three-dimensional transforms.

## Transitions & Animations :
One evolution with CSS3 was the ability to write behaviors for transitions and animations. Front end developers
have been asking for the ability to design these interactions within HTML and CSS, without the use of JavaScript or Flash, for years. Now their wish has come true.

With CSS3 transitions you have the potential to alter the
appearance and behavior of an element whenever a state change occurs, such as when it is hovered over, focused on, active, or targeted.

Animations within CSS3 allow the appearance and behavior of an element to be altered in multiple keyframes.
Transitions provide a change from one state to another, while animations can set multiple points of transition upon different keyframes.
