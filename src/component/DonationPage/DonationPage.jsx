
import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";


const DonationPage = () => {

  const [donations, setDonations] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {

    const donationItems = JSON.parse(localStorage.getItem("DonationPage"));

    if (donationItems) {
      setDonations(donationItems)
    }
    else {
      setNotFound("No Data Found");
    }

  }, []);

  console.log(donations);

  return (
    <div className="my-16">
      {notFound ? <p className="h-[80vh] flex justify-center items-center">{notFound}</p> : (
        <div>
          <div className="mx-10 md:mx-12 lg:mx-16 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
            {
              isShow ? donations.map((donation) => (
                <DonationCard key={donation.id} donation={donation}></DonationCard>
              ))
              : donations.slice(0,4).map((donation) => (
                <DonationCard key={donation.id} donation={donation}></DonationCard>
              ))
            }
          </div>

          {donations.length>4 && <button onClick={() => setIsShow(!isShow)} className="px-8 py-2 my-6 shadow-lg rounded-xl text-xl font-medium bg-gray-400 block mx-auto">
            {isShow?"See Less":"See More"}
          </button>}

        </div>
      )}
    </div>
  );
};

export default DonationPage;

