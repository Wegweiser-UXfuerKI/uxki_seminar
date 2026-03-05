import { useContext, useState } from "react";
import { AppContext } from "../../AppContext";
import ArrowIcon from "../1_elements/ArrowIcon";
import DownloadIcon from "../../assets/icons/download.svg?react";

export const PDFDownload = ({ pdfTitle }) => {
  const { theme, selectedModuleName } = useContext(AppContext);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full flex flex-col gap-[var(--scale2)]">
      <h2>Lieber in Textform?</h2>
      {pdfTitle === "Gesamter_Kurs" ? (
        <p>
          Zur Unterstütztung des Selbststudiums werden die Inhalte als PDF zur
          Verfügung gestellt. Hier können Sie den gesamten Inhalt in Textform
          herunterladen. Wenn Sie die einzelnen Module als PDF herunterladen
          möchten finden Sie diese in den jeweiligen Einleitungskapiteln der
          Module.
        </p>
      ) : (
        <p style={{ marginBottom: 0 }}>
          Zur Unterstützung des Selbststudiums werden die Inhalte dieses Moduls
          als PDF zur Verfügung gestellt. Hier können Sie die Inhalte des
          Kapitels {selectedModuleName} herunterladen. Eine PDF mit allen
          Inhalten finden Sie auf der Startseite der Lehranwendung.
        </p>
      )}
      <div className="rounded-xl bg-[var(--box)] shadow no-hover flex flex-col items-center w-fit">
        <div className="flex gap-[var(--scale2)] p-[var(--scale2)]">
          <a
            href={`${import.meta.env.BASE_URL}PDF/${theme}/${pdfTitle}.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-1"
          >
            <DownloadIcon />
            PDF Herunterladen
          </a>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="hover:pb-1"
          >
            <ArrowIcon direction={isExpanded ? "up" : "down"} />
          </button>
        </div>
        {isExpanded && (
          <div className="flex flex-col gap-[var(--scale2)] p-[var(--scale2)] border-t w-full">
            <a
              href={`${import.meta.env.BASE_URL}PDF/light/${pdfTitle}.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Helle Version
            </a>
            <a
              href={`${import.meta.env.BASE_URL}PDF/dark/${pdfTitle}.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Dunkle Version
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
