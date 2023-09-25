
const Donation = () => {

    const [donates, setDonates] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then((res) => res.json())
            .then((data) => setDonates(data));
    }, []);
    
};

export default Donation;