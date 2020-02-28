How to run
====

1 - Run the Server Project(Node Server Project ) Separately and open this project separately.
2 - Open up the "CreatellaTest.xcworkspace" file by navigating into  `CreatellaTest -> ios -> CreatellaTest.xcworkspace`.
3 - After hitting  run button in Xcode, project will run.
4 - You will be Navigated to Splash Screen and will see a 'Get Started' Button.Just click that to navigate into Home Screen.


Implemented Features
====

1 - I have used custom loading Spinner by interpolating the Animated Image View.
2 - when there is no items to be loaded, `~ end of catalogue ~` Text will be shown.
3 - You will be seen advertisements for every 20 items in the grid.
4 - For Formatting the currencies like `$3.51`, I have created a function in Util -> Helpers class.
5 - You can sort items with `id, prize, size` by clicking the dropDownList on the Header.
6 - For formatting time I have used function in Util -> Helpers class.  If the date is longer than 1 week it shows the server incoming timeStamp otherwise it shows like `3 days ago`.
7 - Ascii faces coming from the server is shown as the first element on the gridItem,the ascii faces size is changing regarding to the `size` property from the server.
