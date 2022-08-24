import CareScale from "./CareScale";

function PlantItem({ name, img, sunlight, water }) {
  return (
    <div>
      <h2 className="plants_Title">{name}</h2>
      <picture>
        <img src={`./img/` + img} alt={name}></img>
      </picture>
      <CareScale scaleValue={sunlight} careType="sunlight" />
      <CareScale scaleValue={water} careType="water" />
    </div>
  );
}

export default PlantItem;
