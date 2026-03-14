const API = window.location.origin;

// ════════════════════════════════════════════════════
//  STUDENT DATA — sourced from event registration CSV
//  Only students who registered at the event are allowed to vote.
//  Students without a registered email have been removed.
// ════════════════════════════════════════════════════
let ALPHA_STUDENTS = [
  {name:"AARAV PATHAK",                    email:"aaravpathak9984@gmail.com"},
  {name:"ADITYA MUKESH",                   email:"adityamukesh111@gmail.com"},
  {name:"ADITYA PATHAK",                   email:"adityapathak039@gmail.com"},
  {name:"AKSHITA SAXENA",                  email:"saxenashita.21@gmail.com"},
  {name:"AMAN KUMAR",                      email:"armnkumar321@gmail.com"},
  {name:"ANJALI MISHRA",                   email:"anjali20607@gmail.com"},
  {name:"ANSHU RAJ BISOYI",                email:"anshurajbisoyi98@gmail.com"},
  {name:"ANUJ SONKAR",                     email:"anujsonkar12bicbly@gmail.com"},
  {name:"ANUSHKA SINGH",                   email:"anushkageetasingh@gmail.com"},
  {name:"ARPIT SARDA",                     email:"arpitsarda@gmail.com"},
  {name:"ARYAN SINGH",                     email:"aryansinghnea@gmail.com"},
  {name:"AYUSH PANDEY",                    email:"pandeybrand043@gmail.com"},
  {name:"AYUSH KUMAR SINGH",               email:"ayushsingh1772004@gmail.com"},
  {name:"BHAVESH PANDEY",                  email:"bhaveshpandey563@gmail.com"},
  {name:"DEPESH SIKARWAR",                 email:"sikarwardepesh07@gmail.com"},
  {name:"DEVASHISH",                       email:"devashish10079@gmail.com"},
  {name:"DIPESH SINGH",                    email:"dipeshnrsinghraj@gmail.com"},
  {name:"DIVYANSH GUPTA",                  email:"divyanshvinu12@gmail.com"},
  {name:"EKANSH BANSAL",                   email:"ekanshbannsal@gmail.com"},
  {name:"GAUTAM KUMAR",                    email:"gautamkumar2020x@gmail.com"},
  {name:"GOURAV",                          email:"souravgridhari2010@gmail.com"},
  {name:"GURDEEP SINGH",                   email:"gurdeepslr80@gmail.com"},
  {name:"HARSHITA",                        email:"hars4969@gmail.com"},
  {name:"JAGJEET KUMAR",                   email:"jagjeetkumarmaurya121122@gmail.com"},
  {name:"JIYA KAUSHIK",                    email:"pk1057591@gmail.com"},
  {name:"KIRAN SINHA",                     email:"sinhakiran872@gmail.com"},
  {name:"KUNAL PATEL",                     email:"kp931816@gmail.com"},
  {name:"KUSHAGRA GOEL",                   email:"kushagragoelgg2006@gmail.com"},
  {name:"MANIKESH KUMAR",                  email:"kumarmanikesh91@gmail.com"},
  {name:"MANSA BHATT",                     email:"mansabhatt62587@gmail.com"},
  {name:"MAYANGLAMBAM LANCHENBA SINGH",    email:"lanchenba2863@gmail.com"},
  {name:"MAYANK RAJPUT",                   email:"r18mayank@gmail.com"},
  {name:"MOLLY ARORA",                     email:"aroramolly54@gmail.com"},
  {name:"NIKHIL SINGH",                    email:"thakurnikhilsingh7985@gmail.com"},
  {name:"PAWAN UNIYARA",                   email:"pmm60718@gmail.com"},
  {name:"PARTH SARTHI",                    email:"sarthiparth2006@gmail.com"},
  {name:"PRAKHAR RAJ",                     email:"prakharraj006@gmail.com"},
  {name:"REWAS KHATRI",                    email:"rewaskhatri02@gmail.com"},
  {name:"RISHAV RAJ",                      email:"rishavraj.rr1234@gmail.com"},
  {name:"SAGAR KUMAR",                     email:"sagar0206mahran@gmail.com"},
  {name:"SAMAR KUMAR",                     email:"samarkumar4355@gmail.com"},
  {name:"SAROJ VISHWAKARMA",               email:"saroj321r@gmail.com"},
  {name:"SAURAV KUMAR",                    email:"krsauvi@gmail.com"},
  {name:"SHREE AADYA SHARMA",              email:"shreeaadya04@gmail.com"},
  {name:"SHUBHAM KUMAR",                   email:""},
  {name:"SIYA BHARDWAJ",                   email:"siyab8160@gmail.com"},
  {name:"SOFIYA",                          email:"sofiaali1521@gmail.com"},
  {name:"SURYANSH SETH",                   email:"suryanshseth936@gmail.com"},
  {name:"TANU SAINI",                      email:"saini16tanu@gmail.com"},
  {name:"TEJAS DADHICH",                   email:"dadhichtejas653@gmail.com"},
  {name:"UDIT AGARWAL",                    email:"uditagarwal220@gmail.com"},
  {name:"VIKASH KUMAR",                    email:"vk2542883@gmail.com"},
  {name:"YOGESH KUMAR RUDRA",              email:"yogeshkumarrudra21@gmail.com"},
];

let BETA_STUDENTS = [
  {name:"ABDUL KABIR KHAN",                email:"kingkabir327@gmail.com"},
  {name:"ABHINAY SINGH",                   email:"abhinays00001@gmail.com"},
  {name:"AKSHAT PORWAL",                   email:"akshatswn@gmail.com"},
  {name:"ANAMIKA YADAV",                   email:"ady207074@gmail.com"},
  {name:"ANAND KUMAR",                     email:"reddot000111@gmail.com"},
  {name:"ANCHAL KUMARI",                   email:"sunnyanchal12345@gmail.com"},
  {name:"ANSHIKA GUPTA",                   email:"ag6393163475@gmail.com"},
  {name:"ARHAN DEV SINGH",                 email:"arhandevsingh17@gmail.com"},
  {name:"ARNAV ARYA",                      email:"arnavarya2004@gmail.com"},
  {name:"AYUSH KUMAR",                     email:"kumarayush08757@gmail.com"},
  {name:"BIRAJ KS",                        email:"birajsasmal@gmail.com"},
  {name:"CHANDRESHWAR NATH TRIPATHI",      email:"mmt03mayank@gmail.com"},
  {name:"CHETAN KUMAR VERMA",              email:"chetansoni1569@gmail.com"},
  {name:"CHETAN SINGH",                    email:"karkichtn@gmail.com"},
  {name:"DEBOJIT DEY",                     email:"debojitdey037@gmail.com"},
  {name:"DHRUV TOMAR",                     email:""},
  {name:"DIKSHA",                          email:"dikshainspiring@gmail.com"},
  {name:"DIVYANKA",                        email:"divyankadivya13@gmail.com"},
  {name:"DIVYANSH AGARWAL",                email:"dividivyansh28@gmail.com"},
  {name:"HARSH SURANA",                    email:"harshsurana1809@gmail.com"},
  {name:"HARSHIT RANJAN",                  email:"ara.harshitraj@gmail.com"},
  {name:"HIMANSHU",                        email:"mitharwalhimanshu01@gmail.com"},
  {name:"KAVYA SRIVASTAVA",                email:"m25.kavya.srivastava@msot-hiet.org"},
  {name:"KUNAL VERMA",                     email:"kv853772@gmail.com"},
  {name:"NAMAN GOYAL",                     email:"namangoyal176@gmail.com"},
  {name:"ONIK CHHATWAL",                   email:"onikchhatwal.123@mail.com"},
  {name:"PALLAVI BHANDARI",                email:"pallavibhandari072@gmail.com"},
  {name:"PRANJAL SHRIVASTAV",              email:""},
  {name:"PRINCE KUMAR",                    email:""},
  {name:"PRINCE MAHUR",                    email:""},
  {name:"PRIYANKA NEGI",                   email:"priyankaviveknegi@gmail.com"},
  {name:"PURNIMA RAJ",                     email:"purnimaraj864@gmail.com"},
  {name:"RISHABH KUMAR TYAGI",             email:"infotorishabh@gmail.com"},
  {name:"RITU RAJ SINHA",                  email:""},
  {name:"SAFAK ALI",                       email:"kjaid0341@gmail.com"},
  {name:"SAGAR KUMAR GUPTA",               email:"sg6259151@gmail.com"},
  {name:"SAIF ULLAH JAFRI",                email:"sjafri437@gmail.com"},
  {name:"SAPNA SINGH",                     email:"singhsapna0228@gmail.com"},
  {name:"SARITA",                          email:"kumarisarita61722@gmail.com"},
  {name:"SHIVAM KUMAR",                    email:"m25.shivam.kumar@msot-hiet.org"},
  {name:"SHREYA GUPTA",                    email:"sg0128006@gmail.com"},
  {name:"SHUBHAM GUPTA",                   email:"shubhamgupta9635@gmail.com"},
  {name:"SUBHASH KUMAR YADAV",             email:"subhashhkumarr1116@gmail.com"},
  {name:"SURYANSH CHAUHAN",                email:""},
  {name:"SYED RYAN",                       email:"syedryaaan@gmail.com"},
  {name:"TUSHAR BHOJWANI",                 email:"tusharbhojwani.99@gmail.com"},
  {name:"UJJWAL RAJ",                      email:"ujjwalraj1745@icloud.com"},
  {name:"UTKARSH PATWA",                   email:"utkarshpatwa393@gmail.com"},
  {name:"YARRAGORLA VAMSHI",               email:""},
  {name:"YASH AGGARWAL",                   email:"12yashagarwalhere@gmail.com"},
];

