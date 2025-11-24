import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Handshake, Globe } from "lucide-react";

export function OurCollective() {
  return (
    <section id="collective" className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center scroll-reveal">
          <Badge className="mb-4 font-light bg-white text-black border-white hover:bg-white/90">
            Our Collective
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-extralight mb-6 text-white">
            Where conviction capital
            <br />
            meets <span className="font-light">catalytic community</span>
          </h2>
          <p className="text-xl font-extralight text-white/60 max-w-3xl mx-auto">
            The LP Collective is where conviction partners, ecosystem builders,
            and diaspora networks come together to shape India's innovation future.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-black border-white/20 hover:bg-white/5 transition-all duration-500 hover:scale-105 hover:border-white/40 group scroll-reveal">
            <CardHeader>
              <div className="p-4 bg-white/10 border border-white/20 rounded-lg w-fit mb-4 group-hover:bg-white/20 transition-colors duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="font-light text-2xl text-white">LP Collective I</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-extralight text-white/60 leading-relaxed mb-4">
                Our founding partners who see the signal before the noise.
                Conviction-first capital with ecosystem alignment.
              </p>
              <div className="space-y-2 text-sm font-extralight text-white/50">
                <div>→ Early access to deal flow</div>
                <div>→ Co-investment opportunities</div>
                <div>→ Portfolio insights and signals</div>
                <div>→ Network effects and community</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black border-white/20 hover:bg-white/5 transition-all duration-500 hover:scale-105 hover:border-white/40 group scroll-reveal">
            <CardHeader>
              <div className="p-4 bg-white/10 border border-white/20 rounded-lg w-fit mb-4 group-hover:bg-white/20 transition-colors duration-300">
                <Handshake className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="font-light text-2xl text-white">Conviction Partners</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-extralight text-white/60 leading-relaxed mb-4">
                Operators, mentors, and ecosystem builders who amplify our impact.
                Value-add beyond capital.
              </p>
              <div className="space-y-2 text-sm font-extralight text-white/50">
                <div>→ Mentor networks</div>
                <div>→ Operational expertise</div>
                <div>→ Strategic introductions</div>
                <div>→ Portfolio support</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black border-white/20 hover:bg-white/5 transition-all duration-500 hover:scale-105 hover:border-white/40 group scroll-reveal">
            <CardHeader>
              <div className="p-4 bg-white/10 border border-white/20 rounded-lg w-fit mb-4 group-hover:bg-white/20 transition-colors duration-300">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="font-light text-2xl text-white">Diaspora Circles</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-extralight text-white/60 leading-relaxed mb-4">
                Global Indian networks bringing capital, expertise, and connectivity home.
                Cross-border bridges.
              </p>
              <div className="space-y-2 text-sm font-extralight text-white/50">
                <div>→ Global market access</div>
                <div>→ International expertise</div>
                <div>→ Cross-border partnerships</div>
                <div>→ Knowledge transfer</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-xl border border-white/20 bg-white/5">
            <p className="text-lg font-extralight text-white/80 max-w-2xl">
              "We're inviting conviction partners who see the signal before the noise.
              Partners who understand that India's innovation moment is now."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
