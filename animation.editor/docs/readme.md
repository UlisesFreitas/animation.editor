# Animations in Template

**Version:** 1.0.0  
**Author:** Ulises Freitas  
**Email:** [ulises.freitas@gmail.com](mailto:ulises.freitas@gmail.com)  
**Category:** Media  

## Overview

The `intemplateanimations` module allows you to create and manage animations within your game templates. It provides a simple interface to define animations using frames from graphic assets, ensuring that each animation has a unique name.

## Features

- Create animations with a unique name and specified frames.
- Automatically handle texture creation based on defined animations.
- Validate the existence of graphic assets and frames.

## Installation

To use the `intemplateanimations` module, ensure that it is included in your project. You can activate the `intemplateanimations` catmod.

![alt text](./data/ct.libs/animation.editor/docs/Animations-in-template-sidebar-1.jpg)

## Example
in a spritesheet of 38 frames, we know that 0,1,2 are the frames correspondin to `idle` animation
![alt text](./data/ct.libs/animation.editor/docs/sample-spritesheet-1.jpg)
Then into the template just create a new animarion field and add `Idle` and frames 0,1,2, and thats it.
Later you call something like this 
```
setTexture(NameOfYourTemplateIdle); 
this.loop = true; 
this.play();
```
In catnip like:

![alt text](./data/ct.libs/animation.editor/docs/catnip-animation-play-1.jpg)

