import json

from requests import get


BASE_ORIGIN_API_1_URI = "https://api1.origin.com"
BASE_ORIGIN_API_2_URI = "https://api2.origin.com"
BASE_ORIGIN_API_3_URI = "https://api3.origin.com"
ORIGIN_STORE_PRODUCTS_URI = "/xsearch/store/en_us/usa/products"


def query_store(
    search_term="",
    filter_query="platform:pc-download",
    facet_field="",
    sort="",
    start=0,
    rows=30,
    is_gdp=True,
):
    """
    Query the origin store for products
        :search_term: (str)
        :filter_query: (str) comma delimited list of facets and constraints
        :facet_field: (str) comma delimited list of facet fields
        :sort: (str) field name followed by whitespace, followed by sort direction (asc or desc)
        :start: (int) result start index
        :rows: (int) number of results to return
        :is_gdp: (bool)
        :return: (dict)
    """
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

    return content or {}
