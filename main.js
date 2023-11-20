//كلاس المركبات
class Vehicle {
    constructor(name, manufacturer, id) {
      this.name = name;
      this.manufacturer = manufacturer;
      this.id = id;
    }
  }
  
//كلاس السيارة (ترث من كلاس المركبات)
  class Car extends Vehicle {
    constructor(name, manufacturer, id, type) {
      super(name, manufacturer, id)
      this.type = type;
    }
  }
  
//كلاس الطيارة (ترث من كلاس المركبات)
  class Plane extends Vehicle {
    constructor(name, manufacturer, id, type) {
      super(name, manufacturer, id);
      this.type = type;
    }
  }
  
//كلاس الموظفين
  class Employee {
    constructor(name, dateOfBirth, id) {
      this.name = name;
      this.dateOfBirth = dateOfBirth;
      this.id = id;
    }
  }
  
//كلاس السائق (يرث من كلاس الموظفين)
  class Driver extends Employee {
    constructor(name, dateOfBirth, id, licenseID) {
      super(name, dateOfBirth, id);
      this.licenseID = licenseID;
    }
  }
  
//كلاس الطيار (يرث من كلاس الموظفين)
  class Pilot extends Employee {
    constructor(name, dateOfBirth, id, licenseID) {
      super(name, dateOfBirth, id);
      this.licenseID = licenseID;
    }
  }
  
//كلاس الحجز
  class Reservation {
    constructor(reservationDate, employeeId, vehicleId, reservationID) {
      this.reservationDate = reservationDate;
      this.employeeId = employeeId;
      this.vehicleId = vehicleId;
      this.reservationID = reservationID;
    }
  }
  
//تعريف اوبجيكت لثلاثة سيارات
  const car_1 = new Car("Car 1", "Manufacturer 1", "Car1", "gas");
  const car_2 = new Car("Car 2", "Manufacturer 2", "Car2", "electric");
  const car_3 = new Car("Car 3", "Manufacturer 3", "Car3", "gas");
  
//تعريف اوبجيكت لطيارتين
  const plane_1 = new Plane("Plane 1", "Manufacturer 1", "Plane1", "type 1");
  const plane_2 = new Plane("Plane 2", "Manufacturer 2", "Plane2", "type 2");

//اوبجيكت للموظفين
  const driver_1 = new Driver("Driver 1", "01/01/1990", "Driver1", "DL001");
  const driver_2 = new Driver("Driver 2", "02/02/1995", "Driver2", "DL002");
  const pilot_1 = new Pilot("Pilot 1", "03/03/1985", "Pilot1", "PL001");
  const pilot_2 = new Pilot("Pilot 2", "04/04/1992", "Pilot2", "PL002");


//مصفوفة الحجوزات
  const reservations = [];
  
//دالة تتحقق من توافق المركبة مع الموظف
  function check(vehicleId, employeeId) {

    //تاريخ الحجز
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
    const formateDate = day + ' / ' + month + ' / ' + year;

    if (vehicleId.includes('Car') && employeeId.includes('Driver')){
      const reservation = new Reservation(formateDate, employeeId, vehicleId, reservations.length + 1);
      reservations.push(reservation);
      console.log("تم الحجز بنجاح")    
    } else  if (vehicleId.includes('Plane') && employeeId.includes('Pilot')) {
      const reservation = new Reservation(formateDate, employeeId, vehicleId, reservations.length + 1);
      reservations.push(reservation);
      console.log("تم الحجز بنجاح")    
    } else {
      console.log(`   عذرا لايمكن الحجز  
      ${vehicleId} المركبة
      ${employeeId} والموظف
      غير متوافقين`);
    }
  }
  
  //حجز
  check("Car1", "Pilot1");
  console.log("-----------------------");
  check("Car3", "Driver1");

  //طباعة محتوى المصفوفة 
function displayReservation(){
  reservations.map((reservation) => {
    console.log("تاريخ الحجز:", reservation.reservationDate);
    console.log("الموظف ID: ", reservation.employeeId);
    console.log("المركبة ID: ", reservation.vehicleId);
    console.log("الحجز ID: ", reservation.reservationID);
    console.log("===================");
  });
}

displayReservation();
