import MonacoEditor from "@monaco-editor/react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const sampleCode = `import SwiftUI
import Combine
import CoreData

struct CardScreen: View {
    @State private var alphaCard = "alpha1"
    var body: some View {
        ZStack {
            Color
                .init(red: 24/255, green: 28/255, blue: 23/255)
                .ignoresSafeArea()
            
            ZStack {
                
            }
            .padding(.horizontal, 20.0)
            
            VStack {
                Text("LET'S LEARN")
                    .fontWeight(.heavy)
            }
        }
    }
}`;

export const Editor = ({ 
  filename = "app.swift" 
}: { 
  filename?: string 
}) => {
  return (
    <div className="flex-1 flex flex-col bg-chrome-bg overflow-hidden">
      {/* Tabs */}
      <div className="h-10 bg-chrome-card border-b border-chrome-border flex items-center px-2 gap-1">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-chrome-bg border-b-2 border-primary text-xs">
          <span className="text-foreground">{filename}</span>
          <Button
            variant="ghost"
            size="sm"
            className="h-4 w-4 p-0 hover:bg-hover-bg"
          >
            <X className="w-3 h-3" />
          </Button>
        </div>
      </div>

      {/* Monaco Editor */}
      <div className="flex-1">
        <MonacoEditor
          height="100%"
          defaultLanguage="swift"
          defaultValue={sampleCode}
          theme="vs-dark"
          options={{
            fontSize: 13,
            fontFamily: "'SF Mono', 'Monaco', 'Menlo', monospace",
            lineNumbers: "on",
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 2,
            renderWhitespace: "none",
            padding: { top: 16, bottom: 16 },
            lineDecorationsWidth: 0,
            lineNumbersMinChars: 4,
            glyphMargin: false,
            folding: true,
            wordWrap: "on",
          }}
          beforeMount={(monaco) => {
            monaco.editor.defineTheme('midnight', {
              base: 'vs-dark',
              inherit: true,
              rules: [
                { token: 'comment', foreground: '6A737D' },
                { token: 'keyword', foreground: 'FF6B9D' },
                { token: 'string', foreground: 'A8FF60' },
                { token: 'number', foreground: '96CBFE' },
                { token: 'type', foreground: 'FFFFB6' },
              ],
              colors: {
                'editor.background': '#0a0d14',
                'editor.foreground': '#E0E0E0',
                'editor.lineHighlightBackground': '#0f121900',
                'editorLineNumber.foreground': '#4D4D4D',
                'editorLineNumber.activeForeground': '#b3ff3f',
                'editor.selectionBackground': '#b3ff3f33',
                'editor.inactiveSelectionBackground': '#b3ff3f1a',
              }
            });
            monaco.editor.setTheme('midnight');
          }}
        />
      </div>
    </div>
  );
};
