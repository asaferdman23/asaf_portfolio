import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, hoverScale } from '../lib/motion';

const makeWebhookUrl = import.meta.env.VITE_MAKE_URL;
const hubspotPortalId = import.meta.env.VITE_HUBSPOT_PORTAL_ID;
const hubspotFormGuid = import.meta.env.VITE_HUBSPOT_FORM_GUID;
const hubspotSubmitUrl =
  hubspotPortalId && hubspotFormGuid
    ? `https://api.hsforms.com/submissions/v3/integration/submit/${hubspotPortalId}/${hubspotFormGuid}`
    : null;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const getBasePayload = () => ({
    name: formData.name,
    email: formData.email,
    message: formData.message,
    submittedAt: new Date().toISOString(),
    page: typeof window !== 'undefined'
      ? {
          url: window.location.href,
          title: document.title
        }
      : undefined,
  });

  const submitToMake = async (payload) => {
    if (!makeWebhookUrl) return;

    const response = await fetch(makeWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Make webhook returned an error');
    }
  };

  const submitToHubspot = async () => {
    if (!hubspotSubmitUrl) return;

    const response = await fetch(hubspotSubmitUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: [
          { name: 'firstname', value: formData.name },
          { name: 'email', value: formData.email },
          { name: 'message', value: formData.message },
        ],
        context: typeof window !== 'undefined'
          ? {
              pageUri: window.location.href,
              pageName: document.title,
            }
          : undefined,
      }),
    });

    if (!response.ok) {
      throw new Error('HubSpot submission failed');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const payload = getBasePayload();
    const submissionTasks = [];

    if (makeWebhookUrl) submissionTasks.push(submitToMake(payload));
    if (hubspotSubmitUrl) submissionTasks.push(submitToHubspot());

    if (!submissionTasks.length) {
      setStatus('error');
      setErrorMessage('לא הוגדר יעד CRM. עדכן משתני סביבה ונסה מחדש.');
      console.error('No CRM endpoints configured. Set VITE_MAKE_URL and/or VITE_HUBSPOT_* variables.');
      return;
    }

    try {
      const results = await Promise.allSettled(submissionTasks);
      const hasFailure = results.some((result) => result.status === 'rejected');

      if (hasFailure) {
        throw new Error('One or more submissions failed');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setErrorMessage('אירעה תקלה בשליחת הפרטים. נסה שוב או פנה אלינו בטלפון/וואטסאפ.');
      setStatus('error');
    }
  };

  return (
    <motion.form
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      onSubmit={handleSubmit}
      className="card p-8 max-w-2xl mx-auto"
    >
      {/* Honeypot field */}
      <input
        type="text"
        name="_honey"
        style={{ display: 'none' }}
        tabIndex="-1"
        autoComplete="off"
      />

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
            שם מלא *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            disabled={status === 'submitting'}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:bg-slate-100"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
            דוא"ל *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            disabled={status === 'submitting'}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:bg-slate-100"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
          איך נוכל לעזור? *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          disabled={status === 'submitting'}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:bg-slate-100 resize-vertical"
        />
      </div>

      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800">תודה! נחזור אליך עד 24 שעות עם כל הפרטים.</p>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800">{errorMessage || 'אירעה תקלה. אפשר לנסות שוב או לשלוח מייל ישירות.'}</p>
        </div>
      )}

      <motion.button
        {...hoverScale}
        type="submit"
        disabled={status === 'submitting'}
        className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <span className="flex items-center justify-center flex-row-reverse gap-3">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            שולחים...
          </span>
        ) : (
          'לשליחת ההודעה'
        )}
      </motion.button>
    </motion.form>
  );
}
