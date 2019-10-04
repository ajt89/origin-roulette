import json

from requests import get


BASE_ORIGIN_API_1_URI = "https://api1.origin.com"
BASE_ORIGIN_API_2_URI = "https://api2.origin.com"
BASE_ORIGIN_API_3_URI = "https://api3.origin.com"
ORIGIN_STORE_PRODUCTS_URI = "/xsearch/store/en_us/usa/products"


def get_games(
    search_term="", filter_query="", facet_field="", sort="", start="0", rows="30", is_gdp="true"
):
    BASE_ORIGIN_URI = BASE_ORIGIN_API_1_URI
    url = f"{BASE_ORIGIN_URI}{ORIGIN_STORE_PRODUCTS_URI}"

    query_string = {
        "searchTerm": search_term,
        "filterQuery": filter_query,
        "facetField": facet_field,
        "sort": sort,
        "start": start,
        "rows": rows,
        "isGDP": is_gdp,
    }

    response = get(url, params=query_string)
    content = json.loads(response.content)

    if content:
        return content.get("games") or {}

    return {}
