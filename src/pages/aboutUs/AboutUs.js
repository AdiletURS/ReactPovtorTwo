function AboutUs(props) {
  return (
    <>
      <ul>
        <li>{props.info.tittle}</li>
        <li>{props.info.subtitle}</li>
      </ul>
    </>
  );
}

export default AboutUs;
