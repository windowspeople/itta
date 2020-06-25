import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>  Solution and Services </h2>
        <p>Cloud, Hybrid-cloud, On-Prem Services, Security, VDI</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>Cloud Solution(SaaS)</h3>
          <p>
          With an affordable subscription, our Cloud Solutions let you host data and applications on our state-of-the-art servers, located in our enterprise-level data center.
          Our main focus is Customer, Not Technology. We always start by understanding your needs and custom-build a technical solution to specifically meet those needs. 
          </p>
          <hr />
          <h4>Hybrid-Cloud </h4>
          <p>
          Hybrid cloud made up of on-premises infrastructure, private cloud services, and a public cloud—such as AWS or Azure with orchestration among the various platforms. Using a combination of public clouds, on-premises computing, and private clouds in your data center means that you have a hybrid cloud infrastructure.
          </p>
          <p>
          </p>
          <hr />
          <h4>On-Prem Services </h4>
          <p>
          ITTA provides 24x7 support to our clients for computing, storage, and services environment made up of on-premises infrastructure. We also provide migration projects including DCM, DCR projects.   
          </p>
          <p>
          </p>
          <hr />
          <h4>Cyber Security </h4>
          <p>
          Protect and secure against malicious cyber threats with managed cyber security solutions featuring advanced industry solutions with 24/7/365 monitoring and remediation with IDS/IPS/EDR/EPP etc.
          </p>
          <p>
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
