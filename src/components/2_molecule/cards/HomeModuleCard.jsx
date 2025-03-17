import {
  getSubtopicLinksAndNamesByModulelink,
  getModuleImageByLink,
} from "../../ContentHandler";
import UXButton from "../nav/UXButton";

/**
 * `HomeModuleCard` is a component that displays a single module with its details, 
 * including the module's name, an image/icon, and subtopics with clickable buttons. 
 * The module card is visually disabled if the `isDisabled` flag is set to true.
 * 
 * @component
 * @example
 * const module = ['moduleLink', 'Module Name'];
 * const index = 1;
 * const isDisabled = false;
 * const disabledSubtopics = { 'moduleLink': ['subtopic1', 'subtopic2'] };
 * const moduleRefs = useRef([]);
 * 
 * return (
 *   <HomeModuleCard
 *     module={module}
 *     index={index}
 *     isDisabled={isDisabled}
 *     disabledSubtopics={disabledSubtopics}
 *     moduleRefs={moduleRefs}
 *   />
 * )
 * 
 * @param {Object} props - Component properties.
 * @param {Array} props.module - The module data, where `module[0]` is the module link, and `module[1]` is the module name.
 * @param {number} props.index - The index of the module in the parent component (used for referencing).
 * @param {boolean} props.isDisabled - A flag indicating if the module is disabled (visually and functionally).
 * @param {Object} props.disabledSubtopics - An object where keys are module links and values are arrays of subtopic links to be disabled.
 * @param {Object} props.moduleRefs - A reference object used to keep track of module elements for scrolling or other operations.
 * 
 * @returns {JSX.Element} The JSX code for the module card with its details and subtopics.
 */
const HomeModuleCard = ({
  module,
  index,
  isDisabled,
  disabledSubtopics,
  moduleRefs,
}) => {
  return (
    <div
      className={`moduleCard glassBox w-full md:rounded-[48px] rounded-3xl h-fit min-h-[350px] ${
        isDisabled ? "disabled" : ""
      }`}
      key={index}
      ref={(el) => (moduleRefs.current[index] = el)}>
      {/* Link to the module, disabled if `isDisabled` is true */}
      <div
        // to={`/${module[0]}`} // Target URL for the module
        className="w-full flex flex-grow flex-wrap justify-between md:p-16 sm:p-12 p-8"
        onClick={(e) => isDisabled && e.preventDefault()}
        aria-disabled={isDisabled ? "true" : "false"}>
        {/* Left section: module icon and title */}
        <div className="w-full md:w-1/3 flex flex-col flex-wrap justify-center svgFill gap-5">
          {getModuleImageByLink(module[0]) || <div>Kein Icon verfügbar</div>}
          <h3 className="mb-0">{module[1]}</h3>
        </div>

        {/* Right section: subtopics */}
        <div className="w-full md:w-2/3 flex flex-col items-center justify-top gap-5 mt-5 md:mt-0">
          {getSubtopicLinksAndNamesByModulelink(module[0])
            .reduce((result, value, index, array) => {
              if (index % 2 === 0) result.push(array.slice(index, index + 2));
              return result;
            }, [])
            .map((pair, pairIndex) => (
              <div
                key={pairIndex}
                className="w-full flex flex-col sm:flex-row gap-5">
                {pair.map(([subLink, subName], subIndex) => {
                  const isSubtopicDisabled =
                    disabledSubtopics[module[0]]?.includes(subLink);
                  return (
                    <div
                      key={subIndex}
                      className={`sm:w-[48%] w-full ${
                        isSubtopicDisabled
                          ? "disabled"
                          : ""
                      }`}>
                      <UXButton
                        text={`${pairIndex * 2 + subIndex + 1}: ${subName}`}
                        to={
                          isSubtopicDisabled || isDisabled
                            ? "#"
                            : `/${module[0]}/${subLink}`
                        }
                      />
                    </div>
                  );
                })}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomeModuleCard;
