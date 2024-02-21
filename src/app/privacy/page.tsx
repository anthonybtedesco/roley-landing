import React from "react";

export default function Page() {
  return (
    <div className="w-full primary-color">
      <div className="mx-auto p-8 rounded shadow text-white primary-color max-w-[1200px]">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p>
          This Privacy Policy describes how your personal information is
          collected, used, and shared when you visit or make a purchase from
          roley.me (the “Site”) and act.roley.me (the "App").
        </p>
        <h2 className="text-xl font-bold mt-8 mb-4">
          Personal Information We Collect
        </h2>
        <p>
          When you visit the Site, we automatically collect certain information
          about your device, including information about your web browser, IP
          address, time zone, and some of the cookies that are installed on your
          device. Additionally, as you browse the Site, we collect information
          about the individual web pages that you view, what websites or search
          terms referred you to the Site, and information about how you interact
          with the Site. We refer to this automatically-collected information as
          “Device Information.”
        </p>
        <br />
        <p>We collect Device Information using the following technologies:</p>
        <br />
        <li>
          “Cookies” are data files that are placed on your device or computer
          and often include an anonymous unique identifier. For more information
          about cookies, and how to disable cookies, visit
          http://www.allaboutcookies.org.
        </li>
        <li>
          “Log files” track actions occurring on the Site, and collect data
          including your IP address, browser type, Internet service provider,
          referring/exit pages, and date/time stamps. Additionally when you make
          a purchase or attempt to make a purchase through the Site, we collect
          certain information from you, including your name, billing address,
          payment information (including credit card numbers), email address,
          and phone number. We refer to this information as “Order Information.”
        </li>
        <br />
        <p>
          When we talk about “Personal Information” in this Privacy Policy, we
          are talking both about Device Information and Order Information.
        </p>
        <h2 className="text-xl font-bold mt-8 mb-4">
          How do we use your personal information?
        </h2>
        <p>
          We use the Order Information that we collect generally to fulfill any
          orders placed through the Site (including processing your payment
          information, and providing you with invoices and/or order
          confirmations). Additionally, we use this Order Information to:
        </p>
        <br />
        <p>Communicate with you;</p>
        <p>
          Screen our orders for potential risk or fraud; and When in line with
          the preferences you have shared with us, provide you with information
          or advertising relating to our products or services.
        </p>
        <br />
        <p>
          We use the Device Information that we collect to help us screen for
          potential risk and fraud (in particular, your IP address), and more
          generally to improve and optimize our Site (for example, by generating
          analytics about how our customers browse and interact with the Site,
          and to assess the success of our marketing and advertising campaigns).
        </p>{" "}
        <h2 className="text-xl font-bold mt-8 mb-4">
          Sharing Your Personal Information
        </h2>
        <p>
          We use Google Analytics to help us understand how our customers use
          the Site. You can read more about how Google uses your Personal
          Information here: https://www.google.com/intl/en/policies/privacy/.
          You can opt-out of Google Analytics here:
          https://tools.google.com/dlpage/gaoptout. We do not use Google Signals
          or granular location and device data collection, and do not allow any
          ads cookies or ads personalization.
        </p>
        <br />
        <p>
          Finally, we may also share your Personal Information to comply with
          applicable laws and regulations, to respond to a subpoena, search
          warrant or other lawful request for information we receive, or to
          otherwise protect our rights.
        </p>
        <h2 className="text-xl font-bold mt-8 mb-4">Web App</h2>
        <p>
          We use some third party services on our App that we do not use on the
          Site. The App is the interface you use to manage your Roley account.
          Any URL that starts with "act.roley.me" is part of the App.
        </p>
        <h3 className="text-lg font-bold mt-8 mb-4">Stripe</h3>
        <p>
          We use Stripe in our App to handle payment processing and billing.
          Stripe collects identifying information about the devices that connect
          to its services, including via cookies. Stripe uses this information
          to operate and improve the services it provides to us, including for
          fraud detection and authentication. You can learn more about Stripe
          and read its privacy policy at https://stripe.com/privacy
        </p>
        <h2 className="text-xl font-bold mt-8 mb-4">Do Not Track</h2>
        <p>
          Please note that we do not alter our Site's data collection and use
          practices when we see a Do Not Track signal from your browser.
        </p>{" "}
        <h2 className="text-xl font-bold mt-8 mb-4">Your Rights</h2>
        <p>
          If you are a US resident, you have the right to access personal
          information we hold about you and to ask that your personal
          information be corrected, updated, or deleted. If you would like to
          exercise this right, please contact us through the contact information
          below.
        </p>
        <br />
        <p>
          Additionally, if you are a US resident we note that we are processing
          your information in order to fulfill contracts we might have with you
          (for example if you make an order through the Site), or otherwise to
          pursue our legitimate business interests listed above.
        </p>
        <h2 className="text-xl font-bold mt-8 mb-4">Data Retention</h2>
        <p>
          When you place an order through the Site, we will maintain your Order
          Information for our records unless and until you ask us to delete this
          information.
        </p>
        <h2 className="text-xl font-bold mt-8 mb-4">Changes</h2>
        <p>
          We may update this privacy policy from time to time in order to
          reflect, for example, changes to our practices or for other
          operational, legal, or regulatory reasons.
        </p>
        <h2 className="text-xl font-bold mt-8 mb-4">Contact Us</h2>
        <p>
          For more information about our privacy practices, if you have
          questions, or if you would like to make a complaint, please contact us
          by e-mail at{" "}
          <a href="mailto:team@roley.me" className="text-blue-500">
            team@roley.me
          </a>
          .
        </p>
      </div>
    </div>
  );
}
