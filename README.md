# Delivery-Hub
Personal Project to centralize all your incoming packages.

![image](https://user-images.githubusercontent.com/55676291/216073687-3dd6e9f3-e4ef-426c-ac04-6a5bf5362c7e.png)


## Done:
- intergrate google maps api
- dynamic list for items based on a json


## TO-DO/Goals:
- Intergrate OKTA for Sign in/ Sign up
  - Simple session store
  - Simple username pulling
- Create DB 
  - Design relationship for users and their orders
 
 - Make CR~U~D functionality
    1. CREATE new packages to track
        - Webscrape Tracking number information
        - GOAL: user enters tracking number and item name. The other details are done on backend.
    2. READ existing packages associated to the user
         - Show the location of package
            1. Onload map will be centered on user location and any visable packages will be pinned on google maps api
            2. Side tabs will operate as buttons to set centered marker to the package clicked on
            3. Clicking on marker will light up tab
    3. ~Update Package?~ 
        - Not needed becasue webscrape will handle it on user refresh.
        - Possible update would be replacing the name of item since tracking numbers don't say what the item is

    4. Delete any Packages that are no longer desired to track
        - Possible x button on package card on the right side
