import { Link, Outlet } from "react-router-dom";

const Hostlayout = () => {
  return (
             <div>
                Hostlayout
                <Link to="/host">Dashboard</Link>
                <Link to="/host/income">Income</Link>
                <Link to="/host/reviews">Reviews</Link>
                <Outlet
             </div>
  )
}

export default Hostlayout