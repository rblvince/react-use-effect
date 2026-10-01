export default function Section({ title, children }) {
  return (
    <section className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-6">
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      {children}
    </section>
  );
}
