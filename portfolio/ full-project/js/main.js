// 프로젝트 목록 (이름, 대표 이미지, 설명)
const projects = [
  { name: "DNS", img: "images/Result-Imgs/DNS-Server/example.jpg", desc: "도메인 이름과 IP 주소를 상호 변환하는 시스템." },
  { name: "DB", img: "images/Result-Imgs/DB/example.png", desc: "데이터를 효율적으로 저장·관리·검색하는 시스템." },
  { name: "FTP", img: "images/Result-Imgs/FTP/example.png", desc: "파일 전송을 위해 설계된 네트워크 프로토콜." },
  { name: "LogAnalyzer", img: "images/Result-Imgs/LogAnalyzer/example.png", desc: "로그 데이터를 수집·분석하는 소프트웨어." },
  { name: "NFS", img: "images/Result-Imgs/NFS/example.webp", desc: "네트워크로 파일을 공유하는 시스템." },
  { name: "OSSEC", img: "images/Result-Imgs/OSSEC/example.jpg", desc: "호스트 기반 침입 탐지 시스템(HIDS)." },
  { name: "PMM", img: "images/Result-Imgs/PMM/example.jpg", desc: "서버·디비 성능 모니터링 도구." },
  { name: "Samba", img: "images/Result-Imgs/Samba/example.png", desc: "윈도우와 유닉스 간 파일 및 프린터 공유 도구." },
  { name: "Snort", img: "images/Result-Imgs/Snort-IDS/example.png", desc: "네트워크 기반 침입 탐지/방지 시스템(NIDS/NIPS)." },
  { name: "Zabbix", img: "images/Result-Imgs/Zabbix/example.jpg", desc: "엔터프라이즈 IT 인프라 모니터링 도구." },
  { name: "보안 취약점", img: "images/Result-Imgs/DNS-Server/vuln.png", desc: "시스템 또는 소프트웨어의 보안상 허점." }
]


const listEl = document.getElementById('project-list');
projects.forEach((proj, idx) => {
  const li = document.createElement('li');
  li.className = "list-group-item border-bottom project-li";
  li.innerHTML = `<span class="fw-bold">${proj.name}</span>`;
  li.addEventListener('click', () => showProject(idx));
  listEl.appendChild(li);
});

function showProject(idx) {
  const proj = projects[idx];
  document.getElementById('main-title').innerText = proj.name;
  document.getElementById('main-desc').innerText = proj.desc;
  document.getElementById('main-image').src = proj.img;
  document.getElementById('main-image').alt = proj.name + " 대표 이미지";
  document.getElementById('main-link').href = "html/" + proj.name + ".html";
}

// 최초 초기화
showProject(0);

// 리스트 접기/펼치기 버튼
document.getElementById('list-toggle').addEventListener('click', function() {
  const ul = document.getElementById('project-list');
  const icon = document.getElementById('toggle-icon');
  const isCollapsed = !ul.classList.contains('show');
  if (isCollapsed) {
    ul.classList.add('show');
    this.setAttribute('aria-expanded', 'true');
    icon.innerHTML = "&#9660;";
  } else {
    ul.classList.remove('show');
    this.setAttribute('aria-expanded', 'false');
    icon.innerHTML = "&#9654;";
  }
});
