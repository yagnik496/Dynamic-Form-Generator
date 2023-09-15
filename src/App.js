import { useState } from "react";
import FormCreationInterface from "./components/FormCreationInterface";
import DynamicFormRenderer from "./components/DynamicFormRenderer";
import JsonFormatter from "react-json-formatter";

const jsonStyle = {
  propertyStyle: { color: "red" },
  stringStyle: { color: "green" },
  numberStyle: { color: "darkorange" },
};

function App() {
  const [formStructure, setFormStructure] = useState({ title: "", fields: [] });
  const [jsonData, setJsonData] = useState({});

  const handleAddField = (field) => {
    setFormStructure((prevState) => ({
      ...prevState,
      fields: [...prevState.fields, field],
    }));
  };

  const handleSetTitle = (title) => {
    setFormStructure((prevState) => ({
      ...prevState,
      title: title,
    }));
  };

  return (
    <div className="flex flex-col gap-y-5 min-h-screen border ">
      <h1 className="mx-auto mt-10">Dynamic Form Generator</h1>
      <div className="flex md:flex-row flex-col md:justify-center divide-x gap-x-5 mt-10 mx-0 md:mx-64 rounded-2xl shadow-lg bg-slate-50">
        <FormCreationInterface
          onAddField={handleAddField}
          onSetTitle={handleSetTitle}
        />
        <DynamicFormRenderer
          formStructure={formStructure}
          setJsonData={setJsonData}
        />
      </div>

      <div className="mx-auto w-full gap-x-6 divide-x max-w-3xl py-2 bg-slate-50 shadow-lg rounded-lg grid md:grid-cols-2">
        <div className="px-4 w-1/2">
          <h1 className="mb-5 text-center text-xl">Form JSON</h1>
          <JsonFormatter
            json={formStructure}
            tabWith={4}
            jsonStyle={jsonStyle}
          />
        </div>
        <div className="px-4 w-1/2">
          <h1 className="mb-5 text-center text-xl">Submitted Form Data</h1>
          <JsonFormatter json={jsonData} tabWith={4} jsonStyle={jsonStyle} />
        </div>
      </div>
    </div>
  );
}

export default App;
