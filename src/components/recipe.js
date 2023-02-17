import PropTypes from 'prop-types';
import { BsFillClockFill } from 'react-icons/bs';
import { AiOutlinePieChart, AiOutlineLineChart } from 'react-icons/ai';

export const Recipe = ({ item: { name, image, time, servings, calories } }) => {
  return (
    <div>
      <img src={image} alt={name} width="240" />
      <h2> {name}</h2>

      <div>
        <div>
          <BsFillClockFill />
          {time} min
        </div>
        <div>
          <AiOutlinePieChart />
          {servings} servings
        </div>
        <div>
          <AiOutlineLineChart />
          {calories} calories
        </div>
      </div>
      <div>
        <h3>Difficulty</h3>
        <div>
          <span>Easy</span>
          <span>Medium</span>
          <span>Hard</span>
        </div>
      </div>
    </div>
  );
};

Recipe.Recipe = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.number.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  }).isRequired,
};
