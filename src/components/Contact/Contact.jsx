import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../../data/portfolio';
import { staggerContainer, staggerItem } from '../../utils/animations';

const Contact = () => {
    const { personal, social } = portfolioData;
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        try {
            // Note: Replace these with your EmailJS credentials
            // Get them from https://www.emailjs.com/
            const serviceId = 'YOUR_SERVICE_ID';
            const templateId = 'YOUR_TEMPLATE_ID';
            const publicKey = 'YOUR_PUBLIC_KEY';

            // For demo purposes, we'll just show a success message
            // Uncomment the below lines and add your EmailJS credentials to make it work
            /*
            await emailjs.send(
              serviceId,
              templateId,
              {
                from_name: data.name,
                from_email: data.email,
                subject: data.subject,
                message: data.message,
              },
              publicKey
            );
            */

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            setSubmitStatus({
                type: 'success',
                message: 'Thank you for your message! I\'ll get back to you soon.',
            });
            reset();
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: 'Oops! Something went wrong. Please try again or email me directly.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section-container bg-gray-50 dark:bg-slate-800">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                {/* Section Title */}
                <motion.div variants={staggerItem} className="text-center mb-12">
                    <h2 className="section-title gradient-text">Get In Touch</h2>
                    <p className="section-subtitle">
                        Let's discuss your next project or opportunity
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
                    {/* Contact Information */}
                    <motion.div variants={staggerItem} className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white mb-4">
                                Contact Information
                            </h3>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-6">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-6">
                            <motion.a
                                href={social.email}
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-slate-900 hover:shadow-md transition-all duration-300 group"
                            >
                                <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                                    <FiMail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                    <p className="font-semibold text-gray-900 dark:text-white">
                                        {personal.email}
                                    </p>
                                </div>
                            </motion.a>

                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-slate-900"
                            >
                                <div className="p-3 rounded-lg bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400">
                                    <FiMapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                                    <p className="font-semibold text-gray-900 dark:text-white">
                                        {personal.location}
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                Connect With Me
                            </h4>
                            <div className="flex gap-4">
                                <motion.a
                                    href={social.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.15, y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-5 rounded-xl bg-white dark:bg-slate-900 hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-all duration-300 shadow-md hover:shadow-xl"
                                    aria-label="GitHub"
                                >
                                    <FiGithub className="w-7 h-7" />
                                </motion.a>
                                <motion.a
                                    href={social.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.15, y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-5 rounded-xl bg-white dark:bg-slate-900 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
                                    aria-label="LinkedIn"
                                >
                                    <FiLinkedin className="w-7 h-7" />
                                </motion.a>
                                <motion.a
                                    href={social.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.15, y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-5 rounded-xl bg-white dark:bg-slate-900 hover:bg-sky-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
                                    aria-label="Twitter"
                                >
                                    <FiTwitter className="w-7 h-7" />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div variants={staggerItem}>
                        <form onSubmit={handleSubmit(onSubmit)} className="card p-6 space-y-5">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    Your Name *
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    {...register('name', { required: 'Name is required' })}
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-primary dark:focus:border-accent transition-all duration-200 shadow-sm hover:shadow-md"
                                    placeholder="John Doe"
                                />
                                {errors.name && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-2 text-sm text-red-500 flex items-center gap-1"
                                    >
                                        <span>⚠</span> {errors.name.message}
                                    </motion.p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    Your Email *
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Invalid email address',
                                        },
                                    })}
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-primary dark:focus:border-accent transition-all duration-200 shadow-sm hover:shadow-md"
                                    placeholder="john@example.com"
                                />
                                {errors.email && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-2 text-sm text-red-500 flex items-center gap-1"
                                    >
                                        <span>⚠</span> {errors.email.message}
                                    </motion.p>
                                )}
                            </div>

                            {/* Subject */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    Subject *
                                </label>
                                <input
                                    id="subject"
                                    type="text"
                                    {...register('subject', { required: 'Subject is required' })}
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-primary dark:focus:border-accent transition-all duration-200 shadow-sm hover:shadow-md"
                                    placeholder="Project Inquiry"
                                />
                                {errors.subject && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-2 text-sm text-red-500 flex items-center gap-1"
                                    >
                                        <span>⚠</span> {errors.subject.message}
                                    </motion.p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    {...register('message', { required: 'Message is required' })}
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-primary dark:focus:border-accent transition-all duration-200 resize-none shadow-sm hover:shadow-md"
                                    placeholder="Tell me about your project or opportunity..."
                                />
                                {errors.message && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-2 text-sm text-red-500 flex items-center gap-1"
                                    >
                                        <span>⚠</span> {errors.message.message}
                                    </motion.p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="loader w-5 h-5 border-2"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <FiSend className="w-5 h-5" />
                                        Send Message
                                    </>
                                )}
                            </motion.button>

                            {/* Status Message */}
                            {submitStatus.message && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`p-4 rounded-lg ${submitStatus.type === 'success'
                                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                                        : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                                        }`}
                                >
                                    {submitStatus.message}
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
