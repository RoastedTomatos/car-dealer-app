'use client';

import { Suspense } from 'react';

const getModels = async (makeId: string, year: string) => {
  const res = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );
  return res.json();
};

const ModelList = async ({
  makeId,
  year,
}: {
  makeId: string;
  year: string;
}) => {
  const data = await getModels(makeId, year);

  return (
    <div>
      {data.Results.map((model: any) => (
        <div>{model.Model_Name}</div>
      ))}
    </div>
  );
};

export default function ResultPage() {
  return <>This is result</>;
}
