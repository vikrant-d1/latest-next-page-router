

function Home({data}) {
    return (
      <div>
        This is the home page.
      </div>
    );
  }
  
  export async function getStaticProps() {
    const data = {title:'App Home Page', description:'This is home page description'}
    return {
      props: {
        data,
      },
    };
  }
  
  export default Home;