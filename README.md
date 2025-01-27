##### workshop-task-7

# Workshop 7 : Simulation

[Website Link] https://josephinepark.github.io/workshop-task-7/

- mouseclick : the walkers will be created with the same colours as the pixel values of the picture.

## Task
[] Build a simulation of a real or imagined entity or environment.<br>
[] Experiment with random walks and/or particle systems in your sketch.<br>

## Notes from the workshop video

Objects : very useful way to control graphics and to create simulations on screen.


## Progress (Experiementation and problem solving)
<br>
<img width="908" alt="image" src="https://github.com/user-attachments/assets/9a22f908-1250-456c-86e5-38799dfe9dc6" />
<Br>
<Br>
Constructor : a specific function that we use to set tup the class.
<Br>
<Br>
<img width="846" alt="image" src="https://github.com/user-attachments/assets/500d3184-085f-4d97-8bf8-b9db8c5d4ebd" />

<img width="855" alt="image" src="https://github.com/user-attachments/assets/c856b86a-267e-4774-8418-fa1e790e762d" />
<br>
<Br>
<img width="848" alt="image" src="https://github.com/user-attachments/assets/f222f04a-af06-4992-afd6-8871872959fb" />
<br>
<img width="715" alt="image" src="https://github.com/user-attachments/assets/263f414f-7c0d-4d3a-9a01-ed574257b08b" />
<br>
<Br>
By following the workshop video, I experienced that I could give movement to the balls I created, and I learned how to build simulations. It was fascinating to see that the balls did not just appear on the canvas but could be given speed and direction to move dynamically.
I learned how to update the position of the balls frame by frame, which deepened my understanding of the roles of the setup() and draw() functions. Experimenting with velocity and gravity also helped me understand the principles of simulating physical motion through programming.
Through this experience, I gained insights into not only the fundamentals of animation but also techniques to manipulate objects and add interactions within the code.

-----------------------------------------

<img width="858" alt="image" src="https://github.com/user-attachments/assets/5d2c9920-0fa2-4994-b514-6c832607bbde" />
<img width="856" alt="image" src="https://github.com/user-attachments/assets/79dcc286-95d6-4da4-8d9a-714240fa37fa" />
<br>
<Br>
Then I have worked with the walkers. While watching various tutorial videos on YouTube, I came up with the idea of creating a simulation that connects to an uploaded image of my choice. Instead of just displaying an image, I wanted to make it more interactive and engaging by linking it with dynamic elements.
One particular tutorial that caught my attention featured a project where tree branches grew over a Mona Lisa image, shaping themselves according to the colours of the painting. I found this project fascinating as it demonstrated how pixel data could be analyzed and gradually formed into a meaningful composition. This inspired me to explore similar possibilities in my own project.
Based on this inspiration, I decided to experiment with the Walkers. Walkers move randomly across the canvas, forming unique patterns, and by integrating image colour data, they can follow the natural flow of colours or fill specific areas, creating visually interesting effects.
<br>
<Br>
<img width="853" alt="image" src="https://github.com/user-attachments/assets/5fe92771-5339-4613-b872-137b7ffc700a" />
<Br>
<Br>
<img width="716" alt="image" src="https://github.com/user-attachments/assets/ee2541f0-636b-4d99-b2ca-905537468c72" />
<br>
<br>
mousePressed() : when the user clicks on the canvas, the mousePressed() function is triggered and the RGB values of the clicked pixel are retrieved. Using these colour values, 50 new walker objects are created and added to the walkers array. 
(-> I set the number of walkers to grow 50 at a time. After experimenting with various numbers, I found that 50 provided the most visually satisfying outcome, striking a good balance without overcrowding or looking sparse.)
<br>
<br>
I implemented the random generation of walkers with various colours and positioned an imported image as the background, enhancing the project's visual appeal. I also added a user event by implementing the mousePressed() function, allowing users to interact with the simulation by clicking to generate new walkers.
However, I encountered some challenges in making the walkers adopt the colours from the background image instead of random or fixed colours. To solve this, I sought help from a friend and learned how to extract pixel data from the image and adjust the r, g, and b values accordingly.
To match the walkers' colours with the background, I analyzed the image pixels and extracted their corresponding r, g, and b values, assigning them to walkerColor. This allowed the walkers to blend harmoniously with the image, creating a visually cohesive result.

<br>
<br>
<img width="303" alt="image" src="https://github.com/user-attachments/assets/2329cc43-6036-412f-9591-7f4a85a47f32" />
<Br>
<Br>
Through this project, I deepened my understanding of combining images with code, handling user interactions, and manipulating colour arrays effectively.


## codes

<img width="281" alt="image" src="https://github.com/user-attachments/assets/9216c468-97bc-4ba4-81f2-c426e70732c8" />
<br>
<br>
<img width="304" alt="image" src="https://github.com/user-attachments/assets/94e708a2-5e3d-4832-9411-53bd41a6cbfc" />
<br>
<br>



## Future Development

In this workshop, I explored various simulations using code. Specifically, I experimented with creating images using walkers. I implemented a system where an image is set as the background, and each time the user clicks the mouse, walkers of similar colors to the background are generated.

If I further develop this project, I plan to start with a black background, gradually revealing the image as the user clicks, creating an evolving sketch. In addition to walkers, I would like to experiment with particles and other system-based approaches to create a more advanced and dynamic sketch. Through this, I hope to achieve a more creative and interactive outcome.

## Reference / other sources that helped me

https://www.youtube.com/watch?v=l__fEY1xanY&t=835s

- working with random walker (tutorial)
<br>
<Br>
https://www.youtube.com/watch?v=m2lT4QojnGg

- random walker in p5.js
<br>
<Br>
https://www.youtube.com/watch?v=WvpsFttvl3E

- image 2 (tutorial)
<br>
<Br>
https://editor.p5js.org/codingtrain/sketches/N-qqe1ExZ


<br>
<Br>
https://archive.p5js.org/examples/simulate-particles.html

- random walker (p5.js documentation)
<br>
<Br>
Image : from Adobe Stock
