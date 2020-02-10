//Setting up your Vue app
//------------------------------------------------------------------------------------------------
const app = new Vue ({
    el: '#app' //el and '#app' are key-value pairs. el reprents the html element where you'd like to render your Vue app.
    // '#app' is a css style ID that tells the DOM where to render the content of your Vue app.
    // There should be a corresonding section of html with an id of 'app' 
})

//------------------------------------------------------------------------------------------------

//Directives - custom HTML attributes built into Vue that accomplish incredibly complex, common front-end operations using barely any code.

// v-if

//Effectivly a javascript if, it will only display the HTML element it is on if the v-if statement returns true.

/* example: 
<button v-if="userIsLoggedIn">Log Out</button>
<button v-if="!userIsLoggedIn">Log In</button>
*/  

// in the above example the v-if directive will check the app's .data for a value of userIsLoggedIn and display content accordingly.

// v-for 

//like a for loop, v-for is used to iterate through every item in an array in our .data. 

/* example: 
<ul>
  <li v-for="todo in todoList">{{ todo }}</li>
</ul>
*/  

//in the above example v-for will iterate through every item in our .data's todoList array, create a variable called todo containing each successfive array element, and create an li displaying each element in the list.

// v-model 

//v-model can be added to any form field and hooked up to the Vue app's .data. v-model setups up 2-way binding which means that the value is connected both to the form and .data element.
//Using v-model means that modifying the form field will automatically modify the specified Vue app data.

/* example: 
<input v-model="username" />
*/  

//in the above example v-for will iterate through every item in our .data's todoList array, create a variable called todo containing each successfive array element, and create an li displaying each element in the list.

/*
Vue offers the following three modifiers for v-model:

.number — automatically converts the value in the form field to a number
.trim — removes whitespace from the beginning and ends of the form field value
.lazy — only updates data values when change events are triggered (often when a user moves away from the form field rather than after every keystroke)
*/ 


// v-on: - used to add event handling functionality, can also be written as "@"

// v-on:click

// this directive takes JavaScript code as its value then, whenever the element with this directive is clicked  the provided code will run.

/* example:
      <div class="new-tweet">
        <input type="text" value="tweet" placeholder="New Tweet" v-model="newTweet"/>
        <button v-on:click="tweets.push(newTweet)">Add Tweet</button>
      </div>
*/

//in the above example v-on:click appends the value of newTweet to thhe tweets array in .data

// v-bind (alternatively written as ":")

//v-bind takes a value from the Vue app's data object and uses it as the value of the specified component prop.

//------------------------------------------------------------------------------------------------

//Components - custom reusable HTML elements 

//------------------------------------------------------------------------------------------------

//Computed Properties - data that can be calculated using values from the data object stored in separate property called computed.

//Instead of storing computed data as key-value pairs in our data object, we store key-value pairs in a separate computed object. 
//Each key in the computed object is the name of the property and the value is a function that can be used to generate a value rather than a specific value.

//Dynamic values that are computed using other dynamic values should be stored on computed.

//To reference a value from .data in a computed property, you treat that value as an instance property using the 'this' keyword followed by the name of the data.

/* example:

const app = new Vue({
  el: '#app',
  data: {
    hoursStudied: 274
  },
  computed: {
    languageLevel: function() {
      if (this.hoursStudied < 100) {
        return 'Beginner';
      } else if (this.hoursStudied < 1000) {
        return 'Intermediate';
      } else {
        return 'Expert';
      }
    }
  }
});

//Note how in the above example, hoursStudied is referred to in the computed property "languageLevel" as this.hoursStudied.

*/

//------------------------------------------------------------------------------------------------

//Watchers - We use the watch property to make app updates without explicitly using a value in a computed function.

//This property is used when we do not need to continually compute a new dynamic property - just update existing properties whenever the change happens.

//The value of watch is an object containing all of the properties to watch for changes and the values are functions to run whenever the corresponding properties change.
//These functions take two parameters: the new value of that property and the previous value of that property.

//------------------------------------------------------------------------------------------------

//Instance Methods - Vue app options property called methods for storing any methods needed to make our Vue app work.

//------------------------------------------------------------------------------------------------

//Modifiers

//Modifiers are properties that can be added to directives to change their behavior. Vue includes modifiers for many common front-end operations, such as event handling.

/* example:
<form v-on:submit.prevent="submitForm">
  ...
</form>
*/

//In the above example the prevent modifier was added to a form submit event handler directive. This will automatically call Event.preventDefault() whenever the event handler is triggered.

//------------------------------------------------------------------------------------------------

//Inline Styles

//You can style elements inline using view

/* example:

<h2 v-bind:style="{ color: breakingNewsColor, 'font-size': breakingNewsFontSize }">Breaking News</h2>

*/

//In this example, we use the v-bind:style directive to set the value of two inline styles to two Vue app properties. The value of the v-bind:style directive is an object where the keys are CSS properties and the values are dynamic properties on the Vue app.

//his example only used values stored in data, however computed properties can be used for v-bind:style and all of the other directives covered in this lesson in the same way.

