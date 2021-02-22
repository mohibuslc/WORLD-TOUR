fetch('https://restcountries.eu/rest/v2/all') // website : https://restcountries.eu/
    

   .then(res => res.json())
    .then(data => displayCountries(data));

    // now display all the name in web-page console//

const displayCountries = countries => {
    const countryDiv = document.getElementById("ul-continer");

//const ul = document.getElementById("ul-continer");

    for (let i = 0; i<countries.length; i++) {

        const city = countries[i];

       console.log(city.name);
       const countDiv = document.createElement('div');

       countDiv.className ='country';

      // const h3 = document.createElement('h3');
       //h3.innerText = city.name;
// Paragraph and h3 tag ... element add on webpage :
// example .. country name and city name display in webpage 
      // const p = document.createElement('p');
       //p.innerText = city.capital;
       //countDiv.appendChild(h3);
       //countDiv.appendChild(p);

       // Short Cut Way working :

       //================================================================
       const countryInfo =` 

       <h3 class="style"> ${city.name}</h3>
       <p> ${city.capital}</p>

       `
       countDiv.innerHTML = countryInfo;

       countryDiv.appendChild(countDiv);


     //  li.innerText = city.name;
      // ul.appendChild(li);


    }

}