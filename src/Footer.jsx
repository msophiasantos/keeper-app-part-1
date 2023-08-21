import React from "react";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright c {date} </p>
    </footer>
  );
}

export default Footer;
