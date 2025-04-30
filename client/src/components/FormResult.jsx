import React, { useEffect, useState } from 'react';

const FormResult = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await fetch('http://localhost:3001/entries/formPage');
        const data = await response.json();
        setEntries(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching entries:', error);
        setLoading(false);
      }
    };

    fetchEntries();
  }, []);

  if (loading) {
    return <p className="text-center mt-4">Loading...</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 flex items-center justify-center w-full ">Submitted Entries</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border-b text-xs sm:text-sm md:text-base">Name</th>
              <th className="py-2 px-4 border-b text-xs sm:text-sm md:text-base">Roll Number</th>
              <th className="py-2 px-4 border-b text-xs sm:text-sm md:text-base">Preference 1</th>
              <th className="py-2 px-4 border-b text-xs sm:text-sm md:text-base">Preference 2</th>
              <th className="py-2 px-4 border-b text-xs sm:text-sm md:text-base">Preference 3</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr key={entry._id} className="text-center">
                <td className="py-2 px-4 border-b text-xs sm:text-sm md:text-base">{entry.name}</td>
                <td className="py-2 px-4 border-b text-xs sm:text-sm md:text-base">{entry.rollNumber}</td>
                <td className="py-2 px-4 border-b text-xs sm:text-sm md:text-base">{entry.preference1}</td>
                <td className="py-2 px-4 border-b text-xs sm:text-sm md:text-base">{entry.preference2}</td>
                <td className="py-2 px-4 border-b text-xs sm:text-sm md:text-base">{entry.preference3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormResult;
