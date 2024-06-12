import { Page } from "@playwright/test";
import { error } from "console";
import HomePage from "./HomePage";
export class LoginPage{
    private readonly usernameInputSelector = "#username";
    private readonly passwordInputSelector = "#password";
    private readonly loginButtonSelector = "#Login";

    constructor(private page:Page){

    }

    async navigateToLoginPage(){
        await this.page.goto('https://ddm000004yfexua0-dev-ed.develop.my.salesforce.com/')
    }

    async fillUsername(username: string){
        await this.page.locator(this.usernameInputSelector).click()
        await this.page.locator(this.usernameInputSelector).fill(username)
    }

    async fillPassword(password: string){
        await this.page.locator(this.passwordInputSelector).click();
        await this.page.locator(this.passwordInputSelector).fill(password);
    }

    async clickLoginButton(){
        await this.page.locator(this.loginButtonSelector).click().catch((error)=>{
            console.error(`Error clicking login button: ${error}`);
            throw error;
        })
        const homePage = new HomePage(this.page)
        return homePage;
    }
    
}