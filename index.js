import { useState } from 'react';
import useSWR from 'swr';
const fetcher = (url)=> fetch(url).then(r=>r.json());

export default function Home() {
  const [q, setQ] = useState('');
  const [loc, setLoc] = useState('');
  const { data, mutate } = useSWR(null, null);
  async function doSearch(e){
    e.preventDefault();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000'}/api/search?q=${encodeURIComponent(q)}&location=${encodeURIComponent(loc)}&page=1`);
    const js = await res.json();
    mutate(js, false);
  }
  return (
    <main style={{display:'flex',flexDirection:'column',alignItems:'center',padding:24}}>
      <h2>Find Your Next Job — ألقِ وظيفة أحلامك</h2>
      <form onSubmit={doSearch} style={{width:'100%',maxWidth:800,display:'flex',gap:8}}>
        <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search jobs, companies, skills | ابحث عن وظيفة أو شركة" style={{flex:1,padding:12,fontSize:16}}/>
        <input value={loc} onChange={(e)=>setLoc(e.target.value)} placeholder="Location | الموقع" style={{width:200,padding:12,fontSize:16}}/>
        <button type="submit" style={{padding:'12px 20px'}}>Search</button>
      </form>
      <section style={{width:'100%',maxWidth:900,marginTop:20}}>
        {!data && <p>Enter a query to start searching.</p>}
        {data && data.results && data.results.map(job=>(
          <article key={job.id} style={{border:'1px solid #eee',padding:12,marginBottom:8}}>
            <h3>{job.title} — {job.company && job.company.name}</h3>
            <p>{job.location} • {job.source}</p>
            <a href={job.apply_url} target="_blank" rel="noreferrer">Apply</a>
          </article>
        ))}
      </section>
    </main>
  )
}