import React from "react";
import styles from "./Table.module.css";

/**
 * @typedef {Array<Array<React.ReactNode>>} TableData
 */

/**
 * Tabellen Komponente
 *
 * Die Komponente rendert eine Tabelle basierend auf den bereitgestellten Daten.
 * Die erste Unterarray in `data` wird als Header-Zeile behandelt, der Rest als Datenzeilen.
 *
 * @param {object} props - Die Props für die Table-Komponente.
 * @param {TableData} props.data - Ein Array von Arrays, das die Tabellendaten darstellt.
 * Das erste Unterarray ist die Kopfzeile, die folgenden sind die Datenzeilen.
 * Jedes Element kann ein String, eine Zahl oder ein beliebiges React-Node sein.
 * Beispiel: `[['Name', 'Alter'], ['Max', 30], ['Anna', 25]]`
 * @param {boolean} [props.headerStyle=true] - Wenn `true`, wird die Kopfzeile mit spezifischen Header-Styles versehen.
 * @param {string[]} [props.columnWidths] - Ein Array von Strings, das die Spaltenbreiten im CSS Grid Format definiert
 * (z.B. `['1fr', '2fr', '100px']`).
 * Wenn nicht angegeben, werden die Spaltenbreiten gleichmäßig aufgeteilt.
 * @param {boolean} [props.verticalAlignCells=true] - Wenn `true`, werden die Inhalte der Zellen vertikal zentriert.
 * Standardmäßig ist dies aktiviert.
 * @returns {React.ElementType|null} Das gerenderte Tabellenkomponente oder `null`, wenn keine Daten vorhanden sind.
 */
export const Table = ({
  data,
  headerStyle = true,
  columnWidths,
  verticalAlignedCells = false,
}) => {
  if (!data || data.length === 0) {
    return null;
  }

  const headers = data[0];
  const rows = data.slice(1);

  const columnCount = headers.length;
  const gridTemplate = [];

  for (let i = 0; i < columnCount; i++) {
    gridTemplate.push(columnWidths ? columnWidths[i] || "1fr" : "1fr");
    if (i < columnCount - 1) gridTemplate.push("1px");
  }

  const tableStyle = {
    gridTemplateColumns: gridTemplate.join(" "),
  };

  return (
    <div
      className={`${styles.table_container} ${styles.background} no-hover shadow`}>
      <div className={styles.table} style={tableStyle}>
        {/* Header kram */}
        <div
          className={`${styles.table_row} ${
            headerStyle
              ? `${styles.header_row} ${styles.background} no-hover shadow`
              : ""
          }`}>
          {headers.map((header, index) => (
            <React.Fragment key={index}>
              <div className={styles.table_cell}>{header}</div>
              {index < headers.length - 1 && (
                <div className={styles.vertical_divider} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Rows */}
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`${styles.table_row} ${
              verticalAlignedCells ? styles.align_center : styles.align_top
            }`}>
            {row.map((cell, cellIndex) => (
              <React.Fragment key={cellIndex}>
                <div className={styles.table_cell}>{cell}</div>
                {cellIndex < row.length - 1 && (
                  <div className={styles.vertical_divider} />
                )}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
