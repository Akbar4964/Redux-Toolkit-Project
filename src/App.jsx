import React from "react";
import { Layout } from "./components";
import AppRoutes from "./routes/AppRotes";

function App() {
  return (
    <>
     <Layout>
        <AppRoutes/>
     </Layout>
    </>
  );
}

export default App;
