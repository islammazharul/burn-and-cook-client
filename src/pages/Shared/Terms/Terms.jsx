import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2 className='text-center text-primary mb-4'>Terms and Conditions</h2>
            <div className='border border-info-2 p-4 rounded bg-danger bg-opacity-25'>
                <h3 className='text-center text-decoration-underline text-secondary'>Welcome to burn &amp; cook!</h3>

                <p>These terms and conditions outline the rules and regulations for the use of burn &amp; cook's Website, located at https://burn-and-cook.web.app/category.

                    By accessing this website we assume you accept these terms and conditions. Do not continue to use burn &amp; cook if you do not agree to take all of the terms and conditions stated on this page.

                    The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of af. Any use of the above terminology or other words in the </p>

                <h4 className='text-center text-decoration-underline text-secondary'>Reservation of Rights :</h4>
                <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>

                <h4 className='text-center text-decoration-underline text-secondary'>Cookies:</h4>
                <p>
                    We employ the use of cookies. By accessing burn &amp; cook, you agreed to use cookies in agreement with the burn &amp; cook's Privacy Policy.

                    Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p><br />
                <h4 className='text-center text-decoration-underline text-secondary'>License:</h4>
                <p>
                    Unless otherwise stated, burn &amp; cook and/or its licensors own the intellectual property rights for all material on burn &amp; cook. All intellectual property rights are reserved. You may access this from burn &amp; cook for your own personal use subjected to restrictions set in these terms and conditions.</p><br />
                <h4 className='text-center text-decoration-underline text-secondary'>Disclaimer :</h4>
                <p>
                    To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:

                    limit or exclude our or your liability for death or personal injury;
                    limit or exclude our or your liability for fraud or fraudulent misrepresentation;
                    limit any of our or your liabilities in any way that is not permitted under applicable law; or
                    exclude any of our or your liabilities that may not be excluded under applicable law.
                    The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>
                <p>Go Back to <Link to="/register">Register</Link></p>
            </div>

        </Container>
    );
};

export default Terms;