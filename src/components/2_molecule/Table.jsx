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
  verticalAlignedCells = true,
}) => {
  if (!data || data.length === 0) {
    return null;
  }

  const headers = data[0];
  const rows = data.slice(1);

  const tableStyle = {
    gridTemplateColumns: columnWidths
      ? columnWidths.join(" ")
      : `repeat(${headers.length}, 1fr)`,
  };

  return (
    <div className={styles.table_container}>
      <div className={styles.table} style={tableStyle}>
        {/* Header kram */}
        <div
          className={`${styles.table_row} ${
            headerStyle ? `${styles.header_row} no-hover shadow` : ""
          }`}>
          {headers.map((header, index) => (
            <div key={index} className={styles.table_cell}>
              {header}
            </div>
          ))}
        </div>

        {/* Rows */}
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`${styles.table_row} ${
              verticalAlignedCells ? styles.align_center : ""
            }`}>
            {row.map((cell, cellIndex) => (
              <div key={cellIndex} className={styles.table_cell}>
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
