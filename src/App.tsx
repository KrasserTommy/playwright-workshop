import React from "react";
import CustomForm from "./components/Form";

const App = () => {
  const [visible, setVisible] = React.useState(true);
  const fulfill = (): void => setVisible(false);
  return (
    <section>
      <header>
        <h1>{visible ? `Formular abschicken` : `Formular abgeschickt`}</h1>
      </header>
      <CustomForm onSubmit={fulfill} />
    </section>
  );
};

export default App;
