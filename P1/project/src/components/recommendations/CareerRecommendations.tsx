import React from 'react';
import { Compass, BookOpen, GraduationCap, Building2, Briefcase } from 'lucide-react';
import { User, CareerPath } from '../../types';

const careerPaths: Record<string, CareerPath> = {
  'Business & Commerce': {
    stream: 'Commerce',
    description: 'Perfect for students interested in business, finance, and entrepreneurship',
    nextSteps: [
      'Choose Commerce stream in 11th & 12th',
      'Focus on Mathematics, Accountancy, and Business Studies',
      'Prepare for entrance exams like CAT, XAT, or CLAT'
    ],
    exams: ['CAT', 'XAT', 'CLAT', 'IPMAT', 'CUET'],
    institutions: ['IIMs', 'XLRI', 'FMS Delhi', 'NMIMS', 'Symbiosis'],
    careers: ['MBA', 'CA', 'Investment Banking', 'Business Analytics', 'Entrepreneurship']
  },
  'Science & Technology': {
    stream: 'Science (PCM)',
    description: 'Ideal for students passionate about technology and engineering',
    nextSteps: [
      'Choose Science stream with PCM in 11th & 12th',
      'Focus on Mathematics and Physics',
      'Prepare for JEE Main and Advanced'
    ],
    exams: ['JEE Main', 'JEE Advanced', 'BITSAT', 'VITEEE'],
    institutions: ['IITs', 'NITs', 'BITS', 'VIT', 'DTU'],
    careers: ['Software Engineer', 'Data Scientist', 'AI/ML Engineer', 'Research']
  },
  'Medical & Healthcare': {
    stream: 'Science (PCB)',
    description: 'For students interested in medicine and healthcare',
    nextSteps: [
      'Choose Science stream with PCB in 11th & 12th',
      'Focus on Biology and Chemistry',
      'Prepare for NEET-UG'
    ],
    exams: ['NEET-UG', 'AIIMS', 'JIPMER'],
    institutions: ['AIIMS', 'CMC Vellore', 'JIPMER', 'AFMC'],
    careers: ['Doctor', 'Surgeon', 'Research Scientist', 'Biotechnologist']
  }
};

export const CareerRecommendations = ({ user }: { user: User }) => {
  const recommendedPaths = user.interests
    .map(interest => careerPaths[interest])
    .filter(Boolean);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <Compass className="text-indigo-600" />
        Your Personalized Career Path
      </h2>

      {recommendedPaths.map((path, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-indigo-600 mb-4">{path.stream}</h3>
          <p className="text-gray-600 mb-6">{path.description}</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-800 flex items-center gap-2 mb-3">
                <BookOpen className="text-green-600" />
                Next Steps
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {path.nextSteps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-800 flex items-center gap-2 mb-3">
                <GraduationCap className="text-blue-600" />
                Recommended Exams
              </h4>
              <div className="flex flex-wrap gap-2">
                {path.exams.map((exam, i) => (
                  <span key={i} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {exam}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-800 flex items-center gap-2 mb-3">
                <Building2 className="text-purple-600" />
                Top Institutions
              </h4>
              <div className="flex flex-wrap gap-2">
                {path.institutions.map((institute, i) => (
                  <span key={i} className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                    {institute}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-800 flex items-center gap-2 mb-3">
                <Briefcase className="text-orange-600" />
                Career Options
              </h4>
              <div className="flex flex-wrap gap-2">
                {path.careers.map((career, i) => (
                  <span key={i} className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">
                    {career}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};