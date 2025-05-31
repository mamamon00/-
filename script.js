// ข้อมูลคำถามและตัวเลือก พร้อมคะแนนธาตุ
const questions = [
    {
        question: "ในยามที่ความวุ่นวายแผ่ซ่านไปทั่วดินแดนมู่คา คุณจะเลือกทำสิ่งใดเป็นอันดับแรก?",
        options: [
            { text: "วิเคราะห์และวางแผนอย่างรอบคอบ เพื่อหาทางออกที่มั่นคงและเป็นระบบ", scores: { ดิน: 1, แสง: 1 } },
            { text: "ปรับตัวและไหลตามสถานการณ์ พร้อมหาทางเยียวยาจิตใจและสร้างความสงบสุขให้ผู้อื่น", scores: { น้ำ: 1, ลม: 1 } },
            { text: "ลงมืออย่างรวดเร็วและเด็ดขาด เพื่อหยุดยั้งปัญหาด้วยพลังที่รุนแรงและฉับไว", scores: { ไฟ: 1, สายฟ้า: 1 } },
            { text: "สังเกตการณ์จากเงามืดและใช้กลยุทธ์ เพื่อพลิกวิกฤตให้เป็นโอกาสในแบบของตนเอง", scores: { ความมืด: 1 } }
        ]
    },
    {
        question: "คุณกำลังเดินทางในป่าเวทมนตร์ของมู่คา และพบแหล่งพลังวิญญาณลึกลับ คุณจะทำอย่างไร?",
        options: [
            { text: "ศึกษาและเฝ้าสังเกตการณ์อย่างระมัดระวัง เพื่อทำความเข้าใจพลังงานนั้นอย่างถ่องแท้ก่อนเข้าใกล้", scores: { ดิน: 1, แสง: 1 } },
            { text: "เข้าไปสัมผัสอย่างอ่อนโยน เพื่อรับรู้และเชื่อมโยงกับกระแสพลังงานนั้นอย่างเป็นธรรมชาติ", scores: { น้ำ: 1, ลม: 1 } },
            { text: "พุ่งเข้าไปอย่างไม่ลังเล ด้วยความตื่นเต้นที่จะค้นพบพลังใหม่ๆ หรือสมบัติล้ำค่า", scores: { ไฟ: 1, สายฟ้า: 1 } },
            { text: "พิจารณาว่าอาจเป็นกับดักหรือกลลวง และเลือกที่จะหลีกเลี่ยงหรือเฝ้าระวังจากระยะไกล", scores: { ความมืด: 1 } }
        ]
    },
    {
        question: "เมื่อต้องเผชิญหน้ากับอสูรกายแห่งความมืดที่แข็งแกร่งกว่าคุณมาก คุณจะเลือกวิธีใดในการต่อสู้?",
        options: [
            { text: "วางแผนการรบอย่างละเอียด ใช้เทคนิคการต่อสู้ที่เน้นความมั่นคงและอดทน เพื่อหาจุดอ่อนของศัตรู", scores: { ดิน: 1, แสง: 1 } },
            { text: "ใช้กระบวนท่าที่พลิกแพลงและยืดหยุ่น หลีกเลี่ยงการปะทะโดยตรง เน้นการตั้งรับและสวนกลับ", scores: { น้ำ: 1, ลม: 1 } },
            { text: "ปลดปล่อยพลังโจมตีที่รุนแรงและฉับพลัน ไม่ให้อสูรกายได้ตั้งตัว เพื่อสร้างความเสียหายอย่างรุนแรง", scores: { ไฟ: 1, สายฟ้า: 1 } },
            { text: "ซ่อนตัวอยู่ในเงามืด วางกับดัก หรือใช้กลวิธีที่คาดไม่ถึง เพื่อเล่นงานอสูรกายจากจุดบอด", scores: { ความมืด: 1 } }
        ]
    },
    {
        question: "หากคุณมีโอกาสบำเพ็ญเพียรเพื่อก้าวสู่เซียน คุณจะเลือกสถานที่ใดในดินแดนศักดิ์สิทธิ์มู่คา?",
        options: [
            { text: "ยอดเขาหินผาอันเงียบสงบ เพื่อฝึกฝนความมั่นคงและบ่มเพาะพลังวิญญาณบริสุทธิ์", scores: { ดิน: 1, แสง: 1 } },
            { text: "ธารน้ำตกที่ไหลรินหรือป่าที่ลมพัดผ่านตลอดเวลา เพื่อสัมผัสความอิสระและการปรับตัว", scores: { น้ำ: 1, ลม: 1 } },
            { text: "บริเวณใกล้ปล่องภูเขาไฟหรือหอคอยสูงเสียดฟ้า เพื่อรับพลังอันร้อนแรงและพลังงานจากเบื้องบน", scores: { ไฟ: 1, สายฟ้า: 1 } },
            { text: "ถ้ำลึกลับที่ไม่มีแสงสว่าง ณ ใจกลางป่าทมิฬ เพื่อเข้าถึงแก่นแท้แห่งความมืดและสมาธิอันลึกซึ้ง", scores: { ความมืด: 1 } }
        ]
    },
    {
        question: "ในเทศกาลท้าประลองแห่งยุทธภพ คุณจะเลือกใช้รูปแบบวิชาใดเพื่อแสดงพลังของตนเอง?",
        options: [
            { text: "กระบวนท่าที่หนักแน่น มั่นคง เน้นความแม่นยำและการป้องกันที่ดี เพื่อควบคุมสถานการณ์", scores: { ดิน: 1, แสง: 1 } },
            { text: "กระบวนท่าที่ลื่นไหล ปรับเปลี่ยนได้ตามสถานการณ์ ทำให้คู่ต่อสู้จับทางได้ยาก", scores: { น้ำ: 1, ลม: 1 } },
            { text: "กระบวนท่าที่รวดเร็ว ดุดัน และปลดปล่อยพลังโจมตีมหาศาล เพื่อเอาชนะคู่ต่อสู้ในพริบตา", scores: { ไฟ: 1, สายฟ้า: 1 } },
            { text: "กระบวนท่าที่เน้นการลอบเร้น การสร้างภาพลวงตา หรือการโจมตีจากมุมอับ เพื่อสร้างความสับสนและชนะด้วยกลยุทธ์", scores: { ความมืด: 1 } }
        ]
    },
    {
        question: "หากคุณต้องร่วมทีมกับผู้แทนแห่งธาตุคนอื่น ๆ เพื่อแก้ไขความแปรปรวนของพลังวิญญาณ คุณจะเลือกบทบาทใด?",
        options: [
            { text: "ผู้นำที่วางแผนและจัดระบบ สร้างความมั่นคงและชี้ทางสว่างให้ทีม", scores: { ดิน: 1, แสง: 1 } },
            { text: "ผู้ประสานงานที่ช่วยสร้างความกลมเกลียว แก้ไขความขัดแย้ง และทำให้การทำงานของทีมไหลลื่น", scores: { น้ำ: 1, ลม: 1 } },
            { text: "ผู้บุกเบิกและผู้โจมตีหลัก ที่พร้อมเผชิญหน้ากับอันตรายและใช้พลังเพื่อบดขยี้อุปสรรค", scores: { ไฟ: 1, สายฟ้า: 1 } },
            { text: "ผู้ที่คอยเฝ้าระวังจากเงามืดและวางกลยุทธ์ลับ เพื่อสนับสนุนทีมโดยไม่ให้ใครรู้ตัว", scores: { ความมืด: 1 } }
        ]
    },
    {
        question: "สิ่งใดที่คุณคิดว่าเป็นแก่นแท้ของการบำเพ็ญเพียรสู่ความเป็นเซียนอย่างแท้จริงในดินแดนมู่คา?",
        options: [
            { text: "ความอดทนและความพากเพียร ในการฝึกฝนอย่างมั่นคง และการบ่มเพาะคุณธรรมเพื่อความดีงาม", scores: { ดิน: 1, แสง: 1 } },
            { text: "การปรับตัวให้เข้ากับทุกสถานการณ์ การค้นหาความสงบ และความอิสระในการไหลเวียนของชีวิต", scores: { น้ำ: 1, ลม: 1 } },
            { text: "การก้าวข้ามขีดจำกัด การปลดปล่อยพลังที่ซ่อนเร้น และความสามารถในการควบคุมพลังงานอันยิ่งใหญ่", scores: { ไฟ: 1, สายฟ้า: 1 } },
            { text: "การเข้าใจถึงความลึกซึ้งของจักรวาล ทั้งด้านสว่างและด้านมืด รวมถึงการควบคุมพลังที่มองไม่เห็นให้เป็นประโยชน์", scores: { ความมืด: 1 } }
        ]
    }
];

