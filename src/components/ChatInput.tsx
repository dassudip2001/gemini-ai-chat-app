import { ArrowUp } from "lucide-react";

export default function ChatInput() {
  return (
    <form className="w-full max-w-3xl mx-auto p-3 pb-2 bg-[#23202b] rounded-2xl border border-[#3a334d] shadow-lg flex flex-col gap-2">
      <input
        type="text"
        placeholder="Type your message here..."
        className="bg-transparent text-white placeholder:text-gray-400 px-2 py-3 outline-none"
      />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <select className="bg-transparent text-white font-semibold text-sm focus:outline-none">
            <option>Gemini 2.5 Flash</option>
            <option>Gemini 1.5 Pro</option>
          </select>
          {/* <Globe className="h-5 w-5 text-gray-400 cursor-pointer" /> */}
          {/* <PaperClipIcon className="h-5 w-5 text-gray-400 cursor-pointer" /> */}
        </div>
        <button
          type="submit"
          className="bg-[#3a334d] p-2 rounded-lg hover:bg-[#4b3b6b] transition"
        >
          <ArrowUp className="h-5 w-5 text-purple-300" />
        </button>
      </div>
    </form>
  );
}
