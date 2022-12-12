"use strict";
var cl=console.log;
/* alert('hello'); */



cl(countries);

let country = document.getElementById('countryContainerinfo');
cl(country);

let result =" ";

countries.forEach(function(img){
	
	result += `<div class="col-sm-3 mb-4">
					<div class="card">
						<div class="card-body">
							<div class="flag">
								<img src="${img.flag}" alt="flag" title="flag" class="img-fluid">
							</div>
							<h3 class="cName">${img.name}</h3>
							 <div class="details">
							     <p>
								    <strong>capital: </strong>${img.capital}</p>
								 <p>
								    <strong>languages: </strong>${img.languages}</p>
								 <p>
								    <strong>population: </strong>${img.population}</p>
							 </div>
						</div>
					</div>
				</div>`
});

cl(result);

country.innerHTML = result;