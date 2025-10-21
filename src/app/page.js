import SectionOne from "./components/section_one"
import SectionTwo from "./components/section_two"
import Impact from "./components/impact"
import Testimonials from "./components/testimonials"
import AppFeatures from "./components/app_features"
import AppScreenshots from "./components/app_screenshots"
import SectionSix from "./components/section_six"

export const metadata = {
  title: "Edufeed Brains",
  description: "Education feeds the brain",
};

export default function Home() {
  return (
    <div>
      <SectionOne/>
      <SectionTwo/>
      <AppFeatures/>
      <AppScreenshots/>
      <Impact/>
      <Testimonials/>
      <SectionSix/>
    </div>
  )
}