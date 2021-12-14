const {By} = require('selenium-webdriver')

module.exports = {
    crossOffMovie: async (driver) => {
        const movie = "Spiderman"
        await driver.findElement(By.xpath('//input')).sendKeys(movie)
        await driver.findElement(By.xpath('//button')).click()
        await driver.findElement(By.xpath('//span')).click()
        const checked = await driver.findElement(By.css("[class='checked']"))

        expect(checked).toBeTruthy()
    }, 

    uncrossMovie: async (driver) => {
        const movie = "Spiderman"
        await driver.findElement(By.xpath('//input')).sendKeys(movie)
        await driver.findElement(By.xpath('//button')).click()
        await driver.findElement(By.xpath('//span')).click()
        const checked = await driver.findElement(By.css("[class='checked']"))
            checked.click()
           

        expect(checked).toBeTruthy()
    }, 

    deleteMovie: async (driver) => {
        const movie = "Spiderman"
        await driver.findElement(By.xpath('//input')).sendKeys(movie)
        await driver.findElement(By.xpath('//button')).click()
        await driver.findElement(By.xpath('//span'))
        const deleted = await driver.findElement(By.id('Spiderman')).click()

        expect(deleted).toBeFalsy()
    }
}