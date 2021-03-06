from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

import sys
import json
import unicodedata

# Method for get json of arg
def GetArguments():
    try:
        ListArguments = sys.argv
        # Condition parms (json) is not null
        if ListArguments[0] is not None and ListArguments[0] is not None:
            return ListArguments
    except Exception as e:
        print("type error: " + str(e))
        return None

# Method for initialize properties for Selenium
def init_driver(url):
    try:
        # Driver navegador firefox
        driver = webdriver.Firefox()
        # Def time wait
        driver.get(url)
        assert "Google" in driver.title

        return driver
    except Exception as e:
        print("type error: " + str(e))
        return None

# Scraping core
def lookupGoogle(driver, textToSearch, sitesToSearch):
    listURL = []
    listTitle = []
    listContent = []
    try:
        for site in sitesToSearch:
            elem = driver.find_element_by_name("q")

            elem.clear()
            elem.send_keys(textToSearch + " site:" + site)
            elem.send_keys(Keys.ENTER)

            listURLScrap = WebDriverWait(driver, 5).until(
                EC.presence_of_all_elements_located((By.XPATH, '//div[@class="rc"]/h3[@class="r"]/a'))
            )
            listTitleScrap = WebDriverWait(driver, 5).until(
                EC.presence_of_all_elements_located((By.XPATH, '//div[@class="rc"]/h3[@class="r"]'))
            )
            listContentScrap = WebDriverWait(driver, 5).until(
                EC.presence_of_all_elements_located((By.XPATH, '//span[@class="st"]'))
            )
            for url in listURLScrap:
                listURL.append(url.get_attribute("href"))
            for title in listTitleScrap:
                listTitle.append(title.text)
            for content in listContentScrap:
                listContent.append(content.text)
            
            # listTitle.append(listTitleScrap)

    except Exception as e:
        print("type error: " + str(e))
    finally:
        driver.close()
        jsonObjetc = {"url": listURL, "titulo" : listTitle, "contenido": listContent}
        return json.dumps(jsonObjetc)

if __name__ == "__main__":
    try:
        # Get arguments sys
        ListArguments = GetArguments()
        textToSearch = ListArguments[1].replace("'", "")
        sitesToSearch = []
        if "," not in ListArguments[2]:
            sitesToSearch.append(ListArguments[2].replace("'", ""))
        else:
            sitesToSearch = ListArguments[2].replace("'", "").split(",")
        
        # Call scraper google
        driver = init_driver("https://www.google.com/")
        if driver is not None:
            jsonResult = lookupGoogle(driver, textToSearch, sitesToSearch)

            print(jsonResult)
    except Exception as e:
        print("type error: " + str(e))
    finally:
        sys.stdout.flush()