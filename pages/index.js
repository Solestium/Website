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
            <Link href="/projects/foodrink">
              <a>Foodrink</a>
            </Link>
          </li>
        </ul>
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
