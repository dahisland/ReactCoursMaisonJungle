function CareScale({ scaleValue, careType }) {
  // --- Soit on met props en argument pour la fonction CareScale et on déclare les propriétés ci-dessous
  // const scaleValue = props.scaleValue;
  // const careType = props.careType;
  // --- Soit on déclare directement entre accolades en argument les props pour éviter de les déclarer en constantes
  // --- La 2nde solution est appelée déstructuration. On peut aussi avoir une syntaxe intermédiaire :
  // const {scaleValue, careType} = props;
  const scaleType = careType === "sunlight" ? "🌞" : "💧";
  const scaleCaption =
    careType === "sunlight" ? "Ensoleillement : " : "Arrosage : ";
  const range = [1, 2, 3];

  return (
    <p className="plants_Care">
      {scaleCaption}
      {range.map((elmt) =>
        scaleValue >= elmt ? (
          <span key={elmt.toString()}>{scaleType}</span>
        ) : null
      )}
    </p>
  );
}

export default CareScale;
