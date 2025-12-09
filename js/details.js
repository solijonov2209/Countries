const params = new URLSearchParams(window.location.search);
const countryName = params.get("country");

const countryInfo = document.querySelector(".belgium__inner");
console.log(params);
console.log(countryName);

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    renderDetails(data[0]);
  });

function renderDetails(country) {
  countryInfo.innerHTML = `
 <a href="../index.html" class="belgium__link">Back</a>
            <div class="belgium__content">
              <img
                class="belgium__flag"
                src="${country.flags.png}"
                width="560"
                height="401"
                alt="Belgium flag"
              />
              <div class="belgium__info">
                <h4 class="belgium__title">${country.name.common}</h4>
                <ul class="belgium__list">
                  <li class="belgium__item info">
                    <ul class="info__list">
                      <li class="info__item">
                        <strong class="info__strong">Native Name: </strong
                        >${country.name.nativeName[0]?.common}
                      </li>
                      <li class="info__item">
                        <strong class="info__strong">Population: </strong
                        >11,319,511
                      </li>
                      <li class="info__item">
                        <strong class="info__strong">Region: </strong>Europe
                      </li>
                      <li class="info__item">
                        <strong class="info__strong">Sub Region:</strong>
                        Western Europe
                      </li>
                      <li class="info__item">
                        <strong class="info__strong">Capital: </strong>Brussels
                      </li>
                    </ul>
                  </li>
                  <li class="belgium__item info">
                    <ul class="info__list">
                      <li class="info__item">
                        <strong class="info__strong">Top Level Domain: </strong
                        >.be
                      </li>
                      <li class="info__item">
                        <strong class="info__strong">Currencies: </strong>Euro
                      </li>
                      <li class="info__item">
                        <strong class="info__strong">Languages: </strong>Dutch,
                        French, German
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul class="belgium__neighbor neighboring-country">
                ${country.borders
                  .map((code) => {
                    return `
                      <li class="neighboring-country__item">
                        <a class="neighboring-country__link"
                           href="#">
                           ${code}
                        </a>
                      </li>`;
                  })
                  .join("")}
                  </li>
                </ul>
              </div>
            </div> 
`;
}
