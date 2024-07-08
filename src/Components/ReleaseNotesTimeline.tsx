'use client'
import React, { useState } from "react";
import SortBy from "./SortBy";
import ReleaseNoteCard from "./ReleaseNoteCard";

export interface ReleaseNoteItem {
  title: string;
  chip: string;
  date: string;
  description: string;
  image?: string;
  subDescription?: string[];
}

interface ReleaseNotesData {
  releaseVersion: string;
  items: ReleaseNoteItem[];
}

interface Props {
  releasesData: ReleaseNotesData;
}

const ReleaseNotesTimeline = ({ releasesData }: Props) => {
  const [filteredData, setFilteredData] = useState(releasesData.items);

  const handleSortChange = (sortValue: string) => {
    if (sortValue === "All") {
      setFilteredData(releasesData.items);
    } else {
      const filtered = releasesData.items.filter(
        (item) => item.chip.toLowerCase() === sortValue.toLowerCase()
      );
      setFilteredData(filtered);
    }
  };

  return (
    <div>
      <div className="lg:flex lg:justify-between pb-2 mb-2 border-b-2 ">
        <h2 className="text-release lg:text-h1 font-sans text-grisOscuro">{releasesData.releaseVersion}</h2>
        <SortBy onSortChange={handleSortChange} />
      </div>


      {filteredData.map((item, index) => (
        <div key={index} className="my-2 p-2">
          <ReleaseNoteCard 
            releaseNoteItem={item}
          />
        </div>
      ))}
    </div>
  );
};

export default ReleaseNotesTimeline;
