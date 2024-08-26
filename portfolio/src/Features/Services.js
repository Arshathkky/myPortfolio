import React from 'react';
import { motion } from 'framer-motion';
import '../Style/Services.css';

const services = [
  { title: 'Web Development' },
  { title: 'Mobile App Development' },
  { title: 'UI/UX Design' },
  { title: 'SEO Optimization' },
];

const ServiceItem = ({ title, description }) => (
  <motion.div className="service-item">
    <div className="diamond">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </motion.div>
);

const Services = () => (
  <div id='services' className="services">
    <h2>Our Services</h2>
    <div className="services-container">
      {services.map((service, index) => (
        <ServiceItem key={index} title={service.title} description={service.description} />
      ))}
    </div>
  </div>
);

export default Services;
