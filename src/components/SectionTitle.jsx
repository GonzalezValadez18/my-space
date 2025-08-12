function SectionTitle({ title }) {
  return (
    <div className="content">
      <h2 className="title-section">
        {title} <span className="cursor"></span>
      </h2>
    </div>
  );
}

export default SectionTitle;
