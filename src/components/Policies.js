import React from "react";
import "./Policies.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";

const Policies = () => {
  return (
    <MDBAccordion flush initialActive="flush-collapse1" className="policy-info">
      <MDBAccordionItem
        collapseId="flush-collapse1"
        headerTitle="What Does The Booking Process Look Like?">
        <div className="inquire">
          <h5>Inquire</h5>
          <div className="inquire-info">
            <p>Fill out a form online and expect a response via email in 24 - 48 hours, not including weekends.</p>
          </div>
          <h5>Quote</h5>
          <div className="quote">
            <p>You will receive a quote and availability options. Let us know what works best with your schedule.</p>
          </div>
          <h5>Deposit</h5>
          <div className="deposit">
            <p>An invoice will be sent to pay your deposit within 24 hrs. Once paid review our customer agreement form going over our policies. We require a signature to avoid any cancellations.</p>
            <p>Once everything has been completed your are all set! You will receive a confirmation and details about your appointement.</p>
          </div>
        </div>
      </MDBAccordionItem>
      <MDBAccordionItem
        collapseId="flush-collapse2"
        headerTitle="Cancellations"
      >
        <ul>
          <li>We do require a 72 hour cancellation notice.</li>
          <li>
            Less than 72hrs will result in a charge of 50% of the service
            booked.
          </li>
          <li>
            Less than 24 hours cancellation/reschedule will be billed 100% of
            the service, and will have to pay a deposit for a new appointment.
          </li>
          <li>
            No Call No Show will be billed 100% of the service and WILL NO
            LONGER be able to reschedule with any of our stylists.
          </li>
        </ul>
      </MDBAccordionItem>
      <MDBAccordionItem
        collapseId="flush-collapse3"
        headerTitle="Covid-19 Policy"
      >
        In the case you suspect you have been exposed to Covid-19, please email
        or reach out to your stylist and we can reschedule your appointment
        without any issues once you present a negative covid test. Or if you
        tested positive, quarantine, and have been cleared by negative test.
        When a guest doesn't feel well the day of the service and chooses to
        cancel, our same day cancellation policy still applies.
      </MDBAccordionItem>
      <MDBAccordionItem collapseId="flush-collapse4" headerTitle="Late Policy">
        <ul>
       <li>We have a 15 minute grace period. Arriving after 15 minutes you will be
        asked to reschedule for a different date or the stylist will accommodate
        you for a fee of $50 if fits in their schedule to ensure the next guest
        will receive the best experience and the stylist can stay on time
        </li>
        <li>
          If you are 30 minutes late your appointement will be cancelled for the day and you will lose your deposit. A new deposit is needed to reschedule your appointment.
        </li>
        </ul>
      </MDBAccordionItem>
      <MDBAccordionItem collapseId="flush-collapse5" headerTitle="Extra Guest">
        Due to Covid 19 we do not allow extra guest nor children during your
        service. If you bring any extra guest we will ask for you to reschedule
        your appointment which result as a same day cancellation fee.
      </MDBAccordionItem>
    </MDBAccordion>
  );
};

export default Policies;
