function Contact() {
  return (
    <div className="contact">
      <h1>📞 İletişim</h1>
      <div className="contact-card">
        <p><strong>📍 Adres:</strong> İstanbul, Burger Sokak No:10</p>
        <p><strong>📱 Telefon:</strong> +90 555 123 45 67</p>
        <p><strong>📧 E-mail:</strong> info@burgerhouse.com</p>
      </div>
      <iframe
        className="map"
        title="BurgerHouse Konum"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.3769358610123!2d28.97835831541946!3d41.00823797930095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa2f3b31eb0d9%3A0x6dcd95b6b8b3d9!2sİstanbul!5e0!3m2!1str!2str!4v1673954105342!5m2!1str!2str"
        width="100%"
        height="250"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Contact;