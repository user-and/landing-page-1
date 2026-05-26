import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1280, 'height': 800})
        
        # We can open the file directly
        abs_path = os.path.abspath("index.html")
        await page.goto(f"file://{abs_path}")
        
        # Wait a bit for any animations (the gauges have 2s transition)
        await asyncio.sleep(3)
        
        await page.screenshot(path="current_design.png", full_page=True)
        await browser.close()

asyncio.run(main())
