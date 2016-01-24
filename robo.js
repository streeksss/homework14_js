help();
legend();
map();

//Level 1

north();
north();

//End


map();


//Level 2

for(var i=0; i<16; i++){
    east();
}

//End


map();


//Level 3

for(var i=0; i<7; i++){
    south();
    east();
}

//End


map();


//Level 4

while (isFree("south")===true || isFree("east")===true) {
    if (isFree("south") === true) {
        south();
    }
    else {
        east();
    }
}

//End


map();


//Level 5

var x=0;
var i=0;
while(x<7){
    if(i==0){
        west();
        west();
        i++;
    }
    else if(i==1){
        while(isFree("south")==true) {
            south();
        }
        i++;
    }
    else if(i==2){
        west();
        west();
        i++;
    }
    else if(i==3){
        while(isFree("north")==true) {
            north();
        }
        i++;
    }
    else if(i==4){
        west();
        west();
        i++;
    }
    else if(i==5){
        while(isFree("south")==true) {
            south();
        }
        i++;
    }
    else {
        while(isFree("east")==true) {
            east();
        }
        i++;
    }
    x++;
}

//End