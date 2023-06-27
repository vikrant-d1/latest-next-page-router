import Header from './Header'
import Footer from './Footer'
 
export default function Layout({ children,headerData='' }) {

  return (
    <>
      <Header headerData={headerData}/>
      <main>{children}</main>
      <Footer />
    </>
  )
}


