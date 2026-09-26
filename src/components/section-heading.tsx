import { Reveal } from '@/components/reveal'

interface SectionHeadingProps {
  index: string
  title: string
}

export function SectionHeading({ index, title }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12">
      <div className="flex items-baseline gap-4 border-b border-border pb-5">
        <span className="font-mono text-sm text-primary">{index}</span>
        <h2 className="font-heading text-3xl tracking-tight md:text-4xl">{title}</h2>
      </div>
    </Reveal>
  )
}
