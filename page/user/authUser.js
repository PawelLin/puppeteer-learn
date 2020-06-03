module.exports = async (page, prePagePath, next) => {
    await page.waitFor(1000)
    if (prePagePath === '/home') {
        page.click('.ivu-form button:nth-child(2)')
        await page.waitFor(1000)
        await page.type('.ivu-form > .ivu-row:nth-child(1) > div:nth-child(1) input', 'auto', {
            delay: 100
        })
        await page.type('.ivu-form > .ivu-row:nth-child(1) > div:nth-child(2) input', '自动填', {
            delay: 120
        })
        await page.click('.ivu-form > .ivu-row:nth-child(2) > div:nth-child(1) .ivu-select-input')
        await page.waitFor(1000)
        await page.click('.ivu-form > .ivu-row:nth-child(2) > div:nth-child(1) .ivu-select-item')
        await page.waitFor(1000)
        await page.click('.ivu-form > .ivu-row:nth-child(2) > div:nth-child(2) .ivu-select-input')
        await page.waitFor(1000)
        await page.click('.ivu-form > .ivu-row:nth-child(2) > div:nth-child(2) .ivu-select-item')
        await page.waitFor(1000)
        await page.type('.ivu-form > .ivu-row:nth-child(3) > div:nth-child(1) input', '13333333333', {
            delay: 100
        })
        await page.type('.ivu-form > .ivu-row:nth-child(4) > div:nth-child(1) textarea', '吐啦', {
            delay: 100
        })
        await page.waitFor(1000)
        await page.click('.ivu-form button')
    } else if (prePagePath === '/auth/user/add') {
        await page.waitFor(1000)
        page.click('.ivu-table-body tr button:nth-child(2)')
        await page.waitFor(1000)
        await page.type('.ivu-form > .ivu-row:nth-child(1) > div:nth-child(1) input', 'edit', {
            delay: 100
        })
        await page.type('.ivu-form > .ivu-row:nth-child(1) > div:nth-child(2) input', 'edit', {
            delay: 120
        })
        await page.click('.ivu-form > .ivu-row:nth-child(2) > div:nth-child(1) .ivu-select-input')
        await page.waitFor(1000)
        await page.click('.ivu-form > .ivu-row:nth-child(2) > div:nth-child(1) .ivu-select-item:nth-child(2)')
        await page.waitFor(1000)
        await page.click('.ivu-form > .ivu-row:nth-child(2) > div:nth-child(2) .ivu-select-input')
        await page.waitFor(1000)
        await page.click('.ivu-form > .ivu-row:nth-child(2) > div:nth-child(2) .ivu-select-item:nth-child(2)')
        await page.waitFor(1000)
        await page.type('.ivu-form > .ivu-row:nth-child(4) > div:nth-child(1) textarea', 'edit', {
            delay: 100
        })
        await page.waitFor(1000)
        await page.click('.ivu-form button')
    } else if (prePagePath === '/auth/user/edit') {
        await page.waitFor(1000)
        page.click('.ivu-table-body tr button:nth-child(1)')
        await page.waitFor(1500)
        page.click('.ivu-modal-body button:nth-child(2)')
        await page.waitFor(3000)
        page.click('.ivu-table-body tr button:nth-child(3)')
        await page.waitFor(1500)
        page.click('.ivu-modal-body button:nth-child(2)')
    } else {

    }
}