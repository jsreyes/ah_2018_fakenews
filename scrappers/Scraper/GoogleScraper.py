from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys


# Driver navegador firefox
driver = webdriver.Firefox()
driver.get("https://www.google.com/")
assert "Google" in driver.title

elem = driver.find_element_by_name("q")

elem.send_keys("some text")
elem.send_keys(Keys.ENTER)

# listResult = driver.find_elements_by_xpath("//div[@id='search']/div[@class='bkWMgd']")
listResult = driver.find_elements_by_xpath("//a")
print(listResult)
# elem.send_keys("pycon")
# elem.send_keys(Keys.RETURN)
assert "No results found." not in driver.page_source
# driver.close()