// BMR calculation utility
export const calculateBMR = (weight: number, height: number, age: number, gender: string): number => {
  return gender.toLowerCase() === 'm'
    ? 10 * weight + 6.25 * height - 5 * age + 5
    : 10 * weight + 6.25 * height - 5 * age - 161;
};

// TDEE calculation utility
export const calculateTDEE = (bmr: number, activityLevel: string): number => {
  const activityMultipliers = {
    s: 1.2,  // Sedentary
    m: 1.55, // Moderate
    a: 1.75  // Active
  };
  return bmr * (activityMultipliers[activityLevel as keyof typeof activityMultipliers] || 1.2);
};

// Macros calculation utility
export const calculateMacros = (
  tdee: number,
  goal: string,
  age: number,
  gender: string
): { protein: number; carbs: number; fat: number } => {
  let proteinRatio, carbRatio, fatRatio;

  if (goal === 'cut') {
    proteinRatio = 0.4;
    carbRatio = 0.3;
    fatRatio = 0.3;
  } else if (goal === 'maintain') {
    if (age < 18) {
      proteinRatio = 0.25;
      carbRatio = 0.45;
      fatRatio = 0.3;
    } else {
      proteinRatio = 0.2;
      carbRatio = 0.5;
      fatRatio = 0.3;
    }
  } else if (goal === 'bulk') {
    if (age < 18) {
      proteinRatio = 0.3;
      carbRatio = 0.5;
      fatRatio = 0.2;
    } else if (age <= 35) {
      proteinRatio = 0.35;
      carbRatio = 0.45;
      fatRatio = 0.2;
    } else {
      proteinRatio = 0.3;
      carbRatio = 0.4;
      fatRatio = 0.3;
    }
  }

  return {
    protein: (tdee * proteinRatio) / 4,
    carbs: (tdee * carbRatio) / 4,
    fat: (tdee * fatRatio) / 9
  };
};