// ข้อมูลธาตุแต่ละประเภท
const elementsData = {
    "ดิน": {
        description: "มั่นคง หนักแน่น อดทน มีความรับผิดชอบสูง มีเหตุผลและเป็นคนติดดินดุจขุนเขาแห่งมู่คา",
        skills: ["คาถาพสุธากำบัง", "วิชาเกราะเหล็กไหล", "ฝ่ามือหินผา"],
        subElementHint: "อาจมีอิทธิพลของ โลหะ แฝงอยู่ ทำให้มีความเด็ดเดี่ยวและเป็นระเบียบ"
    },
    "น้ำ": {
        description: "อ่อนโยน ปรับตัวเก่ง เห็นอกเห็นใจผู้อื่น มีความยืดหยุ่นและเป็นนักแก้ปัญหาดุจสายน้ำในลำธาร",
        skills: ["กระบวนท่าธาราไร้ลักษณ์", "คาถารักษาน้ำทิพย์", "ม่านน้ำคุ้มภัย"],
        subElementHint: "อาจมีอิทธิพลของ พฤกษา แฝงอยู่ ทำให้มีความเข้าใจธรรมชาติและส่งเสริมการเยียวยา"
    },
    "ลม": {
        description: "อิสระ รวดเร็ว ชอบการเปลี่ยนแปลง มีความคิดสร้างสรรค์ และเป็นนักสำรวจดุจสายลมที่พัดผ่านยอดเขา",
        skills: ["วิชาตัวเบาไร้เงา", "พายุคมกระบี่", "เพลงกระบี่วายุคลั่ง"],
        subElementHint: "อาจมีอิทธิพลของ พฤกษา แฝงอยู่ ทำให้มีความสามารถในการปรับตัวและเติบโต"
    },
    "ไฟ": {
        description: "ร้อนแรง มุ่งมั่น มีพลังงานสูง มีความเป็นผู้นำ และกล้าหาญดุจเปลวเพลิงที่ไม่มีวันมอดดับ",
        skills: ["เพลิงพิโรธสยบมาร", "คาถาลูกไฟเพลิงกาฬ", "ฝ่ามือเพลิงผลาญ"],
        subElementHint: "อาจมีอิทธิพลของ โลหะ แฝงอยู่ ทำให้มีความเด็ดขาดและพลังทำลายที่คมชัด"
    },
    "สายฟ้า": {
        description: "ฉับไว ปราดเปรียว มีไหวพริบดี มีความคิดสร้างสรรค์ และแก้ปัญหาเฉพาะหน้าได้ดีดุจสายฟ้าฟาดในพริบตา",
        skills: ["พันธมิตรอัสนีบาต", "ดาบสายฟ้าฟาด", "อัสนีบาตพันชั้น"],
        subElementHint: "อาจมีอิทธิพลของ โลหะ แฝงอยู่ ทำให้มีความแม่นยำและพลังที่พุ่งตรง"
    },
    "แสง": {
        description: "บริสุทธิ์ เปี่ยมด้วยคุณธรรม มองโลกในแง่ดี มีความซื่อสัตย์ และเป็นที่พึ่งของผู้อื่นดุจแสงแรกแห่งอรุณ",
        skills: ["คาถาอาคมแสงศักดิ์สิทธิ์", "ดรรชนีสยบมาร", "เกราะแสงคุ้มกัน"],
        subElementHint: "อาจมีอิทธิพลของ พลังจิต แฝงอยู่ ทำให้มีความสามารถในการมองเห็นและเชื่อมโยงกับจิตวิญญาณ"
    },
    "ความมืด": {
        description: "ลึกลับ มีความคิดลึกซึ้ง มีความเข้าใจในด้านมืดของจิตใจ และมักมีกลยุทธ์ที่ซับซ้อนดุจเงามืดในราตรี",
        skills: ["คาถาเงาทมิฬ", "วิชามายาลวงตา", "ดัชนีมรณะ"],
        subElementHint: "อาจมีอิทธิพลของ พลังจิต แฝงอยู่ ทำให้มีความสามารถในการควบคุมความคิดและสร้างภาพลวงตา"
    }
};

