// ===== ДАННЫЕ ДЛЯ ТЕСТА АРХЕТИПОВ =====
const archetypesData = {
    sage: {
        name: 'Мудрец',
        description: 'Ваш аналитический ум и любознательность делают вас идеальным исследователем глубинных процессов психики. Вы склонны к системному мышлению и поиску истины.',
        icon: '🧠',
        characteristics: ['Аналитичность', 'Любознательность', 'Глубина мышления'],
        recommendation: 'Развивайте свои аналитические способности через изучение психологических теорий и методик. Идеальный путь для вас - исследовательская работа в психологии.'
    },
    caregiver: {
        name: 'Опекун',
        description: 'Ваша эмпатия и забота о других - это ценный дар для психологической практики. Вы интуитивно понимаете эмоции и потребности окружающих.',
        icon: '❤️',
        characteristics: ['Эмпатия', 'Забота', 'Бескорыстие'],
        recommendation: 'Развивайте навыки активного слушания и эмпатии. Вы будете прекрасным консультантом или клиническим психологом.'
    },
    warrior: {
        name: 'Воин',
        description: 'Ваша решительность и сила воли позволяют преодолевать любые препятствия. Вы умеете ставить цели и достигать их, что ценно в терапевтической работе.',
        icon: '⚔️',
        characteristics: ['Решительность', 'Сила воли', 'Лидерство'],
        recommendation: 'Развивайте лидерские качества и навыки целеполагания. Вы сможете эффективно работать в организационной психологии.'
    },
    explorer: {
        name: 'Искатель',
        description: 'Ваше любопытство и независимость открывают новые горизонты в психологии. Вы не боитесь исследовать неизведанные территории психики.',
        icon: '🔍',
        characteristics: ['Любопытство', 'Независимость', 'Адаптивность'],
        recommendation: 'Исследуйте различные направления психологии, находите свои уникальные пути. Вы будете прекрасным новатором в этой области.'
    }
};

// ===== ДАННЫЕ ДЛЯ ТЕСТА ПРОФОРИЕНТАЦИИ =====
const careerSpecializations = {
    clinical: {
        name: 'Клиническая психология',
        description: 'Ваш аналитический подход и интерес к глубинным процессам психики идеально подходят для работы с патологиями.',
        icon: '🏥',
        skills: ['Диагностика', 'Терапия', 'Научные исследования'],
        courses: ['Магистратура по клинической психологии', 'Курс психопатологии и диагностики']
    },
    counseling: {
        name: 'Психологическое консультирование',
        description: 'Ваша эмпатия и желание помогать людям делают вас идеальным консультантом.',
        icon: '💼',
        skills: ['Эмпатия', 'Активное слушание', 'Кризисная помощь'],
        courses: ['Программа профессиональной переподготовки', 'Курс консультативной психологии']
    },
    organizational: {
        name: 'Организационная психология',
        description: 'Ваш системный подход и лидерские качества идеально подходят для работы в бизнес-среде.',
        icon: '🏢',
        skills: ['Аналитика', 'Командная работа', 'Лидерство'],
        courses: ['MBA в области управления персоналом', 'Курсы HR-аналитики']
    },
    educational: {
        name: 'Педагогическая психология',
        description: 'Ваш интерес к развитию и обучению делает вас прекрасным педагогом-психологом.',
        icon: '🎓',
        skills: ['Обучение', 'Развитие', 'Мотивация'],
        courses: ['Специализация в образовательных технологиях', 'Психология развития и обучения']
    }
};

