import Link from 'next/link'

import Page from '../layouts/app'

export default () => (
  <Page>
    <div className="list">
      <div className="title">Solestium</div>

      <div className="projects">
        <ul>
          <li>
            <Link href="/projects/erooi">
              <a>Erooi</a>
            </Link>
          </li>
          <li>
            <Link href="/projects/gkdp">
              <a>Gkdp</a>
            </Link>
          </li>
          <li>
            <Link href="/projects/toddo">
              <a>Toddo</a>
            </Link>
          </li>
          <li>
            <Link href="/projects/foodrink">
              <a>Foodrink</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className="sub-title">
        Door <a href="https://jur.re">Jur.re</a>
      </div>
    </div>

    <style jsx global>{`
      #__next {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}</style>
    <style jsx>{`
      .list {
        display: flex;
        flex-direction: column;
      }

      .title {
        font-size: 3rem;
        text-align: center;
      }

      .sub-title {
        margin-top: 2rem;
        color: #8e8e8e;
        font-size: 0.75rem;
        text-align: center;
      }

      .sub-title a {
        color: #545454;
        text-decoration: none;
      }

      .sub-title a:hover {
        opacity: 0.8;
        text-decoration: underline;
      }

      .projects {
        text-align: center;
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
        margin: 0 0.5rem;
        transition: all 0.2s ease;
        letter-spacing: 1px;
      }

      .projects ul li a:hover {
        color: #d3d3d3;
      }
    `}</style>
  </Page>
)
