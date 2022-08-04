# Summer Music Festivals Single Page Application
Application made for React course SoftUni
Simple catalog of Festivals

# Features

## Not logged in users
    - view home page
    - view login
    - view register
    - view catalog page
    - view page not found 404
    - view details page without buttons

## Logged in users
    - view home page
    - view catalog
    - view details 
        ++ owner see edit and delete buttons
        ++ user see buy button
        ++ if user has already bought a ticket see only price
    - can create festival
    - view my festivals - users details and user's created festivals
    - view cart - can have tickets or not
        ++ cart has list of all tickets put in the cart with button BUY and total sum
        ++ ticket could be removed from cart
        ++ when checkout - the list of tickets with qrcode(includes ticket quantity and festival name) is printed
    - view logout button

## Additional Info

    - all forms has validation - react bootstrap templates
    - notification handler for the backend errors or main actions giving indication to the user - success or error
    - spinner is added while waiting response - react bootstrap template
    - all users routes are protected with private guard if there is no logged in user

# Technologies

## Front-end

    - ReactJS
    - React Bootstrap
    - CSS
    - FontAwesome

## BackEnd

    - Back4App 
