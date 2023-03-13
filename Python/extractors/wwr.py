from requests import get
from bs4 import BeautifulSoup


def extract_wwr_jobs(keyword):
    # 변치 않는 url과 변하는 url
    base_url = "https://weworkremotely.com/remote-jobs/search?term="

    response = get(f"{base_url}{keyword}")
    # html url을 받아서 스테이터스 코드가 200이 아님을 확인(접속가능시 오류 출력)
    if response.status_code != 200:
        print("Can't request website")
    else:
        results = []
        # 뷰티풀수프는 html코드를 python entity로 변환시켜준다
        soup = BeautifulSoup(response.text, "html.parser")
        jobs = soup.find_all('section', class_="jobs")
        for job_section in jobs:
        
            job_posts = job_section.find_all('li')
            job_posts.pop(-1)
            for post in job_posts:
                anchors = post.find_all('a')
                anchor = anchors[1]
                link = anchor['href']
                company, kind, region = anchor.find_all('span',
                                        class_="company")
                title = anchor.find('span', class_='title')
                # print(company.string, kind.string, region.stirng, title.string)
                job_data = {
                    'link' : f"https://weworkremotely.com{link}",
                    'company' : company.string,
                    'region' : region.string,
                    'position' : title.string
                }
                results.append(job_data)
        for result in results:
            print(result)
            print("----------------")
            
    

jobs = extract_wwr_jobs("python")
print(jobs)