// alert("It's working");

/*

One unique image, with appropriate and matching content in the alt tag.  

A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)

A unique color that supports the image and paragraph of content

Here are the items we need to change for each coffe:

image - src of pic
alt - alt tag of pic
decription - a paragraph of content about the coffee
name - a name of todays coffee
color - a color representing the coffe
today - the current day of the week
*/ 





function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn +=`
    <p>
            <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
           <strong class="feature">${coffee.day}'s Coffee Special:</strong> 
           ${coffee.day}'s daily coffee special is 
           <strong class="feature">${coffee.name}</strong>,
           ${coffee.desc}
           </p>
    `;
    return myReturn;
}






let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){  // data available? show data from url
    myDay = urlParams.get("day");


}

myDay = parseInt(myDay);


switch(myDay){

    case 0:
        today = "Sunday";
        coffee = {
        color: "gray",
            name: "Cold Brew",
            pic: "images/cold-brew.jpg",
            alt: "A picture of Cold Brew",
            day: "Sunday",
            desc: `The Cold Brew is the best!`
         };
    break;

    case 1:
        today = "Monday"
        coffee = {
            color: "black",
                name: "Drip",
                pic: "images/drip.jpg",
                alt: "A picture of Drip Coffee",
                day: "Monday",
                desc: `The Drip has the most drip on the menu!`
         };
    break;

    case 2:
        today = "Tuesday",
        coffee = {
        color: "green",
            name: "Caramel Latte",
            pic: "images/caramel-latte.jpg",
            alt: "A picture of Caramel Latte",
            day: "Tuesday",
            desc: `I love me a nice Caramel Latte`
        };
    break;

    case 3:
        today = "Wednesday"
        coffee = {
            color: "pink",
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of Bubble Tea",
            day: "Wednesday",
            desc: `I like me some Bubble Tea!`
        };
    break;

    case 4:
        today = "Thursday"
        coffee = {
            color: "brown",
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "A picture of a Mocha",
            day: "Thursday",
            desc: `I love Mocha!`
        };   
    break;

    case 5:
        today = "Friday"
        coffee = {
            color: "Orange",
            name: "Pumpkin Spice Latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A picture of a Pumpkin Spice Latte",
            day: "Friday",
            desc: `Nothing like a good ole Pumpkin Spice Latte!`
        };  
    break;

    case 6:
        today = "Saturday"
        coffee = {
                color: "cyan",
                name: "Frappaccino",
                pic: "images/frappaccino.jpg",
                alt: "A picture Frappaccino",
                day: "Saturday",
                desc: `My personal favorite the Frappaccino!`
        };
    break;


    default:
        today = "Something went wrong!";
    }
// coffeeData = coffeeTemplate(coffee)
//  alert(coffeeData);

// load coffee data to page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;
console.log(coffee);
