import React from 'react';
import { Book } from 'lucide-react';

const subjects = [
  {
    name: 'Mathematics',
    careers: ['Data Science', 'Engineering', 'Finance', 'Research'],
    description: 'Strong foundation for analytical and problem-solving careers',
  },
  {
    name: 'Science',
    careers: ['Medicine', 'Research', 'Environmental Science', 'Technology'],
    description: 'Gateway to innovation and discovery-based professions',
  },
  {
    name: 'Computer Science',
    careers: ['Software Development', 'AI/ML', 'Cybersecurity', 'Game Development'],
    description: 'Essential for modern technology-driven careers',
  },
  {
    name: 'Languages',
    careers: ['Content Writing', 'Translation', 'Teaching', 'International Relations'],
    description: 'Opens doors to global communication and cultural careers',
  },
];

export const SubjectExplorer = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Book className="text-green-600" />
        Subject Explorer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {subjects.map((subject) => (
          <div key={subject.name} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">{subject.name}</h3>
            <p className="text-gray-600 mb-3">{subject.description}</p>
            <div className="space-y-1">
              <h4 className="font-medium text-gray-700">Related Careers:</h4>
              <div className="flex flex-wrap gap-2">
                {subject.careers.map((career) => (
                  <span
                    key={career}
                    className="bg-indigo-100 text-indigo-800 text-sm px-2 py-1 rounded-full"
                  >
                    {career}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};