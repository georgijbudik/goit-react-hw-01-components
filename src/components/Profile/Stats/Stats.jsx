import { StatsList, Label, Quantity, Item } from './Stats.styled';
import PropTypes from 'prop-types';

const Stats = ({ followers, views, likes }) => {
  return (
    <StatsList>
      <Item>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </Item>
      <Item>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </Item>
      <Item>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </Item>
    </StatsList>
  );
};

Stats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Stats;
