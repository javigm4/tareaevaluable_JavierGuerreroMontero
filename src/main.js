import "./style.css";
import { Person } from "./Person.js";

//ejercicio2 (crear el html)

//------------------CREACION DE ELEMENTOS---------------------
const divCard = document.createElement("div");
divCard.classList.add("card");
const imagen = document.createElement("img");
imagen.src = "/user_nt_found.jpg";

//innerHtml o textCont

//---SPANS---
const spanName = document.createElement("span");
spanName.textContent = " name surname";

const spanMail = document.createElement("span");
spanMail.textContent = " mail";

const spanPhone = document.createElement("span");
spanPhone.textContent = " phone";

const spanCity = document.createElement("span");
spanCity.textContent = " city";

const spanTime = document.createElement("span");
spanTime.textContent = " time";

//---STRONGS---
const strongName = document.createElement("strong");
strongName.textContent = "Name: ";

const strongMail = document.createElement("strong");
strongMail.textContent = "Mail: ";

const strongPhone = document.createElement("strong");
strongPhone.textContent = "Phone: ";

const strongCity = document.createElement("strong");
strongCity.textContent = "Location: ";

const strongTime = document.createElement("strong");
strongTime.textContent = "Current Time: ";

//---BOTÓN---
const button = document.createElement("button");
button.textContent = "GENERATE USER";

//---APPENDS---
divCard.appendChild(imagen);

spanName.appendChild(strongName);
spanMail.appendChild(strongMail);
spanPhone.appendChild(strongPhone);
spanCity.appendChild(strongCity);
spanTime.appendChild(strongTime);

divCard.appendChild(spanName);
divCard.appendChild(spanMail);
divCard.appendChild(spanPhone);
divCard.appendChild(spanCity);
divCard.appendChild(spanTime);

const divContainer = document.querySelector(".container");
divContainer.appendChild(divCard);
divContainer.appendChild(button);

document.body.appendChild(divContainer);

//EJERCICIO
button.addEventListener("click", async () => {
  fetch("https://randomuser.me/api/")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error con el fetch");
      }
      return response.json();
    })
    .then((data) => {
      const user = data.results[0]; //coger el primero, que si no se bugea

      const nuevaPersona = new Person(
        user.name.first,
        user.name.last,
        user.email,
        user.phone,
        user.picture.large,
        user.location.city
      );

      nuevaPersona.setName(`${user.name.first} ${user.name.last}`);
      nuevaPersona.setEmail(user.email);
      nuevaPersona.setPhone(user.phone);
      nuevaPersona.setPicture(user.picture.large);
      nuevaPersona.setLocation(user.location.city);

      spanName.textContent = "Name: " + `${nuevaPersona.getName()}`;
      spanPhone.textContent = "Phone: " + `${nuevaPersona.getPhone()}`;
      spanMail.textContent = "Mail: " + `${nuevaPersona.getEmail()}`;
      spanCity.textContent = "Location: " + `${nuevaPersona.getLocation()}`;
      imagen.src = `${nuevaPersona.getPicture()}`;

      //a continuacion vamos a hacer lo del current time CON EL ASYNC AWAIT
      const ciudad = `${nuevaPersona.getLocation()}`;
      const url = `https://world-time-by-based-api.p.rapidapi.com/v1/worldtime/?location=${encodeURIComponent(
        ciudad
      )}`; //he pensado que si le cambio la ciudad iba a cambiar el resultado y coger otros datos, y pues si
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "23d49c55f5msh4b301c63fc79be9p10a5e6jsn1f207790f863",
          "x-rapidapi-host": "world-time-by-based-api.p.rapidapi.com",
        },
      };
      //---CREAMOS LA FUNCION
      const currentTimeApi = async (ciudad) => {
        try {
          const respuesta = await fetch(url, options);
          const datos = await respuesta.json();

          datos.requested_location = ciudad;

          console.log(datos); //para comprobar lo que devuelve la api

          const datosActuales = datos.datetime;
          return datosActuales;
        } catch (error) {
          console.log(error);
          return "Error del fetch";
        }
      };

      currentTimeApi(nuevaPersona.getLocation()).then((time) => {
        spanTime.textContent = "Current Time: " + time; //le paso la localizacion de la nueva persona
      });
    })
    .catch((error) => {
      console.error(error); //esta es la situacion de rechazo de la que habla el enunciado
    });
});
