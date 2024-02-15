// Task 1: Inside the first Div, after the main heading add a sub-heading (h3 tag) "Buy high quality organic fruits online".
// Task 2: Make the sub-heading text italic.
        // const mainHeading = document.getElementById("main-heading");
        // const subHeading = document.createElement("h3");
        // subHeading.textContent = "Buy high quality organic fruits online";
        // subHeading.style.fontStyle = "italic";
        // mainHeading.insertAdjacentElement("afterend", subHeading);

// Task 3: Inside the second Div, before the unordered list add a paragraph tag showing "Total fruits: 4".
// Task 4: On this paragraph tag set an id of "fruits-total".
            // const basketDiv = document.getElementById("basket-heading").parentNode;
            // const totalFruitsParagraph = document.createElement("p");
            // totalFruitsParagraph.textContent = "Total fruits: 4";
            // totalFruitsParagraph.id = "fruits-total";
            // basketDiv.insertBefore(totalFruitsParagraph, basketDiv.querySelector("ul"));




// a text node is indeed created implicitly, even though you didn't explicitly use the `document.createTextNode()` method. When you set the `textContent` property of the `subHeading` element, you are essentially creating a text node containing the specified text content.
// Let's break down the code functionality:
// 1. `const mainHeading = document.getElementById("main-heading");` retrieves the element with the id "main-heading" from the DOM and stores it in the variable `mainHeading`.
// 2. `const subHeading = document.createElement("h3");` creates a new `<h3>` element and stores it in the variable `subHeading`.
// 3. `subHeading.textContent = "Buy high quality organic fruits online";` sets the text content of the newly created `subHeading` element to "Buy high quality organic fruits online". This line implicitly creates a text node containing the specified text content and adds it as a child node of the `subHeading` element.
// 4. `subHeading.style.fontStyle = "italic";` sets the font style of the `subHeading` element to italic.
// 5. `mainHeading.insertAdjacentElement("afterend", subHeading);` inserts the `subHeading` element as a sibling element immediately after the `mainHeading` element in the DOM.
// So, even though you didn't explicitly create a text node using `document.createTextNode()`, setting the `textContent` property of an element implicitly creates a text node containing the specified text content.






//using directly textnode from video
//create Element
const para = document.createElement('p');
//creating the text node that will create text container in that container that text will be inserted
const paraText=document.createTextNode('Total fruits: 4');

//append child inserting text into the tag element created but it's not appended in the Document object of browser
para.appendChild(paraText);


//insert before
const divs=document.getElementsByTagName('div');//all the tag of div is selected now we want to insert at before the second index div

//select second div
const  secondDiv=divs[1];


//now making the created element to the part of documnet 
secondDiv.appendChild(para);




//insert before 

// const fruits=document.querySelector('.fruits');
// const basketHeading=document.getElementById('basket-heading');
// //what i want to insert and where I want to insert
// secondDiv.insertBefore(para,basketHeading);





//setAttribute ,  className,  id
//setting a classname attribute

para.className='fruitCount';

//setting a id attribute
para.id='fruitsTotal';
//set attribute using setAttribute method by passing two argument 1st -attribute want to set and what value you want to set
para.setAttribute('title','fruitsTotal');
console.log(para);