// ===== ДАННЫЕ ДЛЯ ВИЗУАЛЬНОЙ НОВЕЛЛЫ =====
const novelData = {
    patients: [
        {
            id: 'teen',
            name: 'Илья, 14 лет',
avatar: '/pers/ilia14.jpg',
            problem: 'Кризис идентичности',
            description: 'Учится в 8 классе. Раньше был спокойным парнем, ходил на плавание. Под влиянием старших ребят начал прогуливать тренировки.',
            dialogues: [
                { patient: 'Доктор, родители постоянно орут на меня. Отец узнал, что я пропустил плавание, забрал компьютер и сказал, что я качусь на дно. А мне это плавание уже в горле сидит!', options: [
                    { text: 'Когда вы впервые почувствовали, что плавание вам надоело?', method: 'psychoanalytic' },
                    { text: 'Что вы чувствуете, когда отец орет на вас?', method: 'gestalt' },
                    { text: 'Что хорошего давало вам плавание раньше?', method: 'cbt' }
                ]},
                { patient: 'Пацаны на споте постоянно угарают над теми, кто ботанит. Чтобы меня уважали, мне приходится делать вид, что мне пофиг на всё. Но на самом деле я чувствую себя не в своей тарелке.', options: [
                    { text: 'Что для вас значит быть "ботаном"?', method: 'psychoanalytic' },
                    { text: 'Как это "не в своей тарелке" ощущается в вашем теле?', method: 'gestalt' },
                    { text: 'Что будет, если вы скажете пацанам, что вам это не нравится?', method: 'cbt' }
                ]},
                { patient: 'Я не понимаю, кто я. Если я слушаю родителей - я скучный ботаник без друзей. Если я с пацанами - я делаю глупости, за которые мне потом хреново.', options: [
                    { text: 'Что для вас значит быть собой?', method: 'psychoanalytic' },
                    { text: 'Представьте, что вы можете быть и тем, и другим. Как это?', method: 'gestalt' },
                    { text: 'Что мешает вам быть собой с родителями?', method: 'cbt' }
                ]},
                { patient: 'Как мне быть собой и не потерять ни родителей, ни друзей?', options: [
                    { text: 'Что будет, если родители узнают о ваших прогулах?', method: 'psychoanalytic' },
                    { text: 'Как вы можете объяснить родителям, что вам нужно пространство?', method: 'gestalt' },
                    { text: 'Какой первый шаг к честности вы могли бы сделать?', method: 'cbt' }
                ]},
                { patient: 'Спасибо. Я проанализировал нашу беседу и понял, что мне нужно найти баланс между своими желаниями и ожиданиями других.', options: [] }
            ],
            finalDialogue: { patient: 'Спасибо. Я проанализировал нашу беседу и понял, что мне нужно найти баланс между своими желаниями и ожиданиями других.' }
        },
        {
            id: 'youth',
            name: 'Валерия, 19 лет',
avatar: '/pers/valeria19.jpg',
            problem: 'Поиск призвания',
            description: 'Учится на 2 курсе архитектурного факультета. Учебу оплачивает дядя, у него свое бюро. Втайне снимает и монтирует короткометражки, мечтает перевестись на режиссуру.',
            dialogues: [
                {
                    step: 1,
                    title: 'Вход в контакт (Психоанализ №1)',
                    patient: 'Здравствуйте. Я пришла, потому что больше не могу делать вид, что всё в порядке. Я учусь на втором курсе архитектурного, учебу оплачивает дядя, у него свое бюро. Но я понимаю, что это совсем не моё. Втайне я снимаю и монтирую короткометражки, мечтаю перевестись на режиссуру. Но я боюсь даже заговорить об этом с семьей - меня просто сочтут неблагодарной...',
                    options: [
                        { text: 'Валерия, чьи ожидания вы боитесь нарушить больше - реальные требования дяди или сформированный в детстве образ "идеальной племянницы"?', method: 'psychoanalytic', isDemo: true },
                        { text: 'Давайте сопоставим факты: что конкретно нужно сделать для официального перевода и каков ваш план действия?', method: 'cbt' },
                        { text: 'Какое чувство возникает у вас прямо сейчас, когда вы произносите слово "неблагодарная"?', method: 'gestalt' }
                    ]
                },
                {
                    step: 2,
                    title: 'Осознание актуального переживания (Гештальт-фокус)',
                    patient: 'Наверное, этот образ... Я с детства привыкла быть послушной. Но сейчас, когда я сижу за чертежами, я чувствую только апатию и бессилие. А когда я пишу раскадровки или монтирую видео, у меня буквально открывается второе дыхание.',
                    options: [
                        { text: 'Попробуйте прислушаться к этому бессилию. Что по вашему мнению остается без внимания, пока вы заставляете себя чертить?', method: 'gestalt', isDemo: true },
                        { text: 'Как вам кажется, не появляется ли внутри скрытое желание саботировать учёбу, чтобы этот перевод случался сам собой, без вашего прямого разговора?', method: 'psychoanalytic' },
                        { text: 'Какая конкретно мысль возникает у вас в тот момент, когда нужно садиться за архитектурный проект?', method: 'cbt' }
                    ]
                },
                {
                    step: 3,
                    title: 'Работа с альтернативами и убеждениями (КПТ-фокус)',
                    patient: 'Думаю, что желание заниматься творчеством и кино. Но у меня сразу возникает страх: в режиссуре огромный конкурс, я могу не пройти, потерять поддержку дяди и остаться ни с чем. Кажется, будто у меня всего два пути: терпеть дальше или всё разрушить.',
                    options: [
                        { text: 'Валерия, когда мы напуганы, нам часто кажется, что выбор ограничен только двумя крайностями. Если бы мы попробовали поискать другие варианты между ними, какими они могли бы быть?', method: 'cbt', isDemo: true },
                        { text: 'Почему для вас настолько принципиально получить одобрение семьи, чтобы позволить себе выбрать профессию по душе?', method: 'psychoanalytic' },
                        { text: 'В этом страхе остаться ни с чем - где желания семьи, а где место для ваших собственных желаний?', method: 'gestalt' }
                    ]
                },
                {
                    step: 4,
                    title: 'Анализ детско-родительского сценария (Психоанализ №2)',
                    patient: 'Наверное, промежуточный вариант - сначала подготовка к портфолио и разговор с дядей о переводе на следующий год. Но мне страшно сам разговор начинать. В нашей семье принято соответствовать ожиданиям старших, а любой другой выбор воспринимается как предательство.',
                    options: [
                        { text: 'Получается, вы с детства привыкли отказываться от своих реальных желаний, чтобы не потерять тепло и одобрение близких?', method: 'psychoanalytic', isDemo: true },
                        { text: 'Давайте проанализируем: что объективно самое худшее может произойти, если вы спокойно расскажете дяде о желании перевестись?', method: 'cbt' },
                        { text: 'Если бы дядя сейчас был здесь, что бы вам хотелось сказать ему прямо от своего имени, а не от лица послушной племянницы?', method: 'gestalt' }
                    ]
                },
                {
                    step: 5,
                    title: 'Глубинный выбор и сепарация (Психоанализ №3)',
                    patient: 'Да... Получается именно так. Я всегда старалась быть удобной, чтобы меня любили и хвалили. И сейчас я впервые понимаю, что если я не сделаю этот шаг к режиссуре, то так и проживу не свою жизнь из чувства долга.',
                    options: [
                        { text: 'Готовы ли вы встретиться с возможным недовольством семьи ради того, чтобы выстроить собственную жизнь и профессию?', method: 'psychoanalytic', isDemo: true },
                        { text: 'Каким будет ваш первый конкретный шаг на этой неделе для подготовки портфолио к переводу?', method: 'cbt' },
                        { text: 'Что вы чувствуете в душе прямо сейчас, когда открыто произнесли эти слова?', method: 'gestalt' }
                    ]
                }
            ],
            finalDialogue: { patient: 'Знаете... Кажется, теперь да, готова. Мне всё ещё страшно, но впервые за долгое время я чувствую, что это мой собственный выбор, а не попытка подстроиться. Спасибо вам огромное - вы помогли мне увидеть, почему я так застряла и с чего мне на самом деле нужно начать разговор с близкими.' }
        },
        {
            id: 'adult',
            name: 'Сергей, 31 год',
avatar: '/pers/sergei31.jpg',
            problem: 'Выгорание и реализация',
            description: 'Senior QA-инженер. Женат, квартира в ипотеку, хорошая машина. Последние 8 лет пахал без нормального отпуска.',
            dialogues: [
                { patient: 'Я открываю рабочий ноутбук и минут 20 просто смотрю в экран. Физически сил нет, спать могу по 10 часов и вставать разбитым.', options: [
                    { text: 'Что для вас символизирует этот ноутбук?', method: 'psychoanalytic' },
                    { text: 'Как вы ощущаете это состояние в своем теле?', method: 'gestalt' },
                    { text: 'Какие автоматические мысли приходят, когда вы смотрите в экран?', method: 'cbt' }
                ]},
                { patient: 'Я добился всего, о чем мечтал. Купил квартиру, машина есть, зарплата высокая. И вот я стою на этой вершине и думаю: "И это всё? Ради этого я убил здоровье?"', options: [
                    { text: 'Как ваши детские мечты о успехе влияют на текущее разочарование?', method: 'psychoanalytic' },
                    { text: 'Что вы чувствуете, когда произносите "И это всё?"?', method: 'gestalt' },
                    { text: 'Какие ожидания от жизни у вас были и как они соотносятся с реальностью?', method: 'cbt' }
                ]},
                { patient: 'Мне стыдно кому-то жаловаться. Жена говорит: "Ты просто переутомился". Друзья считают, что я с жиру бешусь.', options: [
                    { text: 'С чем связан этот стыд? Возможно, есть внутренний критик?', method: 'psychoanalytic' },
                    { text: 'Как это чувство стыда проявляется в вашем теле?', method: 'gestalt' },
                    { text: 'Какие доказательства у вас есть, что ваши чувства важны?', method: 'cbt' }
                ]},
                { patient: 'Я не хочу бросать работу, но и жить так дальше не могу. Как мне перестроить свою жизнь?', options: [
                    { text: 'Что для вас значит "перестроить жизнь"?', method: 'psychoanalytic' },
                    { text: 'Представьте идеальный день через год. Что в нем есть?', method: 'gestalt' },
                    { text: 'Какой первый шаг к изменениям вы могли бы сделать на этой неделе?', method: 'cbt' }
                ]},
                { patient: 'Спасибо. Я вижу, что мне нужно научиться получать удовольствие хоть от чего-то, кроме гонки за результатами.', options: [] }
            ],
            finalDialogue: { patient: 'Спасибо. Я понял, что мне нужно научиться получать удовольствие хоть от чего-то, кроме гонки за результатами.' }
        }
    ],
    valeriaSessionResults: {
        title: 'Поздравляем! Вы успешно провели свою первую консультацию!',
        methodStats: [
            { name: 'Психоаналитический подход', icon: '🧠', percent: 60, count: 3, color: 'text-red-600' },
            { name: 'Когнитивно-поведенческая терапия (КПТ)', icon: '🎯', percent: 20, count: 1, color: 'text-purple-600' },
            { name: 'Гештальт-терапия', icon: '🌿', percent: 20, count: 1, color: 'text-green-600' }
        ],
        therapistStyle: {
            name: 'Исследователь глубин',
            description: 'Вы склонны смотреть в самую суть проблемы. Вместо того чтобы просто давать советы или искать быстрые решения, вы помогаете клиенту понять скрытые причины его поведения.'
        },
        sessionSummary: [
            { icon: '✅', title: 'Сняли чувство тупика', text: 'Валерия пришла с ощущением, что у неё есть только два пути - дальше мучиться на архитектурном или скандально бросить всё. Вы помогли ей увидеть более взрослый вариант - планомерный перевод на режиссуру.' },
            { icon: '🔍', title: 'Нашли корень проблемы', text: 'Вы помогли ей осознать, что страх перед семьёй - это не просто уважение к дяде, а глубокая привычка с детства отказываться от своих желаний ради похвалы.' },
            { icon: '🌱', title: 'Подготовили к сепарации', text: 'Валерия впервые открыто произнесла, что готова выдерживать чужое недовольство ради собственной жизни.' }
        ],
        recommendation: {
            title: 'Интересно разбираться в скрытых мотивах людей и помогать им строить собственную жизнь?',
            text: 'У вас отлично получается психоаналитическое видение!',
            program: 'Программа «Психоанализ, психоаналитическая психотерапия и психоаналитическое консультирование» в Московском институте психоанализа.',
            programDetails: ['На курсе вы научитесь профессионально понимать бессознательные сценарии.'],
            buttons: [
                { text: 'Узнать подробнее о программе', url: 'https://start.instudy.online/' },
                { text: 'Записаться на день открытых дверей', url: 'https://start.instudy.online/' }
            ]
        }
    }
};

