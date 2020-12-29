export default function MDXWrapper({ meta, children }) {
  return (
    <div className="max-w-3xl mx-auto p-4">
      {meta && (
        <div className="my-4">
          {meta.title && <h1 className="text-4xl">{meta.title}</h1>}
          {meta.date && <p className="text-gray text-xl my-1">{meta.date}</p>}
          {meta.description && (
            <p className="text-xl my-1">{meta.description}</p>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
