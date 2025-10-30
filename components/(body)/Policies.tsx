import React from "react";
import HeadingComponent from "../HeadingComponent";

const Policies = () => {
  const policies = [
    {
      pollicyId: 1,
      pollicyTitle: "Check-In & Check-Out",
      pollicyList: [
        "Check-In: From 2:00 PM",
        "Check-Out: By 10:00 AM",
        "Early Check-In: Subject to availability; additional charges may apply.",
        " Late Check-Out: Available upon request; extra fees may apply.",
      ],
    },
    {
      pollicyId: 2,
      pollicyTitle: "Cancellation and Refund Policy",
      pollicyList: [
        "Free cancellation up to 48 hours before arrival.",
        "Late cancellations or no-shows will be charged the first night’s stay.",
        "Refunds are processed within 7–10 business days.",
        "Special policies may apply during peak seasons or group bookings.",
      ],
    },
    {
      pollicyId: 3,
      pollicyTitle: "Payment Policy",
      pollicyList: [
        "We accept cash, Visa, Mastercard, and EFTPOS.",
        "Full payment is required upon arrival.",
        "A security deposit may be requested at check-in for incidentals.",
      ],
    },
    {
      pollicyId: 4,
      pollicyTitle: "Booking Policy",
      pollicyList: [
        "Bookings are confirmed once payment is received.",
        "Minimum stay requirements may apply during peak periods.",
        "Changes to bookings (dates, room type, number of guests) must be requested in advance.",
      ],
    },
    {
      pollicyId: 5,
      pollicyTitle: "Pet Policy",
      pollicyList: [
        "Pets are not permitted at Aussie Rest Motel. (Optional: adjust if pets are allowed.)",
      ],
    },
    {
      pollicyId: 6,
      pollicyTitle: "Smoking Policy",
      pollicyList: [
        "Aussie Rest Motel is a non-smoking property.",
        "Smoking is only allowed in designated outdoor areas.",
        "A cleaning fee may apply for violations.",
      ],
    },
    {
      pollicyId: 7,
      pollicyTitle: "House Rules",
      pollicyList: [
        "Quiet hours: 10:00 PM – 7:00 AM.",
        "Maximum room occupancy applies.",
        "Outside visitors must be approved by reception.",
        "Guests are responsible for their own safety and the security of their belongings.",
      ],
    },
    {
      pollicyId: 8,
      pollicyTitle: "Privacy Policy",
      pollicyList: [
        "Guest information is collected to manage bookings and provide services.",
        "Personal data is stored securely and never shared without consent, except as required by law.",
        "We comply with the Australian Privacy Principles (APPs).",
      ],
    },
    {
      pollicyId: 9,
      pollicyTitle: "Accessibility",
      pollicyList: [
        "Our motel provides accessible rooms and facilities.",
        "Please notify us in advance if you require special assistance.",
      ],
    },
    {
      pollicyId: 10,
      pollicyTitle: "Children Policy",
      pollicyList: [
        "Children are welcome.",
        "Extra beds or cots are available upon request and may incur an additional charge.",
      ],
    },
    {
      pollicyId: 11,
      pollicyTitle: "Liability",
      pollicyList: [
        "Aussie Rest Motel is not responsible for lost, stolen, or damaged personal items.",
        "Guests must follow all safety guidelines during their stay.",
      ],
    },
    {
      pollicyId: 12,
      pollicyTitle: "Special Requests",
      pollicyList: [
        "Guests may request specific rooms, amenities, or services in advance.",
        "All requests are subject to availability; extra charges may apply.",
      ],
    },
    {
      pollicyId: 13,
      pollicyTitle: "Lost & Found",
      pollicyList: [
        "Lost items are stored for 30 days.",
        "Guests may contact reception to arrange collection or return.",
        "Unclaimed items may be disposed of or donated after the storage period.",
      ],
    },
  ];

  return (
    <div className=" bg-black/50 text-white w-full py-6 flex flex-col justify-center items-center ">
      <div className="bg-white  w-full ">
        <HeadingComponent title=" Our Policies" />
      </div>
      <div className="lg:w-[1200px] md:px-5 md:flex md:justify-center  ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-4  text-justify-200 px-5 mt-5">
          {policies.length > 0 &&
            policies.map(({ pollicyId, pollicyTitle, pollicyList }) => (
              <div key={pollicyId} className="px-3">
                <h3 className="font-bold underline underline-offset-5  decoration-1 py-1 ">
                  {" "}
                  {pollicyTitle}{" "}
                </h3>
                {pollicyList.map((policy, index) => (
                  <ul key={index} className="list-disc">
                    {" "}
                    <li className="text-sm"> {policy} </li>{" "}
                  </ul>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Policies;
