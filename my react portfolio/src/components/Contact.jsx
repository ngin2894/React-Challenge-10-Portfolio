import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('All fields are required!');
      return;
    }
    alert('Message sent!');
  };

  return (
    <section>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <textarea placeholder="Message" onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
