{
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator
        middleFloor = floors.length;
        console.log(elevators);
        console.log(floors);

        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", function() {
            elevator.goToFloor(Math.floor( middleFloor / 2 ));
            // let's go to all the floors (or did we forget one?)
            // var i = 0;
            // while (i != Math.floor( middleFloor / 2 ) {
            //     if (i == 3) {
            //       break;
            //     }
            //     i += 1;
            // }

        });
        elevator.on("floor_button_pressed", function(floorNum) {
            elevator.goToFloor(floorNum);
            console.log(elevator.checkDestinationQueue());
        });
        elevator.on("passing_floor", function(floorNum, direction) {

        });
        elevator.on("stopped_at_floor", function(floorNum) {
           // Maybe decide where to go next?

        });



        floor.on("up_button_pressed", function() {
            // Maybe tell an elevator to go to this floor?

        });
        floor.on("down_button_pressed", function() {
            // Maybe tell an elevator to go to this floor?

        });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    },
    loop_over: function(items){

    }
    sortArray: function(){
        
    }
}

var arr = [0,1,2,3,4,5,6,7];

var br_search = function(a, n){
    var l = a.length;
    var half_l = Math.floor(a.length / 2);

    if( a[0] == n ) {
        console.log(a);
        return true;
    } else if( l == 1  && a[0] != n ) {
        console.log(a);
        return false
    } else if( n > a[half_l - 1] ) {
        console.log(a);
        return br_search( a.slice( half_l, l), n);
    } else {
        console.log(a);
        return br_search( a.slice( 0, half_l ), n);
    }
};

br_search(arr, 5);
