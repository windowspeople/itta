import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>About ITTA </h2>
        <p>INNOVITE TECHNOLOGY ASSOCIATES</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>History</h3>
          <p>
          As IBM Partner, ITTA Founded in 2007, ITTA is an IT services, consulting firm that partners with local small and mid-size businesses in their transformation journeys with a consulting-led, Cognitive powered, integrated portfolio of IT, Security & Technology Services.
          </p>

          <p>
          Our main focus is Customer, Not Technology. We always start by understanding your needs and custom-build a technical solution to specifically meet those needs. 
          </p>

          <hr />

          <h4>Our Services </h4>
          <p>
          ITTA enables you to work smarter and help your project run more efficiently. We ensure they are equipped with the expertise and competencies necessary to provide the ideal solution for your projects and challenges.  ITTA takes a data-centric approach, applies best practices and leverages proven methodologies to streamline your digital, IT and/or workforce transformation.
          </p>
          <p>
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
