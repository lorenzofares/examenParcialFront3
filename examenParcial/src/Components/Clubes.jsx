const Clubes = ({ club, setIsSelected }) => {
    return (
    <div>
        <img src={club.img} alt="" />
        <h3>{club.club}</h3>
        <h2>{club.socios}</h2>
        <button
        onClick={() =>
            setIsSelected({ status: true, hincha: club.club })
        }
        >
        Quiero hacerme socio
        </button>
    </div>
    );
};

export default Clubes;