"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function BioPage() {
  const [tab, setTab] = useState("en");

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-12">
          <div className="relative w-48 h-48 rounded-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5"
              alt="Noelia Requena"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <Tabs defaultValue="en" value={tab} onValueChange={setTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-2 max-w-[200px]">
            <TabsTrigger value="en">English</TabsTrigger>
            <TabsTrigger value="es">Español</TabsTrigger>
          </TabsList>
          
          <TabsContent value="en" className="mt-6">
            <div className="prose prose-lg dark:prose-invert">
              <blockquote className="text-xl italic mb-12 border-l-4 pl-4">
                "When one becomes aware of the mystery of existence and does not understand it, but out of sheer sincerity and inner coherence, she needs answers even to the pain, then one finds her golden and wonderful Ariadna's thread"
                <footer className="text-sm mt-2">— Blas Cubells</footer>
              </blockquote>

              <div className="space-y-6">
                <p><strong>Born in Vic (Barcelona) in 1976.</strong></p>

                <div className="space-y-8">
                  <section>
                    <h3 className="text-lg font-semibold">1985-1991</h3>
                    <p>During my childhood I trained at the Escola de dibuix i art Masferrer in Vic with the teachers Pere Isern Puntí, Eduard Xandri Calvet, Lluís Bres Oliva, Lluís Gros Pujol...</p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold">1994-1995</h3>
                    <p>Studied at the Escola d'arts aplicades i oficis artístics (School of Applied Arts and Crafts) in Vic.</p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold">1997-2001</h3>
                    <p>Degree in Fashion Design from the Escola Superior de Disseny Bau in Barcelona.</p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold">2000-2001</h3>
                    <p>Millinery workshop in Barcelona with Nina Pawloswsky.</p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold">1999-2004</h3>
                    <p>Began working with the women's fashion brand Giménez&Zuazo and its other brand Boba by G&Z, with distribution nationally and internationally through 250 multi-brands channels in Spain, France, Italy, Japan and others.</p>
                    <p>Under the leadership of the partners, co-managed the design department. I was responsible for the entire design process and the illustrations, developing the collections, researching the latest looks and trends, design, drafting and supervising the technical specifications, coordination with the patterns team, managing accessories and materials, coordination with fabric printing and production companies.</p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold">2004-2010</h3>
                    <p>Creative director and founding partner of the women's fashion brand Obvia. Development of the business idea, part of the management team, co-director of the design department, director of production, director of sales. National distribution to multi-brand points of sale in Spain. Local production.</p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold">2010-2018</h3>
                    <p>Freelance Textile Graphic Designer. Designer of prints for women, men and children's clothing for Padma Diseño S.L., Zara, Pull&Bear, Bershka, Mango, Replay, Springfield, Blue Inc., Studio F Women / STF Group Colombia...</p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold">2019</h3>
                    <p>Left the world of fashion and illustration to begin looking for a more intimate mode of expression.</p>
                    <p>In parallel with my professional career, I maintained a constant level of training in the art world, with incursions into a variety of techniques such as lacquer, ceramics, sculpture, oils, art for children, artist books, as well as astrology and active learning.</p>
                  </section>

                  <section>
                    <p>Currently, I live with my partner, the multidisciplinary artist Sergio Forés. Mother to two children and searching for alternative ways of life and education. In 2014 I moved to a small village in Alt Penedès surrounded by vineyards and nature.</p>
                  </section>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="es" className="mt-6">
            <div className="prose prose-lg dark:prose-invert">
              <blockquote className="text-xl italic mb-12 border-l-4 pl-4">
                "Cuando uno toma conciencia del misterio de la existencia y no lo comprende, pero por pura sinceridad y coherencia interior, necesita respuestas incluso al dolor, entonces encuentra su dorado y maravilloso hilo de Ariadna"
                <footer className="text-sm mt-2">— Blas Cubells</footer>
              </blockquote>

              <div className="space-y-6">
                <p><strong>Nacida en Vic (Barcelona) en 1976.</strong></p>

                <div className="space-y-8">
                  <section>
                    <h3 className="text-lg font-semibold">1985-1991</h3>
                    <p>Durante mi infancia me formé en la Escola de dibuix i art Masferrer de Vic con los profesores Pere Isern Puntí, Eduard Xandri Calvet, Lluís Bres Oliva, Lluís Gros Pujol...</p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold">1994-1995</h3>
                    <p>Estudié en la Escola d'arts aplicades i oficis artístics de Vic.</p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold">1997-2001</h3>
                    <p>Licenciatura en Diseño de Moda en la Escola Superior de Disseny Bau de Barcelona.</p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold">2000-2001</h3>
                    <p>Taller de sombrerería en Barcelona con Nina Pawloswsky.</p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold">1999-2004</h3>
                    <p>Comencé a trabajar con la marca de moda femenina Giménez&Zuazo y su otra marca Boba by G&Z, con distribución nacional e internacional a través de 250 canales multimarca en España, Francia, Italia, Japón y otros.</p>
                    <p>Bajo la dirección de los socios, cogestioné el departamento de diseño. Fui responsable de todo el proceso de diseño y las ilustraciones, desarrollando las colecciones, investigando las últimas tendencias, diseño, redacción y supervisión de las especificaciones técnicas, coordinación con el equipo de patrones, gestión de accesorios y materiales, coordinación con empresas de estampación y producción.</p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold">2004-2010</h3>
                    <p>Directora creativa y socia fundadora de la marca de moda femenina Obvia. Desarrollo de la idea de negocio, parte del equipo directivo, codirectora del departamento de diseño, directora de producción, directora de ventas. Distribución nacional a puntos de venta multimarca en España. Producción local.</p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold">2010-2018</h3>
                    <p>Diseñadora Gráfica Textil Freelance. Diseñadora de estampados para ropa de mujer, hombre y niños para Padma Diseño S.L., Zara, Pull&Bear, Bershka, Mango, Replay, Springfield, Blue Inc., Studio F Women / STF Group Colombia...</p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold">2019</h3>
                    <p>Dejé el mundo de la moda y la ilustración para comenzar a buscar un modo de expresión más íntimo.</p>
                    <p>En paralelo a mi carrera profesional, mantuve una formación constante en el mundo del arte, con incursiones en diversas técnicas como laca, cerámica, escultura, óleos, arte para niños, libros de artista, así como astrología y aprendizaje activo.</p>
                  </section>

                  <section>
                    <p>Actualmente, vivo con mi pareja, el artista multidisciplinar Sergio Forés. Madre de dos hijos y en búsqueda de formas alternativas de vida y educación. En 2014 me trasladé a un pequeño pueblo del Alt Penedès rodeado de viñedos y naturaleza.</p>
                  </section>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}