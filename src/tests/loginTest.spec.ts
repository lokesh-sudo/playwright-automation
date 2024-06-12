import {test} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage";
test("test", async({page})=>{
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage()
    await loginPage.fillUsername('something')
    await loginPage.fillPassword('1234567890')
    const homePage = await loginPage.clickLoginButton()
    await homePage.expectServiceTypeToBeVisible();
})