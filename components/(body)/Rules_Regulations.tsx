import React from "react";

const Rules_Regulations = () => {
  return (
    <div className=" bg-black/50 text-white w-full space-y-5 py-6 px-5  md:px-28  lg:flex lg:gap-x-10  lg:justify-center ">
      <div className="lg:w-1/2 space-y-2 text-justify ">
        <p>
          {" "}
          <b> Check-In Time:</b> After 02:00 PM{" "}
        </p>
        <p>
          <b>Check-Out Time : </b>
          Until 10:00 AM
        </p>
        <p>
          {" "}
          <b> Reception hours : </b> 08:00 AM - 09:00 PM{" "}
        </p>
        <p>
          <b> after hours : </b> For more information please contact us At:
          0249914712
        </p>
      </div>

      <div className="lg:w-1/2 space-y-2 text-justify ">
        <p>
          {" "}
          <b>Car parking : </b> Free onsite parking is available.{" "}
        </p>
        <p className="">
          <b> Getting there :</b> Vine Valley Inn is a 3-minute walk to Hunter
          TAFE. Cessnock Showground is a 5-minute drive away, and Cypress Lakes
          Golf and Country Club is a 15-minute drive.
        </p>
      </div>
    </div>
  );
};

export default Rules_Regulations;
