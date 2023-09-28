First Game Would be multiplayer with no online option...
Simple...

When B2 , occupied by a white porn is clicked handleClick function 
is executed which returns the 
possible Positions ... and also makes all the divs with 
an id in accesiblePositions array active...


Then when one of those divs is clicked based on what occupied
 in the div the click of which made this div
active is ...the position property of that piece changes


I have many divs each of them clickable....
Make only the occupied ones clickable and onoccupied ones clicakble only when the occupied ones are clicked 


its definelty when after clicking for ex e2 and then e4 the func which runs on e2 click and returns 
accesiblePositions for e2 , that re runs again on e3 click as well that is causing the problems come
up with a way to disable the func that runs on e2 click on e4 click...

when a piece is selected , find IF moving that piece anywhere would bring the king under threat ,
 IF it brings the king under threat show a modal dialogue invalid move or something, before updating 
 any of the states ( Pieces , OccupiedByWhitesArray ,  OccupiedByBlacksArray ,  OccupiedArray ) check if
 the tile is selected then , IF the king of the same color comes under threat 


