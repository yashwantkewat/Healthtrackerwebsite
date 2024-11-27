import React, { useState } from 'react';
import { 
  Dumbbell, 
  HeartPulse, 
  Trophy, 
  Users, 
  Brain, 
  Shield, 
  Zap, 
  Clock, 
  BookOpen, 
  Target 
} from 'lucide-react';

const benefitCategories = [
  {
    category: 'Physical Health',
    benefits: [
      {
        icon: Dumbbell,
        title: 'Comprehensive Fitness',
        description: 'Access to state-of-the-art equipment and diverse workout zones tailored to all fitness levels.',
        color: 'text-blue-600'
      },
      {
        icon: HeartPulse,
        title: 'Cardiovascular Wellness',
        description: 'Advanced cardio equipment and specialized heart health programs to improve overall cardiovascular fitness.',
        color: 'text-red-600'
      },
      {
        icon: Trophy,
        title: 'Performance Tracking',
        description: 'Cutting-edge fitness assessment tools and progress tracking to monitor your fitness journey.',
        color: 'text-green-600'
      }
    ]
  },
  {
    category: 'Mental Wellness',
    benefits: [
      {
        icon: Brain,
        title: 'Stress Reduction',
        description: 'Specialized classes and environments designed to reduce stress and improve mental clarity.',
        color: 'text-purple-600'
      },
      {
        icon: Zap,
        title: 'Energy Boost',
        description: 'Regular exercise proven to increase energy levels and improve overall mood and productivity.',
        color: 'text-yellow-600'
      },
      {
        icon: Clock,
        title: 'Time Efficiency',
        description: 'Structured programs and expert guidance to maximize your workout time and results.',
        color: 'text-indigo-600'
      }
    ]
  },
  {
    category: 'Community & Support',
    benefits: [
      {
        icon: Users,
        title: 'Community Engagement',
        description: 'Group classes, fitness challenges, and social events to keep you motivated and connected.',
        color: 'text-pink-600'
      },
      {
        icon: Shield,
        title: 'Expert Guidance',
        description: 'Professional trainers and nutritionists providing personalized support and advice.',
        color: 'text-teal-600'
      },
      {
        icon: BookOpen,
        title: 'Continuous Learning',
        description: 'Workshops, seminars, and resources to expand your fitness and nutrition knowledge.',
        color: 'text-orange-600'
      }
    ]
  }
];

const BenefitsPrice = () => {
  const [activeCategory, setActiveCategory] = useState(benefitCategories[0].category);

  return (
    <div className="min-h-screen bg-amber-500 py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Why Choose Our Gym?
        </h1>

        {/* Category Navigation */}
        <div className="flex justify-center mb-12 space-x-4">
          {benefitCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`
                px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300
                ${activeCategory === cat.category 
                  ? 'bg-blue-600 text-white shadow-xl' 
                  : 'bg-gray-200 text-gray-700 hover:bg-blue-100'}
              `}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefitCategories
            .find(cat => cat.category === activeCategory)
            .benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex items-center mb-4">
                    <IconComponent 
                      className={`w-12 h-12 mr-4 ${benefit.color}`}
                    />
                    <h3 className="text-xl font-bold text-gray-800">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })
          }
        </div>

        {/* Additional Benefits Section */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Unlock Your Potential
          </h2>
          <div className="flex justify-center space-x-8">
            <div className="flex items-center">
              <Target className="w-10 h-10 mr-3 text-green-600" />
              <span className="text-lg font-semibold text-gray-700">
                Personalized Goals
              </span>
            </div>
            <div className="flex items-center">
              <Zap className="w-10 h-10 mr-3 text-yellow-600" />
              <span className="text-lg font-semibold text-gray-700">
                Continuous Motivation
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsPrice;