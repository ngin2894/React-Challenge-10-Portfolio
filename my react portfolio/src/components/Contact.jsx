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
      <p>Have questions or want to work together? Send me a message at nataliegindraux@gmail.com.</p>
      <form onSubmit={handleSubmit}>
        <p><input type="text" placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} /></p>
        <p><input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} /></p>
        <p><textarea placeholder="Message" onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea></p>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
