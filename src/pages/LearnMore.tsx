
import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const LearnMore: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-8">
              About Our Project
            </h1>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="prose prose-lg mx-auto text-gray-700"
            >
              <p className="text-xl leading-relaxed mb-8">
                This project is created by <span className="font-semibold text-primary-700">[Team Members Names]</span> as a major project in B.Tech.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
            >
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                <p className="text-gray-600">
                  To revolutionize healthcare management through innovative digital solutions.
                </p>
              </div>
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                <p className="text-gray-600">
                  Making healthcare information accessible and manageable for everyone.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default LearnMore;
