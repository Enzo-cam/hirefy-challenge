
import releasesTimeline from '../utils/releasesTimeline.json'

export default function Home() {
  console.log(releasesTimeline)
  return (
    <main className="flex min-h-screen flex-col px-7">
      <h1 className='mt-32 text-h1' >
        {releasesTimeline.releaseVersion}      
      </h1>

    </main>
  );
}
