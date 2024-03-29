# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshots/loopstudios%20mobile.png)
![](./screenshots/loopstudios%20mobile%20menu.png)
![](./screenshots/loopstudios%20desktop%20active%200.png)
![](./screenshots/loopstudios%20desktop%20active%201.png)
![](./screenshots/loopstudios%20desktop%20active%202.png)

### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/loopstudios-using-reactjs-qKTPhjdwVI)
- Live Site URL: [Vercel Site](https://loopstudios-flame-phi.vercel.app)

## My process

### Built with

- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I learned how to use the ::after pseudo-elements for the underline of the links.

See below:

```css
  footer > .links > a::after, footer .socialmedialinks > a::after{
    content: '';
    position: absolute;
    bottom: -10px;
    left:50%;
    width: 0;
    height: 2px;
    background-color: white;
    transition: all .2s ease;
  }

  footer > .links > a:hover::after, footer > .socialmedialinks >  a:hover::after{
    left:0;
    width: 100%;
  }
```
### Useful resources

- [Hover for ::before and ::after](https://stackoverflow.com/questions/5777210/how-can-i-write-a-hover-condition-for-abefore-and-aafter) - This helped me for the hover functionality on before and after elements.

- [Centering the ::before and ::after](https://stackoverflow.com/questions/55398733/start-css-underline-animation-from-center-instead-of-left) - This helped me center the width on initial state.


## Author

- Frontend Mentor - [@joshmichael23](https://www.frontendmentor.io/profile/joshmichael23)
- Twitter - [@sadzxcqwerty](https://www.twitter.com/sadzxcqwerty)
