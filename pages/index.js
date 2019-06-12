function Home() {
  return (
    <div className="container">
      <div className="title">Solestium</div>

      <style jsx global>{`
        html,
        body,
        #__next {
          height: 100%;
        }

        #__next {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
        }

        .title {
          font-size: 3rem;
        }
      `}</style>
    </div>
  );
}

export default Home;
