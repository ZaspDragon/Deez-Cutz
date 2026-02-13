
const daySel = document.getElementById("day");
const slotSel = document.getElementById("slot");
const nameInp = document.getElementById("name");
const list = document.getElementById("list");

async function loadSchedule(){
  const s = await fetch("/api/schedule").then(r=>r.json());
  daySel.innerHTML="";
  s.days.forEach(d=>{
    const o=document.createElement("option");
    o.value=d.label;
    o.textContent=d.label;
    daySel.appendChild(o);
  });
  loadSlots();
}

async function loadSlots(){
  const s = await fetch("/api/schedule").then(r=>r.json());
  const day=s.days.find(d=>d.label===daySel.value);
  slotSel.innerHTML="";
  day.slots.forEach(sl=>{
    const o=document.createElement("option");
    o.value=sl.name+"||"+sl.time;
    o.textContent=sl.name+" "+sl.time;
    slotSel.appendChild(o);
  });
}

daySel.onchange=loadSlots;

async function submit(status){
  const [slotName,slotTime]=slotSel.value.split("||");
  await fetch("/api/checkins",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
      day:daySel.value,
      slotName,
      slotTime,
      person:nameInp.value,
      status
    })
  });
  loadList();
}

document.getElementById("here").onclick=()=>submit("HERE");
document.getElementById("otw").onclick=()=>submit("OTW");

async function loadList(){
  const rows=await fetch("/api/checkins").then(r=>r.json());
  list.innerHTML=rows.map(r=>`
    <div>${r.person} — ${r.status} — ${r.slot_name} ${r.slot_time}</div>
  `).join("");
}

loadSchedule().then(loadList);
setInterval(loadList,5000);
