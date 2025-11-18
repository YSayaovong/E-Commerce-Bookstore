export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section__title">Contact Us</h2>
        <p className="muted small" style={{ marginBottom: "20px" }}>
          Have questions? We're here to help anytime.
        </p>

        <div style={{
          background: "white",
          padding: "24px",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)",
          maxWidth: "500px"
        }}>
          <p><strong>Email:</strong> support@bookstack.com</p>
          <p><strong>Phone:</strong> (555) 123-4567</p>
          <p><strong>Hours:</strong> Mon–Fri, 9am–5pm</p>
        </div>
      </div>
    </section>
  );
}
