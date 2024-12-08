import React, { useState } from 'react';
import CalculatorForm from './components/CalculatorForm';
import Results from './components/Results';
import { calculateBMR, calculateTDEE, calculateMacros } from './utils/calculations';
import { getMealPlan } from './utils/mealPlans';

function App() {
  const [results, setResults] = useState<any>(null);

  const handleCalculate = (data: any) => {
    const bmr = calculateBMR(data.weight, data.height, data.age, data.gender);
    const tdee = calculateTDEE(bmr, data.activityLevel);
    const macros = calculateMacros(tdee, data.goal, data.age, data.gender);
    const mealPlan = getMealPlan(data.age, data.goal);

    setResults({
      bmr,
      tdee,
      macros,
      mealPlan
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <CalculatorForm onCalculate={handleCalculate} />
        </div>
        
        {results && (
          <div className="mt-8">
            <Results {...results} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;