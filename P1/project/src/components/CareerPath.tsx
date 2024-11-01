import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Briefcase, GraduationCap, TrendingUp } from 'lucide-react';

const careerData = [
  { field: 'Engineering', opportunities: 85, salary: 75000, growth: 12 },
  { field: 'Medicine', opportunities: 90, salary: 85000, growth: 15 },
  { field: 'IT', opportunities: 95, salary: 80000, growth: 18 },
  { field: 'Business', opportunities: 80, salary: 70000, growth: 10 },
  { field: 'Design', opportunities: 75, salary: 65000, growth: 8 },
];

export const CareerPath = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Briefcase className="text-indigo-600" />
        Career Opportunities
      </h2>
      <div className="overflow-x-auto">
        <BarChart width={600} height={300} data={careerData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="field" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="opportunities" fill="#8884d8" name="Opportunities Score" />
          <Bar dataKey="growth" fill="#82ca9d" name="Growth Rate %" />
        </BarChart>
      </div>
    </div>
  );
};