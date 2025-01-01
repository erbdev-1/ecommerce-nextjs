"use client";

const Categories = () => {
  const categoryList = [
    {
      name: "Category 1",
    },
    {
      name: "Category 1",
    },
    {
      name: "Category 1",
    },
    {
      name: "Category 1",
    },
    {
      name: "Category 1",
    },
    {
      name: "Category 1",
    },
    {
      name: "Category 1",
    },
    {
      name: "Category 1",
    },
  ];

  return (
    <div className="flex justify-center items-center px-3 gap-3 md:gap-10 py-5 md:py-8 overflow-x-auto">
      {categoryList.map((category, index) => (
        <div
          key={index}
          className="border text-slate-500 rounded-full min-w-[120px] flex justify-center items-center cursor-pointer px-4 py-2 text-center"
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
