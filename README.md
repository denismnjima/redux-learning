# Redux learning
Redux is a state management library for JavaScript applications. It is most commonly used with libraries like React, but it can be used with other JavaScript frameworks and libraries as well.

Redux provides a centralized store for your application's state, which can be accessed and updated by any component in your application. This makes it easier to manage state across different parts of your application and to debug issues related to state.

Redux follows a predictable state container model, which means that the state is read-only and can only be updated by dispatching actions. Actions are simple objects that describe the change that needs to be made to the state. Reducers are functions that take the current state and an action, and return the new state.

Redux also provides middleware, which is code that sits between the dispatch of an action and the update of the state. Middleware can be used for logging, asynchronous actions, and other tasks.

# Redux flow    

![Redux flow](./redux-flow.png)                                                                                                                                                                                                 