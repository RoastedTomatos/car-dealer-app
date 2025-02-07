'use client';
import { useEffect, useState } from 'react';

type Model = {
  Model_ID: string;
  Model_Name: string;
};

export default function ResultPage({
  params,
}: {
  params: { makeId: string; year: string };
}) {
  const { makeId, year } = params;

  const [models, setModels] = useState<Model[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!makeId || !year) return;

    const fetchModels = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
        );
        if (!response.ok) {
          throw new Error('Error while loading data');
        }
        const data = await response.json();
        if (!data.Results) {
          throw new Error('No data found');
        }
        setModels(data.Results);
      } catch (error) {
        console.error('Error:', error);
        setError('Error');
      } finally {
        setIsLoading(false);
      }
    };

    fetchModels();
  }, [makeId, year]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Models: {makeId} ({year})
      </h1>

      {models.length > 0 ? (
        <ul className="space-y-2">
          {models.map((model) => (
            <li key={model.Model_ID} className="p-2 bg-gray-100 rounded">
              {model.Model_Name}
            </li>
          ))}
        </ul>
      ) : (
        <div>No models</div>
      )}
    </div>
  );
}
