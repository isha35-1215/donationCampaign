import { Link } from 'react-router-dom';

const DonationCard = ({ donation }) => {

    // console.log(donation);
    return (
        <div>
            <Link to={`/donation/${donation.id}`} key={donation.id}>
                <div className="flex flex-row rounded-xl" style={{ backgroundColor: donation.Card_bg }}>
                    <div className="relative m-0 w-3/5 lg:w-2/5 h-56 lg:h-72 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                        <img
                            src={donation.img}
                            alt={donation.Category}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-2 md:p-6 lg:p-12">

                        <div className='w-fit'>                        
                            <p className="px-2 rounded normal-case text-lg font-medium border-gray" style={{ backgroundColor: donation.Category_bg, color: donation.btn_bg }}>{donation.Category}</p>
                        </div>
                        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {donation.title}
                        </h4>
                        <p className="mb-2 lg:mb-8 block font-sans text-xl font-semibold leading-relaxed text-gray-700 antialiased" style={{ color: donation.btn_bg }}>
                            ${donation.Price}
                        </p>
                        <button className="btn bg-[#FF444A] btn-primary border-none  mt-0 lg:mt-2" style={{ backgroundColor: donation.btn_bg }}>
                            View Details
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default DonationCard;