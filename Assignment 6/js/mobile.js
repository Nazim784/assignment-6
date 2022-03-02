// dispalying spinner

const toggleSpninner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}
const searchMobile = () => {
    //for spinner
    toggleSpninner('block');
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value = '';


    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data));
}
const displaySearchResult = phones => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    const phoneResult = phones.data;
    // console.log(phones.data);

    // result no found 
    if (phones.data.length == 0) {
        searchResult.innerHTML = ` 
        <p>no results found</p>
        `
    }
    phoneResult.forEach(phone => {
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        let phoneId = phone.slug;
        console.log(phoneId);
        div.innerHTML = `
        <div>
            <div class="card h-100">
                <img src="${phone.image}" class="card-img-top w-50" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.brand}</h5>
                    <p class="card-text">${phone.phone_name}</p>
                </div>
                <button onclick="loadDeatil(${phone.slug})">show details<button>
            <div>
        </div>
        `;
        searchResult.appendChild(div);
    })
    toggleSpninner('none');
}

const loadDetail = phoneId => {
    console.log(phoneId);
}