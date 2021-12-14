const {Builder, Capabilities} = require('selenium-webdriver')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
const {crossOffMovie, uncrossMovie, deleteMovie} = require('../functions/functions')

beforeEach(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('Cross off movie from list', async () => {
    await crossOffMovie(driver)
    await driver.sleep(5000)
})

test('Uncross of a movie previously crossed off from list', async () => {
    await uncrossMovie(driver)
    await driver.sleep(5000)
})

test('delete movie from list', async () => {
    await deleteMovie(driver)
    await driver.sleep(5000)
})