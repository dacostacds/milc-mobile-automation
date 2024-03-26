import DashboardScreen from "../../../../screen/android/feed/Dashboard.screen";
import NewRecipeScreen from "../../../../screen/android/recipe/NewRecipe.screen";
import RecipeScreen from "../../../../screen/android/recipe/Recipe.screen";
import LoginSelectModule from "../../../../utils/android/LoginSelectModule";
import recipeData from "../../../../data/recipe.data.json";
import ingredientData from "../../../../data/ingredient.data.json";
import Button from "../../../../utils/android/Button";
import RecipeDetailScreen from "../../../../screen/android/recipe/RecipeDetail.screen";
import Operations from "../../../../utils/Operations";
import costMethodMultiplier from "../../../../data/costMethodMultiplier.json";

describe('Create recipe', () => {

    before(async () => {
        await LoginSelectModule.loginEnterFeed(process.env.User, process.env.Password);

        await DashboardScreen.recipesBtn.click();
    });

    beforeEach(async () => {
        await RecipeScreen.addNewRecipeBtn.click();
    });

    it('Create one ingredient recipe', async () => {
        const dmAmount = recipeData.recIngAmount;
        const recName = recipeData.recipeNameOneIng;
        const density = recipeData.recipeDensity;
        const ingName = ingredientData.globIngAlfalfa;
        const ingDmPct = ingredientData.ingDM;
        const afAmount = await Operations.calcAfFromDm(dmAmount, ingDmPct);
        const ingCost = ingredientData.ingCost;
        const cost = await Operations.calcIngCost(afAmount,costMethodMultiplier.PerAFTon,ingCost);

        // Create recipe
        await NewRecipeScreen.createOneIngRecipe(
            recName, 
            density, 
            ingName, 
            dmAmount
        );

        // Save recipe
        await Button.saveBtn.click(); 

        // Assert - Recipe has the correct data
        await expect (RecipeDetailScreen.recipeDm).toHaveText(ingDmPct+'.00 %');
        await expect (RecipeDetailScreen.recAmountDm).toHaveText(dmAmount+'.0 kg');
        await expect (RecipeDetailScreen.recAmountAf).toHaveText(afAmount+' kg');
        await expect (RecipeDetailScreen.recCostDm).toHaveText('$ '+cost+' / hd');
        await expect (RecipeDetailScreen.recDensity).toHaveText(density+' %');
        await expect (RecipeDetailScreen.recIngName).toHaveText(ingName);
    });
});