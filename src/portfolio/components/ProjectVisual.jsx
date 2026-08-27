export default function ProjectVisual({ project, priority = false }) {
  const source = project.cover || project.image;

  return (
    <div className="visual-shell">
      <img
        src={source}
        alt={project.visualAlt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </div>
  );
}
