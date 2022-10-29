import Content from "./Content";
const Products = () => {
  return (
    <div className='name'>
      <Content
        title='Products'
        text='All in one for your remote team chats, collaboration and track projects'
        button='Get early access'
        placeholder='Email'
        type='email'
      />
    </div>
  );
};

export default Products;