// ตัวแปรสำหรับควบคุมสถานะเกม
let currentQuestionIndex = 0;
let scores = {
    "ดิน": 0, "น้ำ": 0, "ลม": 0, "ไฟ": 0, "สายฟ้า": 0, "แสง": 0, "ความมืด": 0
};
let selectedOption = null; // เก็บตัวเลือกที่ผู้เล่นเลือกในแต่ละคำถาม

// Elements จาก HTML (ตรวจสอบ ID เหล่านี้ให้ตรงกับใน index.html)
const storyIntroSection = document.getElementById('story-intro');
const startQuizBtn = document.getElementById('start-quiz-btn');
const quizSection = document.getElementById('quiz-section');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextQuestionBtn = document.getElementById('next-question-btn');
const resultSection = document.getElementById('result-section');
const resultElementSpan = document.getElementById('result-element');
const elementDescriptionPara = document.getElementById('element-description');
const elementSkillsList = document.getElementById('element-skills');
const subElementHintPara = document.getElementById('sub-element-hint');
const restartQuizBtn = document.getElementById('restart-quiz-btn');

// --- ฟังก์ชันหลักของเกม ---

// เริ่มต้นเกม
function startQuiz() {
    storyIntroSection.classList.add('hidden');
    quizSection.classList.remove('hidden');
    currentQuestionIndex = 0;
    resetScores();
    loadQuestion();
}

