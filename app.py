import random

from origin.api import get_games


games = get_games(
    filter_query="platform:pc-download",
    facet_field=(
        "subscriptionGroup,genre,gameType,availability,rating,players,language,platform,franchise,"
        "publisher,developer,price"
    ),
    rows=1,
)

num_games = games.get("numFound") - 1
choice = random.randint(0, num_games)

games = get_games(
    filter_query="platform:pc-download",
    facet_field=(
        "subscriptionGroup,genre,gameType,availability,rating,players,language,platform,franchise,"
        "publisher,developer,price"
    ),
    start=choice,
    rows=1,
)

print(games.get("game"))
