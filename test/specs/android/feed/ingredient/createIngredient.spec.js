import DashboardScreen from "../../../../screen/feed/Dashboard.screen";
import IngredientScreen from "../../../../screen/feed/ingredient/Ingredient.screen";
import NewIngredientScreen from "../../../../screen/feed/ingredient/NewIngredient.screen";
import LoginSelectModule from "../../../../utils/android/LoginSelectModule";
import ingredientData from "../../../../data/ingredient.data.json";
import IngredientDetailScreen from "../../../../screen/feed/ingredient/IngredientDetail.screen";

describe('Create ingredient', () => {

    before(async () => {
        await LoginSelectModule.loginEnterFeed(process.env.User, process.env.Password);

        await DashboardScreen.ingredientsBtn.click();

        await IngredientScreen.deleteIngredient();
    });

    beforeEach(async () => {
        await IngredientScreen.addNewIngredientBtn.click();
    })

    after(async () => {
        await driver.back();
    })

    afterEach(async () => {
        await driver.back();
    });

    it('Create ingredient', async () => {
        // Create ingredient
        await NewIngredientScreen.createIngredient(
            ingredientData.globIngAlfalfa, 
            ingredientData.ingTolerance, 
            ingredientData.ingDM, 
            ingredientData.ingCost, 
            ingredientData.ingNote
        );
        // Assert - Ingredient has the correct data
        await expect(IngredientDetailScreen.ingredientName).toHaveText(ingredientData.globIngAlfalfa);
        await expect(IngredientDetailScreen.ingredientTolerance).toHaveTextContaining(ingredientData.ingTolerance);
        await expect(IngredientDetailScreen.ingredientCost).toHaveText('$ '+ingredientData.ingCost+'.00');
        await expect(IngredientDetailScreen.ingredientDM).toHaveText(ingredientData.ingDM+'.00 %');
        await expect(IngredientDetailScreen.ingredientNote).toHaveText(ingredientData.ingNote);
    });
});