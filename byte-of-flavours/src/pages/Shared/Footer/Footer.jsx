

const Footer = () => {
    return (
        <div className="mt-4">
            <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
            <p className=" text-xl font-bold">
      Byte of Flavours
      <br />
      Bytes of Joy Bursts of Flavour
    </p>


  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Byte of Flavours</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;