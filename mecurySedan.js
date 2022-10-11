const VehicleModule = require("./vehicle.js")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color"  );
console.log(v.make)
class Car extends VehicleModule.Vehicle {
    super(make, model, year, color, mileage, fuel) {
      this.maxPassengers=5;
      this.passenger=0;
      this.mileage=0;
      this.numberOfWheels=4; 
      this.maximumSpeed=160;
      this.fuel=10;//The Mercury Grand Marquis has a gas tank size of 19.0 gallons.
      this.scheduleService=false;//Service schedule greater than 30,000 miles.

    }
    loadPassenger(num) {
          if (this.passenger < this.maxPassengers) {
              if ((num + this.passenger) <= this.maxPassengers) {
                  this.passenger = num;       
                  console.log('There is room available for ' + this.passenger + ' passenger(s) in the ' + this.model);  
                  //return this.passenger   
  
              }
           else {
            console.log(this.model + " " + this.make + " doesn't have enough space to take all passengers.");
              
          }
      }
    }

  

  start() {console.log(this.fuel);
            if (this.fuel > 0) {
              console.log('Vroom! Vroom! Your car engine has started. You have '+this.fuel+' gallons of gasoline');
              return this.started = true;
                
            } else {
              console.log("Engine cannot start. No fuel");
              return this.started = false;
                
            }
  }
service() {      
        if (this.mileage > 30000) {          
          console.log('Your car has ' + this.mileage +' miles and needs to be schedule for servicing. Contact you local Ford dealer.');
          //this.scheduleService = true
          //return this.scheduleService;
        }else{ console.log('Your vehicle has ' + this.mileage +' miles and your routine maintenace is up to date')}
    }

    
  }


let newVehicle = new Car('Mercury', 'Grand Marquis','2014','white', 5000);


newVehicle.loadPassenger(3)
console.log();
newVehicle.start();
console.log('');
newVehicle.service();
