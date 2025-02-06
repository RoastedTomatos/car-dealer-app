'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function FilterPage() {
  const [makes, setMakes] = useState([]);
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const [years] = useState(
    [...Array(new Date().getFullYear() - 2014).keys()].map((i) => 2015 + i)
  );

  useEffect(() => {
    fetch(
      'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'
    )
      .then((res) => res.json())
      .then((data) => setMakes(data.Results));
  }, []);

  console.log(makes);

  return (
    <main className="min-h-screen p-8">
      <header className="max-w-md mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Choose Make and Year of car :
        </h1>
      </header>

      <section className="flex max-w-md mx-auto flex-col">
        <form className="flex w-full mx-auto bg-white p-6 rounded-lg shadow">
          <div className="w-full flex justify-between gap-x-4">
            <div className="flex flex-col w-1/2">
              <label className="text-xl text-gray-600 text-center">Make</label>
              <select
                className="p-2 border rounded text-gray-600"
                value={selectedMake}
                onChange={(e) => setSelectedMake(e.target.value)}
              >
                {makes.map((make) => (
                  <option key={make.MakeId} value={make.MakeId}>
                    {make.MakeName}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col w-1/2">
              <label className="text-xl text-gray-600 text-center">Year</label>
              <select
                className=" p-2 border rounded text-gray-600"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </form>

        <div className="flex w-full justify-center mt-20">
          <Link
            href={`/page/${selectedMake}/${selectedYear}`}
            className={`flex text-center rounded p-4 px-16 ${
              selectedMake && selectedYear
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Next
          </Link>
        </div>
      </section>
    </main>
  );
}
