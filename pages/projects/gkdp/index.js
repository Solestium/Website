import Page from '../../../layouts/app';
import Header from '../../../components/header';

export default () => (
  <Page>
    <Header />

    <div className="content">
      <div className="container">
      Wordt gebruikt als ssh tunnel. Hierdoor kan eenvoudig en veilig een verbinding worden opengezet om lokale projecten toegankelijk te maken aan het internet.
      </div>
    </div>

    <style jsx>{`
      .content {
        color: #676767;
        padding-top: 1rem;
        font-size: 1.1rem;
        letter-spacing: 1px;
      }
    `}</style>
  </Page>
)
