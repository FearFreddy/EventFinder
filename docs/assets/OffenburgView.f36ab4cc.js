import{r as b,a as k,o as O,v as c,b as a,c as r,d,F as x,e as y,f as w,E as B,g as _}from"./index.570bdb55.js";const V={key:0,class:"loading-spinner"},D=_("div",{class:"spin"},null,-1),M=[D],j={key:1},A=_("h2",null,"No events",-1),F=[A],T={__name:"OffenburgView",setup(I){const o=b([]),l=k(!0);return O(()=>{if(Object.keys(c).length===0)l.value=!1;else{let u=0;Object.entries(c).forEach(([i,e])=>{fetch("https://www.eventbriteapi.com/v3/venues/"+e+"/events/",{method:"GET",headers:{Authorization:"Bearer "+{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}.VITE_API_KEY}}).then(s=>{s.json().then(g=>{g.events.forEach(n=>{const t=new Date(n.start.utc),h=t.getTime(),m=t.getMonth()+1,f=t.getMinutes()?t.getMinutes():"00",p={title:n.name.text,details:n.description.text,url:n.url,venue:i,logo:n.logo.url,date:t.getDate()+"."+m+"."+t.getFullYear()+" - "+t.getHours()+":"+f,tstamp:h};o.push(p),o.sort((v,E)=>v.tstamp>E.tstamp?1:-1)}),u+=1,u==Object.keys(venuesStuttgart).length&&(l.value=!1)})}).catch(s=>{console.error(s)})})}}),(u,i)=>(a(),r("main",null,[l.value?(a(),r("div",V,M)):d("",!0),!l.value&&o.length===0?(a(),r("div",j,F)):d("",!0),(a(!0),r(x,null,y(o,(e,s)=>(a(),w(B,{heading:e.title,details:e.details,url:e.url,date:e.date,venue:e.venue,logo:e.logo,index:s,key:e.id},null,8,["heading","details","url","date","venue","logo","index"]))),128))]))}};export{T as default};
