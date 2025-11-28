const extensions = [
    {
        name: "NeuroOS",
        screenshot: "Screenshots/NeuroOS Screenshot1.png",
        description: "A comprehensive focus and productivity system designed for deep work with neurodiverse-friendly features. NeuroOS is a powerful productivity extension that transforms your browser into a distraction-free focus zone. Designed for deep work enthusiasts, it combines focus techniques with website blocking to help you achieve peak productivity. Start timed focus sessions using methods like Pomodoro or Deep Work 52/17, automatically block distracting websites during work periods, and track your productivity progress with analytics.",
        chromeStoreLink: "https://chromewebstore.google.com/detail/neuroos-turn-your-browser/nmcchpkdhegflhmnfilpoimdfoigkoec?authuser=4&hl=en"
    },
    {
        name: "JobConnect",
        screenshot: "Screenshots/JobConnect Screenshot1.png",
        description: "Instantly analyzes job listings on Indeed, LinkedIn, ZipRecruiter, Glassdoor, and Hiring.Cafe to find your best matches. JobConnect is a browser extension that automatically analyzes job listings on major job boards and instantly shows you how well each position matches your qualifications. It works seamlessly across Indeed, LinkedIn, ZipRecruiter, Glassdoor, and Hiring.Cafe.",
        chromeStoreLink: "https://chromewebstore.google.com/detail/jobconnect-the-ai-powered/pbaegnpljdniddkjcgpcjojpdgmonkmb?authuser=4&hl=en"
    },
    {
        name: "What If Invested",
        screenshot: "Screenshots/What If Invested Screenshot1.png",
        description: "See what your purchases could be worth if you invested the money instead. What If Invested helps you make smarter spending choices by showing you the true opportunity cost of your purchases. Every time you shop online, see exactly what that money could be worth if you invested it instead.",
        chromeStoreLink: "https://chromewebstore.google.com/detail/what-if-invested-investme/akjlpfnapmepfcfndgjgnocpdhhfcigo?authuser=4&hl=en"
    },
    {
        name: "BulletBrief",
        screenshot: "Screenshots/BulletBrief Screenshot1.png",
        description: "Transform lengthy articles and web pages into clear, concise bullet-point summaries in seconds. BulletBrief streamlines your reading experience by leveraging the power of leading AI platforms to extract the most important information from any article.BulletBrief automatically generates professional summaries of any webpage or article you're reading. With a single click, it crafts an optimized prompt and sends it directly to your preferred AI assistant (ChatGPT, Claude, Gemini, Microsoft Copilot, or Grok), which then analyzes the article and delivers a clean, organized summary.",
        chromeStoreLink: "https://chromewebstore.google.com/detail/bulletbrief/bhmahcagecdhkpgbkpjapfldkkkjdnpa?authuser=4&hl=en"
    },
    {
        name: "NarrateIt",
        screenshot: "Screenshots/NarrateIt Screenshot1.png",
        description: "Convert web articles into natural-sounding audio. Listen instantly or save to your playlist. NarrateIt can transform web articles into audio. It converts web articles, blog posts, and online content into audio narration with just one click. Whether you're commuting, exercising, or multitasking, you can now consume your favorite content hands-free. Users can turn any webpage into an audio podcast. Cook, drive, or work out while staying informed, reduce screen time and give your eyes a break without missing out on important content, and save articles for later and create your personal audio library.",
        chromeStoreLink: "https://chromewebstore.google.com/detail/narrateit-convert-web-art/ocpjjejfifdfbnfchoecnnddcaoehoni?authuser=4&hl=en"
    },
    {
        name: "ScamShield",
        screenshot: "Screenshots/ScamShield Screenshot1.png",
        description: "AI-powered protection against job scams with real-time analysis and alerts. This extension protects job seekers from employment scams and ghost jobs by using AI and machine learning to analyze job postings in real-time. As you browse job listings such as Linkedin, ZipRecruiter, etc, it automatically scans each posting and provides an instant risk assessment. Users should install it because job scams are on the rise. There are fake job listings that steal user's personal information or money. This extension acts as your guard while job hunting saving you from potentially scams.",
        chromeStoreLink: "https://chromewebstore.google.com/detail/scamshield-ai-job-scam-de/ehdjbagoapbpphmoedhejhppffkniobh?authuser=4&hl=en"
    }
];


function createExtensionCard(extension) {
    return `
        <a href="${extension.chromeStoreLink}" class="extension-card" target="_blank">
            <h3>${extension.name}</h3>
            ${extension.screenshot ? `<img src="${extension.screenshot}" alt="${extension.name} screenshot" class="extension-screenshot">` : ''}
            <p class="description">${extension.description}</p>
        </a>
    `;
}


function renderExtensions() {
    const extensionsGrid = document.getElementById('extensions-grid');

    if (!extensionsGrid) {
        console.log('Extensions grid not found - not on Extensions.html');
        return;
    }

    if (extensions.length === 0) {
        extensionsGrid.innerHTML = '<p>No extensions to display yet. Add your extensions in app.js!</p>';
        return;
    }

    const extensionsHTML = extensions.map(createExtensionCard).join('');
    extensionsGrid.innerHTML = extensionsHTML;
}


function createSliderSlide(extension) {
    return `
        <a href="${extension.chromeStoreLink}" class="slide" target="_blank">
            <img src="${extension.screenshot}" alt="${extension.name}">
            <div class="slide-content">
                <h3>${extension.name}</h3>
            </div>
        </a>
    `;
}


function renderSlider() {
    const sliderTrack = document.getElementById('slider-track');
    console.log('Slider track element:', sliderTrack);

    if (!sliderTrack) {
        console.log('Slider track not found - not on index.html');
        return;
    }

    const slidesHTML = extensions.map(createSliderSlide).join('');
    sliderTrack.innerHTML = slidesHTML + slidesHTML;
    console.log('Slider rendered with', extensions.length * 2, 'slides');

    startInfiniteScroll(sliderTrack);
}

function startInfiniteScroll(sliderTrack) {
    let position = 0;
    const speed = 1.2;

    function animate() {
        position += speed;

        const firstSlide = sliderTrack.querySelector('.slide');
        if (!firstSlide) return;

        const slideWidth = firstSlide.offsetWidth + 30;
        const totalSetWidth = slideWidth * extensions.length;

        if (position >= totalSetWidth) {
            position = 0;
        }

        sliderTrack.style.transform = `translateX(-${position}px)`;
        requestAnimationFrame(animate);
    }

    animate();
}


document.addEventListener('DOMContentLoaded', () => {
    renderExtensions();
    renderSlider();
});
