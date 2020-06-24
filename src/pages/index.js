import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style2 special">
      <div className="inner">
        <header className="major">
          <h2>
            Cloud Migration, Hyper-Cloud Design, 
            <br />
            Digital Transformation, Cloud Security, TRA/ ST&E
          </h2>
          <p>
            ITTA inc. includes a Canadian staffed delivery team with experienced and certified engineers and support personnel ready to support all types of businesses. 
            <br />
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-credit-card major style">
              <span className="label">PCI</span>
            </span>
          </li>
          <li>
            <span className="icon   fa-heart major style">
              <span className="label">Heart</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style">
              <span className="label">Code</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style5">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Data Infrastructure
            <br />
            & Digital transformation
          </h2>
          <p>
          Digital transformation solutions for data storage virtualization, Migrations of different size customs. Our goal is to provide a Ready-to-use, fully validated and tested solution that helps virtualizing, modernizing and automating infrastructure
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Cloud, Multi-Cloud
            <br />
            Hyper-Converged Infrastructure
          </h2>
          <p>
          Developed the expertise and framework to deliver consultancy services for cloud adoption strategy, application transformation, and support. We provide full lifecycle of cloud migration services from the initial assessment to operation and maintenance of entire infrastructure. 
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Cyber Security 
            <br />
            & Treat, Risk Assessment
          </h2>
          <p>
            Protect and secure against malicious cyber threats with managed cyber security solutions featuring advanced industry solutions with 24/7/365 monitoring and remediation with IDS/IPS/EDR/EPP etc..   
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Consultancy Service</h2>
          <p>
             ITTA takes a data-centric approach, applies best practices and leverages proven methodologies to streamline your digital, IT and/or workforce transformation.
            <br />
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Managed Services</h3>
            <p>
               Run daily IT operations with our assistance to render vendor-certified services from Technicians, Project Managers, and Sales Reps to extend or create a dedicated IT team.
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>SaaS Solutions</h3>
            <p>
              With an affordable subscription, our Cloud Solutions let you host data and applications on our state-of-the-art servers, located in our enterprise-level data center. 
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>IT SOLUTION</h3>
            <p>
            ITTA works closely with our partners building server-based networks, transitioning to virtual servers, or improving your communications by taking advantage of our expertise in IT and business management. 
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Web/App Development</h3>
            <p>
            Deliver Professional website design and user-experience with strategic insights to generate greater brand engagement, higher conversions and measurable results. 
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>CyberSecurity</h3>
            <p>
            Provide security solutions delivers the scope, scale, and capabilities to keep you ahead of an ever-increasing number and complexity of threats.
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>GOVERNANCE, RISK & COMPLIANCE</h3>
            <p>
            Help clients tackle the broad issues of corporate governance, risk management, and effective corporate compliances. 
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Join Our Newsletter</h2>
          <p>
            Join for industry and event announcementsts
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Join Our Newsletter
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More About ITTA
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
