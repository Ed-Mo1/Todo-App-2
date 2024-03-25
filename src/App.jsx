import AddNote from "./components/AddNote";
import UnCompletedList from "./components/UnCompletedList";
import CompletedList from "./components/CompletedList";
const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="pt-28 w-[95%] max-w-[600px] mx-auto">
        <AddNote />
        <div className="py-10">
          <UnCompletedList />
        </div>
        <div className="py-10">
          <CompletedList />
        </div>
      </div>
    </div>
  );
};

export default App;
