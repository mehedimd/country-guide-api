const srcButton = document.querySelector('#src-btn');
const inputButton = document.querySelector('#input-btn');
const countryDetails = document.querySelector('.country-details');

var count = 0;
const showAllCountry = (country) => {
    const url = `https://restcountries.com/v3.1/all`

    fetch(url)
    .then((response) => response.json())
    .then((data) => {

        data.forEach(element => {
            count =count + 1
        countryDetails.innerHTML +=`

            <div class="col-md-3">
                <div class="card p-3 ">
                <img class="card-img-top" src="${element.flags.svg}" alt="Card image" style="width:100%">
                <div class="card-body">
                <h4 class="card-title">${count}. ${element.name.common}</h4>
                    <ul>
                        <li>Capital : ${element.capital}</li>
                        <li>Capital : </li>
                        <li>Capital : </li>
                    </ul>
        
                <a href="#" class="btn btn-primary">See More</a>
                </div>
            </div>           
            </div>

        `           
        });
        

    })
}
showAllCountry();

srcButton.addEventListener('click',function(){
    let countryName = inputButton.value;
    const fullNameUrl = ` https://restcountries.com/v3.1/name/${countryName}?fullText=true`

    fetch(fullNameUrl)
    .then((response) => {        
        if(!response.ok){
            throw new Error('Please enter a valid country name')
        }
        return response.json()})
    .then((data) => {

        const searchedCountry = document.querySelector('.searchedElement');
        
        searchedCountry.innerHTML=`
        <div class="card col-md-3 mx-auto p-3">
        <img class="card-img-top" src="${data[0].flags.svg}" alt="Card image" style="width:100%">
        <div class="card-body">
          <h4 class="card-title"> ${data[0].name.common}</h4>
            <ul>
                <li>Capital : ${data[0].capital}</li>
            </ul>

          <a href="#" class="btn btn-primary">See More</a>
        </div>
      </div>
        `

    })

    .catch(error => alert(error));

})