// โหลดคำถาม
function loadQuestion() {
    selectedOption = null; // รีเซ็ตตัวเลือกที่เลือก
    nextQuestionBtn.classList.add('hidden'); // ซ่อนปุ่มถัดไป
    optionsContainer.innerHTML = ''; // ล้างตัวเลือกเก่า

    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;

        currentQuestion.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.classList.add('option-button');
            button.textContent = option.text;
            button.dataset.optionIndex = index; // เก็บ index ของ option
            button.addEventListener('click', () => selectOption(button, option.scores));
            optionsContainer.appendChild(button);
        });
    } else {
        // เมื่อตอบครบทุกคำถาม
        showResult();
    }
}

// เลือกตัวเลือก
function selectOption(button, optionScores) {
    // ลบการเลือกจากปุ่มก่อนหน้า
    const allOptionButtons = optionsContainer.querySelectorAll('.option-button');
    allOptionButtons.forEach(btn => btn.classList.remove('selected'));

    // ทำเครื่องหมายปุ่มที่เลือก
    button.classList.add('selected');
    selectedOption = optionScores; // เก็บคะแนนของตัวเลือกที่เลือก

    nextQuestionBtn.classList.remove('hidden'); // แสดงปุ่มถัดไป
}

// ไปยังคำถามถัดไป
function goToNextQuestion() {
    if (selectedOption) {
        // เพิ่มคะแนนธาตุ
        for (const element in selectedOption) {
            if (scores.hasOwnProperty(element)) {
                scores[element] += selectedOption[element];
            }
        }
        currentQuestionIndex++;
        loadQuestion();
    } else {
        alert("กรุณาเลือกคำตอบก่อนไปคำถามถัดไป");
    }
}

