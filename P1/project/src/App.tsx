import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import { CareerPath } from './components/CareerPath';
import { SuccessMetrics } from './components/SuccessMetrics';
import { SubjectExplorer } from './components/SubjectExplorer';
import { RegisterForm } from './components/auth/RegisterForm';
import { CareerRecommendations } from './components/recommendations/CareerRecommendations';
import { User, AuthState } from './types';

function App() {
  const [auth, setAuth] = useState<AuthState>({
    user: null,
    isAuthenticated: false
  });

  const handleRegister = (user: User) => {
    setAuth({
      user,
      isAuthenticated: true
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-indigo-600 text-white py-6 mb-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <GraduationCap size={32} />
            <h1 className="text-3xl font-bold">Career Compass</h1>
          </div>
          <p className="mt-2 text-indigo-100">
            Guiding 10th & 12th grade students towards their ideal career path
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-12">
        {!auth.isAuthenticated ? (
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Create Your Account</h2>
            <RegisterForm onRegister={handleRegister} />
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Welcome, {auth.user.name}! 👋</h2>
              <p className="text-gray-600">Based on your interests, here are your personalized career recommendations:</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <CareerRecommendations user={auth.user} />
              </div>
              <div>
                <CareerPath />
                <SuccessMetrics />
                <SubjectExplorer />
              </div>
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Career Compass. Helping students make informed career decisions.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;