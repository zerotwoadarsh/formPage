import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const FormDisplay = () => {
  const { state } = useLocation(); 
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="text-center mt-10">
        <p className="text-xl">No submission data found.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
          onClick={() => navigate('/')}
        >
          Go Back to Form
        </button>
      </div>
    );
  }

  const { name, rollNumber, preference1, preference2, preference3 } = state;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Submission Confirmation</h2>
        <div className="space-y-2">
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Roll Number:</strong> {rollNumber}</p>
          <p><strong>Preference 1:</strong> {preference1}</p>
          <p><strong>Preference 2:</strong> {preference2}</p>
          <p><strong>Preference 3:</strong> {preference3}</p>
        </div>
      </div>
    </div>
  );
};

export default FormDisplay;
