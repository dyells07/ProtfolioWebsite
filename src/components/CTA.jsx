import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Have a project in mind? <br className='sm:block hidden' />
        You can Contact me !!
      </p>
      <Link to='/ThreeJSProtfolioWebsite/contact' className='btn'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;
