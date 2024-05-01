export default function Category(props) {
  const { category, activeCategory, handleCatChange } = props;

  const getClassName = () => {
    return activeCategory === category
      ? 'category-item active'
      : 'category-item';
  };
  return (
    <div className={getClassName()} onClick={() => handleCatChange(category)}>
      {category}
    </div>
  );
}
