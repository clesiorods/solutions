import Image from 'next/image'

export default function Home() {
  return (
    <main>
        <div className="row">
          <div className="col-md-6">
            <div style={{height:'200px', width:'100%', backgroundColor:'var(--primary-green)'}} >
              aaaa
            </div>
          </div>
          <div className="col-md-6">
            <div style={{height:'200px', width:'100%', backgroundColor:'red'}} >
              aaaa
            </div>
          </div>
        </div>
    </main>
  )
}
