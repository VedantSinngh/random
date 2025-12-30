import MatrixLoader from '@/components/MatrixLoader';

export default function Loading() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <MatrixLoader />
    </div>
  );
}