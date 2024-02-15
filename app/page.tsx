"use client";

// app/page.tsx

import { useEffect } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import websitePlugin from "grapesjs-preset-webpage";
import basicBlockPlugin from "grapesjs-blocks-basic";
import formPlugin from "grapesjs-plugin-forms";

function App() {
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      width: "100%",
      plugins: [websitePlugin, basicBlockPlugin, formPlugin],
      storageManager: {
        id: "gjs-", // Prefix identifier that will be used inside storing and loading
        type: "local", // Type of the storage
        autosave: true, // Store data automatically
        autoload: true, // Autoload stored data on the init
        stepsBeforeSave: 1, // If autosave enabled, indicates how many changes are necessary before store method is triggered
      },
    });
  }, []);

  return <div id="gjs"></div>;
}

export default App;
