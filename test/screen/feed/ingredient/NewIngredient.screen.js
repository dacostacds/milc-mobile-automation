import Button from "../../../utils/android/Button";

class NewIngredientScreen {
    get globalIngredientInput() {
        return $('//*[@resource-id="com.milcgroup.one:id/add_ingredient_global_auto_complete"]');
    }

    get ingredientNameInput() {
        return $('//*[@resource-id="com.milcgroup.one:id/add_ingredient_name_edit_text"]');
    }

    get toleranceInput() {
        return $('//*[@resource-id="com.milcgroup.one:id/add_ingredient_tolerance_edit_text"]');
    }

    get dmInput() {
        return $('//*[@resource-id="com.milcgroup.one:id/add_ingredient_dm_percentage_edit_text"]');
    }

    get costMethodView() {
        return $('//*[@resource-id="com.milcgroup.one:id/add_ingredient_cost_method_image_view"]');
    }

    get costInput() {
        return $('//*[@resource-id="com.milcgroup.one:id/add_ingredient_cost_edit_text"]');
    }

    get noteInput() {
        return $('//*[@resource-id="com.milcgroup.one:id/add_ingredient_notes_edittext"]');
    }

    async addGlobalIngredient(globalIngredient) {
        const ingredientCharts = [...globalIngredient];
        await this.globalIngredientInput.click();
        for(let i = 0; i < ingredientCharts.length; i++){
            driver.pause(200);
            driver.keys(ingredientCharts[i]);
        }
        await driver.keys("\ue004");
    }

    async addIngredientName(ingredientName) {
        await this.ingredientNameInput.addValue(ingredientName);
    }

    async addTolerance(tolerance) {
        await this.toleranceInput.addValue(tolerance);
    }

    async addDM(dm) {
        await this.dmInput.addValue(dm);
    }

    async addCost(cost) {
        await this.costInput.addValue(cost);
    }

    async addNote(note) {
        await this.noteInput.addValue(note);
    }

    async createIngredient(ingredientName, tolerance, dm, cost, note) {
        // Complete fields
        await this.addGlobalIngredient(ingredientName);
        await this.addTolerance(tolerance);
        await this.addDM(dm);
        await driver.hideKeyboard();
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        await this.addCost(cost);
        await this.addNote(note);

        // Save pen
        await Button.saveBtn.click();
    }

}

export default new NewIngredientScreen();