let CANDIDATES = {
  Alpha: [
    {id:'a1',name:'Siya Bhardwaj',role:'CR Nominee',color:'#7c6bff',bg:'rgba(124,107,255,0.15)'},
  ],
  Beta: [
    {id:'b1',name:'Naman Goyal',role:'CR Nominee',color:'#ff5f7e',bg:'rgba(255,95,126,0.15)'},
    {id:'b2',name:'Utkarsh Patwa',role:'CR Nominee',color:'#00e5c8',bg:'rgba(0,229,200,0.15)'},
  ]
};

// ════════════════════════════════════════════════════
//  API HELPERS
// ════════════════════════════════════════════════════
async function apiGet(ep){try{const r=await fetch(API+ep);return await r.json();}catch(e){console.error(e);return null;}}
async function apiPost(ep,body){try{const r=await fetch(API+ep,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});return await r.json();}catch(e){console.error(e);return null;}}
async function apiPut(ep,body){try{const r=await fetch(API+ep,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});return await r.json();}catch(e){console.error(e);return null;}}
async function apiDelete(ep){try{const r=await fetch(API+ep,{method:'DELETE'});return await r.json();}catch(e){console.error(e);return null;}}

// ════════════════════════════════════════════════════
//  STATE
// ════════════════════════════════════════════════════
let settings = {};
let currentSection = null;
let currentStudent = null;
let capturedImage = null;
let selectedCandidate = null;
let videoStream = null;
let currentCandSection = 'Alpha';
let clerkSignIn = null;   // holds active Clerk SignIn object (email OTP path)
let clerkReady = false;
const TOTAL_STEPS = 6;

const DEFAULT_SETTINGS = {
  electionState:'active', resultsLocked:true, manualReveal:false,
  faceDetection:true, sessionTimeout:true, privacyNotice:true,
  autoDeleteFaces:true, adminPass:hashStr('admin2025'), schedStart:'', schedEnd:''
};

// ════════════════════════════════════════════════════
//  CLERK INIT
// ════════════════════════════════════════════════════
async function initClerk() {
  return new Promise((resolve) => {
    if (window.Clerk) { resolve(); return; }
    window.addEventListener('clerk:loaded', () => resolve(), { once: true });
    let tries = 0;
    const poll = setInterval(() => {
      tries++;
      if (window.Clerk) { clearInterval(poll); resolve(); }
      if (tries > 100) { clearInterval(poll); resolve(); }
    }, 100);
  });
}

async function loadSettings(){ const s=await apiGet('/api/settings'); return s||DEFAULT_SETTINGS; }
async function saveStudentsToServer(){
  await apiPut('/api/students',{alpha:ALPHA_STUDENTS,beta:BETA_STUDENTS});
}
async function saveSettings(s){ await apiPut('/api/settings',s); }
function hashStr(s){ let h=0; for(let i=0;i<s.length;i++){h=((h<<5)-h)+s.charCodeAt(i);h|=0;} return h.toString(16); }

// ════════════════════════════════════════════════════
//  INIT
// ════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', async () => {
  settings = await loadSettings();
  updateHeaderStatus();
  startCountdownTimer();

  const savedCands = await apiGet('/api/candidates');
  if (savedCands) CANDIDATES = savedCands;

  const savedStudents = await apiGet('/api/students');
  if (savedStudents && savedStudents.alpha && savedStudents.beta) {
    ALPHA_STUDENTS = savedStudents.alpha;
    BETA_STUDENTS  = savedStudents.beta;
  }

  document.getElementById('alpha-count').textContent = ALPHA_STUDENTS.length + ' students';
  document.getElementById('beta-count').textContent  = BETA_STUDENTS.length  + ' students';

  // Load Clerk
  await initClerk();
  if (window.Clerk) {
    await window.Clerk.load();
    clerkReady = true;
    console.log('Clerk loaded OK');

    // ── Detect Google OAuth return (Clerk v5 appends ?__clerk_status to URL) ──
    const pendingJson = sessionStorage.getItem('clerkGooglePending');
    if (pendingJson) {
      sessionStorage.removeItem('clerkGooglePending');
      // Let Clerk finish processing the OAuth token before we read the user
      try { await window.Clerk.handleRedirectCallback(); } catch (_) {}
      await handleGoogleAuthReturn(JSON.parse(pendingJson));
    }
  } else {
    console.warn('Clerk failed to load — auth unavailable');
  }
});

function getStudents(sec){ return sec==='Alpha' ? ALPHA_STUDENTS : BETA_STUDENTS; }
function normName(n){ return n.trim().toUpperCase().replace(/\s+/g,' '); }

function updateHeaderStatus(){
  const el=document.getElementById('header-status');
  const txt=document.getElementById('status-text');
  const dot=el.querySelector('.status-dot');
  const s=settings.electionState||'active';
  el.className='election-status '+s;
  txt.textContent=s==='active'?'VOTING OPEN':s==='paused'?'PAUSED':s==='ended'?'ENDED':'PENDING';
  dot.className='status-dot'+(s==='active'?' blink':'');
}

// ════════════════════════════════════════════════════
//  STEP 1 — SELECT SECTION
// ════════════════════════════════════════════════════
function selectSection(sec){
  if(settings.electionState==='ended'){alert('The election has ended.');return;}
  if(settings.electionState==='pending'){alert('The election has not started yet.');return;}
  if(settings.electionState==='paused'){alert('Voting is currently paused.');return;}
  currentSection=sec;
  document.getElementById('db-count').textContent=getStudents(sec).length;
  ['section-indicator','vote-section-badge'].forEach(id=>{
    const el=document.getElementById(id);
    el.className='section-badge '+sec.toLowerCase();
    el.textContent='● SECTION '+sec.toUpperCase();
  });
  document.getElementById('sec-alpha').classList.remove('selected');
  document.getElementById('sec-beta').classList.remove('selected');
  document.getElementById('sec-'+sec.toLowerCase()).classList.add('selected');
  goToStep(2);
}

// ════════════════════════════════════════════════════
//  STEP 2 — UI HELPERS (Email OTP panel toggle)
// ════════════════════════════════════════════════════
function showEmailOTPPanel(){
  document.getElementById('email-otp-panel').style.display = 'block';
  document.getElementById('auth-choice').style.display = 'none';
  document.getElementById('err-contact').textContent = '';
  document.getElementById('inp-email').focus();
}

function hideEmailOTPPanel(){
  document.getElementById('email-otp-panel').style.display = 'none';
  document.getElementById('auth-choice').style.display = 'grid';
  document.getElementById('err-contact').textContent = '';
}