// ===== СОСТОЯНИЕ ПРИЛОЖЕНИЯ =====
let currentSection = 'hero';
let currentArchetypeQuestion = 1;
let currentCareerQuestion = 1;
let currentNovelStep = 1;
const totalArchetypeQuestions = 8;
const totalCareerQuestions = 7;
const stepsPerSession = 5;

let archetypeUserAnswers = {};
let archetypeScores = { sage: 0, caregiver: 0, warrior: 0, explorer: 0 };
let careerUserAnswers = {};
let careerScores = { clinical: 0, counseling: 0, organizational: 0, educational: 0 };
let novelScores = { psychoanalytic: 0, gestalt: 0, cbt: 0 };
let currentPatient = 0;

// ===== ИНИЦИАЛИЗАЦИЯ =====
document.addEventListener('DOMContentLoaded', function() {
    showSection('hero');
    initArchetypeTest();
    initCareerTest();
    initNovel();
});

// ===== НАВИГАЦИЯ =====
function showSection(sectionId) {
    currentSection = sectionId;
    
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    
    const sections = {
        'hero': 'hero-section',
        'archetypes': 'archetypes-section',
        'career': 'career-section',
        'simulation': 'simulation-section',
        'editorial': 'editorial-section'
    };
    
    if (sections[sectionId]) {
        document.getElementById(sections[sectionId]).classList.add('active');
    }
    
    const buttons = document.querySelectorAll('.nav-btn');
    const buttonIndex = { 'hero': 0, 'archetypes': 1, 'career': 2, 'simulation': 3, 'editorial': 4 };
    if (buttonIndex[sectionId] !== undefined) {
        buttons[buttonIndex[sectionId]].classList.add('active');
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== ТЕСТ АРХЕТИПОВ =====
function initArchetypeTest() {
    currentArchetypeQuestion = 1;
    archetypeUserAnswers = {};
    archetypeScores = { sage: 0, caregiver: 0, warrior: 0, explorer: 0 };
    
    const container = document.getElementById('archetype-test-container');
    container.innerHTML = '';
    
    const questions = [
        { text: 'В сложной ситуации вы обычно:', options: [
            { text: 'Анализируете все варианты', archetype: 'sage' },
            { text: 'Поддерживаете других', archetype: 'caregiver' },
            { text: 'Действуете решительно', archetype: 'warrior' },
            { text: 'Ищете новые решения', archetype: 'explorer' }
        ]},
        { text: 'В свободное время вы предпочитаете:', options: [
            { text: 'Читать и учиться', archetype: 'sage' },
            { text: 'Помогать близким', archetype: 'caregiver' },
            { text: 'Достигать цели', archetype: 'warrior' },
            { text: 'Путешествовать и открывать', archetype: 'explorer' }
        ]},
        { text: 'Ваша главная мотивация в работе:', options: [
            { text: 'Понимание и знания', archetype: 'sage' },
            { text: 'Помощь и забота', archetype: 'caregiver' },
            { text: 'Победа и достижения', archetype: 'warrior' },
            { text: 'Свобода и рост', archetype: 'explorer' }
        ]},
        { text: 'В конфликтной ситуации вы:', options: [
            { text: 'Анализируете причины', archetype: 'sage' },
            { text: 'Примиряете стороны', archetype: 'caregiver' },
            { text: 'Отстаиваете позицию', archetype: 'warrior' },
            { text: 'Ищете выход', archetype: 'explorer' }
        ]},
        { text: 'Что для вас важнее всего в отношениях:', options: [
            { text: 'Глубина понимания', archetype: 'sage' },
            { text: 'Эмоциональная поддержка', archetype: 'caregiver' },
            { text: 'Надежность и верность', archetype: 'warrior' },
            { text: 'Свобода и развитие', archetype: 'explorer' }
        ]},
        { text: 'При принятии важных решений:', options: [
            { text: 'Изучаете всю информацию', archetype: 'sage' },
            { text: 'Советуетесь с близкими', archetype: 'caregiver' },
            { text: 'Следуете интуиции', archetype: 'warrior' },
            { text: 'Ищете новые возможности', archetype: 'explorer' }
        ]},
        { text: 'Ваш подход к обучению:', options: [
            { text: 'Систематический', archetype: 'sage' },
            { text: 'Практический', archetype: 'caregiver' },
            { text: 'Результативный', archetype: 'warrior' },
            { text: 'Экспериментальный', archetype: 'explorer' }
        ]},
        { text: 'Что вас больше всего вдохновляет:', options: [
            { text: 'Открытия и идеи', archetype: 'sage' },
            { text: 'Человеческие истории', archetype: 'caregiver' },
            { text: 'Достижения и успех', archetype: 'warrior' },
            { text: 'Приключения и перемены', archetype: 'explorer' }
        ]}
    ];
    
    questions.forEach((q, idx) => {
        const qDiv = document.createElement('div');
        qDiv.id = 'archetype-question-' + (idx + 1);
        qDiv.className = 'test-question';
        qDiv.style.display = (idx === 0) ? 'block' : 'none';
        
        const title = document.createElement('h3');
        title.textContent = (idx + 1) + '. ' + q.text;
        title.style.marginBottom = '20px';
        title.style.color = '#000000';
        qDiv.appendChild(title);
        
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'answer-options';
        q.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'answer-btn';
            btn.onclick = () => selectArchetypeAnswer(idx + 1, opt.archetype);
            btn.innerHTML = '<strong>' + opt.text + '</strong>';
            optionsDiv.appendChild(btn);
        });
        qDiv.appendChild(optionsDiv);
        container.appendChild(qDiv);
    });
    
    const progressDiv = document.createElement('div');
    progressDiv.id = 'archetype-test-progress';
    progressDiv.style.margin = '30px 0';
    progressDiv.innerHTML = `
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
            <span id="current-archetype-question">Вопрос 1 из 8</span>
            <span id="archetype-progress-percent">12%</span>
        </div>
        <div style="width: 100%; height: 8px; background: #FFEEEE; border-radius: 4px;">
            <div id="archetype-progress-bar" style="width: 12%; height: 8px; background: #FF0000; border-radius: 4px; transition: width 0.3s ease;"></div>
        </div>
    `;
    container.appendChild(progressDiv);
    
    const navDiv = document.createElement('div');
    navDiv.style.display = 'flex';
    navDiv.style.justifyContent = 'space-between';
    navDiv.style.gap = '15px';
    navDiv.innerHTML = `
        <button id="archetype-prev-btn" onclick="prevArchetypeQuestion()" style="padding: 12px 24px; background: #FFFFFF; border: 2px solid #FF0000; color: #000000; border-radius: 8px; cursor: pointer; font-weight: 500; display: none;">← Назад</button>
        <button id="archetype-next-btn" onclick="nextArchetypeQuestion()" style="padding: 12px 24px; background: #FF0000; color: #FFFFFF; border: none; border-radius: 8px; cursor: pointer; font-weight: 500; margin-left: auto;" disabled>Следующий вопрос →</button>
    `;
    container.appendChild(navDiv);
    
    document.getElementById('archetype-result').innerHTML = createArchetypeResultHTML();
}

