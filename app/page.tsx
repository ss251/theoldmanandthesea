import CollectionInfo from "@/components/CollectionInfo";
import Crossmint from "@/components/Crossmint";

export default function Home() {
  return (
    <div className="container mx-auto max-w-4xl bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-5 sm:gap-4 p-4">
        <CollectionInfo />
        <Crossmint />
      </div>
    </div>
  );
}