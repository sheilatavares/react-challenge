import styles from "./displayPeriodic.module.css";
import { useSelector } from "react-redux";

function DisplayPeriodic() {
  const firstName = useSelector((state) => state.names.firstName);
  const lastName = useSelector((state) => state.names.lastName);
  console.log(firstName, lastName);
  const originalFirstName = firstName[0];
  const elementFirst = firstName[1];
  const originalLastName = lastName[0];
  const elementLast = lastName[1];

  const renderHighlightedName = (originalName, elementArray) => {
    if (!originalName) return null;

    const highlightedLetters = new Set();
    let count = 0;

    return originalName.split("").map((letter, i) => {
      const lowercaseLetter = letter.toLowerCase();
      const shouldHighlight =
        elementArray &&
        elementArray.length === 2 &&
        ((i === 0 && letter.toUpperCase() === letter) ||
          lowercaseLetter === elementArray[0].toLowerCase() ||
          lowercaseLetter === elementArray[1].toLowerCase());

      if (shouldHighlight) {
        if (!highlightedLetters.has(lowercaseLetter)) {
          highlightedLetters.add(lowercaseLetter);
          count++;
        } else if (count >= 2) {
          return <span key={letter + i}>{letter}</span>;
        }
      }

      return (
        <span
          key={letter + i}
          className={shouldHighlight ? styles.highlight : ""}
        >
          {i === 0 ? letter.toUpperCase() : letter}
        </span>
      );
    });
  };

  return (
    <div>
      {firstName && lastName ? (
        <>
          <div className={styles.word}>
            {renderHighlightedName(originalFirstName, elementFirst)}
          </div>
          <div className={styles.word}>
            {renderHighlightedName(originalLastName, elementLast)}
          </div>
          <div className={styles.alert}>
            {!elementFirst ? (
              <span>Oh-o! No element found in your first name</span>
            ) : null}
            {!elementLast ? (
              <span>Oh-o! No element found in your last name</span>
            ) : null}
          </div>
        </>
      ) : (
        <h3>Insert your name below and see the chemistry happen!</h3>
      )}
    </div>
  );
}

export default DisplayPeriodic;
