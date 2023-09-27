import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";

const DonationDetails = () => {
    const [detail, setDetail] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => {
                const findDetail = data.find((item) => item.id === parseInt(id));
                if (findDetail) {
                    setDetail(findDetail);
                }
            });
    }, [id]);

    const handleDonateClick = () => {

        const addedDonations =[];
        const donationItems = JSON.parse(localStorage.getItem('DonationPage'));


        if(!donationItems){
            addedDonations.push(detail)
            localStorage.setItem('DonationPage', JSON.stringify(addedDonations));
            swal("Good job!", "Donated Successfully!", "success");
        }
        else{
            
            addedDonations.push(...donationItems, detail)
                localStorage.setItem('DonationPage', JSON.stringify(addedDonations));
                swal("Good job!", "Donated Successfully!", "success");

            }

            
        
    };

     

    const containerStyle = {
        width: "100%",
        height: "0",
        paddingBottom: "40%",
        position: "relative",
    };

    return (
        <div>
            {detail && (
                <div className="w-10/12">
                    <div className="w-full rounded-md bg-cover bg-center relative mx-8 mt-20 lg:mx-24" style={containerStyle}>
                        <img
                            src={detail.img}
                            alt={detail.Category}
                            className="absolute rounded-md top-0 left-0 w-full h-full object-cover"
                        />
                        <div className="absolute rounded bottom-0 left-0 w-full h-16 lg:h-20 bg-black bg-opacity-60">
                            <div className="text-left text-white">
                                <button onClick={handleDonateClick} className="btn normal-case btn-primary border-none ml-6 mt-2 md:mt-2 lg:mt-4 py-0" style={{ backgroundColor: detail.btn_bg, color: detail.Category_bg }}>
                                    Donate ${detail.Price}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="text-neutral-content">
                        <h1 className="py-4 mt-4 mx-8 lg:mx-24 text-3xl font-bold text-black">
                            {detail.Category}
                        </h1>
                        <p className="text-base font-normal text-neutral-600 mx-8 mb-10 lg:mx-24">
                            {detail.details}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DonationDetails;
