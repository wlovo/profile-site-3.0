export default function Footer() {
  return (
    <div id="footer" className="flex items-center justify-center p-4 bg-slate-100 dark:bg-slate-900">
      <p className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} William Lovo</p>
    </div>
  );
}
