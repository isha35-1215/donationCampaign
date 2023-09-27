import { NavLink } from 'react-router-dom';

const Header = () => {

    const links = <>
        <li><NavLink to="/" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ?
                                    "text-[#FF444A] font-bold underline" : ""
                            }>Home</NavLink></li>
        <li><NavLink to="/donations" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ?
                                    "text-[#FF444A] font-bold underline" : ""
                            }>Donation</NavLink></li>
        <li><NavLink to="/statistics" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ?
                                    "text-[#FF444A] font-bold underline" : ""
                            }>Statistics</NavLink></li>
    </>

    return (

        
            <div className="navbar bg-base-100 px-24 my-4">
                <div className="flex-1">
                    <img src="https://i.ibb.co/rH8kxRw/Logo.png" alt="" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
            </div>


        
    );
};

export default Header;