import Banner from "./components/home/Banner";
import Categories from "./components/home/Categories";
import Products from "./components/home/Products";

export default function Home() {
  return (
    <div>
      <Categories />
      <Banner />
      <Products />
    </div>
  );
}
