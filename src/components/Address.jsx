import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Location</span>San Francisco/Bay Area, CA,
        USA.
        <iframe 
            title="map of San Francisco/Bay Area, CA, USA"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1201172.0300612194!2d-122.76154537000933!3d37.610098391508096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700173573004!5m2!1sen!2sus" 
            width="320" 
            height="200" 
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">email</span>{" "}
        <a href="mailto:k.epps23@gmail.com">k.epps23@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
