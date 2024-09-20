import React from "react";

const APASourceEntry = ({
  typ,
  autor,
  jahr,
  titel,
  verlag,
  url,
  band,
  ausgabe,
  seiten,
  format,
  herausgeber,
  buchTitel,
}) => {
  if (typ === "buch") {
    return (
      <li>
        {autor} ({jahr}). <i>{titel}</i>. {verlag}.{" "}
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ux_white font-normal hover:text-ux_bg duration-300">
            {url}
          </a>
        )}
      </li>
    );
  }

  if (typ === "artikel") {
    return (
      <li>
        {autor} ({jahr}). {titel}. <i>{verlag}</i>, <i>{band}</i>({ausgabe}),{" "}
        {seiten}.{" "}
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ux_white font-normal hover:text-ux_bg duration-300">
            {url}
          </a>
        )}
      </li>
    );
  }

  if (typ === "website") {
    return (
      <li>
        {autor} ({jahr ? jahr : "n.d."}). <i>{titel}</i>.{" "}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ux_white font-normal hover:text-ux_bg duration-300">
          {url}
        </a>
      </li>
    );
  }

  if (typ === "bild") {
    return (
      <li>
        {autor} ({jahr}). {titel} [{format}].{" "}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ux_white font-normal hover:text-ux_bg duration-300">
          {url}
        </a>
      </li>
    );
  }

  if (typ === "buchKapitel") {
    return (
      <li>
        {autor} ({jahr}). {titel}. In {herausgeber} (Hrsg.), <i>{buchTitel}</i>{" "}
        (S. {seiten}). {verlag}.
      </li>
    );
  }

  // Fallback für unbekannte Quellentypen
  return (
    <li>
      {autor} ({jahr}). {titel}. {verlag}{" "}
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ux_white font-normal hover:text-ux_bg duration-300">
          {url}
        </a>
      )}
    </li>
  );
};

export default APASourceEntry;