// ════════════════════════════════════════════════════
//  STEP 2 — GOOGLE SIGN-IN (Clerk OAuth redirect)
//
//  Flow:
//    1. Save { name, section } to sessionStorage
//    2. Clerk redirects to Google
//    3. Google authenticates & returns to this page
//    4. On reload, DOMContentLoaded detects pendingJson
//       and calls handleGoogleAuthReturn()
//    5. Email from Clerk is matched against student DB
//    6. If valid → go to Step 4 (face scan), skip OTP
// ════════════════════════════════════════════════════
async function startGoogleSignIn(){
  const nameVal = document.getElementById('inp-name').value.trim();
  document.getElementById('err-name').textContent = '';
  document.getElementById('err-contact').textContent = '';

  if (!nameVal) {
    document.getElementById('err-name').textContent = 'Enter your full name first';
    document.getElementById('inp-name').classList.add('err');
    return;
  }
  document.getElementById('inp-name').classList.remove('err');

  if (!clerkReady || !window.Clerk) {
    document.getElementById('err-contact').textContent = 'Auth service not ready — please refresh the page';
    return;
  }

  const btn = document.getElementById('google-btn');
  btn.disabled = true;
  btn.innerHTML = '<div class="spin"></div> Redirecting to Google...';

  // Save state before the redirect wipes in-memory variables
  sessionStorage.setItem('clerkGooglePending', JSON.stringify({
    name: nameVal,
    section: currentSection,
  }));

  try {
    // Clerk v5 vanilla JS: calling client.signIn.create() with an OAuth strategy
    // automatically initiates the redirect to Google. No separate method needed.
    // After Google authenticates, Clerk redirects back to redirectUrl with a
    // ?__clerk_status param, which our DOMContentLoaded handler picks up.
    const client = window.Clerk.client;
    if (!client) throw new Error('Clerk client not ready');

    const createFn =
      typeof client.signIn?.create  === 'function' ? client.signIn.create.bind(client.signIn) :   // v5
      typeof client.signIns?.create === 'function' ? client.signIns.create.bind(client.signIns) : // v4
      null;

    if (!createFn) throw new Error('Clerk OAuth API unavailable');

    await createFn({
      strategy: 'oauth_google',
      redirectUrl: window.location.href,
      actionCompleteRedirectUrl: window.location.href,
    });
    // ↑ Browser navigates away here — nothing below executes.
  } catch (e) {
    console.error('Google sign-in error:', e);
    sessionStorage.removeItem('clerkGooglePending');
    const msg = e?.errors?.[0]?.message || e?.message || 'Failed to start Google sign-in';
    document.getElementById('err-contact').textContent = '⛔ ' + msg;
    btn.disabled = false;
    btn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 48 48" style="flex-shrink:0;">
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/>
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
      </svg>
      Sign in with Google`;
  }
}

// ── Called on page load when returning from Google OAuth ──
async function handleGoogleAuthReturn(pendingData) {
  const { name, section } = pendingData;

  // Restore section state in UI
  currentSection = section;
  document.getElementById('db-count').textContent = getStudents(section).length;
  ['section-indicator','vote-section-badge'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.className = 'section-badge ' + section.toLowerCase(); el.textContent = '● SECTION ' + section.toUpperCase(); }
  });

  // Show step 2 with a loading message while we verify
  goToStep(2);
  document.getElementById('err-contact').textContent = '⏳ Verifying your Google account...';
  document.getElementById('inp-name').value = name;

  // Check Clerk session
  const user = window.Clerk.user;
  if (!user) {
    document.getElementById('err-contact').textContent = '⛔ Google sign-in did not complete. Please try again.';
    return;
  }

  const email = user.primaryEmailAddress?.emailAddress?.toLowerCase() || '';
  if (!email) {
    await window.Clerk.signOut().catch(() => {});
    document.getElementById('err-contact').textContent = '⛔ Could not read email from Google account. Try again.';
    return;
  }

  // ── Match email against student database ──
  // This is the primary email restriction — only registered student emails pass.
  const students = getStudents(section);
  const student = students.find(s => s.email && s.email.toLowerCase() === email);

  if (!student) {
    await window.Clerk.signOut().catch(() => {});
    document.getElementById('err-contact').textContent =
      `⛔ ${email} is not registered as a voter in Section ${section}. Contact admin if this is an error.`;
    return;
  }

  // ── Check disabled ──
  const disabled = await apiGet('/api/disabled') || [];
  if (disabled.includes(email)) {
    await window.Clerk.signOut().catch(() => {});
    document.getElementById('err-contact').textContent = '⛔ This voter has been disabled by admin.';
    return;
  }

  // ── Check already voted ──
  const checkResult = await apiGet('/api/votes/check/' + encodeURIComponent(email));
  if (checkResult && checkResult.voted) {
    await window.Clerk.signOut().catch(() => {});
    document.getElementById('err-contact').textContent = '⛔ This student has already voted.';
    await logFraud('DUPLICATE_VOTE_ATTEMPT','[hidden]','[hidden]', section, 'Google auth step');
    return;
  }

  // ── Identity confirmed ──
  currentStudent = { ...student, section, otpMethod: 'google', contactId: email };

  // Sign out Clerk session — we only needed it for identity verification
  await window.Clerk.signOut().catch(() => {});

  await logEvent('GOOGLE_AUTH_VERIFIED', `Voter verified via Google — Section ${section}`, '✅');

  // Skip step 3 (OTP) — go straight to face scan
  goToStep(4);
  startCamera();
}

// ════════════════════════════════════════════════════
//  CLERK v4/v5 SIGN-IN HELPER
//
//  Clerk v4: client.signIns  is a ResourceList with .create()
//  Clerk v5: client.signIns  became a plain array — no .create()
//            client.signIn   is the current SignIn resource (has .create())
//  We detect which API is available and use the right one.
// ════════════════════════════════════════════════════
async function clerkCreateSignIn(identifier) {
  const client = window.Clerk.client;
  if (!client) throw new Error('Clerk client not initialized — try refreshing');

  // Clerk v5: client.signIn is the SignIn resource object with .create()
  if (typeof client.signIn?.create === 'function') {
    return await client.signIn.create({ identifier });
  }
  // Clerk v4 fallback: client.signIns is a ResourceList with .create()
  if (typeof client.signIns?.create === 'function') {
    return await client.signIns.create({ identifier });
  }
  throw new Error('Clerk sign-in API unavailable — please check your Clerk dashboard config');
}

// ════════════════════════════════════════════════════
//  CLERK EMAIL OTP — SEND
//
//  Strategy: use sign-UP email verification, NOT sign-in.
//  Reason: Clerk sign-in requires a pre-existing account.
//  Students will never have Clerk accounts. Sign-up email
//  verification works for any address — Clerk sends the OTP
//  and then we just verify the code. We don't actually
//  create a persistent account (we clean up after voting).
//
//  Returns the signUp resource (used to verify the OTP).
// ════════════════════════════════════════════════════
async function clerkSendEmailOTP(email) {
  const client = window.Clerk.client;
  if (!client) throw new Error('Clerk client not initialized');

  // Get the sign-up resource — v5: client.signUp, v4: client.signUps
  const signUpResource =
    client.signUp  ??   // Clerk v5
    client.signUps ??   // Clerk v4
    null;

  if (!signUpResource) throw new Error('Clerk sign-up API unavailable');

  // Create a sign-up with just the email — Clerk sends an OTP automatically
  const signUp = await signUpResource.create({
    emailAddress: email,
  });

  // Prepare email address verification (sends the OTP email)
  await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

  return signUp; // stored in clerkSignIn state variable for verification step
}

// ════════════════════════════════════════════════════
//  CLERK EMAIL OTP — VERIFY
//
//  Attempts the email_code verification on the signUp object.
//  Returns { verified: true } or { verified: false, error: string }
// ════════════════════════════════════════════════════
async function clerkVerifyEmailOTP(signUp, code) {
  try {
    const result = await signUp.attemptEmailAddressVerification({ code });
    // status is 'complete' when the email is verified successfully
    if (result.status === 'complete' || result.verifications?.emailAddress?.status === 'verified') {
      return { verified: true };
    }
    return { verified: false, error: 'Verification incomplete — try again' };
  } catch (e) {
    const msg = e?.errors?.[0]?.longMessage || e?.errors?.[0]?.message || e?.message || 'Incorrect OTP';
    return { verified: false, error: msg };
  }
}

// ════════════════════════════════════════════════════
//  STEP 2 — EMAIL OTP (Clerk email_code strategy)
// ════════════════════════════════════════════════════
async function verifyIdentity(){
  const nameVal    = document.getElementById('inp-name').value.trim();
  const contactRaw = document.getElementById('inp-email').value.trim().toLowerCase();

  document.getElementById('err-name').textContent    = '';
  document.getElementById('err-contact').textContent = '';
  document.getElementById('inp-name').classList.remove('err');

  if (!nameVal){
    document.getElementById('err-name').textContent = 'Name required';
    document.getElementById('inp-name').classList.add('err');
    return;
  }
  if (!contactRaw){
    document.getElementById('err-contact').textContent = 'Email required';
    return;
  }

  // ── Match student in database ──
  const students = getStudents(currentSection);
  let student = students.find(s => normName(s.name)===normName(nameVal) && s.email && s.email.toLowerCase()===contactRaw);

  if (!student){
    const byEmail = students.find(s => s.email && s.email.toLowerCase()===contactRaw);
    const byName  = students.find(s => normName(s.name)===normName(nameVal));
    if (byEmail)                       document.getElementById('err-name').textContent    = 'This email belongs to a different student';
    else if (byName && !byName.email)  document.getElementById('err-contact').textContent = 'No email registered for this student — use Google sign-in';
    else if (byName)                   document.getElementById('err-contact').textContent = "Email doesn't match — check again";
    else                               document.getElementById('err-name').textContent    = 'Student not found in Section ' + currentSection;
    await logEvent('FAILED_IDENTITY', `Failed identity check — Section ${currentSection}`, '⚠️');
    return;
  }

  if (!student.email){
    document.getElementById('err-contact').textContent = 'No email registered — please use Google sign-in instead';
    return;
  }

  // ── Check disabled / already voted ──
  const disabled    = await apiGet('/api/disabled') || [];
  const contactId   = student.email.toLowerCase();
  if (disabled.includes(contactId)){
    document.getElementById('err-contact').textContent = '⛔ This voter has been disabled by admin.';
    return;
  }
  const checkResult = await apiGet('/api/votes/check/' + encodeURIComponent(contactId));
  if (checkResult && checkResult.voted){
    document.getElementById('err-contact').textContent = '⛔ This student has already voted.';
    await logFraud('DUPLICATE_VOTE_ATTEMPT','[hidden]','[hidden]', currentSection, 'Identity step');
    return;
  }

  currentStudent = { ...student, section: currentSection, otpMethod: 'email', contactId };

  const sendBtn = document.getElementById('send-otp-btn');
  sendBtn.disabled = true;
  sendBtn.innerHTML = '<div class="spin"></div> Sending OTP...';

  try {
    if (!clerkReady || !window.Clerk){
      document.getElementById('err-contact').textContent = 'Email OTP service not ready — please refresh';
      return;
    }
    // Use sign-UP + email verification (not sign-IN).
    // Students will NOT have pre-existing Clerk accounts, so sign-in always
    // throws "Couldn't find your account". Sign-up email verification works
    // for any address regardless of whether a Clerk account exists.
    clerkSignIn = await clerkSendEmailOTP(student.email);
    document.getElementById('otp-sub').textContent = `OTP sent to ${student.email}`;

    await logEvent('IDENTITY_VERIFIED', `Voter verified — Section ${currentSection}`, '✅');
    goToStep(3);
    startOTPTimer();

  } catch(e){
    console.error('OTP send error:', e);
    const msg = e?.errors?.[0]?.longMessage || e?.errors?.[0]?.message || e?.message || 'Unknown error';
    document.getElementById('err-contact').textContent = 'Failed to send OTP: ' + msg;
  } finally {
    sendBtn.disabled = false;
    sendBtn.innerHTML = '<span>Send OTP</span><span>→</span>';
  }
}

// ════════════════════════════════════════════════════
//  STEP 3 — EMAIL OTP VERIFY (Clerk only)
// ════════════════════════════════════════════════════
let otpTimerInterval = null;

function startOTPTimer(){
  let secs = 60;
  clearInterval(otpTimerInterval);
  document.getElementById('resend-btn').disabled = true;
  otpTimerInterval = setInterval(()=>{
    secs--;
    document.getElementById('otp-timer').textContent =
      secs > 0 ? `Resend available in ${secs}s` : 'You can now resend OTP';
    if(secs <= 0){ clearInterval(otpTimerInterval); document.getElementById('resend-btn').disabled = false; }
  }, 1000);
}

async function verifyOTP(){
  const otpVal = document.getElementById('inp-otp').value.trim();
  document.getElementById('err-otp').textContent = '';
  if (!otpVal || otpVal.length !== 6){
    document.getElementById('err-otp').textContent = 'Enter the 6-digit OTP';
    return;
  }

  const btn = document.querySelector('#step3 .btn-primary');
  btn.disabled = true;
  btn.innerHTML = '<div class="spin"></div> Verifying...';

  try {
    if (!clerkSignIn){
      document.getElementById('err-otp').textContent = 'Session expired — go back and try again';
      return;
    }
    const result = await clerkVerifyEmailOTP(clerkSignIn, otpVal);
    if (!result.verified){
      document.getElementById('err-otp').textContent = result.error || 'Verification incomplete — try again';
      return;
    }
    // Clean up Clerk session — we only needed it for identity, not persistent login
    await window.Clerk.signOut().catch(() => {});

    clearInterval(otpTimerInterval);
    await logEvent('OTP_VERIFIED', `OTP verified (email) — Section ${currentSection}`, '📧');
    goToStep(4);
    startCamera();

  } catch(e){
    console.error('OTP verify error:', e);
    const msg = e?.errors?.[0]?.longMessage || e?.errors?.[0]?.message || e?.message || 'Incorrect OTP';
    document.getElementById('err-otp').textContent = msg;
  } finally {
    btn.disabled = false;
    btn.innerHTML = 'Verify OTP →';
  }
}

async function resendOTP(){
  document.getElementById('inp-otp').value    = '';
  document.getElementById('err-otp').textContent = '';

  try {
    if (!clerkReady || !window.Clerk){
      document.getElementById('err-otp').textContent = 'Email service unavailable';
      return;
    }
    clerkSignIn = await clerkSendEmailOTP(currentStudent.email);
    document.getElementById('otp-sub').textContent = 'New OTP sent to ' + currentStudent.email;
    startOTPTimer();

  } catch(e){
    console.error('Resend error:', e);
    const msg = e?.errors?.[0]?.message || e?.message || 'Resend failed';
    document.getElementById('err-otp').textContent = 'Failed to resend: ' + msg;
  }
}

// ════════════════════════════════════════════════════
//  STEP 4 — LIVENESS + Face Scan
// ════════════════════════════════════════════════════
const MODELS_URL='https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model';
const FACE_MATCH_THRESHOLD=0.45;
let faceModelsLoaded=false;
let liveDetectionLoop=null;
let blinkState={required:false,challenge:'',completed:false,eyesWereClosed:false,blinkCount:0,requiredBlinks:2};

async function loadFaceModels(){
  if(faceModelsLoaded) return true;
  try{
    const sb=document.getElementById('face-status');
    sb.style.display='flex';sb.className='status info';
    sb.innerHTML='<div class="spin"></div> Loading face models...';
    await Promise.all([
      faceapi.nets.ssdMobilenetv1.loadFromUri(MODELS_URL),
      faceapi.nets.faceLandmark68Net.loadFromUri(MODELS_URL),
      faceapi.nets.faceRecognitionNet.loadFromUri(MODELS_URL),
    ]);
    faceModelsLoaded=true;
    sb.style.display='none';
    return true;
  }catch(e){
    const sb=document.getElementById('face-status');
    sb.style.display='flex';sb.className='status error';
    sb.innerHTML='❌ Failed to load face models. Check internet.';
    return false;
  }
}

async function startCamera(){
  const ok=await loadFaceModels();
  if(!ok) return;
  try{
    videoStream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'user',width:{ideal:640},height:{ideal:480}},audio:false});
    const video=document.getElementById('video');
    video.srcObject=videoStream;
    video.onloadedmetadata=()=>{video.play();startBlinkLivenessLoop();};
    document.getElementById('cam-hint').textContent='Align face in the oval';
  }catch(e){
    const sb=document.getElementById('face-status');
    sb.style.display='flex';sb.className='status warning';
    sb.innerHTML='⚠️ Camera permission denied. Allow camera access and retry.';
  }
}

function startBlinkLivenessLoop(){
  if(liveDetectionLoop) return;
  const video = document.getElementById('video');
  blinkState = {completed:false};
  document.getElementById('liveness-challenge').style.display = 'none';

  let liveCanvas = document.getElementById('live-detect-canvas');
  if(!liveCanvas){
    liveCanvas = document.createElement('canvas');
    liveCanvas.id = 'live-detect-canvas';
    liveCanvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;';
    document.getElementById('cam-wrap').appendChild(liveCanvas);
  }

  liveDetectionLoop = setInterval(async()=>{
    if(!videoStream||!video.srcObject){stopLiveDetection();return;}
    if(video.readyState < 2) return;

    const detection = await faceapi
      .detectSingleFace(video, new faceapi.SsdMobilenetv1Options({minConfidence:0.5}))
      .withFaceLandmarks();

    liveCanvas.width = video.videoWidth;
    liveCanvas.height = video.videoHeight;
    const ctx = liveCanvas.getContext('2d');
    ctx.clearRect(0,0,liveCanvas.width,liveCanvas.height);

    const btn = document.getElementById('capture-btn');

    if(!detection){
      document.getElementById('cam-hint').textContent = 'Align your face in the oval';
      if(btn) btn.disabled = true;
      return;
    }

    const W = liveCanvas.width;
    const box = detection.detection.box;
    const mx = W - box.x - box.width;
    ctx.strokeStyle = '#00e5a0';
    ctx.lineWidth = 2.5; ctx.shadowColor = '#00e5a0'; ctx.shadowBlur = 12;
    ctx.strokeRect(mx, box.y, box.width, box.height);

    document.getElementById('cam-hint').textContent = '✓ Face detected — press Capture';
    if(btn) btn.disabled = false;
  }, 150);
}

async function manualCapture(){
  stopLiveDetection();
  const video = document.getElementById('video');
  const canvas = document.getElementById('canvas-preview');
  const ctx = canvas.getContext('2d');
  const w = video.videoWidth, h = video.videoHeight;
  canvas.width=w; canvas.height=h;
  ctx.save(); ctx.scale(-1,1); ctx.drawImage(video,-w,0,w,h); ctx.restore();
  capturedImage = canvas.toDataURL('image/jpeg',0.92);
  canvas.style.display='block'; video.style.display='none';
  document.getElementById('cam-overlay').innerHTML='<div class="tick-overlay"><div class="tick-circle">✓</div></div>';
  document.getElementById('capture-btn').style.display='none';
  stopCamera();
  await processFace(null);
}

async function captureAndProcess(liveDetection){
  const video=document.getElementById('video');
  const canvas=document.getElementById('canvas-preview');
  const ctx=canvas.getContext('2d');
  const w=video.videoWidth,h=video.videoHeight;
  canvas.width=w;canvas.height=h;
  ctx.save();ctx.scale(-1,1);ctx.drawImage(video,-w,0,w,h);ctx.restore();
  capturedImage=canvas.toDataURL('image/jpeg',0.92);
  canvas.style.display='block';video.style.display='none';
  document.getElementById('cam-overlay').innerHTML='<div class="tick-overlay"><div class="tick-circle">✓</div></div>';
  stopCamera();
  await processFace(liveDetection);
}

function stopLiveDetection(){
  if(liveDetectionLoop){clearInterval(liveDetectionLoop);liveDetectionLoop=null;}
  const lc=document.getElementById('live-detect-canvas');
  if(lc) lc.remove();
}

function retakePhoto(){
  stopCamera();stopLiveDetection();capturedImage=null;blinkState={completed:false,blinkCount:0,eyesWereClosed:false,requiredBlinks:2};
  const canvas=document.getElementById('canvas-preview');
  canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height);
  canvas.style.display='none';canvas.width=1;canvas.height=1;
  const video=document.getElementById('video');
  video.srcObject=null;video.style.display='block';
  document.getElementById('cam-overlay').innerHTML='<div class="face-oval"></div>';
  document.getElementById('cam-hint').textContent='Align face in the oval guide';
  document.getElementById('face-status').style.display='none';
  document.getElementById('proceed-face-btn').style.display='none';
  document.getElementById('liveness-challenge').style.display='none';
  const cb=document.getElementById('capture-btn');if(cb){cb.style.display='block';cb.disabled=true;}
  setTimeout(()=>startCamera(),350);
}

function stopCamera(){
  if(videoStream){videoStream.getTracks().forEach(t=>t.stop());videoStream=null;}
}

async function processFace(existingDetection){
  const sb=document.getElementById('face-status');
  sb.style.display='flex';sb.className='status info';
  sb.innerHTML='<div class="spin"></div> Extracting biometric signature...';

  let descriptor;
  let confidence;

  if(existingDetection && existingDetection.descriptor){
    descriptor=Array.from(existingDetection.descriptor);
    confidence=Math.round(existingDetection.detection.score*100);
  } else {
    const img=await loadImageFromDataUrl(capturedImage);
    const detections=await faceapi.detectAllFaces(img,new faceapi.SsdMobilenetv1Options({minConfidence:0.6}))
      .withFaceLandmarks().withFaceDescriptors();
    if(!detections.length){
      sb.className='status error';sb.innerHTML='❌ No face detected. Please retry.';return;
    }
    descriptor=Array.from(detections[0].descriptor);
    confidence=Math.round(detections[0].detection.score*100);
  }

  if(settings.faceDetection){
    sb.innerHTML='<div class="spin"></div> Checking for duplicate faces...';
    const storedFaces=await apiGet('/api/faces')||[];
    let dupFound=false,closestDist=Infinity;
    for(const stored of storedFaces){
      if(stored.contactId && stored.contactId === currentStudent.contactId) continue;
      if(!stored.descriptor) continue;
      const dist=euclideanDistance(descriptor,stored.descriptor);
      if(dist<closestDist) closestDist=dist;
      if(dist<FACE_MATCH_THRESHOLD){dupFound=true;break;}
    }
    if(dupFound){
      sb.className='status error';
      sb.innerHTML='⛔ This face matches another registered voter. Duplicate voting prevented.';
      document.getElementById('cam-overlay').innerHTML='<div class="tick-overlay"><div class="tick-circle" style="background:var(--error)">⛔</div></div>';
      await logFraud('FACE_DUPLICATE','[hidden]','[hidden]',currentStudent.section,`Distance: ${closestDist.toFixed(3)}`);
      return;
    }
    await apiPost('/api/faces',{contactId: currentStudent.contactId, descriptor, capturedAt: new Date().toISOString()});
  }

  sb.className='status success';
  sb.innerHTML=`✅ Liveness + face verified — Confidence: ${confidence}% · No duplicates found`;
  document.getElementById('cam-hint').textContent='✓ Verified';
  document.getElementById('proceed-face-btn').style.display='block';
  await logEvent('FACE_VERIFIED',`Face verified — confidence ${confidence}%`,'🤖');
}

function loadImageFromDataUrl(d){return new Promise((res,rej)=>{const i=new Image();i.onload=()=>res(i);i.onerror=rej;i.src=d;});}
function euclideanDistance(a,b){let s=0;for(let i=0;i<a.length;i++)s+=(a[i]-b[i])**2;return Math.sqrt(s);}
function proceedAfterFace(){stopCamera();stopLiveDetection();renderCandidates();goToStep(5);}

// ════════════════════════════════════════════════════
//  STEP 5 — VOTE
// ════════════════════════════════════════════════════
function renderCandidates(){
  const cands=CANDIDATES[currentSection]||[];
  const grid=document.getElementById('cands-grid');
  if(!cands.length){grid.innerHTML='<div class="status warning">⚠ No candidates configured. Contact admin.</div>';return;}
  grid.innerHTML=cands.map(c=>`
    <div class="cand-card" id="cand-${c.id}" onclick="selectCand('${c.id}')">
      <div class="cand-avatar" style="background:${c.bg};color:${c.color}">${c.name.charAt(0)}</div>
      <div class="cand-name">${c.name}</div>
      <div class="cand-pos">${c.role}</div>
    </div>
  `).join('');
  selectedCandidate=null;
}

function selectCand(id){
  selectedCandidate=id;
  document.querySelectorAll('.cand-card').forEach(e=>e.classList.remove('selected'));
  document.getElementById('cand-'+id).classList.add('selected');
  document.getElementById('vote-warn').style.display='none';
}

async function submitVote(){
  if(!selectedCandidate){document.getElementById('vote-warn').style.display='flex';return;}
  const btn=document.getElementById('submit-btn');
  btn.disabled=true;btn.innerHTML='<div class="spin"></div> Recording...';
  const cand=CANDIDATES[currentSection].find(c=>c.id===selectedCandidate);
  const vote={
    email: currentStudent.contactId,
    name: currentStudent.name,
    section: currentSection,
    candidateId: selectedCandidate,
    candidateName: cand.name,
    voteId: 'V'+Date.now(),
    timestamp: new Date().toISOString()
  };
  const result=await apiPost('/api/votes',vote);
  if(result&&result.error==='Already voted'){
    btn.disabled=false;btn.innerHTML='🗳️ Submit My Vote';
    document.getElementById('vote-warn').innerHTML='⛔ Already voted.';
    document.getElementById('vote-warn').style.display='flex';
    return;
  }
  await logEvent('VOTE_CAST',`Anonymous → ${cand.name} (Section ${currentSection})`,'🗳️');
  showReceipt(vote);
  goToStep(6);
}

function showReceipt(v){
  document.getElementById('vote-receipt').innerHTML=`
    <div class="r-row"><span class="r-label">Vote ID</span><span>${v.voteId}</span></div>
    <div class="r-row"><span class="r-label">Section</span><span><span class="pill ${v.section.toLowerCase()}">${v.section}</span></span></div>
    <div class="r-row"><span class="r-label">Voted For</span><span>${v.candidateName}</span></div>
    <div class="r-row"><span class="r-label">Time</span><span>${new Date(v.timestamp).toLocaleString()}</span></div>
  `;
}

// ════════════════════════════════════════════════════
//  STEP NAVIGATION — 6 steps
// ════════════════════════════════════════════════════
function goToStep(n){
  for(let i=1;i<=TOTAL_STEPS;i++){
    const card=document.getElementById('step'+i);
    const snum=document.getElementById('s'+i);
    const labels=document.querySelectorAll('.step-label');
    card.classList.remove('active');snum.classList.remove('active','done');
    if(i<n){snum.classList.add('done');snum.textContent='✓';}
    else if(i===n){snum.textContent=i;snum.classList.add('active');}
    else{snum.textContent=i;}
    if(labels[i-1]) labels[i-1].classList.toggle('active',i===n);
    const conn=document.getElementById('c'+i);
    if(conn) conn.classList.toggle('done',i<n);
  }
  document.getElementById('step'+n).classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
}

// ════════════════════════════════════════════════════
//  ADMIN
// ════════════════════════════════════════════════════
let adminAuthed=false;

function openAdmin(){document.getElementById('admin-overlay').classList.add('open');if(!adminAuthed)showAuthScreen();else{showAdminUI();showPage('dashboard');}}
function closeAdmin(){document.getElementById('admin-overlay').classList.remove('open');}
function showAuthScreen(){document.getElementById('admin-auth').style.display='block';document.getElementById('admin-sidebar').style.display='none';}
function showAdminUI(){document.getElementById('admin-auth').style.display='none';document.getElementById('admin-sidebar').style.display='flex';}

async function checkPass(){
  const p=document.getElementById('admin-pass').value;
  settings=await loadSettings();
  if(hashStr(p)===settings.adminPass){adminAuthed=true;showAdminUI();showPage('dashboard');await logEvent('ADMIN_LOGIN','Admin panel accessed','🔐');}
  else{document.getElementById('pass-err').style.display='block';await logEvent('ADMIN_FAIL','Wrong password attempt','⚠️');}
}

async function showPage(page){
  document.querySelectorAll('.admin-page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  document.getElementById('nav-'+page).classList.add('active');
  const renders={dashboard:renderDashboard,results:renderResults,students:renderStudentsTable,faces:renderFacesTable,fraud:renderFraud,logs:renderLogs,candidates:()=>showCandSection(currentCandSection),countdown:renderCountdown};
  if(renders[page]) await renders[page]();
}

async function renderDashboard(){
  settings=await loadSettings();
  const votes=await apiGet('/api/votes')||[];
  const fraud=await apiGet('/api/fraud')||[];
  const av=votes.filter(v=>v.section==='Alpha').length;
  const bv=votes.filter(v=>v.section==='Beta').length;
  document.getElementById('dash-stats').innerHTML=`
    <div class="stat" style="--accent-line:var(--alpha);--accent-text:var(--alpha);"><div class="stat-val">${av}/${ALPHA_STUDENTS.length}</div><div class="stat-label">Alpha Votes</div><div class="progress-track" style="margin-top:0.6rem;"><div class="progress-fill" style="width:${Math.round(av/ALPHA_STUDENTS.length*100)||0}%;background:var(--alpha);"></div></div></div>
    <div class="stat" style="--accent-line:var(--beta);--accent-text:var(--beta);"><div class="stat-val">${bv}/${BETA_STUDENTS.length}</div><div class="stat-label">Beta Votes</div><div class="progress-track" style="margin-top:0.6rem;"><div class="progress-fill" style="width:${Math.round(bv/BETA_STUDENTS.length*100)||0}%;background:var(--beta);"></div></div></div>
    <div class="stat" style="--accent-line:var(--accent3);--accent-text:var(--accent3);"><div class="stat-val">${votes.length}</div><div class="stat-label">Total Votes</div></div>
    <div class="stat" style="--accent-line:var(--error);--accent-text:var(--error);"><div class="stat-val">${fraud.length}</div><div class="stat-label">Fraud Alerts</div></div>
    <div class="stat"><div class="stat-val">${Math.round(votes.length/(ALPHA_STUDENTS.length+BETA_STUDENTS.length)*100)||0}%</div><div class="stat-label">Turnout</div></div>
    <div class="stat" style="--accent-line:var(--success);--accent-text:var(--success);"><div class="stat-val" style="font-size:1.2rem;">${(settings.electionState||'active').toUpperCase()}</div><div class="stat-label">Status</div></div>
  `;
  await renderBarCharts('bar-alpha','Alpha');
  await renderBarCharts('bar-beta','Beta');
  document.getElementById('fraud-badge').textContent=fraud.length;
}

async function renderBarCharts(elId,section){
  const votes=(await apiGet('/api/votes')||[]).filter(v=>v.section===section);
  const cands=CANDIDATES[section]||[];
  const el=document.getElementById(elId);
  if(!cands.length){el.innerHTML='<div style="color:var(--muted);font-size:0.75rem;">No candidates</div>';return;}
  const max=Math.max(1,...cands.map(c=>votes.filter(v=>v.candidateId===c.id).length));
  el.innerHTML=cands.map(c=>{
    const cnt=votes.filter(v=>v.candidateId===c.id).length;
    return `<div class="bar-item"><div class="bar-label">${c.name}</div><div class="bar-track"><div class="bar-fill" style="width:${Math.round(cnt/max*100)}%;background:${c.color};"></div></div><div class="bar-count">${cnt}</div></div>`;
  }).join('');
}

async function setElectionState(state){settings=await loadSettings();settings.electionState=state;await saveSettings(settings);updateHeaderStatus();await logEvent('ELECTION_STATE_CHANGED',`State: ${state}`,'⚙️');await renderCountdown();}

async function renderCountdown(){
  settings=await loadSettings();
  if(settings.schedStart) document.getElementById('sched-start').value=settings.schedStart;
  if(settings.schedEnd) document.getElementById('sched-end').value=settings.schedEnd;
  const tog=(id,val)=>{const el=document.getElementById(id);if(el)el.classList.toggle('on',!!val);};
  tog('tog-lock',settings.resultsLocked);tog('tog-reveal',settings.manualReveal);
}

function startCountdownTimer(){
  clearInterval(window._cdTimer);
  window._cdTimer=setInterval(()=>{
    const hEl=document.getElementById('cd-h');if(!hEl)return;
    if(!settings.schedEnd){hEl.textContent='--';return;}
    const diff=new Date(settings.schedEnd)-new Date();
    if(diff<=0)return;
    document.getElementById('cd-h').textContent=String(Math.floor(diff/3600000)).padStart(2,'0');
    document.getElementById('cd-m').textContent=String(Math.floor((diff%3600000)/60000)).padStart(2,'0');
    document.getElementById('cd-s').textContent=String(Math.floor((diff%60000)/1000)).padStart(2,'0');
  },1000);
}

async function saveSchedule(){
  settings=await loadSettings();
  settings.schedStart=document.getElementById('sched-start').value;
  settings.schedEnd=document.getElementById('sched-end').value;
  await saveSettings(settings);
  await logEvent('SCHEDULE_SAVED',`Start:${settings.schedStart} End:${settings.schedEnd}`,'⏰');
}

function showCandSection(sec){
  currentCandSection=sec;
  document.getElementById('cand-section-title').textContent=`Section ${sec} Candidates`;
  const cands=CANDIDATES[sec]||[];
  document.getElementById('cand-editor-list').innerHTML=cands.map(c=>`
    <div class="cand-editor">
      <div class="cand-editor-avatar" style="background:${c.bg};color:${c.color}">${c.name.charAt(0)}</div>
      <div class="cand-editor-info"><div class="cand-editor-name">${c.name}</div><div class="cand-editor-meta">${c.role} · Section ${sec}</div></div>
      <div class="cand-editor-actions"><button class="btn btn-danger btn-sm" onclick="removeCandidate('${sec}','${c.id}')">✕</button></div>
    </div>
  `).join('')||'<div class="table-empty">No candidates. Add below.</div>';
}

async function addCandidate(){
  const name=document.getElementById('new-cand-name').value.trim();
  const role=document.getElementById('new-cand-pos').value.trim()||'CR Nominee';
  const sec=document.getElementById('new-cand-sec').value;
  if(!name){alert('Enter candidate name');return;}
  const colors=['#7c6bff','#ff5f7e','#00e5c8','#ffc857'];
  const id=sec.charAt(0).toLowerCase()+Date.now();
  const col=colors[(CANDIDATES[sec]||[]).length%colors.length];
  if(!CANDIDATES[sec]) CANDIDATES[sec]=[];
  CANDIDATES[sec].push({id,name,role,color:col,bg:col.replace(')',',0.15)').replace('rgb','rgba')});
  await apiPut('/api/candidates',CANDIDATES);
  await logEvent('CANDIDATE_ADDED',`${name} → Section ${sec}`,'👤');
  document.getElementById('new-cand-name').value='';
  showCandSection(sec);
}

async function removeCandidate(sec,id){
  if(!confirm('Remove this candidate?')) return;
  CANDIDATES[sec]=CANDIDATES[sec].filter(c=>c.id!==id);
  await apiPut('/api/candidates',CANDIDATES);
  await logEvent('CANDIDATE_REMOVED',`ID:${id} from Section ${sec}`,'🗑️');
  showCandSection(sec);
}

async function renderResults(){
  settings=await loadSettings();
  const locked=settings.resultsLocked&&settings.electionState!=='ended';
  document.getElementById('results-locked-msg').style.display=locked?'block':'none';
  document.getElementById('results-content').style.opacity=locked?'0.15':'1';
  if(locked) return;
  await renderBarCharts('results-bar-alpha','Alpha');
  await renderBarCharts('results-bar-beta','Beta');
  const votes=await apiGet('/api/votes')||[];
  ['Alpha','Beta'].forEach(sec=>{
    const sv=votes.filter(v=>v.section===sec);
    const cands=CANDIDATES[sec]||[];
    let winner=null,wc=0;
    cands.forEach(c=>{const cnt=sv.filter(v=>v.candidateId===c.id).length;if(cnt>wc){wc=cnt;winner=c.name;}});
    const el=document.getElementById(sec.toLowerCase()+'-winner');
    el.style.display=winner?'flex':'none';
    if(winner) el.innerHTML=`🏆 Leading: <strong>${winner}</strong> with ${wc} votes`;
  });
  const table=document.getElementById('votes-table');
  if(!votes.length){table.innerHTML='<div class="table-empty">No votes yet</div>';return;}
  table.innerHTML=votes.slice().reverse().map(v=>`
    <div class="table-row" style="grid-template-columns:1fr 1fr auto;">
      <div><span class="pill ${v.section.toLowerCase()}">${v.section}</span></div>
      <div>${v.candidateName}</div>
      <div style="color:var(--muted);font-size:0.68rem;">${new Date(v.timestamp).toLocaleTimeString()}</div>
    </div>
  `).join('');
}

async function renderStudentsTable(){
  const secFilter=document.getElementById('student-sec-filter').value;
  const search=document.getElementById('student-search').value.toLowerCase();
  const disabled=await apiGet('/api/disabled')||[];
  const votes=await apiGet('/api/votes')||[];
  const all=[...ALPHA_STUDENTS.map(s=>({...s,section:'Alpha'})),...BETA_STUDENTS.map(s=>({...s,section:'Beta'}))];
  const filtered=all.filter(s=>{
    const matchSec=secFilter==='all'||s.section===secFilter;
    const matchSearch=!search||s.name.toLowerCase().includes(search)||(s.email||'').toLowerCase().includes(search);
    return matchSec&&matchSearch;
  });
  const table=document.getElementById('students-table');
  if(!filtered.length){table.innerHTML='<div class="table-empty">No students found</div>';return;}
  table.innerHTML=filtered.map((s)=>{
    const em=(s.email||'').toLowerCase();
    const isDisabled=disabled.includes(em);
    const hasVoted=votes.find(v=>v.email&&v.email===em);
    const idx=all.findIndex(x=>x.name===s.name&&x.section===s.section);
    return `<div class="table-row" style="grid-template-columns:1fr 1fr auto auto auto;">
      <div><strong>${s.name}</strong></div>
      <div style="font-size:0.68rem;color:var(--muted2);">${s.email||'—'}<div><span class="pill ${s.section.toLowerCase()}">${s.section}</span></div></div>
      <div>${hasVoted?'<span class="pill success">Voted</span>':isDisabled?'<span class="pill danger">Disabled</span>':'<span class="pill muted">Pending</span>'}</div>
      <div><button class="btn btn-ghost btn-sm" style="font-size:0.65rem;padding:0.2rem 0.5rem;" onclick="openEditStudent(${idx})">✏️</button></div>
      <div style="display:flex;gap:4px;">
        <button class="btn btn-ghost btn-sm" style="font-size:0.65rem;padding:0.2rem 0.5rem;" onclick="${isDisabled?`enableVoter('${em}')`:`disableVoter('${em}')`}">${isDisabled?'Enable':'Disable'}</button>
        <button class="btn btn-danger btn-sm" style="font-size:0.65rem;padding:0.2rem 0.5rem;" onclick="removeStudent(${idx})">✕</button>
      </div>
    </div>`;
  }).join('');
}

async function disableVoter(id){await apiPost('/api/disabled',{phone:id});await logEvent('VOTER_DISABLED','Voter disabled','⛔');renderStudentsTable();}
async function enableVoter(id){await apiDelete('/api/disabled/'+encodeURIComponent(id));await logEvent('VOTER_ENABLED','Voter enabled','✅');renderStudentsTable();}

function getAllStudents(){
  return [...ALPHA_STUDENTS.map(s=>({...s,section:'Alpha'})),...BETA_STUDENTS.map(s=>({...s,section:'Beta'}))];
}

function openAddStudent(){
  document.getElementById('edit-student-modal').style.display='flex';
  document.getElementById('edit-student-title').textContent='Add Student';
  document.getElementById('stu-idx').value='';
  document.getElementById('stu-name').value='';
  document.getElementById('stu-email').value='';
  document.getElementById('stu-section').value='Alpha';
}

function openEditStudent(idx){
  const all=getAllStudents();
  const s=all[idx];
  if(!s) return;
  document.getElementById('edit-student-modal').style.display='flex';
  document.getElementById('edit-student-title').textContent='Edit Student';
  document.getElementById('stu-idx').value=idx;
  document.getElementById('stu-name').value=s.name;
  document.getElementById('stu-email').value=s.email||'';
  document.getElementById('stu-section').value=s.section;
}

function closeStudentModal(){document.getElementById('edit-student-modal').style.display='none';}

async function saveStudent(){
  const idx=document.getElementById('stu-idx').value;
  const name=document.getElementById('stu-name').value.trim().toUpperCase();
  const email=document.getElementById('stu-email').value.trim().toLowerCase();
  const section=document.getElementById('stu-section').value;
  if(!name){alert('Name required');return;}
  const student={name,email,section};
  if(idx===''){
    if(section==='Alpha') ALPHA_STUDENTS.push(student);
    else BETA_STUDENTS.push(student);
  } else {
    const all=getAllStudents();
    const old=all[parseInt(idx)];
    const arr=old.section==='Alpha'?ALPHA_STUDENTS:BETA_STUDENTS;
    const i=arr.findIndex(s=>s.name===old.name&&(s.email||'')===(old.email||''));
    if(i>=0){
      if(section!==old.section){
        arr.splice(i,1);
        if(section==='Alpha') ALPHA_STUDENTS.push(student);
        else BETA_STUDENTS.push(student);
      } else {
        arr[i]={...arr[i],...student};
      }
    }
  }
  closeStudentModal();
  await saveStudentsToServer();
  renderStudentsTable();
  document.getElementById('alpha-count').textContent=ALPHA_STUDENTS.length+' students';
  document.getElementById('beta-count').textContent=BETA_STUDENTS.length+' students';
  logEvent('STUDENT_UPDATED',`${name} — ${section}`,'👤');
}

async function removeStudent(idx){
  const all=getAllStudents();
  const s=all[idx];
  if(!s||!confirm(`Remove ${s.name} from ${s.section}?`)) return;
  const arr=s.section==='Alpha'?ALPHA_STUDENTS:BETA_STUDENTS;
  const i=arr.findIndex(x=>x.name===s.name&&(x.email||'')===(s.email||''));
  if(i>=0) arr.splice(i,1);
  await saveStudentsToServer();
  renderStudentsTable();
  document.getElementById('alpha-count').textContent=ALPHA_STUDENTS.length+' students';
  document.getElementById('beta-count').textContent=BETA_STUDENTS.length+' students';
  logEvent('STUDENT_REMOVED',`${s.name} removed`,'🗑️');
}

async function renderFacesTable(){
  const faces=await apiGet('/api/faces')||[];
  const allStudents=[...ALPHA_STUDENTS,...BETA_STUDENTS];
  const table=document.getElementById('faces-table');
  if(!faces.length){table.innerHTML='<div class="table-empty">No face data stored</div>';return;}
  table.innerHTML=faces.map(f=>{
    const s=allStudents.find(st=>(st.email||'').toLowerCase()===(f.contactId||''));
    const hasDesc=f.descriptor&&f.descriptor.length===128;
    return `<div class="table-row" style="grid-template-columns:1fr auto auto auto;">
      <div>${s?s.name:'Unknown'}</div>
      <div>${hasDesc?'<span class="pill success">128-d ✓</span>':'<span class="pill warning">—</span>'}</div>
      <div style="font-size:0.68rem;color:var(--muted);">${new Date(f.capturedAt).toLocaleString()}</div>
      <div><button class="btn btn-danger btn-sm" style="font-size:0.65rem;padding:0.3rem 0.6rem;" onclick="deleteFace('${f.contactId}')">Delete</button></div>
    </div>`;
  }).join('');
}

async function deleteFace(contactId){
  const faces=(await apiGet('/api/faces')||[]).filter(f=>f.contactId!==contactId);
  await apiDelete('/api/faces');
  for(const f of faces) await apiPost('/api/faces',f);
  await logEvent('FACE_DELETED','Face data deleted','🗑️');
  renderFacesTable();
}
async function deleteAllFaces(){if(!confirm('Delete ALL face data?'))return;await apiDelete('/api/faces');await logEvent('ALL_FACES_DELETED','All biometric data cleared','🗑️');renderFacesTable();}

async function logFraud(type,name,email,section,detail){
  await apiPost('/api/fraud',{type,name,email,section,detail,timestamp:new Date().toISOString()});
  const fraud=await apiGet('/api/fraud')||[];
  const el=document.getElementById('fraud-badge');if(el)el.textContent=fraud.length;
}

async function renderFraud(){
  const fraud=await apiGet('/api/fraud')||[];
  const stats=document.getElementById('fraud-stats');
  const dv=fraud.filter(f=>f.type==='DUPLICATE_VOTE_ATTEMPT').length;
  const df=fraud.filter(f=>f.type==='FACE_DUPLICATE').length;
  const fi=fraud.filter(f=>f.type==='FAILED_IDENTITY').length;
  stats.innerHTML=`
    <div class="stat" style="--accent-line:var(--error);--accent-text:var(--error);"><div class="stat-val">${dv}</div><div class="stat-label">Duplicate Votes</div></div>
    <div class="stat" style="--accent-line:var(--warning);--accent-text:var(--warning);"><div class="stat-val">${df}</div><div class="stat-label">Face Duplicates</div></div>
    <div class="stat"><div class="stat-val">${fi}</div><div class="stat-label">Failed Identity</div></div>
  `;
  const list=document.getElementById('fraud-list');
  if(!fraud.length){list.innerHTML='<div class="table-empty">✅ No fraud attempts</div>';return;}
  list.innerHTML=`<div class="table-wrap">
    <div class="table-head" style="grid-template-columns:1fr auto auto;"><div>Type</div><div>Section</div><div>Time</div></div>
    ${fraud.slice().reverse().map(f=>`
      <div class="table-row" style="grid-template-columns:1fr auto auto;">
        <div><span class="pill danger">${f.type}</span></div>
        <div><span class="pill ${(f.section||'').toLowerCase()}">${f.section||'—'}</span></div>
        <div style="font-size:0.68rem;color:var(--muted);">${new Date(f.timestamp).toLocaleTimeString()}</div>
      </div>
    `).join('')}
  </div>`;
}

async function logEvent(action,detail,icon='📝'){await apiPost('/api/logs',{action,detail,icon,timestamp:new Date().toISOString()});}
async function renderLogs(){
  const logs=(await apiGet('/api/logs')||[]).slice().reverse();
  const el=document.getElementById('activity-log');
  if(!logs.length){el.innerHTML='<div class="table-empty">No activity yet</div>';return;}
  el.innerHTML=logs.map(l=>`
    <div class="log-item">
      <div class="log-icon ${l.action.includes('VOTE')?'vote':l.action.includes('FRAUD')||l.action.includes('FAIL')||l.action.includes('DUPLIC')?'fraud':l.action.includes('FACE')?'face':'system'}">${l.icon||'📝'}</div>
      <div>
        <div style="font-family:'Syne',sans-serif;font-weight:600;font-size:0.78rem;">${l.action}</div>
        <div style="color:var(--muted2);font-size:0.72rem;margin-top:0.15rem;">${l.detail}</div>
        <div class="log-time">${new Date(l.timestamp).toLocaleString()}</div>
      </div>
    </div>
  `).join('');
}
async function clearLogs(){await apiDelete('/api/logs');renderLogs();}

async function exportCSV(type){
  let rows=[],header='';
  const votes=await apiGet('/api/votes')||[];
  const fraud=await apiGet('/api/fraud')||[];
  const logs=await apiGet('/api/logs')||[];
  if(type==='full'){
    header='Vote ID,Section,Candidate,Timestamp\n';
    rows=votes.map(v=>`${v.voteId},${v.section},${v.candidateName},${v.timestamp}`);
  }else if(type==='fraud'){
    header='Type,Section,Detail,Timestamp\n';
    rows=fraud.map(f=>`${f.type},${f.section||''},${f.detail},${f.timestamp}`);
  }else if(type==='turnout'){
    header='Section,Total,Votes,Turnout%\n';
    const av=votes.filter(v=>v.section==='Alpha').length;
    const bv=votes.filter(v=>v.section==='Beta').length;
    rows=[`Alpha,${ALPHA_STUDENTS.length},${av},${Math.round(av/ALPHA_STUDENTS.length*100)}%`,
          `Beta,${BETA_STUDENTS.length},${bv},${Math.round(bv/BETA_STUDENTS.length*100)}%`];
  }else if(type==='logs'){
    header='Action,Detail,Timestamp\n';
    rows=logs.map(l=>`${l.action},"${l.detail}",${l.timestamp}`);
  }
  const blob=new Blob([header+rows.join('\n')],{type:'text/csv'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);
  a.download=`cr_election_${type}_${Date.now()}.csv`;a.click();
}

async function toggleSetting(key){
  settings=await loadSettings();settings[key]=!settings[key];await saveSettings(settings);
  const ids={resultsLocked:'tog-lock',manualReveal:'tog-reveal',faceDetection:'tog-face',sessionTimeout:'tog-timeout',privacyNotice:'tog-privacy',autoDeleteFaces:'tog-autodel'};
  if(ids[key]) document.getElementById(ids[key])?.classList.toggle('on',settings[key]);
  await logEvent('SETTING_CHANGED',`${key} = ${settings[key]}`,'⚙️');
}

async function changePass(){
  settings=await loadSettings();
  const old=document.getElementById('old-pass').value;
  const nw=document.getElementById('new-pass').value;
  const err=document.getElementById('pass-change-err');
  const ok=document.getElementById('pass-change-ok');
  err.textContent='';ok.style.display='none';
  if(hashStr(old)!==settings.adminPass){err.textContent='Current password incorrect';return;}
  if(nw.length<6){err.textContent='Min 6 characters';return;}
  settings.adminPass=hashStr(nw);await saveSettings(settings);
  ok.style.display='flex';
  document.getElementById('old-pass').value='';document.getElementById('new-pass').value='';
  await logEvent('PASS_CHANGED','Admin password updated','🔑');
}

async function resetVotes(){
  if(!confirm('Delete ALL votes? Irreversible!'))return;
  await apiDelete('/api/votes');
  await logEvent('VOTES_RESET','All votes cleared','⚠️');
  renderDashboard();
}

function showModal(title,sub,onConfirm){
  document.getElementById('modal-title').textContent=title;
  document.getElementById('modal-sub').textContent=sub;
  document.getElementById('modal-confirm-btn').onclick=()=>{onConfirm();closeModal();};
  document.getElementById('confirm-modal').classList.add('open');
}
function closeModal(){document.getElementById('confirm-modal').classList.remove('open');}
