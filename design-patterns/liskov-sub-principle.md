## Liskov Substituition Principle

We create class hierarchies all the time. Would be great if new classes child classes never break parent class definitions.

Subtypes must be subtituitable for base types.

`Car extends Vehicle`
so car is a vehicle, so whenever we use car we could use vehicle and it would work fine.

Breaking Liskov is also breaking open closed principle too.

```js
interface Vehicle {
  speed: (mph: number) => void,
  addFuel: (fuel: number) => void
}

class Car extends Vehicle {
  speed(mph: number) {
    // add speed
    this.speed += mph;
  }
  addFuel(fuel: number) {
    // add fuel
    this.fuel += fuel;
  }
}

```

How can we break liskov principle?

```js
class ElectricCar extends Vehicle {
  speed(mph: number) {

  }
  ...
  addFuel() {
    // should throw exception
    // we can't add fuel
    // only recharge battery
  }
}
```

Well for electric car we could do some if else check

```js

const car: Vehicle = new ElectricCar();
if (car instanceof ElectricCar) {
  console.log('Cant print car')
}
```

this is a problem because we are going to break functionality of application. We have to encode speicific reference and information of the car type and check for it in the application.

Basically don't implement a method we are not going to use.

## Solution - Specify another Interface

```js
interface NormalVehicle {
  public speed;
  public addFuel;
}

interface ElectricVehicle {
  public speed;
  public chargeBattery;
}
```

We make a new interface to handle different Vehicles. The important thing is not to try and make an electric car a normal vehicle. Better to just make a new interface for it.
