// Write your code here.

import './index.css'

const BannerCardItem = props => {
  const {bannerCards} = props
  const {headerText, description, className} = bannerCards

  return (
    <li className={`card-container ${className}`}>
      <h1 className="heading"> {headerText} </h1>
      <p className="para"> {description} </p>
      <button className="show-more-btn" type="button">
        Show More
      </button>
    </li>
  )
}
export default BannerCardItem
