import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <section className="w-screen mx-auto mt-20 flex justify-center">
      <div className="border border-black/10 p-10 flex gap-3">
        <Button variant="danger" classNames={{ end: "text-2xl" }}>
          Hello
        </Button>
        <Button variant="default">Hello</Button>
        <Button variant="primary">Hello</Button>
        <Button variant="secondary">Hello</Button>
      </div>
    </section>
  );
}

export default App;
