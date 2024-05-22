function TextContainer({ texts }) {
  const parseTexts = (text) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const boldRegex = /\*\*([^*]+)\*\*/g;
    const italicRegex = /\*([^*]+)\*/g;

    const elements = [];
    let lastIndex = 0;

    // Funktion zum Parsen des Textes und Ersetzen der Muster
    text.replace(linkRegex, (match, displayName, url, offset) => {
        // Text vor dem Link-Pattern hinzufügen
        if (offset > lastIndex) {
            elements.push(text.substring(lastIndex, offset));
        }

        elements.push(<a href={url} key={offset} className="text mx-0 text-blue-200 hover:underline">{displayName}</a>);

        lastIndex = offset + match.length;
    });

    if (lastIndex < text.length) {
        elements.push(text.substring(lastIndex));
    }

    const finalElements = [];
    elements.forEach((el, index) => {
        if (typeof el === 'string') {
            let lastTextIndex = 0;
            let partElements = [];

            el.replace(boldRegex, (match, content, offset) => {
                if (offset > lastTextIndex) {
                    partElements.push(el.substring(lastTextIndex, offset));
                }
                partElements.push(<b key={`b${offset}`} className="text TextColor font-bold">{content}</b>);
                lastTextIndex = offset + match.length;
            });

            if (lastTextIndex < el.length) {
                partElements.push(el.substring(lastTextIndex));
            }

            const italicParts = [];
            partElements.forEach((part, partIndex) => {
                if (typeof part === 'string') {
                    let lastItalicIndex = 0;
                    part.replace(italicRegex, (match, content, offset) => {
                        if (offset > lastItalicIndex) {
                            italicParts.push(part.substring(lastItalicIndex, offset));
                        }
                        italicParts.push(<i key={`i${offset}`} className="text TextColor">{content}</i>);
                        lastItalicIndex = offset + match.length;
                    });

                    if (lastItalicIndex < part.length) {
                        italicParts.push(part.substring(lastItalicIndex));
                    }
                } else {
                    italicParts.push(part);
                }
            });

            finalElements.push(...italicParts);
        } else {
            finalElements.push(el);
        }
    });

    return finalElements;
  };

  return (
    <div className="TextColor">
      {texts.map((item, index) => {
        if (item.startsWith("##list ")) {
          const listItems = item
            .split("##list")
            .slice(1)
            .map((section) => section.trim());
          return (
            <ul className="list-disc pl-7" key={index}>
              {listItems.map((listItem, idx) => (
                <li className="TextColor text" key={idx}>
                  {parseTexts(listItem)}
                </li>
              ))}
            </ul>
          );
        } else if (item.startsWith("## ")) {
          return (
            <p className="mt-1 md:mt-4 h2-5 TextColor font-bold" key={index}>
              {parseTexts(item.slice(3))}
            </p>
          );
        } else if (item.startsWith("### ")) {
          return (
            <p className="mt-1 md:mt-4 h3 TextColor font-bold" key={index}>
              {parseTexts(item.slice(3))}
            </p>
          );
        } else {
          return (
            <p className="TextColor text" key={index}>
              {parseTexts(item)}
            </p>
          );
        }
      })}
    </div>
  );
}

export default TextContainer;
