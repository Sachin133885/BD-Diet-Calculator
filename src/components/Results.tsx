import React from 'react';
import { Activity, Scale, Utensils } from 'lucide-react';

type ResultsProps = {
  bmr: number;
  tdee: number;
  macros: {
    protein: number;
    carbs: number;
    fat: number;
  };
  mealPlan: {
    breakfast: string;
    midMorningSnack: string;
    lunch: string;
    afternoonSnack: string;
    dinner: string;
    bedtimeSnack: string;
  } | null;
};

export default function Results({ bmr, tdee, macros, mealPlan }: ResultsProps) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Scale className="w-6 h-6 text-blue-600" />
            <h3 className="text-lg font-semibold ml-2">BMR</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900">{Math.round(bmr)} kcal/day</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Activity className="w-6 h-6 text-blue-600" />
            <h3 className="text-lg font-semibold ml-2">TDEE</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900">{Math.round(tdee)} kcal/day</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Utensils className="w-6 h-6 text-blue-600" />
            <h3 className="text-lg font-semibold ml-2">Macros</h3>
          </div>
          <div className="space-y-2">
            <p>Protein: {Math.round(macros.protein)}g</p>
            <p>Carbs: {Math.round(macros.carbs)}g</p>
            <p>Fat: {Math.round(macros.fat)}g</p>
          </div>
        </div>
      </div>

      {mealPlan && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Recommended Meal Plan</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900">Breakfast</h4>
              <p className="text-gray-600">{mealPlan.breakfast}</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Mid-Morning Snack</h4>
              <p className="text-gray-600">{mealPlan.midMorningSnack}</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Lunch</h4>
              <p className="text-gray-600">{mealPlan.lunch}</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Afternoon Snack</h4>
              <p className="text-gray-600">{mealPlan.afternoonSnack}</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Dinner</h4>
              <p className="text-gray-600">{mealPlan.dinner}</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Bedtime Snack</h4>
              <p className="text-gray-600">{mealPlan.bedtimeSnack}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}