import React from "react";
import { ReleaseNoteItem } from "./ReleaseNotesTimeline";
import Image from "next/image";

interface Props {
  releaseNoteItem: ReleaseNoteItem;
}

const ReleaseNoteCard = ({ releaseNoteItem }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-titleMobile text-grisOscuro font-semibold font-sans lg:text-title">
        {releaseNoteItem.title}
      </h1>
      <div className="flex gap-3">
        <p
          className={`px-3 text-chip rounded-full ${
            releaseNoteItem.chip === "Feat"
              ? "bg-celesteClaro text-verdeAgua "
              : "bg-beige text-amarilloChillon"
          }`}
        >
          {releaseNoteItem.chip}
        </p>
        <p className="text-descriptionDate text-gris">{releaseNoteItem.date}</p>
      </div>
      <p className="text-descriptionDate text-grisOscuro">
        {releaseNoteItem.description}
      </p>

        {releaseNoteItem.image && (
            <Image src={releaseNoteItem.image} alt="image" width={400} height={300} />
        )}

      {releaseNoteItem.subDescription && (
        <ul className="list-disc mx-2 list-inside">
          {releaseNoteItem.subDescription.map((subDescription, index) => (
            <li key={index} className="text-descriptionDate text-grisOscuro">
              {subDescription}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReleaseNoteCard;
