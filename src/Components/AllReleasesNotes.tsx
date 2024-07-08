'use client'
import React, { useState, useEffect } from "react";

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
    const [visibleCount, setVisibleCount] = useState(11); 
  
    const showMore = () => {
      setVisibleCount(prevCount => prevCount + 11); 
    };

    useEffect(() => {
      const updateVisibleCount = () => {
        // Cuando supere el width de 768px se van a mostrar todos los elementos
        if (window.innerWidth >= 768) {
          setVisibleCount(releasesNotes.releaseNotes.length);
        } else {
          setVisibleCount(11);
        }
      };
      window.addEventListener('resize', updateVisibleCount);
      updateVisibleCount();
      return () => {
        window.removeEventListener('resize', updateVisibleCount);
      };
    }, [releasesNotes.releaseNotes.length]);

    
    return (
      <div className="my-4 lg:fixed lg:top-15 lg:right-14 lg:w-80">
        <h1 className='text-release'>All releases notes</h1>
        {releasesNotes.releaseNotes.slice(0, visibleCount).map((releaseNote, index) => (
          <div key={index}>
            <p className={`font-sans lg:text-descriptionDate ${
              releaseNote.version === '6.5' ? 'text-grisOscuro font-bold underline' : 'text-gris font-semibold'
            }`}>
              Release {releaseNote.version}: {releaseNote.title}
          </p>
          </div>
        ))}
        {visibleCount < releasesNotes.releaseNotes.length && (
          <button
            className="text-grad-azulOscuro p-2 rounded-md mt-4 font-semibold flex items-center lg:hidden"
            onClick={showMore}
          >
            View more <span className="ml-2">⬇️</span>
          </button>
        )}
      </div>
    );
  }
  
  export default AllReleasesNotes;