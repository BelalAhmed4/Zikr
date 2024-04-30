/* Page 1 */
let quranAndSunnah = `
<div class="zekr">
<h3>(رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ)
<br>
<br>
[سورة البقرة، آية:201].</h3>
<span class="counter">1</span>
</div>
<div class="zekr">
<h3>﴿ اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيم ﴾ 
<br>
<br>
[البقرة/ 255].</h3>
<span class="counter">1</span>
</div>

<div class="zekr">
<h3>{رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ (23)}
<br>
<br>
[الأعراف/ 23].</h3>
<span class="counter">1</span>
</div>

<div class="zekr">
<h3>(رَبَّنا آتِنا مِن لَدُنكَ رَحمَةً وَهَيِّئ لَنا مِن أَمرِنا رَشَدًا)
<br>
<br>
[الكهف/ 10].</h3>
<span class="counter">1</span>
</div>
<div class="zekr">
<h3>(لَّا إِلَـهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ)
<br>
<br>
[الأنبياء/ 87].</h3>
<span class="counter">1</span>
</div>
<div class="zekr">
<h3>(اللَّهمَّ اهدِني فيمن هديت، وعافِني فيمن عافيتَ، وتولَّني فيمن تولَّيتَ، وبارِك لي فيما أعطيتَ، وقني شرَّ ما قضيتَ، إنَّكَ تقضي ولا يقضى عليْكَ، وإنَّهُ لا يذلُّ من واليتَ، ولا يعزُّ من عاديتَ، تبارَكتَ ربَّنا وتعاليتَ).</h3>
<span class="counter">1</span>
</div>
<div class="zekr">
<h3>(اللَّهُمَّ اغفِر لي ، وارحَمني ، وعافِني ، واهدِني ، وارزُقني).</h3>
<span class="counter">1</span>
</div>
<div class="zekr">
<h3>(اللَّهُمَّ اكْفِني بحلالِك عن حرامِك، وأغْنِني بفَضْلِك عمَّن سِواك).</h3>
<span class="counter">1</span>
</div>

<div class="zekr">
<h3>"اللهم أنت ربي، لا إله إلا أنت، خلَقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شرِّ ما صنعت، أبُوء لك بنعمتك عليّ وأبوء بذنبي، فاغفر لي؛ فإنه لا يغفر الذنوب إلا أنت"، قال: "مَن قالها من النهار موقنًا بها، فمات من يومه قبل أن يُمسي، فهو من أهل الجنة، ومن قالها من الليل وهو مُوقن بها، فمات قبل أن يُصبح، فهو من أهل الجنة"؛ رواه البخاري.</h3>
<span class="counter">1</span>
</div>
<div class="zekr">
<h3>"يا حي يا قيُّوم، برحمتك أستغيث، أصلِح لي شأني كله، ولا تَكلني إلى نفسي طرْفة عينٍ"؛ حسن؛ رواه الحاكم.</h3>
<span class="counter">1</span>
</div>
<div class="zekr">
<h3>اللهم صلِّ على محمد وعلى آل محمد كما صليت على آل إبراهيم إنك حميد مجيد.</h3>
<span class="counter">10</span>
</div>
`;

/* Page 2 */
let sebhaBox = `<div class="sebha">
<p class="tasbehCount">0</p>
<h4>سَبِّح</h4>
</div>
<div class="undo"><img src="./icons/undo.png" alt="" /></div>`;
/* Get Elements */
let prepare = document.querySelector(".prepare");
let headerTitle = document.querySelector(".headerTitle");
let azkarSection = document.querySelector(".azkarSection");
let zekrs = document.querySelectorAll(".zekr");
let holders = document.querySelectorAll(".holder");

// Pages
const page1 = document.querySelector(".pageOne");
const page2 = document.querySelector(".pageTwo");
// Check What Section Choosed
function check() {
  if (page2.classList.contains("selected")) {
    azkarSection.innerHTML = sebhaBox;
    headerTitle.textContent = "مسبحة";
    azkarSection.style.justifyContent = "flex-start";
  } else {
    azkarSection.innerHTML = quranAndSunnah;
    headerTitle.textContent = " أذكار  من الكتاب والسُّنّة ";
  }
}
/*  Hide Prepare Section */
setTimeout(function start() {
  prepare.classList.add("hide");
  check();
}, 2000);
// Function to Decrement The Counter In Zekr
function decrementCounter(event) {
  const target = event.target.closest(".zekr"); // Find the closest parent element with the class 'zekr'
  if (!target) return; // If the target is not a zekr element, exit the function
  const counter = target.querySelector(".counter");
  let counterValue = parseInt(counter.textContent);
  // Decrement the counter value
  if (counterValue > 0) {
    counterValue--;
    counter.textContent = counterValue;
  }
  // Add lowOpacity class if counter reaches zero
  if (counterValue === 0) {
    target.classList.add("lowOpacity");
  }
}
// Attach event listener to the azkarSection and use event delegation
azkarSection.addEventListener("click", decrementCounter);
// Sebha Counter Function
azkarSection.addEventListener("click", incrementCounter);
function incrementCounter(event) {
  var element = event.target;
  if (element.classList.contains("sebha")) {
    let tasbehCount = document.querySelector(".tasbehCount");
    tasbehValue = parseInt(tasbehCount.textContent);
    tasbehValue++;
    tasbehCount.textContent = tasbehValue;
    console.log(tasbehValue);
    // undo Btn
    var undoBtn = document.querySelector(".undo");
    undoBtn.addEventListener("click", reset);
    function reset() {
      tasbehCount.innerHTML = "0";
    }
  }
}

// sebha.addEventListener("click", tasbehCounter);
// Add Class "selected" To Page Btn When Click
holders.forEach((holder) => {
  holder.addEventListener("click", function () {
    holders.forEach((holder) => {
      holder.classList.remove("selected");
    });
    this.classList.add("selected");
    check();
  });
});
