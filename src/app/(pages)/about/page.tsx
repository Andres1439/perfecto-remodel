import { Users, Target, Building2 } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { HTMLAttributes } from "react";

// Custom Button component
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "default" | "lg";
}

const Button = ({ children, className = "", variant = "default", size = "default", ...props }: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

  const variantStyles = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
  };

  const sizeStyles = {
    default: "h-10 py-2 px-4",
    lg: "h-11 px-8 rounded-md",
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// Custom Card components
interface CardProps extends HTMLAttributes<HTMLDivElement> {}

const Card = ({ children, className = "", ...props }: CardProps) => {
  return (
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col ${className}`} {...props}>
      {children}
    </div>
  );
};

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

const CardContent = ({ children, className = "", ...props }: CardContentProps) => {
  return (
    <div className={`p-4 sm:p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
};

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: StaticImageData | string;
}

export default function HomeRenovation() {
  const teamMembers: TeamMember[] = [
    { id: 1, name: "John Carpenter", position: "CEO & Founder", image: "/team-1.jpg" },
    { id: 2, name: "Sarah Painter", position: "Lead Designer", image: "/team-2.jpg" },
    { id: 3, name: "Mike Renovator", position: "Operations Manager", image: "/team-3.jpg" },
  ];

  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="@container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Transforming Homes with Craftsmanship</h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Expert home renovation services including carpentry, painting, and complete home transformations.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="aspect-video relative w-full overflow-hidden rounded-xl">
            <Image
              src="/img/foto1.jpg"
              width={600}
              height={400}
              alt="Home renovation project"
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm">Established in 2010</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Story</h2>
            <p className="text-gray-500 md:text-lg/relaxed">
              Starting as a small local carpentry shop, we've grown into a full-service home renovation company. For over a decade, we've been
              transforming living spaces with precision and care, combining traditional craftsmanship with modern design.
            </p>
            <Button className="w-fit mt-4">View Our Projects</Button>
          </div>
        </div>

        <div className="space-y-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="flex-1">
              <CardContent className="flex flex-col items-center text-center space-y-4 min-h-[300px]">
                <div className="p-3 rounded-full bg-blue-100">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Our Expertise</h3>
                <p className="text-gray-500 text-sm md:text-base">
                  Custom carpentry, cabinet making, and wood restoration. Precision work for both traditional and contemporary spaces.
                </p>
              </CardContent>
            </Card>
            <Card className="flex-1">
              <CardContent className="flex flex-col items-center text-center space-y-4 min-h-[300px]">
                <div className="p-3 rounded-full bg-blue-100">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Our Promise</h3>
                <p className="text-gray-500 text-sm md:text-base">
                  Quality painting services with premium materials. Complete surface preparation and flawless finishing guaranteed.
                </p>
              </CardContent>
            </Card>
            <Card className="flex-1">
              <CardContent className="flex flex-col items-center text-center space-y-4 min-h-[300px]">
                <div className="p-3 rounded-full bg-blue-100">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Why Choose Us</h3>
                <p className="text-gray-500 text-sm md:text-base">
                  Licensed and insured professionals. We handle permits, designs, and project management for stress-free renovations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Leadership Team</h2>
            <p className="mt-4 max-w-[700px] mx-auto text-gray-500 md:text-lg/relaxed">
              Meet the experienced professionals guiding your home transformation
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col items-center space-y-4">
                <div className="relative h-32 w-32 sm:h-40 sm:w-40 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.position}`}
                    width={160}
                    height={160}
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 160px"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-500">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Transform Your Home?</h2>
          <p className="mt-4 max-w-[600px] mx-auto text-gray-500 md:text-lg/relaxed">
            Schedule a free consultation and let's create your dream space together
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Contact Us</Button>
            <Button size="lg" variant="outline">
              View Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
