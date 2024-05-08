import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      Developed by:{" "}
      <span
        className="link"
        onClick={() => window.open("https://amrabdelrhman.com", "_blank")}
      >
        Amr Abdelrhman
      </span>
    </div>
  );
};

export default Footer;
