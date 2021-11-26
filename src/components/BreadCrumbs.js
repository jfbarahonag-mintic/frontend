import "./BreadCrumbs.css"

const BreadCrumbs = ({title}) => {
    return (
      <div className="bread-crumbs">
        <h1 className="bread-crumbs__text">
        Inicio / {title.toLowerCase()}
        </h1>
      </div>
    )
  }
  
  export default BreadCrumbs