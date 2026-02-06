import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  // Replace 'your-form-id' with the ID you copied from Formspree
  const [state, handleSubmit] = useForm("your-form-id");

  if (state.succeeded) {
    return (
      <section id="contact" className="py-20 text-center">
        <h2 className="text-3xl font-bold">Thanks for reaching out!</h2>
        <p className="mt-4 text-gray-600">I'll get back to you as soon as possible.</p>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 max-w-2xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
          <input
            id="email"
            type="email" 
            name="email"
            required
            className="w-full p-2 border rounded-md dark:bg-gray-800"
            placeholder="your@email.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full p-2 border rounded-md dark:bg-gray-800"
            placeholder="How can I help you?"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <button 
          type="submit" 
          disabled={state.submitting}
          className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;