import { useOutletContext } from "react-router-dom"

const HostVanPricing = () => {
  const { currentVan } = useOutletContext()
  return (
            <section>
                <h3 className="host-van-price">${currentVan.price}<span>/day</span></h3>
            </section>
  )
}

export default HostVanPricing