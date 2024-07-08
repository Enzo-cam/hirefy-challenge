import releasesTimeline from '../utils/releasesTimeline.json'
import releasesNotes from  '../utils/releasesNotes.json'
import ReleaseNotesTimeline from '@/Components/ReleaseNotesTimeline';
import AllReleasesNotes from '@/Components/AllReleasesNotes';

export default function Home() {
  const releasesTimelineData = releasesTimeline;
  const releasesNotesData = releasesNotes;

  return (
    <main className="lg:grid lg:grid-cols-3 gap-4 px-7 lg:mx-32 min-h-screen">
      <div className="col-span-2">
        <ReleaseNotesTimeline
          releasesData={releasesTimelineData}
        />
      </div>

      {/* Componente AllReleasesNotes ocupando 1/3 del espacio */}
      <div className="col-span-1">
        <AllReleasesNotes 
          releasesNotes={releasesNotesData}
        />
      </div>
    </main>
  );
}