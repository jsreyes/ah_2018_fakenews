from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

import sys

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
    listTitle = []
    try:
        # Driver navegador firefox
        driver = webdriver.Firefox()
        driver.get()
        assert "Google" in driver.title

        for site in sitesToSearch:
            elem = driver.find_element_by_name("q")

            elem.clear()
            elem.send_keys(textToSearch + " site:" + sitesToSearch)
            elem.send_keys(Keys.ENTER)

            listTitleScrap = WebDriverWait(driver, 5).until(
                EC.presence_of_all_elements_located((By.XPATH, '//div[@class="rc"]/h3[@class="r"]'))
            ).text.encode('utf-8')

            listTitle.append(listTitleScrap)

            for element in listElement:
                print(element.text.encode('utf-8'))
            # print(element.text.encode('latin-1'))

    except Exception as e:
        print("type error: " + str(e))
    finally:
        driver.close()

        return listTitle

if __name__ == "__main__":
    # Get arguments sys
    ListArguments = GetArguments()
    textToSearch = ','.join(ListArguments[0])
    sitesToSearch = ListArguments[1]

    # Call scraper google
    driver = init_driver("https://www.google.com/")
    if driver is not None:
        print("true")
        lookup(driver, textToSearch, sitesToSearch)