import Button from "../../../utils/android/Button";
import SelectIngredientScreen from "../ingredient/SelectIngredient.screen";

class NewRecipeScreen {

    get recipeNameInput(){
        return $('//*[@resource-id="com.milcgroup.one:id/edit_recipe_name_edit_text"]');
    }

    get recipeDensityInput(){
        return $('//*[@resource-id="com.milcgroup.one:id/edit_recipe_density_edit_text"]');
    }

    get recipeAddIngBtn(){
        return $('//*[@resource-id="com.milcgroup.one:id/recipe_edit_edit_ingredients"]');
    }

    get recipeAddAltrBtn(){
        return $('//*[@resource-id="com.milcgroup.one:id/recipe_edit_edit_alternates"]');
    }

    get recipeNoteInput(){
        return $('//*[@resource-id="com.milcgroup.one:id/edit_recipe_notes_edit_text"]');
    }

    get recipeConstDmSwitch(){
        return $('//*[@resource-id="com.milcgroup.one:id/recipe_edit_constant_dm_switch"]');
    }

    async addRecipeName(recipeName){
        await this.recipeNameInput.addValue(recipeName);
    }

    async addRecipeDensity(recipeDensity){
        await this.recipeDensityInput.addValue(recipeDensity);
    }

    async createOneIngRecipe(recipeName, recipeDensity, recipeIngName, recipeIngAmount){
        // Complete fields
        await this.addRecipeName(recipeName);
        await this.addRecipeDensity(recipeDensity);
        // Add ingredient
        await this.recipeAddIngBtn.click();
        await SelectIngredientScreen.addIngToRecByName(recipeIngName, recipeIngAmount);
        await Button.doneBtn.click();
    }
}

export default new NewRecipeScreen();