// แสดงผลลัพธ์
function showResult() {
    quizSection.classList.add('hidden');
    resultSection.classList.remove('hidden');

    let maxScore = -1;
    let resultElement = "";
    let tiedElements = []; // ใช้เก็บธาตุที่มีคะแนนสูงสุดเท่ากัน

    // หาธาตุที่มีคะแนนสูงสุด
    for (const element in scores) {
        if (scores[element] > maxScore) {
            maxScore = scores[element];
            resultElement = element;
            tiedElements = [element]; // เริ่มต้นใหม่ถ้าเจอคะแนนสูงกว่า
        } else if (scores[element] === maxScore && maxScore > 0) { // ถ้าคะแนนเท่ากันและไม่ใช่ 0
            tiedElements.push(element);
        }
    }

    // กรณีมีธาตุเดียวที่ได้คะแนนสูงสุด
    if (tiedElements.length === 1) {
        resultElement = tiedElements[0];
    } else if (tiedElements.length > 1) {
        // กรณีมีหลายธาตุที่ได้คะแนนสูงสุดเท่ากัน
        // อาจจะเลือกธาตุแรก หรือสุ่ม หรือแสดงทั้งหมด
        // สำหรับตอนนี้ เลือกธาตุแรกใน tiedElements (หรือจะปรับแต่งให้สุ่มได้)
        resultElement = tiedElements[0];
        // หรือจะแสดงเป็น "ธาตุผสม" ก็ได้ เช่น "ธาตุดิน-แสง"
        // resultElement = "ธาตุผสม: " + tiedElements.join("-");
    } else {
        // กรณีไม่มีคะแนนเลย (ไม่น่าจะเกิดขึ้นถ้าเล่นจนจบ)
        resultElement = "ไม่พบธาตุที่ชัดเจน";
    }

    resultElementSpan.textContent = resultElement;
    const data = elementsData[resultElement]; // ใช้ข้อมูลธาตุที่ได้
    
    // ตรวจสอบว่ามีข้อมูลธาตุหรือไม่ก่อนเข้าถึง property
    if (data) {
        elementDescriptionPara.textContent = data.description;
        elementSkillsList.innerHTML = '';
        data.skills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            elementSkillsList.appendChild(li);
        });
        subElementHintPara.textContent = data.subElementHint;
    } else {
        // กรณีที่ไม่พบข้อมูลธาตุที่ตรงกัน (เช่นกรณี "ธาตุผสม" ที่ยังไม่ได้กำหนดใน elementsData)
        elementDescriptionPara.textContent = "ไม่สามารถระบุรายละเอียดธาตุได้ เนื่องจากเป็นธาตุผสม หรือข้อมูลยังไม่สมบูรณ์";
        elementSkillsList.innerHTML = '';
        subElementHintPara.textContent = "";
    }
}


// รีเซ็ตคะแนน
function resetScores() {
    for (const element in scores) {
        scores[element] = 0;
    }
}

// เริ่มต้นเกมใหม่
function restartQuiz() {
    resultSection.classList.add('hidden');
    storyIntroSection.classList.remove('hidden');
    currentQuestionIndex = 0;
    resetScores();
    selectedOption = null;
    // เลื่อนหน้าจอกลับขึ้นไปด้านบนสุด
    window.scrollTo(0, 0); 
}

// --- Event Listeners ---
// ตรวจสอบให้แน่ใจว่าได้ดึง element ได้ถูกต้อง
if (startQuizBtn) {
    startQuizBtn.addEventListener('click', startQuiz);
} else {
    console.error("Element with ID 'start-quiz-btn' not found.");
}

if (nextQuestionBtn) {
    nextQuestionBtn.addEventListener('click', goToNextQuestion);
} else {
    console.error("Element with ID 'next-question-btn' not found.");
}

if (restartQuizBtn) {
    restartQuizBtn.addEventListener('click', restartQuiz);
} else {
    console.error("Element with ID 'restart-quiz-btn' not found.");
}

// เมื่อหน้าเว็บโหลดเสร็จสิ้น จะซ่อนส่วน Quiz และ Result ไว้ก่อน
document.addEventListener('DOMContentLoaded', () => {
    quizSection.classList.add('hidden');
    resultSection.classList.add('hidden');
});
