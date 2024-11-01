import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { Trophy } from 'lucide-react';

const successData = [
  { name: 'Job Placement', value: 75 },
  { name: 'Higher Education', value: 15 },
  { name: 'Entrepreneurship', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export const SuccessMetrics = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Trophy className="text-yellow-500" />
        Success Metrics
      </h2>
      <div className="flex items-center justify-center">
        <PieChart width={400} height={300}>
          <Pie
            data={successData}
            cx={200}
            cy={150}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {successData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {successData.map((item, index) => (
          <div key={item.name} className="text-center">
            <div className="font-bold text-lg" style={{ color: COLORS[index] }}>
              {item.value}%
            </div>
            <div className="text-sm text-gray-600">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};