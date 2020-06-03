const puppeteer = require('puppeteer');
const url = require('url');
const urlMap = require('./page/map');

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        defaultViewport: {
            width: 937,
            height: 937,
            deviceScaleFactor: 2,
            isMobile: true,
            devtools: true
        }
    });
    const page = await browser.newPage();
    let prePagePath = ''
    await page.on('request', interceptedRequest => {
        prePagePath = url.parse(page.target().url()).pathname
    });
    await page.goto('http://192.168.184.15:8080/login');
    browser.on('targetchanged', async target => {
        // console.log(page.prePagePath)
        // const path = url.parse(target._targetInfo.url).pathname
        // urlMap[path] && urlMap[path](page, prePagePath, true)
    });
    await page.waitFor(1000);
    await page.type('input[placeholder=请输入用户名]', 'pawel', {
        delay: 100
    });
    await page.type('input[placeholder=请输入密码]', 'pawel', {
        delay: 100
    });
    await page.click('button');
})();