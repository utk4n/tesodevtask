import FooterImg from "../assets/footerImg.png";

const Footer = () => {
  return (
    <footer>
      <img src={FooterImg} alt="img" />
      <div>
        <p>
          İletişim <br />
          Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2
          Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul
          <span className="span_email">Email: bilgi@tesodev.com</span>
        </p>
      </div>
      <div className="footer_map">
        <iframe
          title="provider_map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2719779991953!2d28.89039019849549!3d41.01930526996761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb7abf29ba35%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0gRG9uYW7EsW0gQmlsacWfaW0gQml5b21lZGlrYWwgS29uZ3JlIFR1cml6bSBFxJ9pdGltIERhbsSxxZ9tYW5sxLFrIExpbWl0ZWQgxZ5pcmtldGk!5e0!3m2!1str!2str!4v1665246893644!5m2!1str!2str"
          width="467.49"
          height="222.49"
          style={{ border: 0 }}
          loading="lazy"
        />
      </div>
    </footer>
  );
};

export default Footer;
