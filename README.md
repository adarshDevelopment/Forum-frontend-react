Directory/Folder structure

1. Layout -> header, footer, layout->indexPosts
2. header: Header { ProfileMenu { NotificationDropDown, ProfileDropDown{DarkMode} } }
3. footer

fetchUser createAssyncThunk is called from Header.jsx to fetch user and also from several other places 


2. post details: 
    layout has useEffect function that depends on the change of token. token is set when user loggs in or registers.

3. How comments and post reload after insertion, update and deletion:
    trigger in deleteModalSlice. 
    show page uses useFetch custom hook to fetch data from the server which has useEffect which depends on the same fetchTrigger.
    so after every successul either of the operations, trigger is changed, hence new values are fetched again.

    the only reason why the new fetched values are updated is because the loading state is changed in the useFetch custom hook. loading is set to true, and then shortly false, and since the laoding value is changed and the values dpened on loading ? <></> : <></>, new values get displayed.


1. Application features:
    Login
    Register
    Post blog
    Post pictures in blog
    Tag appropriate blogs/threads
    Reply to thread
    Like Thread
    Star thread
    Save Thread
    Favorite thread
    




Tailwind Tips:

1. object-cover: this class does not stretch the image and crops it 
2. overflow-hidden: hides overflown elements 
3. focus-outline-none: removes the thick annyoing border when focusing
4. to learn about flex, open Flex.jsx
5. focus:outline-none to remove the annyoing dark borders from input
6. pointer-events-none to ignore the div. check login input


React Router setup:

1. install react router: npm install react-router-dom
2. createBrowserRouter: This function is used to create a router instance for a web application. It expects an array of route objects.
    createRoutesFromElements: This function converts JSX elements (like <Route>) into a format that createBrowserRouter can use.

    <Route> Component: Each <Route> component expects path and element props. The path prop defines the URL path, while the element prop specifies the React component to render for that path.





1. Profile page
    1. notification -> done
    2. profile dropdown -> done
    3. search 
    4. +create page
    5. message/chat
    6. dark mode toggle button






