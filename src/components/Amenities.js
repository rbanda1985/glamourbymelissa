import React from "react";
import "./Amenities.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";

const Amenities = () => {
  return (
    <MDBAccordion flush initialActive="flush-collapse1">
      <MDBAccordionItem
        collapseId="flush-collapse1"
        headerTitle="What's the price of the chair rental? What does it include?"
        style={{ fontWeight: "600" }}
      >
        <h4>What it includes</h4>
        <ul>
          <li>Very large lounge area for you to relax and to mix color.</li>
          <li>Continuing education classes performed by the salon owner</li>
          <li>
            After one year of renewal, you will receive one paid class of your
            choice (Valued up to $500) or 1 week of vacation rent free!
          </li>
          <li>
            Drinks and snacks provided for you clients. We want to make sure
            that when the customer comes here that they feel like this is their
            second home.
          </li>
          <li>
            Receptionist provided for your clients to make sure that they are
            always attended to from start to finish.
          </li>
          <li>
            Your very own storage locker so you can store all of your
            beautifying equipment and color.
          </li>
          <li>
            Salon cleaning and maintenance done for you. You have enough to
            worry about with your customers and product, let us take care of the
            small stuff.
          </li>
          <li>
            Towels, Back Bar, and retail provided! Even more stress taken off of
            your shoulders!
          </li>
          <li>All utilities and salon phone service included.</li>
          <li>You also get code door access Tuesday - Saturday</li>
          <li>
            Best part about all of this, is you still get commission on retail
            sales!
          </li>
        </ul>
        <p>The price of the chair rental is $300 a week.</p>
      </MDBAccordionItem>
      <MDBAccordionItem
        collapseId="flush-collapse2"
        headerTitle="Can I become an educator?"
      >
        You most definitely can. If you feel that part of your profession is to
        spread knoweledge of certain techniques or methods that you use, then
        lets get together and come up with a game plan to get you teaching.
      </MDBAccordionItem>
      <MDBAccordionItem
        collapseId="flush-collapse3"
        headerTitle="I really want to work here. What's next?"
      >
        If you feel that this is the place that you want to call home, then
        please email <span className="email">glamourbymelissa1@gmail.com</span>.
        Please send me your name, phone number, and your instagram handle. I
        will respond as soon as I can.
      </MDBAccordionItem>
    </MDBAccordion>
  );
};

export default Amenities;
