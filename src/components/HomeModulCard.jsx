import { Link } from "react-router-dom";
import {
  getSubtopicLinksAndNamesByModulelink,
  getModuleImageByLink,
} from "./ContentHandler";
import UXButton from "./UXButton";

// `HomeModulCard` is a component that displays a single module with its details and subtopics
const HomeModulCard = ({
  module,
  index,
  isDisabled,
  disabledSubtopics,
  moduleRefs,
}) => {
  return (
    <div
      className={`moduleCard glassy-box w-full h-fit min-h-[350px] ${
        isDisabled ? "opacity-50 pointer-events-none" : ""
      }`}
      key={index}
      ref={(el) => (moduleRefs.current[index] = el)}
    >
      {/* Link to the module, disabled if `isDisabled` is true */}
      <Link
        to={`/${module[0]}`} // Target URL for the module
        className="w-full flex flex-grow flex-wrap justify-between p-16"
        onClick={(e) => isDisabled && e.preventDefault()}
        aria-disabled={isDisabled ? "true" : "false"}
      >
        {/* Left section: module icon and title */}
        <div className="w-full md:w-1/3 flex flex-col flex-wrap justify-center gap-5">
            <img
              src={getModuleImageByLink(module[0])}
              alt={`Icon repräsentiert die  ${module[0]} Lektion`}
              className="max-h-[150px] max-w-[150px] object-contain"
            />
            <h2 className="mb-0">{module[1]}</h2>
        </div>

        {/* Right section: subtopics */}
        <div className="w-full md:w-2/3 flex flex-col items-center justify-center gap-5 mt-5 md:mt-0">
          {getSubtopicLinksAndNamesByModulelink(module[0])
            .reduce((result, value, index, array) => {
              if (index % 2 === 0) result.push(array.slice(index, index + 2));
              return result;
            }, [])
            .map((pair, pairIndex) => (
              <div key={pairIndex} className="w-full flex gap-5">
                {pair.map(([subLink, subName], subIndex) => {
                  const isSubtopicDisabled =
                    disabledSubtopics[module[0]]?.includes(subLink);
                  return (
                    <Link
                      key={subIndex}
                      to={
                        isSubtopicDisabled || isDisabled
                          ? "#"
                          : `/${module[0]}/${subLink}`
                      }
                      className={`w-[48%] ${
                        isSubtopicDisabled
                          ? "opacity-50 pointer-events-none"
                          : ""
                      }`}
                      onClick={(e) =>
                        (isSubtopicDisabled || isDisabled) && e.preventDefault()
                      }
                      aria-disabled={isSubtopicDisabled ? "true" : "false"} 
                    >
                      <UXButton
                        text={`${pairIndex * 2 + subIndex + 1}: ${subName}`}
                      />
                    </Link>
                  );
                })}
              </div>
            ))}
        </div>
      </Link>
    </div>
  );
};

export default HomeModulCard;