function selectArchetypeAnswer(questionNum, archetype) {
    const questionDiv = document.getElementById('archetype-question-' + questionNum);
    questionDiv.querySelectorAll('.answer-btn').forEach(btn => btn.classList.remove('selected'));
    
    const clickedBtn = event.target.closest('.answer-btn');
    if (clickedBtn) clickedBtn.classList.add('selected');
    
    archetypeUserAnswers[questionNum] = archetype;
    archetypeScores[archetype] = (archetypeScores[archetype] || 0) + 1;
    
    document.getElementById('archetype-next-btn').disabled = false;
}

function nextArchetypeQuestion() {
    if (!archetypeUserAnswers[currentArchetypeQuestion]) {
        alert('Пожалуйста, выберите ответ.');
        return;
    }
    
    document.getElementById('archetype-question-' + currentArchetypeQuestion).style.display = 'none';
    currentArchetypeQuestion++;
    
    if (currentArchetypeQuestion > totalArchetypeQuestions) {
        showArchetypeResult();
        return;
    }
    
    document.getElementById('archetype-question-' + currentArchetypeQuestion).style.display = 'block';
    updateArchetypeProgress();
    document.getElementById('archetype-prev-btn').style.display = 'block';
}

function prevArchetypeQuestion() {
    document.getElementById('archetype-question-' + currentArchetypeQuestion).style.display = 'none';
    currentArchetypeQuestion--;
    document.getElementById('archetype-question-' + currentArchetypeQuestion).style.display = 'block';
    updateArchetypeProgress();
    if (currentArchetypeQuestion === 1) document.getElementById('archetype-prev-btn').style.display = 'none';
}

