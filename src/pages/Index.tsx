import { useState } from "react";
import { TopMenu } from "@/components/TopMenu";
import { Sidebar } from "@/components/Sidebar";
import { Editor } from "@/components/Editor";
import { AiPanel } from "@/components/AiPanel";
import { StatusBar } from "@/components/StatusBar";

const Index = () => {
  const [activeFile, setActiveFile] = useState<string>("app.swift");

  return (
    <div className="h-screen flex flex-col bg-chrome-bg text-foreground overflow-hidden">
      <TopMenu />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar onFileSelect={setActiveFile} />
        <Editor filename={activeFile} />
        <AiPanel />
      </div>
      
      <StatusBar />
    </div>
  );
};

export default Index;
