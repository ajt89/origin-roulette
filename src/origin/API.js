const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

function queryStore(searchTerm = '', filterQuery = '', facetField = '', sort = '', start = 0, rows = 1, isGDP = true) {
    let url = `https://api1.origin.com/xsearch/store/en_us/usa/products?searchTerm=${searchTerm}&filterQuery=${filterQuery}&facetField=${facetField}&sort${sort}=&start=${start}&rows=${rows}&isGDP=${isGDP}`;
    return fetch(proxyUrl + url)
}

export default queryStore