function updateArchetypeProgress() {
    const percent = Math.round((currentArchetypeQuestion / totalArchetypeQuestions) * 100);
    document.getElementById('current-archetype-question').textContent = 'Вопрос ' + currentArchetypeQuestion + ' из ' + totalArchetypeQuestions;
    document.getElementById('archetype-progress-percent').textContent = percent + '%';
    document.getElementById('archetype-progress-bar').style.width = percent + '%';
}

function showArchetypeResult() {
    let dominant = 'sage';
    let maxScore = 0;
    for (const [key, score] of Object.entries(archetypeScores)) {
        if (score > maxScore) { maxScore = score; dominant = key; }
    }
    
    const result = archetypesData[dominant];
    const resultDiv = document.getElementById('archetype-result');
    resultDiv.innerHTML = createArchetypeResultHTML(result);
    resultDiv.style.display = 'block';
    document.getElementById('archetype-test-container').style.display = 'none';
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

function createArchetypeResultHTML(result) {
    if (!result) {
        return `
            <div style="text-align: center; padding: 40px;">
                <div style="text-align: center; padding: 40px; background: #FFFFFF; border-radius: 8px; border: 2px solid #FF0000;">
                    <div style="text-align: center; margin-bottom: 40px;">
                        <h2 style="color: #FF0000; margin-bottom: 20px;">Результат теста</h2>
                        <p style="font-size: 18px; line-height: 1.6; margin-bottom: 30px;">Пройдите тест, чтобы узнать свой архетип.</p>
                    </div>
                    <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap; margin-top: 30px;">
                        <button onclick="initArchetypeTest(); document.getElementById('archetype-test-container').style.display='block'; document.getElementById('archetype-result').style.display='none';" class="action-btn">Пройти тест заново</button>
                    </div>
                </div>
            </div>
        `;
    }
    
    let characteristicsHTML = '';
    result.characteristics.forEach(char => {
        characteristicsHTML += '<span style="padding: 8px 16px; background: white; border: 1px solid #FF0000; border-radius: 20px;">' + char + '</span>';
    });
    
    return `
        <div style="text-align: center; padding: 40px; background: #FFFFFF; border-radius: 8px; border: 2px solid #FF0000;">
            <div style="font-size: 64px; margin-bottom: 20px;">${result.icon}</div>
            <h2 style="color: #FF0000; margin-bottom: 15px;">Ваш архетип: <span id="archetype-result-name">${result.name}</span></h2>
            <div style="max-width: 600px; margin: 0 auto 30px;">
                <p style="font-size: 18px; line-height: 1.6; margin-bottom: 25px; color: #333333;">${result.description}</p>
                <div style="background: #FFEEEE; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                    <h4 style="color: #000000; margin-bottom: 15px;">Ключевые характеристики:</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">${characteristicsHTML}</div>
                </div>
                <div style="background: #FFFFFF; padding: 20px; border-radius: 8px; border: 2px solid #FF0000;">
                    <h4 style="color: #000000; margin-bottom: 15px;">Рекомендация по развитию:</h4>
                    <p style="color: #333333;">${result.recommendation}</p>
                </div>
            </div>
            <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap; margin-top: 30px;">
                <button onclick="initArchetypeTest(); document.getElementById('archetype-test-container').style.display='block'; document.getElementById('archetype-result').style.display='none';" class="action-btn">Пройти тест заново</button>
                <button onclick="showSection('career')" class="action-btn primary">Превратить архетип в профессию →</button>
            </div>
        </div>
    `;
}

// ===== ТЕСТ ПРОФОРИЕНТАЦИИ =====
function initCareerTest() {
    currentCareerQuestion = 1;
    careerUserAnswers = {};
    careerScores = { clinical: 0, counseling: 0, organizational: 0, educational: 0 };
    
    const container = document.getElementById('career-test-container');
    container.innerHTML = '';
    
    const questions = [
        { text: 'Что вас больше всего привлекает в психологии?', options: [
            { text: 'Понимание и лечение расстройств', specialization: 'clinical' },
            { text: 'Помощь в жизненных трудностях', specialization: 'counseling' },
            { text: 'Оптимизация работы коллективов', specialization: 'organizational' },
            { text: 'Развитие и обучение', specialization: 'educational' }
        ]},
        { text: 'Какой тип работы вам ближе?', options: [
            { text: 'Диагностика и исследования', specialization: 'clinical' },
            { text: 'Индивидуальная помощь', specialization: 'counseling' },
            { text: 'Работа с командами', specialization: 'organizational' },
            { text: 'Образовательная деятельность', specialization: 'educational' }
        ]},
        { text: 'Что для вас важнее в профессиональной деятельности?', options: [
            { text: 'Глубина анализа', specialization: 'clinical' },
            { text: 'Непосредственная помощь', specialization: 'counseling' },
            { text: 'Эффективность систем', specialization: 'organizational' },
            { text: 'Развитие потенциала', specialization: 'educational' }
        ]},
        { text: 'С какими клиентами вы предпочитаете работать?', options: [
            { text: 'С пациентами с диагнозами', specialization: 'clinical' },
            { text: 'С людьми в кризисных ситуациях', specialization: 'counseling' },
            { text: 'С сотрудниками компаний', specialization: 'organizational' },
            { text: 'С детьми и подростками', specialization: 'educational' }
        ]},
        { text: 'Какой подход к работе вам ближе?', options: [
            { text: 'Научно-исследовательский', specialization: 'clinical' },
            { text: 'Гуманистический', specialization: 'counseling' },
            { text: 'Прагматический', specialization: 'organizational' },
            { text: 'Развивающий', specialization: 'educational' }
        ]},
        { text: 'Какая рабочая среда вам комфортнее?', options: [
            { text: 'Клиники и больницы', specialization: 'clinical' },
            { text: 'Частная практика', specialization: 'counseling' },
            { text: 'Корпоративный офис', specialization: 'organizational' },
            { text: 'Образовательные учреждения', specialization: 'educational' }
        ]},
        { text: 'Какой результат работы для вас важнее всего?', options: [
            { text: 'Коррекция патологии', specialization: 'clinical' },
            { text: 'Личностный рост клиента', specialization: 'counseling' },
            { text: 'Эффективность организации', specialization: 'organizational' },
            { text: 'Развитие способностей', specialization: 'educational' }
        ]}
    ];
    
    questions.forEach((q, idx) => {
        const qDiv = document.createElement('div');
        qDiv.id = 'career-question-' + (idx + 1);
        qDiv.className = 'test-question';
        qDiv.style.display = (idx === 0) ? 'block' : 'none';
        
        const title = document.createElement('h3');
        title.textContent = (idx + 1) + '. ' + q.text;
        title.style.marginBottom = '20px';
        title.style.color = '#000000';
        qDiv.appendChild(title);
        
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'answer-options';
        q.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'answer-btn';
            btn.onclick = () => selectCareerAnswer(idx + 1, opt.specialization);
            btn.innerHTML = '<strong>' + opt.text + '</strong>';
            optionsDiv.appendChild(btn);
        });
        qDiv.appendChild(optionsDiv);
        container.appendChild(qDiv);
    });
    
    const progressDiv = document.createElement('div');
    progressDiv.id = 'career-test-progress';
    progressDiv.style.margin = '30px 0';
    progressDiv.innerHTML = `
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
            <span id="career-current-question">Вопрос 1 из 7</span>
            <span id="career-progress-percent">14%</span>
        </div>
        <div style="width: 100%; height: 8px; background: #FFEEEE; border-radius: 4px;">
            <div id="career-progress-bar" style="width: 14%; height: 8px; background: #FF0000; border-radius: 4px; transition: width 0.3s ease;"></div>
        </div>
    `;
    container.appendChild(progressDiv);
    
    const navDiv = document.createElement('div');
    navDiv.style.display = 'flex';
    navDiv.style.justifyContent = 'space-between';
    navDiv.style.gap = '15px';
    navDiv.innerHTML = `
        <button id="career-prev-btn" onclick="prevCareerQuestion()" style="padding: 12px 24px; background: #FFFFFF; border: 2px solid #FF0000; color: #000000; border-radius: 8px; cursor: pointer; font-weight: 500; display: none;">← Назад</button>
        <button id="career-next-btn" onclick="nextCareerQuestion()" style="padding: 12px 24px; background: #FF0000; color: #FFFFFF; border: 2px solid #FF0000; border-radius: 8px; cursor: pointer; font-weight: 500; margin-left: auto;" disabled>Следующий вопрос →</button>
    `;
    container.appendChild(navDiv);
    
    document.getElementById('career-result').innerHTML = createCareerResultHTML();
}

