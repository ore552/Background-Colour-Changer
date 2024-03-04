    //Let's add our query selectors.
    let body = document.querySelector("body");
    let button = document.querySelector(".button");
    let p = document.querySelector(".colornames");

    //Let us create an event listener.
    button.addEventListener("click", changeColours);

    //Let us declare the function.
    function changeColours() {
    //We are bring back our query selectors "body" and ".colorname".
    //copy and paste the body and p query selectors.
    let body = document.querySelector("body");
    let button = document.querySelector(".button");

    //create 3 new variables to create the numbers the colour name will show.
    let num1 = Math.round(Math.random()*10);

    //the numbers without the *10 would have been decimals instead of integers. duplicate this 3 times and call the num(1,2,3) like this let num2 = Math.round(Math.random()*10);
    let num2 = Math.round(Math.random()*10);

    //and for number 3
    let num3 = Math.round(Math.random()*10);

    //Then, add the color value starting with the universal openener "#" + with num1 + num2 + num 3 = #(num1 let's say 2)(num2 let's say 4)(num3 lets say 9). This will create the colour value which = the color itself of the background of the screen!
    let colorvalues = "#" + num1 + num2 + num3;

    //Then send the color value randomiser to the style of the body and the background will change!
    body.style.backgroundColor = colorvalues;

    //Then send the color name to the innerhtml and add it to the color value.
    p.innerHTML = "Colour Name: " + colorvalues;

    //And now we can see what value which colour it is!
    }