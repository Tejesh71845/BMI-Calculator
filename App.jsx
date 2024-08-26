// import React from 'react'
import { useState } from 'react'

const App = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiValue);

      if (bmiValue < 18.5) {
        setMessage('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setMessage('Normal weight');
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        setMessage('Overweight');
      } else {
        setMessage('Obese');
      }
    } else {
      setMessage('Please enter valid weight and height.');
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">BMI Calculator</h1>
      <form className="w-full max-w-sm bg-white p-8 shadow-md rounded-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weight">
            Weight (kg):
          </label>
          <input
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter weight in kg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="height">
            Height (cm):
          </label>
          <input
            id="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter height in cm"
          />
        </div>
        <button
          onClick={calculateBMI}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Calculate BMI
        </button>
      </form>
      {bmi && (
        <div className="mt-6 bg-white p-4 shadow-md rounded-md text-center">
          <h2 className="text-2xl font-semibold">Your BMI: {bmi}</h2>
          <p className="text-xl mt-2">{message}</p>
        </div>
      )}
    </div>
  )
}

export default App
