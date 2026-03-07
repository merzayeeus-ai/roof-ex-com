import { Suspense, lazy } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
const Home = lazy(() => import("@/pages/home"));

const LazyToaster = lazy(() => import("@/components/ui/toaster").then(m => ({ default: m.Toaster })));

const Services = lazy(() => import("@/pages/services"));
const Residential = lazy(() => import("@/pages/residential"));
const Commercial = lazy(() => import("@/pages/commercial"));
const Flat = lazy(() => import("@/pages/flat"));
const RoofRepair = lazy(() => import("@/pages/roof-repair"));
const Gutters = lazy(() => import("@/pages/gutters"));
const Skylights = lazy(() => import("@/pages/skylights"));
const Emergency = lazy(() => import("@/pages/emergency"));
const About = lazy(() => import("@/pages/about"));
const Story = lazy(() => import("@/pages/story"));
const Reviews = lazy(() => import("@/pages/reviews"));
const Contact = lazy(() => import("@/pages/contact"));
const Methodology = lazy(() => import("@/pages/methodology"));
const Financing = lazy(() => import("@/pages/financing"));
const Gallery = lazy(() => import("@/pages/gallery"));
const Privacy = lazy(() => import("@/pages/privacy"));
const Terms = lazy(() => import("@/pages/terms"));
const Blog = lazy(() => import("@/pages/blog"));
const Sitemap = lazy(() => import("@/pages/sitemap"));
const ServiceAreas = lazy(() => import("@/pages/service-areas"));
const CityGuides = lazy(() => import("@/pages/city-guides"));
const BlogArticle = lazy(() => import("@/pages/blog-article"));
const RoofReplacement = lazy(() => import("@/pages/roof-replacement"));
const FAQ = lazy(() => import("@/pages/faq"));
const CityPage = lazy(() => import("@/pages/city-page"));
const CityGuidePage = lazy(() => import("@/pages/city-guide-page"));
const CityServicePage = lazy(() => import("@/pages/city-service-page"));
const FieldNotes = lazy(() => import("@/pages/field-notes"));
const FieldNotesPost = lazy(() => import("@/pages/field-notes-post"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/roof-replacement" component={RoofReplacement} />
        <Route path="/faq" component={FAQ} />
        <Route path="/residential" component={Residential} />
        <Route path="/commercial" component={Commercial} />
        <Route path="/flat" component={Flat} />
        <Route path="/roof-repair" component={RoofRepair} />
        <Route path="/gutters" component={Gutters} />
        <Route path="/skylights" component={Skylights} />
        <Route path="/emergency" component={Emergency} />
        <Route path="/about" component={About} />
        <Route path="/story" component={Story} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/contact" component={Contact} />
        <Route path="/methodology" component={Methodology} />
        <Route path="/financing" component={Financing} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/field-notes" component={FieldNotes} />
        <Route path="/blog/field-notes/:postId" component={FieldNotesPost} />
        <Route path="/blog/:slug" component={BlogArticle} />
        <Route path="/sitemap" component={Sitemap} />
        <Route path="/service-areas" component={ServiceAreas} />
        <Route path="/city-roofing-guides" component={CityGuides} />
        <Route path="/city-roofing-guides/:city" component={CityGuidePage} />
        <Route path="/:city/roof-repair" component={CityServicePage} />
        <Route path="/:city/roof-replacement" component={CityServicePage} />
        <Route path="/:city/residential-roofing" component={CityServicePage} />
        <Route path="/:city/commercial-roofing" component={CityServicePage} />
        <Route path="/:city/gutters" component={CityServicePage} />
        <Route path="/:city" component={CityPage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Suspense fallback={null}>
        <LazyToaster />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
