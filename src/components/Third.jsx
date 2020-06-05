import React from 'react';
import Main from './Main';
import './styles/First.css';
import table1 from '../assets/table1.png';
import table2 from '../assets/table2.png';

export default function Third(){
	return(
		<div className="third">
			<Main name="Қазақ тіліндегі диалект базасы" desc =""/>
			<div className="sites">
				<div className="blocks">
					<p>
						<strong style={{textAlign:"center"}}>Қазақ тіліндегі диалект базасы</strong>
<br/><br/>Мысалы, Қатон - Қарағай ауданында "бөстек"(көпшік), "шоқпыт"(тряпка), "қамыс"(ет турайтын тақтайша), "биялай"(қолғап), "күлапара"(капешон), "шақал"(кішкентай), "еееа"(иə) десе. Зайсан, Тарбағатай өңірінде "щемішке"(сеймички), сейңке(веранда), тəпішпақ, шарқай(тапочка), кəтел(шелек), бақыр(ожау), алқа(сырға). Күршім, Марқакөл өңірлерінде "діңке"(қауын), леген(тазик), əгуршік(огурцы), күпəна(шөптің отауы)
   <br/><br/><strong>(Күнбағыс майы)</strong>
<br/>Сумай — Алматы, 
<br/>Сұйық май — Солтүстік Қазақстан, Талдықорған, Алматы 
<br/>Шағу май — Батыс Қазақстан  
<br/>Шемішке май — Орталық Қазақстан, Атырау.

     <br/><br/><strong>(Майлық)</strong> 
<br/>Сулық — Батыс Қазақстан 
<br/>Шашық — Оңтүстік Қазақстан 
<br/>Орамал — Орталық Қазақстан.
<br/>  <br/> <strong>(Кесе)</strong>
<br/>Шыны — Алматы 
<br/>Пиала — Оңтүстік Қазақстан 
<br/>Кәсе — Батыс Қазақстан
<br/>  <br/> <strong>(Өте үлкен)</strong>
<br/>Дәу — Орталық Қазақстан, Тараз, Алматы 
<br/>Нән — Батыс Қазақстан 
<br/>Дәкөй — Көкшетау 
<br/>Зор — Оңтүстік Қазақстан
<br/>   <br/><strong>(Леген)</strong> 
<br/>Табақ — Батыс Қазақстан 
<br/>Шылапшын — Батыс, Оңтүстік Қазақстан 
<br/>Кірші — Алматы
<br/>   <br/><strong>(Жеңге)</strong>
<br/>  Жеңеше — Қызылорда
<br/>Тәтай апа — Батыс Қазақстан 
<br/>Жише — Оңтүстік Қазақстан
<br/>Дише — Тараз

					</p>
					<img src={table1} alt=""/>
					<img src={table2} alt=""/>
				</div>
			</div>
		</div>	
	);
}
