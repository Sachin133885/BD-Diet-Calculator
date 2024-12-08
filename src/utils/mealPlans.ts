export type MealPlan = {
  breakfast: string;
  midMorningSnack: string;
  lunch: string;
  afternoonSnack: string;
  dinner: string;
  bedtimeSnack: string;
};

export const getMealPlan = (age: number, goal: string): MealPlan | null => {
  // Age group 1-5
  if (age >= 1 && age <= 5) {
    return {
      breakfast: 'Rice (Bhat) 100g, Dal (Plain) 50g, Small pieces of fruit (Banana or Apple) 1 serving, Boiled Egg 1',
      midMorningSnack: 'Misti Doi (Sweet Yogurt) 50g, Soft fruits (e.g., mashed banana) 1 serving',
      lunch: 'Kacchi Biryani 150g, Shutki Bhuna (Dry Fish with Veg) 25g, Shak Bharta (Mashed Greens) 25g',
      afternoonSnack: 'Singara 1 piece, Chotpoti 50g',
      dinner: 'Rice (Bhat) 100g, Hilsha Curry 50g, Aloo Bharta (Mashed Potatoes) 30g, Plain Dal 50g',
      bedtimeSnack: 'Coconut Water 100ml'
    };
  }

  // Age group 5-10
  if (age > 5 && age <= 10) {
    return {
      breakfast: 'Rice (Bhat) 150g, Dal (Plain) 75g, Boiled Egg 1, Beguni (Fried Eggplant) 50g',
      midMorningSnack: 'Misti Doi (Sweet Yogurt) 100g, Banana or Papaya slices 1 serving',
      lunch: 'Kacchi Biryani 200g, Shutki Bhuna 40g, Shak Bharta 50g',
      afternoonSnack: 'Singara 1-2 pieces, Chotpoti 75g',
      dinner: 'Rice (Bhat) 150g, Hilsha Curry 75g, Aloo Bharta 40g, Plain Dal 50g',
      bedtimeSnack: 'Coconut Water 150ml'
    };
  }

  // Age group 10-15
  if (age > 10 && age <= 15) {
    if (goal === 'maintain') {
      return {
        breakfast: 'Rice (Bhat) 150g, Dal (Plain) 100g, Beguni (Fried Eggplant) 75g, Boiled Egg 1',
        midMorningSnack: 'Misti Doi 100g, Apple or Orange 1 serving',
        lunch: 'Kacchi Biryani 250g, Shutki Bhuna 50g, Shak Bharta 60g',
        afternoonSnack: 'Singara 2 pieces, Chotpoti 100g',
        dinner: 'Rice (Bhat) 150g, Hilsha Curry 100g, Aloo Bharta 60g, Plain Dal 75g',
        bedtimeSnack: 'Coconut Water 150ml, Pati Shapta (Dessert) 1 piece'
      };
    }
  }

  // Age group 15-20
  if (age > 15 && age <= 20) {
    if (goal === 'cut') {
      return {
        breakfast: 'Rice (Bhat) 150g, Dal (Plain) 100g, Boiled Egg 2, Beguni (Fried Eggplant) 75g',
        midMorningSnack: 'Misti Doi 100g, Banana or Seasonal Fruit 1 serving',
        lunch: 'Kacchi Biryani 300g, Shutki Bhuna 60g, Shak Bharta 75g',
        afternoonSnack: 'Singara 2-3 pieces, Chotpoti 100g',
        dinner: 'Rice (Bhat) 150g, Hilsha Curry 100g, Aloo Bharta 75g, Plain Dal 100g',
        bedtimeSnack: 'Coconut Water 200ml, Pati Shapta (Dessert) 1 piece'
      };
    } else if (goal === 'bulk') {
      return {
        breakfast: 'Rice (Bhat) 200g, Dal (Plain) 125g, Boiled Egg 2, Beguni (Fried Eggplant) 100g',
        midMorningSnack: 'Misti Doi 100g, Banana or Seasonal Fruit 1 serving',
        lunch: 'Kacchi Biryani 350g, Shutki Bhuna 75g, Shak Bharta 100g',
        afternoonSnack: 'Singara 3 pieces, Chotpoti 100g',
        dinner: 'Rice (Bhat) 200g, Hilsha Curry 150g, Aloo Bharta 100g, Plain Dal 100g',
        bedtimeSnack: 'Coconut Water 200ml, Pati Shapta (Dessert) 1 piece'
      };
    }
  }

  // Age group 20-30
  if (age > 20 && age <= 30) {
    if (goal === 'bulk') {
      return {
        breakfast: 'Rice (Bhat) 200g, Dal (Plain) 100g, Boiled Egg 2-3, Beguni (Fried Eggplant) 100g',
        midMorningSnack: 'Misti Doi 150g, Apple or Pear 1 serving',
        lunch: 'Kacchi Biryani 350g, Shutki Bhuna 75g, Shak Bharta 100g',
        afternoonSnack: 'Singara 2-3 pieces, Chotpoti 100g',
        dinner: 'Rice (Bhat) 200g, Hilsha Curry 150g, Aloo Bharta 100g, Plain Dal 100g',
        bedtimeSnack: 'Coconut Water 200ml, Pati Shapta (Dessert) 1 piece'
      };
    } else if (goal === 'maintain') {
      return {
        breakfast: 'Rice (Bhat) 150g, Dal (Plain) 100g, Boiled Egg 1-2, Beguni (Fried Eggplant) 50g',
        midMorningSnack: 'Misti Doi 100g, Apple or Orange 1 serving',
        lunch: 'Kacchi Biryani 250g, Shutki Bhuna 50g, Shak Bharta 60g',
        afternoonSnack: 'Singara 2 pieces, Chotpoti 75g',
        dinner: 'Rice (Bhat) 150g, Hilsha Curry 100g, Aloo Bharta 60g, Plain Dal 75g',
        bedtimeSnack: 'Coconut Water 150ml'
      };
    }
  }

  // Age group 30-40
  if (age > 30 && age <= 40) {
    if (goal === 'maintain') {
      return {
        breakfast: 'Rice (Bhat) 200g, Dal (Plain) 125g, Beguni (Fried Eggplant) 100g, Boiled Egg 2',
        midMorningSnack: 'Misti Doi 150g, Orange or Grapes 1 serving',
        lunch: 'Kacchi Biryani 350g, Shutki Bhuna 75g, Shak Bharta 100g',
        afternoonSnack: 'Singara 2 pieces, Chotpoti 100g',
        dinner: 'Rice (Bhat) 200g, Hilsha Curry 150g, Aloo Bharta 100g, Plain Dal 125g',
        bedtimeSnack: 'Coconut Water 200ml'
      };
    } else if (goal === 'cut') {
      return {
        breakfast: 'Rice (Bhat) 200g, Dal (Plain) 125g, Beguni (Fried Eggplant) 75g, Boiled Egg 1-2',
        midMorningSnack: 'Misti Doi 100g, Seasonal Fruit 1 serving',
        lunch: 'Kacchi Biryani 300g, Shutki Bhuna 50g, Shak Bharta 100g',
        afternoonSnack: 'Singara 1-2 pieces, Chotpoti 100g',
        dinner: 'Rice (Bhat) 150g, Hilsha Curry 100g, Aloo Bharta 75g, Plain Dal 100g',
        bedtimeSnack: 'Coconut Water 200ml'
      };
    }
  }

  // Age group 40-60
  if (age > 40 && age <= 60) {
    if (goal === 'maintain') {
      return {
        breakfast: 'Rice (Bhat) 200g, Dal (Plain) 125g, Beguni (Fried Eggplant) 75g, Boiled Egg 1-2',
        midMorningSnack: 'Misti Doi 100g, Seasonal Fruit 1 serving',
        lunch: 'Kacchi Biryani 300g, Shutki Bhuna 50g, Shak Bharta 100g',
        afternoonSnack: 'Singara 1-2 pieces, Chotpoti 100g',
        dinner: 'Rice (Bhat) 150g, Hilsha Curry 100g, Aloo Bharta 75g, Plain Dal 100g',
        bedtimeSnack: 'Coconut Water 200ml'
      };
    } else if (goal === 'cut') {
      return {
        breakfast: 'Rice (Bhat) 200g, Dal (Plain) 125g, Beguni (Fried Eggplant) 50g, Boiled Egg 1-2',
        midMorningSnack: 'Misti Doi 100g, Seasonal Fruit 1 serving',
        lunch: 'Kacchi Biryani 250g, Shutki Bhuna 40g, Shak Bharta 75g',
        afternoonSnack: 'Singara 1-2 pieces, Chotpoti 75g',
        dinner: 'Rice (Bhat) 150g, Hilsha Curry 80g, Aloo Bharta 50g, Plain Dal 75g',
        bedtimeSnack: 'Coconut Water 150ml'
      };
    }
  }

  // Age group 60+
  if (age > 60) {
    return {
      breakfast: 'Rice (Bhat) 150g, Dal (Plain) 100g, Beguni (Fried Eggplant) 50g, Boiled Egg 1',
      midMorningSnack: 'Misti Doi 100g, Seasonal Fruit 1 serving',
      lunch: 'Kacchi Biryani 200g, Shutki Bhuna 40g, Shak Bharta 60g',
      afternoonSnack: 'Singara 1 piece, Chotpoti 75g',
      dinner: 'Rice (Bhat) 150g, Hilsha Curry 80g, Aloo Bharta 50g, Plain Dal 75g',
      bedtimeSnack: 'Coconut Water 150ml'
    };
  }

  // Default meal plan for any unmatched combinations
  return {
    breakfast: 'Rice (Bhat) 150g, Dal (Plain) 100g, Boiled Egg 1',
    midMorningSnack: 'Misti Doi 100g, Seasonal Fruit 1 serving',
    lunch: 'Kacchi Biryani 250g, Shutki Bhuna 50g, Shak Bharta 75g',
    afternoonSnack: 'Singara 1 piece, Chotpoti 75g',
    dinner: 'Rice (Bhat) 150g, Hilsha Curry 100g, Aloo Bharta 75g, Plain Dal 75g',
    bedtimeSnack: 'Coconut Water 150ml'
  };
};