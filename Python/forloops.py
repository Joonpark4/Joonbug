from requests import get
websites=(
    "google.com",
    "airbnb.com",
    "https://twitter.com",
    "facebook.com",
    "https://tiktok.com"
)
results={
}
for website in websites:
    if not website.startswith("https://"):
    # if website.startswith("https://") == false : 같은 구문
        website = f"https://{website}"
    response = get(website)
    if response.status_code == 200:
        results[website] = "OK"
    else:
        results[website] = "Not okay"

print(results)