import { useState } from 'react';
import styles from '../styles/Contact.module.css';

const INITIAL = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [fields, setFields]     = useState(INITIAL);
  const [errors, setErrors]     = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e = {};
    if (!fields.name.trim())    e.name    = 'Name is required.';
    if (!fields.email.trim())   e.email   = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      e.email = 'Please enter a valid email address.';
    if (!fields.subject.trim()) e.subject = 'Subject is required.';
    if (!fields.message.trim()) e.message = 'Message is required.';
    else if (fields.message.trim().length < 20)
      e.message = 'Message must be at least 20 characters.';
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  }

  function handleReset() {
    setFields(INITIAL);
    setErrors({});
    setSubmitted(false);
  }

  return (
    <main className={styles.main}>
      <div className={styles.layout}>
        {/* ── Sidebar info ─────────────────────────────── */}
        <aside className={styles.sidebar}>
          <p className={styles.eyebrow}>Reach Out</p>
          <h1 className={styles.heading}>Let's<br /><em>Talk Art</em></h1>
          <p className={styles.sideText}>
            Have a question about a specific artwork? Want to suggest a feature,
            report an issue, or simply share what piece moved you most? We'd love
            to hear from you.
          </p>

          <div className={styles.contactItems}>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Email</span>
              <span className={styles.contactValue}>hello@artex.art</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Location</span>
              <span className={styles.contactValue}>Chicago, IL</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Response</span>
              <span className={styles.contactValue}>Within 48 hours</span>
            </div>
          </div>
        </aside>

        {/* ── Form ─────────────────────────────────────── */}
        <div className={styles.formWrapper}>
          {submitted ? (
            <div className={styles.successBox}>
              <p className={styles.successIcon}>✓</p>
              <h2 className={styles.successTitle}>Message Sent</h2>
              <p className={styles.successText}>
                Thanks, <strong>{fields.name}</strong>. We'll be in touch at{' '}
                <strong>{fields.email}</strong> shortly.
              </p>
              <button onClick={handleReset} className={styles.resetBtn}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form
              className={styles.form}
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
            >
              <div className={styles.row}>
                {/* Name */}
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="name">
                    Full Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    value={fields.name}
                    onChange={handleChange}
                    aria-required="true"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    placeholder="Jane Doe"
                  />
                  {errors.name && (
                    <p id="name-error" className={styles.error} role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="email">
                    Email Address <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    value={fields.email}
                    onChange={handleChange}
                    aria-required="true"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    placeholder="jane@example.com"
                  />
                  {errors.email && (
                    <p id="email-error" className={styles.error} role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className={styles.field}>
                <label className={styles.label} htmlFor="subject">
                  Subject <span aria-hidden="true">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className={`${styles.input} ${errors.subject ? styles.inputError : ''}`}
                  value={fields.subject}
                  onChange={handleChange}
                  aria-required="true"
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                  placeholder="I have a question about…"
                />
                {errors.subject && (
                  <p id="subject-error" className={styles.error} role="alert">
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className={styles.field}>
                <label className={styles.label} htmlFor="message">
                  Message <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                  value={fields.message}
                  onChange={handleChange}
                  aria-required="true"
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  placeholder="Tell us what's on your mind…"
                />
                {errors.message && (
                  <p id="message-error" className={styles.error} role="alert">
                    {errors.message}
                  </p>
                )}
                <p className={styles.charCount}>
                  {fields.message.length} / 20 min characters
                </p>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
