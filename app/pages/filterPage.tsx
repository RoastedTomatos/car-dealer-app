import { useState, useEffect } from 'react';
import Link from 'next/link';

export const FilterPage = () => {
  const [makes, setMakes] = useState([]);
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [years] = useState(
    [...Array(new Date().getFullYear() - 2014).keys()].map((i) => 2015 + i)
  );
};
