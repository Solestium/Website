import Page from '../../../layouts/app'
import Header from '../../../components/header'
import Footer from '../../../components/footer'

const MusiParty = () => (
  <Page>
    <Header subtitle="MusiParty" />

    <div className="content">
      <div className="container">
        MusiParty is gemaakt om gezamenlijk YouTube videos te kunnen bekijken.
        Het is ideaal om te gebruiken voor een groeps afspeellijst voor
        muziekvideos.{' '}
        <a href="https://musiparty.com" target="_blank" className="link">
          Ga naar MusiParty
        </a>
        .
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

export default MusiParty
