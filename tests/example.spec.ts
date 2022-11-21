import {test, expect } from '@playwright/test'

test('Simple basic test', async ({page}) => { 
    await page.goto("https://es.wikipedia.org/wiki/Wikipedia:Portada")
    const pageTitle = await page.locator('//*[@id="Bienvenidos_a_Wikipedia,"]/a')
    await expect(pageTitle).toContainText("Bienvenidos")
})