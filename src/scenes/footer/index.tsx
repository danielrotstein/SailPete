const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div
        className="justify-content mx-auto w-5/6 gap-16 
            md:flex"
      >
        <div className="mt-16 basis-1/2 md:mt-0">
          <h1 className="cursor-default font-pacifico text-4xl">SailPete</h1>
          <p className="my-5">
            This website is managed by CodeZilla.com. Please report any issues
            to CodeZilla.
          </p>
          <p> © SailPete All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <a
            href="https://www.discoverboating.com/resources/boating-knots"
            target="_blank"
          >
            <p className="my-5">Basic Sail Knots</p>
          </a>
          <a
            href="https://www.discoverboating.com/resources/nautical-flag-meanings"
            target="_blank"
          >
            <p className="my-5">Nautical Flags and Meanings</p>
          </a>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Central Ave, St. Petersburg, FL</p>
          <p>(123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
