class Operations{
    async calcAfFromDm(dmAmount, dmPct){
        let dmAmountInt = parseInt(dmAmount);
        let dmPctInt = parseInt(dmPct);

        let result = dmAmountInt*100 / dmPctInt;
        let afAmount = Math.round(result * 10) / 10;
        return afAmount.toString();
    }

    async calcDmFromAf(afAmount, dmPct){
        let afAmountInt = parseInt(afAmount);
        let dmPctInt = parseInt(dmPct);

        let result = afAmountInt*100 / dmPctInt;
        let dmAmount = Math.round(result * 10) / 10;
        return dmAmount.toString();
    }

    async calcIngCost(amount, unitAmount, ingCost){
        let amountInt = parseFloat(amount);
        let amountGrams = amountInt*1000;
        let ingCostInt = parseFloat(ingCost); 
        
        let result = ingCostInt/unitAmount*amountGrams;
        let cost = Math.round(result *100)/100;
        return cost.toString();
    }
}

export default new Operations();