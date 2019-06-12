import Page from '../layouts/app';

export default () => (
  <Page>
    <div className="list">
      <div className="title">Solestium</div>

      <div className="projects">
        <ul>
          <li>
            <a href="#" onClick={(e) => e.preventDefault()}>Erooi</a>
          </li>
          <li>
            <a href="#" onClick={(e) => e.preventDefault()}>Gkdp</a>
          </li>
          <li>
            <a href="#" onClick={(e) => e.preventDefault()}>Fortizar</a>
          </li>
        </ul>
      </div>
    </div>

    <style jsx>{`
      .list {
        display: flex;
        flex-direction: column;
      }

      .title {
        font-size: 3rem;
      }

      .projects ul {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        justify-content: center;
      }

      .projects ul li a {
        color: #8e8e8e;
        text-decoration: none;
        margin: 0 .5rem;
        transition: all .2s ease;
      }

      .projects ul li a:hover {
        color: #d3d3d3;
      }
    `}</style>
  </Page>
)
