import PropTypes from "prop-types"
import s from "./Statistics.module.css"

export default function Statistics({ title, stats }) {
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
} 
  const randomColor = () => {
    return `rgb(${randomIntegerFromInterval(0, 255)}, ${randomIntegerFromInterval(0, 255)}, ${randomIntegerFromInterval(0,255)})`
  }
  
  return (<section className={s.statistics}>
     {title && (<h2 className={s.title}>{title}</h2>)}

    <ul className={s.statlist}>
      {
        stats.map(stat => (
          <li className= {s.item} key={stat.id} style={{backgroundColor:randomColor()}}>
          <span className="label">{stat.label}</span>
          <span className="percentage">{stat.percentage}%</span>
    </li>
        ))
      }

  </ul>
</section>
    )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};



