import {Page, expect} from "@playwright/test"

export default class HomePage{
    private readonly serviceTitleLocator = 'Service';

    constructor(private page:Page){

    }

    async expectServiceTypeToBeVisible(){
        await expect(this.page.getByTitle(this.serviceTitleLocator)).toBeVisible({timeout: 15000});
    }
}