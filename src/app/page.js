import Header from "./components/header"
import SectionOne from "./components/section_one"
import SectionTwo from "./components/section_two"
import Impact from "./components/impact"
import Testimonials from "./components/testimonials"
import AppFeatures from "./components/app_features"
import AppScreenshots from "./components/app_screenshots"
import SectionSix from "./components/section_six"
import Footer from "./components/footer"

export default function Home() {
  return (
    <div>
      <Header/>
      <SectionOne/>
      <SectionTwo/>
      <AppFeatures/>
      <AppScreenshots/>
      <Impact/>
      <Testimonials/>
      <SectionSix/>
      <Footer/>
    </div>
  )
}