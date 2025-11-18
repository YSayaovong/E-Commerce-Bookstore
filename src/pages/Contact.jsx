export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <h1 className="section__title">Contact Us</h1>
        <p className="muted" style={{ marginBottom: "20px" }}>
          Questions about your order, recommendations, or partnerships? We’re here.
        </p>

        <div
          style={{
            background: "white",
            padding: "24px",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)",
            maxWidth: "480px",
          }}
        >
          <p>
            <strong>Email:</strong> support@bookstack.com
          </p>
          <p>
            <strong>Phone:</strong> (555) 123-4567
          </p>
          <p>
            <strong>Hours:</strong> Mon–Fri, 9 AM – 5 PM
          </p>
        </div>
      </div>
    </section>
  );
}
