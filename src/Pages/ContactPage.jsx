import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // <<<--- ADDED AnimatePresence here
import { FaPaperPlane, FaUser, FaEnvelope, FaTag } from 'react-icons/fa'; // Icons for the form
import { FaCommentDots } from 'react-icons/fa'; // Icon for comments

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [comments, setComments] = useState([
    { id: 1, author: 'Alice', text: 'Great portfolio! Love your work.', timestamp: '2 days ago' },
    { id: 2, author: 'Bob', text: 'Very inspiring projects.', timestamp: '1 day ago' },
    { id: 3, author: 'Charlie', text: 'Fantastic use of animations!', timestamp: '5 hours ago' },
  ]);

  const [newComment, setNewComment] = useState('');
  const [commentAuthor, setCommentAuthor] = useState(''); // For new comment author

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send formData to a backend service here
    console.log('Contact Form Submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() && commentAuthor.trim()) {
      const newId = comments.length > 0 ? Math.max(...comments.map(c => c.id)) + 1 : 1;
      const newCommentObj = {
        id: newId,
        author: commentAuthor.trim(),
        text: newComment.trim(),
        timestamp: 'Just now', // For demo purposes
      };
      // Add new comment to the top and animate
      setComments((prevComments) => [newCommentObj, ...prevComments]);
      setNewComment('');
      setCommentAuthor('');
    } else {
      alert('Please enter both your name and a comment.');
    }
  };

  // Animation variants for comments
  const commentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="contact-section" className="bg-gray-900 py-16 md:py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-center mb-6 md:mb-12 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Let's <span className="text-white">Connect</span>!
        </motion.h2>

        <motion.p
          className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Have a question, a project idea, or just want to say hello? Fill out the form below or leave a public comment! I'd love to hear from you.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <motion.div
            className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-3xl font-semibold mb-6 text-blue-300">Send a Message</h3>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">
                  <FaUser className="inline-block mr-2 text-purple-400" /> Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">
                  <FaEnvelope className="inline-block mr-2 text-purple-400" /> Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-300 text-sm font-bold mb-2">
                  <FaTag className="inline-block mr-2 text-purple-400" /> Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">
                  <FaPaperPlane className="inline-block mr-2 text-purple-400" /> Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-y"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:from-blue-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message <FaPaperPlane />
              </motion.button>
            </form>
          </motion.div>

          {/* Animated Comment Section */}
          <motion.div
            className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-3xl font-semibold mb-6 text-blue-300">Public Comments <FaCommentDots className="inline-block ml-2" /></h3>

            {/* Comment List */}
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
              <AnimatePresence initial={false}>
                {comments.map((comment) => (
                  <motion.div
                    key={comment.id}
                    className="bg-gray-700 p-4 rounded-lg mb-4 last:mb-0 border border-gray-600"
                    variants={commentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    layout
                  >
                    <p className="text-gray-200 mb-1">{comment.text}</p>
                    <p className="text-sm text-gray-400">- {comment.author} <span className="ml-2 text-xs italic">{comment.timestamp}</span></p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Add Comment Form */}
            <form onSubmit={handleCommentSubmit} className="mt-8 pt-6 border-t border-gray-700">
              <h4 className="text-xl font-semibold mb-4 text-blue-300">Leave a Comment</h4>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={commentAuthor}
                  onChange={(e) => setCommentAuthor(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Type your comment here..."
                  rows="3"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-y"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:from-purple-700 hover:to-pink-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Post Comment <FaCommentDots />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
