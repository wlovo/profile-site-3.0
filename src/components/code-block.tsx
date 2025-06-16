// filepath: /Users/wlovo/Development/profile-site-3.0/src/components/hero.tsx

interface CodeSegment {
  text: string;
  colorClass: string; // Tailwind CSS color class for the text
}

interface CodeLine {
  id: string; // Unique identifier for the line, for React key
  segments: CodeSegment[]; // Array of text segments for multi-color lines
  indentationLevel: number; // Number of indent units (e.g., 0, 1, 2)
}

interface CodeBlockProps {
  codeLines: CodeLine[];
  activeFileName?: string;
  inactiveFiles?: string[];
}

export default function CodeBlock({ codeLines, activeFileName, inactiveFiles = [] }: CodeBlockProps) {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 rounded-lg shadow-xl overflow-hidden w-full max-w-2xl font-mono text-sm mx-auto">
      {/* Header Bar */}
      <div className="bg-slate-200 dark:bg-slate-700 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          {/* Window Controls */}
          <div className="flex space-x-1.5 mr-3">
            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
          </div>
          {/* Tabs */}
          <div className="flex">
            {activeFileName && (
              <button className="bg-slate-300 dark:bg-slate-800 text-slate-500 dark:text-slate-100 py-1.5 px-4 rounded-t-md focus:outline-none text-xs">
                {activeFileName}
              </button>
            )}
            {inactiveFiles.length > 0 &&
              inactiveFiles.map((file) => (
                <button
                  key={file}
                  className="text-slate-400 dark:text-slate-400 hover:text-slate-500 dark:hover:text-slate-100 py-1.5 px-4 focus:outline-none text-xs rounded-t-md">
                  {file}
                </button>
              ))}
          </div>
        </div>
      </div>

      {/* Code Area */}
      <div className="px-2 pb-4 pt-2">
        {codeLines.map((line, index) => (
          <div key={line.id} className="flex items-start leading-relaxed">
            <span className="text-gray-500 w-12 text-right pr-3 select-none pt-px">
              {(index + 1).toString().padStart(2, '0')}
            </span>
            <pre
              className="flex-1 whitespace-pre-wrap break-words" // Removed line.colorClass here
              style={{ paddingLeft: `${line.indentationLevel * 1}rem` }} // 1rem (16px) per indent level
            >
              {line.segments.map((segment, segmentIndex) => (
                <span key={segmentIndex} className={segment.colorClass}>
                  {segment.text}
                </span>
              ))}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}
