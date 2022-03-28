# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Hwa-Lyang Sugihara**

Time spent: **5** hours spent in total

Link to project: (https://glitch.com/edit/#!/magical-curious-date?path=index.html%3A1%3A0)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:
* [x] Mistake counter display

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
[](https://recordit.co/jfoKXGKtjv)
[](https://recordit.co/1Cftak9n8q)
[](https://recordit.co/Y75Ep7xirs)
[](https://recordit.co/sW4JUTC0E4)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[https://dev.to/stewyearth/making-a-simple-counter-in-javascript-html-2ici
https://www.w3schools.com/jsref/met_win_setinterval.asp
https://www.w3schools.com/jsref/met_win_clearinterval.asp
https://stackoverflow.com/questions/10935026/how-to-clear-interval-and-set-it-again]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[Some difficulties I had were in the optional part of the project. I wanted to implement an html element to include a visible mistake counter to my program. The counters that were shown online were for a clicking increment or decrement counter that was controlled by the user, so I had to figuring out how to link the mistake counter I had already incorporated in my code to the html element. I looked back on the code for linking the buttons to functions in javascript in order to fully understand how to connect javascript to html. 
While completing the countdown timer, I took some time to understand how the clearInterval() function worked with the id that was returned by the setInterval() method. I wanted the flexibility to start and stop the timer in different places in the code, I needed to find some way to save the id returned by the setInterval() method. I searched online and found a function that operates with flags as a parameter and made the id a global variable. I created a similar function to solve that problem of starting and stopping the timer at different locations in the code. I then had to find the right places to update the visible timer, start the timer, stop the timer, and reset the timer. I couldn't connect resetting the timer to the start button because pausing the game would restart the timer, so I reset the timer when the clue sequence was played and when the player either lost or won the game. Coordinating when to start and stop the timer was difficult because I ran into a bug where starting the timer occurred twice before stopping the timer. It made it impossible to completely stop the timer and would multiply the speed by which the timer would count down. To minimize the amount of trial and error I would have to do to find the bug, I wrote out the checkpoints in which I wanted the timer to start and stop while actually playing the game.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[I would like to know how web developers organize their code for readability and efficiency. With the CSS and html files, I assume there are many classes and IDs to keep track of that interfere with readability and might lead to many bugs. Working with other people on a website seems to be difficult as a result of those specific labels/names and because everyone has different approaches to coding and problem solving. Another question I have is how to use programming languages other than javascript, like Python, in the backend part of web development. I would want to know when to use a certain language over another and know the best tools and platforms to implement them.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[If I had a few more hours, I'd probably spend it adding more features to the game like providing levels for the user (shorter sequences or longer sequences) to select or make different game modes. 
A new game mode could be a  music pitch guessing game where the player needs to guess which pitch was just played by the computer. All the buttons would labeled with solfege on the C scale (Do(C), Re(D), Mi(E), Fa(F), Sol(G), La(A), Ti(B), Do(C)), and the game would then play a note without highlighting which button/note it was. The player clicks on the button as their guess, and the button would give audio feedback and the game would give visual feedback on whether the guess was right or wrong. That game mode could have multiple levels where the computer plays a sequence of notes, and the player would need to guess the whole sequence. The reason I would want to create this type of game is because I took a music theory course where my tests consisted of naming the pitches of a sequence of notes on the piano. This kind of game is practical and helpful for people to practice with.]



## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/85139468c9494484a672c21218f1cd98)


## License

    Copyright [Hwa-Lyang Sugihara]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
