import projectRes from "@/assets/project-residential.webp";
import projectCom from "@/assets/project-commercial.webp";
import projectLux from "@/assets/project-luxury.webp";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ProjectsGallery() {
  const projects = [
    {
      image: projectRes,
      title: "Suburban Renewal",
      category: "Residential",
      desc: "Complete tear-off and replacement with architectural shingles."
    },
    {
      image: projectCom,
      title: "Tech Park HQ",
      category: "Commercial",
      desc: "TPO flat roof installation for 50,000 sq ft office complex."
    },
    {
      image: projectLux,
      title: "Estate Restoration",
      category: "Premium",
      desc: "Natural slate restoration with copper flashing details."
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-4xl font-display font-bold text-primary">Featured Projects</h2>
            <p className="text-muted-foreground text-lg">
              From family homes to corporate headquarters, we deliver excellence in every square foot.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex gap-2 text-primary border-primary hover:bg-primary hover:text-white">
            View All Projects <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group relative rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                <Badge className="bg-secondary hover:bg-secondary text-white border-none mb-3">
                  {project.category}
                </Badge>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden">
          <Button variant="outline" className="w-full gap-2 text-primary border-primary">
            View All Projects <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
