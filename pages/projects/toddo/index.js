import Page from '../../../layouts/app'
import Header from '../../../components/header'
import Footer from '../../../components/footer'

const Toddo = () => (
  <Page>
    <Header subtitle="Toddo" />

    <div className="content">
      <div className="container">
        Toddo is een reserveringssysteem voor kleine campings, hotels en
        groepaccommodaties.{' '}
        <a href="mailto:info@solestium.nl" className="link">
          Neem contact op
        </a>{' '}
        voor vragen.
      </div>
    </div>

    <style jsx>{`
      .link {
        text-decoration: none;
      }

      .link:hover {
        text-decoration: underline;
      }
    `}</style>
    <Footer />
  </Page>
)

export default Toddo
