import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const HostVans = () => {
  
  const [hostVans, setHostVans] = useState([]);

  useEffect(() => {
    fetch(`/api/host/vans/`)
      .then((res) => res.json())
      .then((data) => setHostVans(data.vans));
  }, [])

  const hostVanElements = hostVans.map((van) => (
        <Link
            to={`/host/vans/${van.id}`}
            key={van.id}
            className="host-van-card"
        >
          <div className="host-van-single" key={van.id}>
            <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
            <div className="host-van-info">
              <h3>{van.name}</h3>
              <p>{van.price}/day</p>
            </div>
            </div>        
        </Link>
  ));

  return (
    <div>HostVans</div>
  )
}

export default HostVans