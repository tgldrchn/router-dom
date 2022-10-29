import Content from "./Content";

const Home = () => {
  return (
    <div className='name'>
      <Content
        title='Instant collaborations for remote teams'
        text='All in one for your remote team chats, collaboration and track projects'
        button='Get early access'
        placeholder='Email'
        type='email'
      />
    </div>
  );
};

export default Home;
