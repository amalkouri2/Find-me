import React, {useState} from 'react';
import { Text, View, TextInput, Button, FlatList, Linking } from 'react-native';

export default function App() {
  const [q,setQ] = useState('');
  const [loc,setLoc] = useState('');
  const [results,setResults] = useState([]);
  async function doSearch(){
    try{
      const res = await fetch(`${process.env.EXPO_PUBLIC_API_BASE || 'http://localhost:4000'}/api/search?q=${encodeURIComponent(q)}&location=${encodeURIComponent(loc)}`);
      const js = await res.json();
      setResults(js.results || []);
    }catch(e){
      alert('Error connecting to API');
    }
  }
  return (
    <View style={{padding:20,flex:1}}>
      <Text style={{fontSize:20,fontWeight:'bold'}}>Find — ألقِ وظيفة أحلامك</Text>
      <TextInput placeholder="Search jobs..." value={q} onChangeText={setQ} style={{borderWidth:1,padding:8,marginTop:12}}/>
      <TextInput placeholder="Location" value={loc} onChangeText={setLoc} style={{borderWidth:1,padding:8,marginTop:8}}/>
      <Button title="Search" onPress={doSearch}/>
      <FlatList data={results} keyExtractor={item=>item.id} renderItem={({item})=>(
        <View style={{padding:12,borderBottomWidth:1}}>
          <Text style={{fontWeight:'bold'}}>{item.title} — {item.company && item.company.name}</Text>
          <Text>{item.location} • {item.source}</Text>
          <Text style={{color:'blue'}} onPress={()=>Linking.openURL(item.apply_url)}>Apply</Text>
        </View>
      )}/>
    </View>
  );
}