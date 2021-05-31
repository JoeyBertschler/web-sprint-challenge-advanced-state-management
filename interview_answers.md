# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
`Control state through the API in a new and easy way.`
2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions - is the source of information for the store. instead of props this data is called payloads
reducers - combine state and actions
store - holds state in a centralized way throughout the app

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
action creators return functions instead of an action
action creators = component doesn't have to know any of the details of creating and dispatching

4. What is your favorite state management system you've learned and this sprint? Please explain why

I prefer redux the context API. don't fully get it yet tbh, but I'm going for the newest stuff usually