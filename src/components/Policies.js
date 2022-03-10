import React from "react";
import "./Policies.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";

const Policies = () => {
  return (
    <MDBAccordion flush initialActive="flush-collapse1" className="policy-info">
      <MDBAccordionItem
        collapseId="flush-collapse1"
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
        collapseId="flush-collapse2"
        headerTitle="Covid-19 Policy"
      >
        In the case you suspect you have been exposed to Covid-19, please email
        or reach out to your stylist and we can reschedule your appointment
        without any issues once you present a negative covid test. Or if you
        tested positive, quarantine, and have been cleared by negative test.
        When a guest doesn't feel well the day of the service and chooses to
        cancel, our same day cancellation policy still applies.
      </MDBAccordionItem>
      <MDBAccordionItem collapseId="flush-collapse3" headerTitle="Late Policy">
        We have a 15 minute grace period. Arriving after 15 minutes you will be
        asked to reschedule for a different date or the stylist will accommodate
        you for a fee of $50 if fits in their schedule to ensure the next guest
        will receive the best experience and the stylist can stay on time
      </MDBAccordionItem>
      <MDBAccordionItem collapseId="flush-collapse4" headerTitle="Extra Guest">
        Due to Covid 19 we do not allow extra guest nor children during your
        service. If you bring any extra guest we will ask for you to reschedule
        your appointment which result as a same day cancellation fee.
      </MDBAccordionItem>
    </MDBAccordion>
  );
};

export default Policies;
