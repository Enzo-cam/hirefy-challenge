'use client'
import React, { useState, useEffect } from "react";
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
    <div className="mt-32">
      <h2 className="text-release font-sans text-grisOscuro">{releasesData.releaseVersion}</h2>
      <SortBy onSortChange={handleSortChange} />


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
