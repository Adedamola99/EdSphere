'use client'
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface FormValues {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<FormValues>({ email: '', password: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors: FormErrors = {};
    if (!formData.email) {
      validationErrors.email = 'Email is required';
    }
    if (!formData.password) {
      validationErrors.password = 'Password is required';
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Proceed with form submission or authentication logic
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center mb-4 text-gray-800">Log In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <FontAwesomeIcon icon={faEnvelope} className="absolute text-gray-600 top-1/2 left-3 transform -translate-y-1/2" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className={`pl-10 mt-1 mb-8 block w-full border-2 border-transparent rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none px-4 py-3 bg-gray-100 text-gray-700 focus:outline-none transition duration-300`}
            />
            {errors.email && <p className="absolute text-sm text-red-500 top-full left-0">{errors.email}</p>}
          </div>
          <div className="relative">
            <FontAwesomeIcon icon={faLock} className="absolute text-gray-600 top-1/2 left-3 transform -translate-y-1/2" />
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className={`pl-10 pr-10 mt-1 mb-3 block w-full border-2 border-transparent rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none px-4 py-3 bg-gray-100 text-gray-700 focus:outline-none transition duration-300`}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              onClick={handleTogglePasswordVisibility}
              className="absolute text-gray-600 top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
            />
            {errors.password && <p className="absolute text-sm text-red-500 top-full left-0">{errors.password}</p>}
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-md hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300">Log In</button>
        </form>
        <div className="mt-4 flex justify-center">
          <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
          {/* Add social login buttons here if needed */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
