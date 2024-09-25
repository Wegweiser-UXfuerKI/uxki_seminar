import React from "react";
import { Link } from "react-router-dom";
import styles from "../Home.module.css";
import {
  getModuleLinksAndNames,
  getSubtopicLinksAndNamesByModulelink,
  getModuleImageByLink,
} from "../ContentHandler";
import UXButton from "../UXButton";

const Home = () => {
  const modulesData = getModuleLinksAndNames();

  return (
    <div className="w-full flex flex-col justify-center items-center my-20">
      {modulesData &&
        modulesData.map((module, index) => (
          <div
            className={`${styles.moduleCard} w-10/12 rounded-3xl`}
            key={index}
          >
            <Link
              to={`/${module[0]}`}
              className="w-full flex flex-grow justify-between p-14"
            >
              <div className="relative flex flex-col-reverse h-full w-1/3">
                <div className="absolute top-0 left-0 z-10">
                  <img
                    src={getModuleImageByLink(module[0])}
                    alt={`module icon: ${module[0]}`}
                    className="w-auto h-[150px] object-contain"
                  />
                </div>
                <div className="h-1/3 w-full flex flex-col-reverse">
                  <h2 className="text-ux_dark">{module[1]}</h2>
                </div>
              </div>
              <div className="h-full w-2/3 flex flex-wrap items-center justify-between">
                {getSubtopicLinksAndNamesByModulelink(module[0]).map(
                  ([subLink, subName], subIndex) => (
                    <Link
                      key={subIndex}
                      to={`/${module[0]}/${subLink}`}
                      className="h-fit w-[48%]"
                    >
                      <UXButton
                        text={subName}
                        bgColor="ux_lightgrey"
                      ></UXButton>
                    </Link>
                  )
                )}
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Home;
