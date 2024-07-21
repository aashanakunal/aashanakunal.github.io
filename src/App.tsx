import { Button } from "@/components/ui/button";
import aashanakunal from "@/assets/aashana-kunal.svg";
import ak from "@/assets/ak-logo.svg";

const AlbumUrl = "https://photos.app.goo.gl/dEsn2jYtoUxdpLgM7";

function App() {
  return (
    <div className="fixed flex min-h-screen min-w-full flex-col items-center justify-center bg-cover pb-24">
      <div className="absolute top-0 flex-col items-center justify-center pt-8">
        <img src={ak} className="m-auto max-w-12 p-3" />
        <div className="font-playfair font-semibold tracking-widest">
          12 · 09 · 23
        </div>
      </div>
      <img src={aashanakunal} className="h-auto max-w-lg" />
      <div className="flex max-w-sm rounded-xl bg-gradient-to-tr from-yellow-700 to-blue-300 p-0.5 shadow-lg">
        <Button
          className="isolate bg-primary/30 uppercase tracking-widest shadow-lg ring-1 ring-black/5"
          onClick={() => {
            window.open(AlbumUrl, "_blank");
          }}
        >
          View Album
        </Button>
      </div>
    </div>
  );
}

export default App;
