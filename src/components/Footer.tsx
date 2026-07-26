export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-8">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-center">
        <p className="text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Yousaf Zeb. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
