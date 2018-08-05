from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

try:
    # Driver navegador firefox
    driver = webdriver.Firefox()
    driver.get("https://www.google.com/")
    assert "Google" in driver.title

    elem = driver.find_element_by_name("q")

    elem.send_keys("some text")
    elem.send_keys(Keys.ENTER)

    driver.wait = WebDriverWait(driver, 2)
    # listResult = driver.find_elements_by_xpath("//div[@id='search']/div[@class='bkWMgd']")
    listResult = driver.find_elements_by_xpath('//div[@class="bkWMgd"]/div[@class="g"]/h3/a')

    listElement = WebDriverWait(driver, 5).until(
        EC.presence_of_all_elements_located((By.XPATH, '//div[@class="rc"]/h3[@class="r"]'))
    )

    for element in listElement:
        print(element.text.encode('utf16'))
    # elem.send_keys("pycon")
    # elem.send_keys(Keys.RETURN)
    assert "No results found." not in driver.page_source
    # driver.close()
except Exception as e:
    print("type error: " + str(e))
finally:
    driver.quit()