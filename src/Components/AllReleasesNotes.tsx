'use client'
import React, { useState } from "react";

export interface ReleaseNoteItem {
  version: string;
  title: string;
}

interface ReleaseNotesData {
  releaseNotes: ReleaseNoteItem[];
}

interface Props {
  releasesNotes: ReleaseNotesData;
}

const AllReleasesNotes = ({ releasesNotes }: Props) => {
    const [visibleCount, setVisibleCount] = useState(11); // Comienza mostrando 11 elementos
  
    const showMore = () => {
      setVisibleCount(prevCount => prevCount + 11); // Incrementa el número de elementos mostrados
    };
  
    return (
      <div className="my-4">
        <h1 className='text-release'>All releases notes</h1>
        {releasesNotes.releaseNotes.slice(0, visibleCount).map((releaseNote, index) => (
          <div key={index}>
            <h1 className={`font-sans ${
              releaseNote.version === '6.5' ? 'text-grisOscuro font-bold underline' : 'text-gris font-semibold'
            } lg:text-title`}>
              Release {releaseNote.version}: {releaseNote.title}
            </h1>
          </div>
        ))}
        {visibleCount < releasesNotes.releaseNotes.length && (
          <button
            className="text-grad-azulOscuro p-2 rounded-md mt-4 font-semibold flex items-center"
            onClick={showMore}
          >
            View more <span className="ml-2">⬇️</span>
          </button>
        )}
      </div>
    );
  }
  
  export default AllReleasesNotes;
