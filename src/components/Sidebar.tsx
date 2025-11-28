import { useState } from "react";
import { ChevronDown, ChevronRight, FileCode, Folder, FolderOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";

interface FileNode {
  name: string;
  type: "file" | "folder";
  children?: FileNode[];
}

const mockFiles: FileNode[] = [
  {
    name: "appledevProjects",
    type: "folder",
    children: [
      {
        name: "mc1",
        type: "folder",
        children: [
          {
            name: "screens",
            type: "folder",
            children: [
              { name: "app.swift", type: "file" },
              { name: "navbar.swift", type: "file" },
              { name: "modal.swift", type: "file" },
              { name: "inputField.swift", type: "file" },
            ]
          },
          {
            name: "components",
            type: "folder",
            children: [
              { name: "app.swift", type: "file" }
            ]
          },
          {
            name: "assets",
            type: "folder"
          }
        ]
      },
      { name: "mc2", type: "folder" },
      { name: "mc3", type: "folder" }
    ]
  },
  { name: "PythonProjects", type: "folder" },
  { name: "JavaScriptCrashCourse", type: "folder" },
  { name: "codecFigmaProjects", type: "folder" }
];

const FileTreeItem = ({ 
  node, 
  level = 0,
  activeFile,
  onFileClick 
}: { 
  node: FileNode; 
  level?: number;
  activeFile: string | null;
  onFileClick: (name: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(level < 2);
  const isActive = node.type === "file" && activeFile === node.name;

  const handleClick = () => {
    if (node.type === "folder") {
      setIsOpen(!isOpen);
    } else {
      onFileClick(node.name);
    }
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className={cn(
          "flex items-center gap-2 py-1 px-2 cursor-pointer text-xs transition-all duration-300 group",
          "hover:bg-hover-bg hover:scale-[1.02]",
          isActive && "bg-primary/20 text-primary border-l-2 border-primary animate-fade-in"
        )}
        style={{ paddingLeft: `${level * 12 + 8}px` }}
      >
        {node.type === "folder" ? (
          <>
            {isOpen ? (
              <ChevronDown className="w-3 h-3 text-text-muted flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
            ) : (
              <ChevronRight className="w-3 h-3 text-text-muted flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
            )}
            {isOpen ? (
              <FolderOpen className="w-4 h-4 text-text-muted flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
            ) : (
              <Folder className="w-4 h-4 text-text-muted flex-shrink-0 transition-all duration-300 group-hover:scale-110" />
            )}
          </>
        ) : (
          <>
            <span className="w-3 h-3 flex-shrink-0" />
            <FileCode className="w-4 h-4 text-text-muted flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
          </>
        )}
        <span className={cn(
          "text-text-muted truncate transition-colors duration-300 group-hover:text-foreground",
          isActive && "text-primary font-medium"
        )}>
          {node.name}
        </span>
      </div>
      
      {node.type === "folder" && isOpen && node.children && (
        <div>
          {node.children.map((child, idx) => (
            <FileTreeItem
              key={`${child.name}-${idx}`}
              node={child}
              level={level + 1}
              activeFile={activeFile}
              onFileClick={onFileClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const Sidebar = ({ 
  onFileSelect 
}: { 
  onFileSelect: (filename: string) => void 
}) => {
  const [activeFile, setActiveFile] = useState<string | null>("app.swift");

  const handleFileClick = (filename: string) => {
    setActiveFile(filename);
    onFileSelect(filename);
  };

  return (
    <div className="w-64 bg-chrome-bg border-r border-chrome-border flex flex-col overflow-hidden transition-all duration-300 animate-slide-in-right">
      <div className="p-3 border-b border-chrome-border group hover:bg-hover-bg transition-colors duration-300">
        <h2 className="text-xs font-semibold text-text-muted uppercase tracking-wide group-hover:text-primary transition-colors duration-300">
          Explorer
        </h2>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {mockFiles.map((node, idx) => (
          <FileTreeItem
            key={`${node.name}-${idx}`}
            node={node}
            activeFile={activeFile}
            onFileClick={handleFileClick}
          />
        ))}
      </div>
    </div>
  );
};
