import './Card.css';

function Card(props) {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
  // Children prop is special will always be the content
  // between the opening and closing tags of my custom component
}

export default Card;
