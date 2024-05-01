import Category from './Category.jsx';
export default function CategoryList(props) {
  const { categories, category, handleCatChange } = props;
  return (
    <>
      {categories.map((item, index) => (
        <Category
          category={item}
          key={index}
          activeCategory={category}
          handleCatChange={handleCatChange}
        />
      ))}
    </>
  );
}
