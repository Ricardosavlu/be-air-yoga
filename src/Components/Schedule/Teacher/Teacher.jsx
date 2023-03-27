import './Teacher.css';

const Teacher = ({ imageSrc, name, description, styles, days, hours }) => {
  return (
    <div className="teacher-container">
      <img src={imageSrc} alt="" />
      <span>{name}</span>
      <span>{description}</span>
      <span>{formatGroup(styles)}</span>
      <span>{formatGroup(days)}</span>
      <span>{formatGroup(hours)}</span>
    </div>
  );
};

const formatGroup = (array) => {
  if (array.length === 1) return array[0];
  const commaSeparated = array.join(', ');
  const lastCommaOccurrenceIdx = commaSeparated.split('').lastIndexOf(',');
  const withAmpersandArray = commaSeparated.split('');
  withAmpersandArray.splice(lastCommaOccurrenceIdx, 1, ' &');
  const final = withAmpersandArray.join('');
  return final;
};

export default Teacher;
