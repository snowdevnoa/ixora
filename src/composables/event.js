/*The cooler part about composables though, is that you can also nest them: one composable
function can call one or more other composable functions. This enables us to compose complex logic using small, 
isolated units, similar to how we compose an entire application using components. In fact, this is why we decided to call the 
collection of APIs that make this pattern possible Composition API.
For example, we can extract the logic of adding and removing a DOM event listener into its own composable: */

import {onMounted, onUnmounted} from 'vue';

function useEventListener (target, event, callback){
    // by convention, composable function names start with "use"
    onMounted(()=>target.addEventListener(event , callback))
    onUnmounted(()=>target.addEventListener(event,callback))
}