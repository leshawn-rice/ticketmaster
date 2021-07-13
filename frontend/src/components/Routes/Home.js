


const Home = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h1 className="header-1">Header 1</h1>
          <h1 className="header-2">Header 2</h1>
          <h1 className="header-3">Header 3</h1>
        </div>
        <div className="col">
          <h1 className="header-4">Header 4</h1>
          <h1 className="header-5">Header 5</h1>

          <p className="text-large">Large Text</p>
          <p className="text">Regular Text</p>
          <p className="text-small">Small Text</p>

        </div>

        <div className="col">
          <p className="text-large">Hello World</p>
          <a href="/" className="link">Link</a>
          <p className="caption">Caption</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="text-large">Large Text</p>
          <p className="text">Regular Text</p>
          <p className="text-small">Small Text</p>
        </div>

        <div className="col">
          <p className="text-large">Hello World</p>
          <a href="/" className="link">Link</a>
          <p className="caption">Caption</p>
        </div>
      </div>
    </div>
  );
};

export default Home;