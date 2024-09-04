import React from "react";
import { Link } from "react-router-dom";
import styles from "../Home.module.css";
import { GraphicContainer } from "../GraphicContainer";
import {
  getModuleLinksAndNames,
  getSubtopicLinksAndNamesByModulelink,
  getModuleImageByLink,
} from "../ContentHandler";
import { ReactComponent as RightArrow } from "../../assets/images/right-arrow.svg";

const Home = () => {
  const modulesData = getModuleLinksAndNames();

  return (
    <div className="w-full flex flex-col justify-center items-center my-20">
      {modulesData &&
        modulesData.map((module, index) => (
          <div className={`${styles.moduleCard} rounded-xl`} key={index}>
            <Link
              to={`/${module[0]}`}
              className="w-full flex flex-grow justify-between">
              <div className="flex-grow w-2/5 flex flex-col justify-center items-center">
                <div className="h-2/3 w-4/5 flex items-center">
                  <img
                    src={getModuleImageByLink(module[0])}
                    alt={`module icon: ${module[0]}`}
                    className="h-full"
                  />
                </div>
                <div className="w-4/5 border"></div>
                <div className="h-1/3 w-4/5 p-5 pl-0 flex justify-center items-center">
                  <h2 className="text-black">{module[1]}</h2>
                </div>
              </div>
              <div className="flex-grow w-3/5 p-4 flex items-center">
                <div className="flex flex-wrap gap-x-[15px] gap-y-[30px]">
                  {getSubtopicLinksAndNamesByModulelink(module[0]).map(
                    ([subLink, subName], subIndex) => (
                      <Link
                        key={subIndex}
                        to={`/${module[0]}/${subLink}`}
                        className={`text-black p-2 ${styles.subtopicBlocks}`}>
                        <div
                          className={`w-[75%] text-black ${styles.subtopicName}`}>
                          {subName}
                        </div>
                        <RightArrow />
                      </Link>
                    )
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Home;
