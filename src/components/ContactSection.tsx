'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const initialValues: FormValues = {
    name: '',
    phone: '',
    email: '',
    message: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('שדה חובה'),
    phone: Yup.string().required('שדה חובה').matches(/^[0-9]{9,10}$/, 'מספר טלפון לא תקין'),
    email: Yup.string().email('כתובת אימייל לא תקינה').required('שדה חובה'),
    message: Yup.string().required('שדה חובה')
  });

  const handleSubmit = (values: FormValues, { resetForm }: any) => {
    // Here you would typically send the form data to your backend
    console.log(values);
    setIsSubmitted(true);
    setTimeout(() => {
      resetForm();
      setIsSubmitted(false);
    }, 3000);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="contact" className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16 rtl" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">צור קשר</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            אנו במשרד עורכי דין ביתא זמינים לענות על כל שאלה. השאירו פרטים ונחזור אליכם בהקדם.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">השאירו פרטים</h3>
            
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6">
                  <div className="form-group">
                    <label htmlFor="name" className="block text-gray-700 mb-2">שם מלא</label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className="form-input w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="הכנס את שמך המלא"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500 mt-1 text-sm" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="block text-gray-700 mb-2">טלפון</label>
                    <Field
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-input w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="הכנס את מספר הטלפון שלך"
                    />
                    <ErrorMessage name="phone" component="div" className="text-red-500 mt-1 text-sm" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="block text-gray-700 mb-2">אימייל</label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="form-input w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="הכנס את כתובת האימייל שלך"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 mt-1 text-sm" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="block text-gray-700 mb-2">הודעה</label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      rows={5}
                      className="form-textarea w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="כתוב את הודעתך כאן"
                    />
                    <ErrorMessage name="message" component="div" className="text-red-500 mt-1 text-sm" />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-md hover:bg-primary-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? 'שולח...' : 'שלח'}
                  </motion.button>

                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mt-4"
                    >
                      תודה! הודעתך התקבלה. נחזור אליך בהקדם.
                    </motion.div>
                  )}
                </Form>
              )}
            </Formik>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex flex-col"
          >
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">פרטי התקשרות</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-light p-3 rounded-full">
                    <FaMapMarkerAlt className="text-primary h-6 w-6" />
                  </div>
                  <div className="mr-4">
                    <h4 className="text-lg font-medium text-gray-800">כתובת המשרד</h4>
                    <p className="text-gray-600 mt-1">רחוב הרצל 123, תל אביב, ישראל</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-light p-3 rounded-full">
                    <FaPhone className="text-primary h-6 w-6" />
                  </div>
                  <div className="mr-4">
                    <h4 className="text-lg font-medium text-gray-800">טלפון</h4>
                    <p className="text-gray-600 mt-1">03-1234567</p>
                    <p className="text-gray-600">050-1234567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-light p-3 rounded-full">
                    <FaEnvelope className="text-primary h-6 w-6" />
                  </div>
                  <div className="mr-4">
                    <h4 className="text-lg font-medium text-gray-800">אימייל</h4>
                    <p className="text-gray-600 mt-1">info@betalaw.co.il</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-medium text-gray-800 mb-3">שעות פעילות</h4>
                <div className="grid grid-cols-2 gap-2 text-gray-600">
                  <div>ראשון - חמישי:</div>
                  <div>9:00 - 18:00</div>
                  <div>שישי:</div>
                  <div>9:00 - 13:00</div>
                  <div>שבת:</div>
                  <div>סגור</div>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg h-64 relative">
              <img 
                src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="משרד עורכי דין ביתא" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-secondary bg-opacity-20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;