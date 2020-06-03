module.exports = async (page) => {
    await page.waitFor(2000);
    page.evaluate(() => {
        document.querySelectorAll('.ivu-menu-item')[0].click()
    })
}