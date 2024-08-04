import { PencilSquareIcon, SparklesIcon, GlobeAltIcon } from '@heroicons/react/20/solid'
import rachslogo from './rachslogo.jpeg';

const features = [
  {
    name: 'Confection sur mesure.',
    description: 'Découvrez des vêtements uniques et élégants, conçus avec soin pour refléter votre style moderne et raffiné.',
    icon: PencilSquareIcon, // Icône représentant la personnalisation ou la couture
  },
  {
    name: 'Élégance rare.',
    description: 'Des pièces rares et sophistiquées, créées pour se démarquer et sublimer chaque moment de votre vie.',
    icon: SparklesIcon, // Icône représentant l\'élégance ou la brillance
  },
  {
    name: 'Tendances modernes.',
    description: 'Des créations à la pointe de la mode, offrant une esthétique contemporaine qui répond aux attentes des femmes modernes.',
    icon: GlobeAltIcon, // Icône représentant les tendances globales ou la mode
  }
];

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-primary-light sm:text-4xl font-sans">A propos de nous </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 font-ref">
                Nous sommes une boutique en ligne spécialisée dans la confection de vêtements rares et élégants pour les femmes modernes, alliant sophistication et originalité pour chaque occasion.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none font-ref">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-secondary-light" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src={rachslogo}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-xl shadow-xl ring-1 ring-gray-400/10"
          />
        </div>
      </div>
    </div>
  )
}
