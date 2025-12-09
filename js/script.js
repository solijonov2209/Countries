const elButton = document.querySelector(".site-header__btn");

const elCountriesList= document.querySelector(".hero__list.countries")
const elSelect = document.querySelector(".hero__select")
const elSearch = document.querySelector(".hero__input")

elButton.addEventListener("click",()=>{
document.body.classList.toggle("dark"); });



//  select 
elSelect.addEventListener("change", ()=>{
  const region = elSelect.value;
  console.log(region);
  addCountries(region);
})
// countrieslarni olish 
function addCountries(region) {
  const url = region?`https://restcountries.com/v3.1/region/${region}`:`https://restcountries.com/v3.1/region/europe`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      searchCountries=data
      console.log(data[0]);
      renderCountries(data);  
    })
    .catch(error => console.log("Xatolik:", error));
}

// render function 
function renderCountries(data) {
  elCountriesList.innerHTML = "";

  data.forEach(element => {
    const countriesItem = document.createElement("li");
     countriesItem.classList.add("countries__item")
    countriesItem.innerHTML = `
      <a class="countries__link" href="./pages/details.html?country=${element.name.common}">
        <img 
          src="${element.flags?.png}" 
          alt="${element.name.common} flag" 
          width="264px" 
          height="160px" 
          class="countries-img"
          style="width: 100%; height: 160px; border-radius: 8px;"
        >
        <h3 class="countries__title">${element.name.common}</h3>

        <ul class="countries__list content">
          <li class="content__item">
            <p class="content__desc"><strong>Population:</strong> ${element.population.toLocaleString()}</p>
          </li>
          <li class="content__item">
            <p class="content__desc"><strong>Region:</strong> ${element.region}</p>
          </li>
          <li class="content__item">
            <p class="content__desc"><strong>Capital:</strong> ${element.capital?.[0] || "No data"}</p>
          </li>
        </ul>
      </a>
    `;
    elCountriesList.appendChild(countriesItem);
  });
}
let searchCountries = [];

// search input 
elSearch.addEventListener("input",(event)=>{
  let searchValue = event.target.value.toLowerCase().trim();
  console.log(searchValue); 

  const filtered = searchCountries.filter(country =>{
    return country.name.common.toLowerCase().includes(searchValue)
  });
  console.log(filtered);
  renderCountries(filtered);  
})


addCountries();
 

console.log(searchCountries);