import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DummyData = [
  {
    id: 1,
    title: "Product 1",
    price: 10,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
  {
    id: 2,
    title: "Product 2",
    price: 20,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DummyData.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
