export class Person {
  name;
  surname;
  email;
  phone;
  picture;
  location;

  constructor(firstName, lastName, email, phone, picture, location) {
    this.name = `${firstName} ${lastName}`;
    this.email = email;
    this.phone = phone;
    this.picture = picture;
    this.location = location;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getPhone() {
    return this.phone;
  }

  getPicture() {
    return this.picture;
  }

  getLocation() {
    return this.location;
  }

  //setters

  setName(newName) {
    this.name = newName;
  }

  setEmail(newEmail) {
    this.email = newEmail;
  }
  setPhone(newPhone) {
    this.phone = newPhone;
  }
  setPicture(newPicture) {
    this.picture = newPicture;
  }
  setLocation(newLocation) {
    this.location = newLocation;
  } 
}

/*

gender: "female", email: "mestan.orge@example.com", phone: "(101)-973-5962", … }
​​
cell: "(861)-804-8944"
​​
dob: Object { date: "1985-01-05T02:32:27.979Z", age: 39 }
​​
email: "mestan.orge@example.com"
​​
gender: "female"
​​
id: Object { name: "", value: null }
​​
location: Object { city: "Şırnak", state: "Eskişehir", country: "Turkey", … }
​​
login: Object { uuid: "9f55bfe5-b940-4411-af41-eabd9201fb68", username: "beautifulwolf669", password: "coolio", … }
​​
name: Object { title: "Mrs", first: "Mestan", last: "Örge" }
​​
nat: "TR"
​​
phone: "(101)-973-5962"
​​
picture: Object { large: "https://randomuser.me/api/portraits/women/59.jpg", medium: "https://randomuser.me/api/portraits/med/women/59.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/59.jpg" }
​​
registered: Object { date: "2019-04-09T09:15:13.205Z", age: 5 }

*/
