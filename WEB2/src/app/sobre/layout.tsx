
export const metadata = {
  title: "Sobre | Front-End Insights",
  description: "A Front-End Insights é uma newslater semanal dedicada a fornecer conhecimentos valorosos sobre  omundo do desenvolvimento front-end.",
  openGraph: {
    title: "Sobre | Front-End Insights",
    description: "A Front-End Insights é uma newslater semanal dedicada a fornecer conhecimentos valorosos sobre  omundo do desenvolvimento front-end."
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1>Layout da página sobre</h1>
      {children}
    </div>
  )
}
