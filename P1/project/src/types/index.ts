export interface User {
  email: string;
  name: string;
  phone: string;
  grade: '10th' | '12th';
  interests: string[];
}

export interface CareerPath {
  stream: string;
  description: string;
  nextSteps: string[];
  exams: string[];
  institutions: string[];
  careers: string[];
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}