import Link from 'next/link';

export default () => (
  <div className="header">
    <div className="container">
      <div className="title">
        <Link href="/"><a>Solestium</a></Link>
      </div>
    </div>

    <style jsx>{`
      .header {
        padding: 3rem 0;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
      }

      .title {
        font-size: 1.75rem;
      }

      .title a {
        color: #1a202c;
        text-decoration: none;
        transition: all .2s ease;
      }

      .title a:hover {
        opacity: .6;
      }
    `}</style>
  </div>
)
