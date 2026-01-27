import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getModuleNameByLink } from "../ContentHandler";
import WegweiserPng from "../../assets/images/Wegweiser.webp";
import imisSVG from "../../assets/images/IMIS_Logo.svg";
import newBmbfsfjLogoSVG from "../../assets/images/BMBFSFJ_de_v1__DTP_CMYK.svg";

export default function ExportTitle() {
  const { text, number } = useParams();
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (text) {
      const newTitle = getModuleNameByLink(text);
      setTitle(newTitle);
    } else {
      setTitle("");
    }
  }, [text]);

  return (
    <div className="flex flex-col justify-between w-full max-w-[1280px] my-20 gap-y-10 h-[210mm] max-h-[210mm] overflow-hidden">
      {!text && (
        <section id="intro" className="flex flex-col gap-6 w-full">
          <h2 className="mb-8">Lehrinhalte von</h2>
          <div>
            <h1 className="text-5xl">Wegweiser.UX-für-KI</h1>
            <div className="w-full flex gap-10 my-10">
              <div className="w-3/4">
                <p>
                  Unser Projekt bietet Hilfestellungen und praktische
                  Informationen über{" "}
                  <b>
                    Künstliche Intelligenz (KI) und User Experience (UX) von
                    KI-Systemen
                  </b>
                  , die auf das <b>Gemeinwohl</b> ausgerichtet sind.
                </p>
                <p>
                  Die Inhalte wurden für{" "}
                  <b>
                    Entwickler:innen, Projektmanager:innen und KI- oder
                    UX-Interessierte
                  </b>{" "}
                  unabhängig von ihrem jeweiligen Erfahrungsniveau erstellt.
                </p>
              </div>
              <img
                type={"image"}
                src={WegweiserPng}
                width={350}
                height={610}
                className="max-w-[196px] w-full md:-translate-x-2 rotate-6"
                alt="Wegweiser.UX-für-KI Plattform Logo"
                loading="eager"
              />
            </div>
          </div>
        </section>
      )}
      {text && (
        <section className="titleSubtopic relative mb-0">
          <h2 className="mb-20">Modul:</h2>
          <h1
            className="relative flex items-end lg:min-h-[240px] min-h-[160px]"
            data-number={String(number).padStart(2, "0")}>
            {title}
          </h1>
        </section>
      )}
      <div className="flex justify-around bg-white p-8 rounded-xl ">
        <img
          src={newBmbfsfjLogoSVG}
          alt={"LogoBMBSFJ"}
          width={200}
          height={94}
        />
        <img src={imisSVG} alt={"LogoIMIS"} width={263} height={70} />
      </div>
    </div>
  );
}
