const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;

// In-memory example store (replace with DB)
let jobs = [
  {
    id: 'job-1',
    title: 'Frontend Developer',
    company: {name:'Acme Co', logo:null, url:'#'},
    location: 'Doha, Qatar',
    description: 'Develop React apps',
    salary: null,
    posted_at: new Date().toISOString(),
    source: 'Example',
    apply_url: 'https://example.com/apply/1'
  }
];

app.get('/api/search', (req,res)=>{
  const q = (req.query.q||'').toLowerCase();
  const location = (req.query.location||'').toLowerCase();
  const page = parseInt(req.query.page||'1',10);
  const per = 20;
  const filtered = jobs.filter(j=>{
    return (!q || j.title.toLowerCase().includes(q) || (j.company && j.company.name.toLowerCase().includes(q)))
           && (!location || j.location.toLowerCase().includes(location));
  });
  res.json({page, per, total: filtered.length, results: filtered.slice((page-1)*per, page*per)});
});

app.post('/api/jobs', (req,res)=>{
  const data = req.body;
  const id = uuidv4();
  const job = Object.assign({id, posted_at: new Date().toISOString(), source: 'manual'}, data);
  jobs.push(job);
  res.json(job);
});

// Placeholder for source sync endpoint
app.post('/api/sources/sync', (req,res)=>{
  // Implement connectors to LinkedIn/Indeed/Bayt/RapidAPI etc.
  res.json({ok:true, message:'Sync placeholder - implement source connectors'});
});

app.listen(PORT, ()=>console.log('Find backend listening on', PORT));