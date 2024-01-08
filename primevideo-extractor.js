/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

require('dotenv').config();
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 10,
  });
  const page = await browser.newPage();
  await page.goto('https://www.primevideo.com/offers/nonprimehomepage/ref=dv_web_force_root');
  // await page.hover('#pv-nav-container >>> .d2TCzI');

  

  // find a way to go to the login page
  // await page.type('#ap_email', process.env.PRIME_LOGIN);
  // await page.click('#continue');

  // await page.type('#ap_password', process.env.PRIME_PWD);
  // await page.click('#signInSubmit');

  await page.screenshot({path: 'screenshots/prime.png'});
  await browser.close();
})();