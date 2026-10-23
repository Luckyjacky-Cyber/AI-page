(() => {
  const $ = selector => document.querySelector(selector);
  const chapters = [
    { label:'CHAPTER 01 / THE ARRIVAL',title:'越过已知',subtitle:'边界之外。',intro:['当最后一束地球的光消失在身后，','我们开始，重新想象远方。'],log:'星门近在眼前。我们减慢航速，让未知先一步靠近。',sector:'07',coordinate:'SECTOR 07 / ORBITAL GATE',name:'AE—01 / 轨道之门',en:'THE LAST LIGHT OF HOME',number:'001' },
    { label:'CHAPTER 02 / THE SILENCE',title:'万籁俱寂',subtitle:'听见宇宙。',intro:['穿过没有回声的漫长夜晚，','静默之中，依然有星光回应。'],log:'通讯进入静默。舷窗之外，一道微光标记了新的航线。',sector:'12',coordinate:'SECTOR 12 / SILENT EXPANSE',name:'AE—02 / 静默航域',en:'A SIGNAL BEFORE OUR TIME',number:'073' },
    { label:'CHAPTER 03 / THE BEYOND',title:'远方未尽',subtitle:'想象不止。',intro:['地图在这里留下一片空白，','而我们的故事，才刚刚开始。'],log:'我们抵达地图的尽头，并将第一个坐标留给后来的人。',sector:'19',coordinate:'SECTOR 19 / UNCHARTED SPACE',name:'AE—03 / 黎明边境',en:'THE FIRST MORNING',number:'112' }
  ];
  const logs = [
    {title:'最后一盏灯',date:'2186.03.14',author:'沈遥 / 舰长',paragraphs:[
      '星门启动前，地球还有七分钟可见。舷窗边没有人说话。工程师陈砾把女儿画的蓝色房子贴在控制台下方，那张纸轻得几乎没有重量，却占满了他全部的行李。',
      '我们没有带旗帜。货舱里是四百粒种子、一座压缩后的图书馆，以及一台会在每天清晨播放鸟鸣的旧录音机。',
      '航行日志要求我记录引擎状态。我写下“正常”，又在私人备注里添了一句：我们都很害怕。但没有人提出返航。'
    ]},
    {title:'比我们更早的回声',date:'2186.05.25',author:'林弦 / 通讯官',paragraphs:[
      '信号出现在第三次轮值的末尾。每隔十七秒，三段短脉冲，一段长脉冲。自动系统把它标成恒星噪声，我却听见了某种犹豫，像一句反复练习、仍说不出口的问候。',
      '守望号停在陨石带外侧，游隼号关闭主引擎，任由惯性带它靠近信号源。舰队第一次如此安静，连食堂的餐具碰撞声，都让人觉得太响。',
      '译文只有两句：“不要追逐最亮的星。请寻找，仍然记得你们的那一颗。”发送时间早于我们启航一百二十六年。那一夜，我没有问是谁在呼唤。先轻声回答了一句：我们在。'
    ]},
    {title:'给后来的人',date:'2186.07.03',author:'陈砾 / 首席工程师',paragraphs:[
      '那颗行星没有名字。第一次日出时，金色的光沿海岸铺开，远汐号的舷窗像一排终于亮起的家门。种子库管理员抱着恒温箱站了很久，却没有急着打开它。',
      '我们先测量空气，再记录潮汐，最后在岩岸上竖起信标。舰长拒绝把这里命名为“新地球”。她说，一颗星球不应该一见面，就背负另一颗星球的过去。',
      '信标里没有领地声明，只有我们的来路、一份海图，和那段清晨的鸟鸣。我把蓝色房子的画扫描进去。也许很多年以后，会有另一个离家的人，在这里听见一个熟悉的早晨。'
    ]}
  ];
  const ships = [
    {name:'远汐号',latin:'THE LONG TIDE',class:'AE—01 / 远征巡洋舰',description:'舰队的灯塔与归处。分段装甲下，藏着生态舱、观测甲板，以及全体船员共同守护的地球种子库。',length:'860',crew:'240',role:'深空远征',view:'舰艏左舷 / 三分之四视角',detail:'分段式装甲与双列引擎',body:'舰艏的观测阵列收集航线数据；中段的独立隔舱隔离冲击；舰尾的双列聚变引擎为长距离巡航提供推力。'},
    {name:'守望号',latin:'THE SENTINEL',class:'AE—07 / 装甲护航舰',description:'永远航行在舰队最外侧。楔形舰艏与厚重装甲迎向碎石和辐射，为身后的同伴留下一条安静的航路。',length:'420',crew:'96',role:'航路护卫',view:'分叉舰艏 / 前侧视角',detail:'双叉舰艏与多层装甲',body:'分叉式舰艏容纳双套独立传感器，中央留出碎片偏导通道。叠层装甲保护居住核心，侧向姿态喷口让厚重舰身也能精确转向。'},
    {name:'游隼号',latin:'THE PEREGRINE',class:'AE—12 / 高速侦察舰',description:'最先看见远方，也最晚离开黑暗。轻量陶瓷舰体与后掠翼面，让它成为穿越未知航域的第一道微光。',length:'138',crew:'18',role:'先遣侦察',view:'后掠翼面 / 舰尾侧视角',detail:'轻量舰体与矢量推进',body:'细长舰体降低航行正面的尘埃碰撞风险；后掠结构容纳折叠探测阵列，尾部矢量推进器负责快速变轨。它携带的不是更多装甲，而是更早返回的消息。'}
  ];
  const panels = [...document.querySelectorAll('.scene-panel')];
  const rail = [...document.querySelectorAll('.scene-nav a:not(.return-link)')];
  const chapterTabs = [...document.querySelectorAll('[data-chapter-choice]')];
  const logTabs = [...document.querySelectorAll('[data-log]')];
  const shipTabs = [...document.querySelectorAll('[data-ship-choice]')];
  let chapter = 0, section = 0, log = 0;
  const text = (selector,value) => { $(selector).textContent = value; };
  function setTabs(tabs,index) {
    tabs.forEach((tab,i) => { tab.setAttribute('aria-selected', String(i === index)); tab.tabIndex = i === index ? 0 : -1; });
  }
  function bindTabs(tabs,select) {
    tabs.forEach((tab,i) => {
      tab.addEventListener('click', () => select(i));
      tab.addEventListener('keydown', event => {
        let next;
        if (event.key === 'ArrowRight') next = (i+1)%tabs.length;
        if (event.key === 'ArrowLeft') next = (i+tabs.length-1)%tabs.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = tabs.length-1;
        if (next !== undefined) {event.preventDefault();select(next);tabs[next].focus();}
      });
    });
  }
  function selectChapter(index) {
    chapter = index;
    const c = chapters[index];
    if (section === 0) { document.body.dataset.chapter = index; text('#sector',c.sector); }
    text('#chapter',c.label);
    $('#headline').replaceChildren(document.createTextNode(c.title),Object.assign(document.createElement('span'),{textContent:c.subtitle}));
    $('#intro').replaceChildren(document.createTextNode(c.intro[0]),document.createElement('br'),document.createTextNode(c.intro[1]));
    text('#log-text',c.log);text('#log-index','LOG '+c.number);text('#coordinates',c.coordinate);
    text('#world-name',c.name);text('#world-en',c.en);
    text('#journey',index === 2 ? '重新启航' : '下一段航程');
    $('#signal-console').hidden = index !== 1;
    $('#chapter-log').setAttribute('aria-labelledby','chapter-tab-'+index);
    setTabs(chapterTabs,index);
  }
  function selectLog(index) {
    log = index; const data = logs[index];
    text('#story-date',data.date);text('#story-author',data.author);text('#story-title',data.title);
    $('#story-body').replaceChildren(...data.paragraphs.map(value=>Object.assign(document.createElement('p'),{textContent:value})));
    text('#story-count','0'+(index+1)+' / 03');
    text('#next-log',index===2?'返回第一篇':'下一篇记录');
    $('#story-page').setAttribute('aria-labelledby','log-tab-'+index);setTabs(logTabs,index);
  }
  function selectShip(index) {
    const ship=ships[index]; document.body.dataset.ship=index;
    for(const [key,selector] of [['name','#ship-name'],['latin','#ship-latin'],['class','#ship-class'],['description','#ship-description'],['length','#ship-length'],['crew','#ship-crew'],['role','#ship-role'],['view','#ship-view'],['detail','#detail-title'],['body','#detail-body']]) text(selector,ship[key]);
    text('#ship-study','EXTERIOR STUDY · 0'+(index+1));
    $('#ship-panel').setAttribute('aria-labelledby','ship-tab-'+index);
    $('#ship-detail').hidden=true;$('#inspect-ship').setAttribute('aria-expanded','false');text('#inspect-ship','查看舰体细节');
    setTabs(shipTabs,index);
  }
  function setSection(index) {
    if (section === index && document.body.dataset.section !== undefined) return;
    section=index;document.body.dataset.section=index;document.body.dataset.chapter=index===0?chapter:index+2;
    panels.forEach((panel,i)=>panel.classList.toggle('is-current',i===index));
    rail.forEach((link,i)=>{ if(i===index)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current'); });
    text('#scene-number','0'+(index+1));$('#meter-fill').style.width=((index+1)/3*100)+'%';
    text('#sector',index===0?chapters[chapter].sector:index===1?'AR':'FL');
  }
  let scrollFrame=0;
  function syncSection() {
    scrollFrame=0;
    const line=innerHeight*.42;
    let index=0;
    panels.forEach((panel,i)=>{if(panel.getBoundingClientRect().top<=line)index=i;});
    setSection(index);
  }
  function scheduleSection(){if(!scrollFrame)scrollFrame=requestAnimationFrame(syncSection);}
  addEventListener('scroll',scheduleSection,{passive:true});addEventListener('resize',scheduleSection,{passive:true});addEventListener('load',scheduleSection);
  bindTabs(chapterTabs,selectChapter);bindTabs(logTabs,selectLog);bindTabs(shipTabs,selectShip);
  $('#journey').addEventListener('click',()=>selectChapter((chapter+1)%3));
  $('#read-current-log').addEventListener('click',()=>{selectLog(chapter);location.hash='archive';});
  $('#next-log').addEventListener('click',()=>selectLog((log+1)%3));
  $('#decode').addEventListener('click',()=>{
    const open=$('#signal-message').hidden;
    $('#signal-message').hidden=!open;$('#decode').setAttribute('aria-expanded',String(open));text('#decode',open?'收起译文':'解码信号');
  });
  $('#inspect-ship').addEventListener('click',()=>{
    const open=$('#ship-detail').hidden;
    $('#ship-detail').hidden=!open;$('#inspect-ship').setAttribute('aria-expanded',String(open));text('#inspect-ship',open?'收起舰体细节':'查看舰体细节');
  });
  function immersive(on){document.body.classList.toggle('immersive',on);$('#mode').setAttribute('aria-pressed',String(on));text('#mode',on?'退出沉浸':'沉浸模式');}
  $('#mode').addEventListener('click',()=>immersive(!document.body.classList.contains('immersive')));
  document.addEventListener('keydown',event=>{if(event.key==='Escape')immersive(false);});
  const about=$('#about');
  $('#story-open').addEventListener('click',()=>about.showModal());
  $('#story-close').addEventListener('click',()=>about.close());
  $('#story-go').addEventListener('click',()=>about.close());
  about.addEventListener('click',event=>{if(event.target!==about)return;const r=about.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)about.close();});
  // Keep old shared #arrival links working after adding the new scene index.
  if(location.hash==='#arrival')location.replace('#explore');
  syncSection();
})();
