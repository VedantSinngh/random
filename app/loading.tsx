import NetflixLoader from "@/components/NetflixLoader";

export default function Loading() {
  // This version of the loader manages its own lifecycle, but
  // we still use loading.tsx as the entry point for Next.js
  // The loader will call onComplete after its animation, but since
  // we aren't passing that prop here, it will just play and then
  // the page will appear when ready.
  return (
    <div className="h-screen w-screen">
      <NetflixLoader />
    </div>
  );
}