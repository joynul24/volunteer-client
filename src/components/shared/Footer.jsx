const Footer = () => {
  return (
    <footer className="footer mt-10 md:mt-20 sm:footer-horizontal bg-base-200 text-base-content p-10">
      <nav>
        <h6 className="font-m footer-title">Services</h6>
        <a className="font-l link link-hover">Community Outreach</a>
        <a className="font-l link link-hover">Disaster Relief</a>
        <a className="font-l link link-hover">Education & Traning</a>
        <a className="font-l link link-hover">Health & Wellness</a>
      </nav>
      <nav>
        <h6 className="font-m footer-title">Company</h6>
        <a className="font-l link link-hover">About us</a>
        <a className="font-l link link-hover">Contact</a>
        <a className="font-l link link-hover">Team & Leadership</a>
        <a className="font-l link link-hover">Our Mission & Vision</a>
      </nav>
      <nav>
        <h6 className="font-m footer-title">Legal</h6>
        <a className="font-l link link-hover">Terms of use</a>
        <a className="font-l link link-hover">Privacy policy</a>
        <a className="font-l link link-hover">Cookie policy</a>
      </nav>
      <form>
        <h6 className="font-m footer-title">Newsletter</h6>
        <fieldset className="font-l w-80">
          <label>Enter your email address</label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button className="btn bg-[#F68926] text-white join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