function selectCareerAnswer(questionNum, specialization) {
    const questionDiv = document.getElementById('career-question-' + questionNum);
    questionDiv.querySelectorAll('.answer-btn').forEach(btn => btn.classList.remove('selected'));
    
    const clickedBtn = event.target.closest('.answer-btn');
    if (clickedBtn) clickedBtn.classList.add('selected');
    
    careerUserAnswers[questionNum] = specialization;
    careerScores[specialization] = (careerScores[specialization] || 0) + 1;
    
    document.getElementById('career-next-btn').disabled = false;
}

function nextCareerQuestion() {
    if (!careerUserAnswers[currentCareerQuestion]) {
        alert('Пожалуйста, выберите ответ.');
        return;
    }
    
    document.getElementById('career-question-' + currentCareerQuestion).style.display = 'none';
    currentCareerQuestion++;
    
    if (currentCareerQuestion > totalCareerQuestions) {
        showCareerResult();
        return;
    }
    
    document.getElementById('career-question-' + currentCareerQuestion).style.display = 'block';
    updateCareerProgress();
    document.getElementById('career-prev-btn').style.display = 'block';
}

function prevCareerQuestion() {
    document.getElementById('career-question-' + currentCareerQuestion).style.display = 'none';
    currentCareerQuestion--;
    document.getElementById('career-question-' + currentCareerQuestion).style.display = 'block';
    updateCareerProgress();
    if (currentCareerQuestion === 1) document.getElementById('career-prev-btn').style.display = 'none';
}

function updateCareerProgress() {
    const percent = Math.round((currentCareerQuestion / totalCareerQuestions) * 100);
    document.getElementById('career-current-question').textContent = 'Вопрос ' + currentCareerQuestion + ' из ' + totalCareerQuestions;
    document.getElementById('career-progress-percent').textContent = percent + '%';
    document.getElementById('career-progress-bar').style.width = percent + '%';
}

function showCareerResult() {
    let dominant = 'clinical';
    let maxScore = 0;
    for (const [key, score] of Object.entries(careerScores)) {
        if (score > maxScore) { maxScore = score; dominant = key; }
    }
    
    const result = careerSpecializations[dominant];
    const resultDiv = document.getElementById('career-result');
    resultDiv.innerHTML = createCareerResultHTML(result);
    resultDiv.style.display = 'block';
    document.getElementById('career-test-container').style.display = 'none';
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

function createCareerResultHTML(result) {
    if (!result) {
        return `
            <div style="text-align: center; padding: 40px;">
                <div style="text-align: center; padding: 40px; background: #FFFFFF; border-radius: 8px; border: 2px solid #FF0000;">
                    <h2 style="color: #FF0000; margin-bottom: 20px;">Результат теста</h2>
                    <p style="font-size: 18px; line-height: 1.6; margin-bottom: 30px;">Пройдите тест, чтобы узнать свою специализацию.</p>
                    <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap; margin-top: 30px;">
                        <button onclick="initCareerTest(); document.getElementById('career-test-container').style.display='block'; document.getElementById('career-result').style.display='none';" class="action-btn">Пройти тест заново</button>
                    </div>
                </div>
            </div>
        `;
    }
    
    let skillsHTML = '';
    result.skills.forEach(skill => {
        skillsHTML += '<span style="padding: 8px 16px; background: white; border: 1px solid #FF0000; border-radius: 20px;">' + skill + '</span>';
    });
    
    let coursesHTML = '';
    result.courses.forEach(course => {
        coursesHTML += '<p style="margin: 10px 0; padding: 12px; background: white; border-radius: 8px; border-left: 4px solid #FF0000;"><strong>' + course + '</strong></p>';
    });
    
    let scoresHTML = '';
    for (const [spec, score] of Object.entries(careerScores)) {
        const specData = careerSpecializations[spec];
        const percent = Math.round((score / totalCareerQuestions) * 100);
        scoresHTML += `
            <div style="background: #FFEEEE; padding: 15px; border-radius: 8px; border: 2px solid #FF0000;">
                <div style="font-size: 24px; margin-bottom: 10px;">${specData.icon}</div>
                <div style="font-weight: 500; margin-bottom: 5px; color: #000000;">${specData.name}</div>
                <div style="font-size: 12px; opacity: 0.8; color: #333333;">${score} из ${totalCareerQuestions} баллов</div>
                <div style="width: 100%; height: 6px; background: #FFEEEE; border-radius: 4px; margin-top: 10px;">
                    <div style="width: ${percent}%; height: 6px; background: #FF0000; border-radius: 4px;"></div>
                </div>
            </div>
        `;
    }
    
    return `
        <div style="text-align: center; padding: 40px; background: #FFFFFF; border-radius: 8px; border: 2px solid #FF0000;">
            <div style="font-size: 64px; margin-bottom: 20px;">${result.icon}</div>
            <h2 style="color: #FF0000; margin-bottom: 15px;">Ваша специализация: <span id="career-result-name">${result.name}</span></h2>
            <div style="max-width: 600px; margin: 0 auto 30px;">
                <p style="font-size: 18px; line-height: 1.6; margin-bottom: 25px; color: #333333;">${result.description}</p>
                <div style="background: #FFEEEE; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                    <h4 style="color: #000000; margin-bottom: 15px;">Ключевые навыки:</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">${skillsHTML}</div>
                </div>
                <div style="background: #FFEEEE; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                    <h4 style="color: #000000; margin-bottom: 15px;">Рекомендуемые программы:</h4>
                    <div id="career-result-courses">${coursesHTML}</div>
                </div>
            </div>
            <div style="background: #FFFFFF; padding: 25px; border-radius: 8px; border: 2px solid #FF0000; margin-bottom: 30px;">
                <h4 style="color: #000000; margin-bottom: 20px;">Ваши результаты по всем направлениям:</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">${scoresHTML}</div>
            </div>
            <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                <button onclick="initCareerTest(); document.getElementById('career-test-container').style.display='block'; document.getElementById('career-result').style.display='none';" class="action-btn">Пройти тест заново</button>
                <button onclick="showSection('simulation')" class="action-btn primary">Попробовать ИИ-симуляцию →</button>
                <button onclick="window.open('https://start.instudy.online/', '_blank')" class="action-btn primary">Узнать о программах МИП</button>
            </div>
        </div>
    `;
}

