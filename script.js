const PROJECTS = [
  { name: 'rock-paper-scissors', title: 'Rock Paper Scissors', cat: 'Games', desc: 'The classic duel against the computer, first to the target score.' },
  { name: 'memory-game', title: 'Memory Match', cat: 'Games', desc: 'Flip cards and match every pair across three board sizes.' },
  { name: 'tic-tac-toe', title: 'Tic Tac Toe', cat: 'Games', desc: 'Play a friend or a computer with three difficulty levels.' },
  { name: 'snake-game', title: 'Snake', cat: 'Games', desc: 'Guide a growing snake around the grid without biting yourself.' },
  { name: 'hangman-game', title: 'Hangman', cat: 'Games', desc: 'Guess the hidden word before the chalk drawing is finished.' },
  { name: 'whack-a-mole', title: 'Whack-a-Mole', cat: 'Games', desc: 'Thirty seconds of fast reflexes and popping moles.' },
  { name: 'minesweeper', title: 'Minesweeper', cat: 'Games', desc: 'Clear a nine by nine field using numbers and flags.' },
  { name: 'game-2048', title: '2048', cat: 'Games', desc: 'Slide and merge tiles until one of them reaches 2048.' },
  { name: 'simon-says', title: 'Simon Says', cat: 'Games', desc: 'Repeat a growing sequence of lights and tones.' },
  { name: 'wordle', title: 'Wordle', cat: 'Games', desc: 'Find a five letter word in six tries with colour clues.' },
  { name: 'tetris', title: 'Tetris', cat: 'Games', desc: 'All seven pieces, rising levels and a next piece preview.' },
  { name: 'pong', title: 'Pong', cat: 'Games', desc: 'Retro Pong against a computer paddle on three difficulty levels.' },
  { name: 'breakout', title: 'Breakout', cat: 'Games', desc: 'Clear every brick across three levels of accelerating play.' },
  { name: 'connect-four', title: 'Connect Four', cat: 'Games', desc: 'Drop discs to line up four, against a friend or the computer.' },
  { name: 'sliding-puzzle', title: 'Sliding Puzzle', cat: 'Games', desc: 'The sliding number puzzle on a three by three or four by four board.' },

  { name: 'image-carousel', title: 'Image Carousel', cat: 'Creative', desc: 'A touch friendly slideshow with arrows, dots and fullscreen.' },
  { name: 'drawing-app', title: 'Drawing App', cat: 'Creative', desc: 'A freehand canvas with brush sizes, colours and undo.' },
  { name: 'color-palette', title: 'Colour Palette', cat: 'Creative', desc: 'Generate palettes and copy colours in several formats.' },
  { name: 'drum-machine', title: 'Drum Machine', cat: 'Creative', desc: 'A step sequencer with pads, tempo and swing.' },
  { name: 'pixel-art-editor', title: 'Pixel Art Editor', cat: 'Creative', desc: 'Draw on grids from sixteen to sixty-four pixels and export a PNG.' },
  { name: 'metronome', title: 'Metronome', cat: 'Creative', desc: 'A Web Audio metronome with tap tempo, time signatures and beats.' },
  { name: 'tempo', title: 'Tempo', cat: 'Creative', desc: 'A metronome and guided practice trainer with a dial, tap tempo and speed sessions.' },
  { name: 'gradient-generator', title: 'Gradient Generator', cat: 'Creative', desc: 'Build CSS gradients with several stops and copy the code.' },
  { name: 'particles', title: 'Particles', cat: 'Creative', desc: 'A canvas particle playground with gravity, links and bursts.' },
  { name: 'patchbay', title: 'Patchbay', cat: 'Creative', desc: 'A five-voice Web Audio rhythm machine with a bass sequencer, swing, presets and a live oscilloscope.' },
  { name: 'loom', title: 'Loom', cat: 'Creative', desc: 'Generate tileable textile patterns and export them as SVG or PNG for totes and cushions.' },
  { name: 'mosaic', title: 'Mosaic', cat: 'Creative', desc: 'Build responsive bento layouts with drag and drop, an inspector and standalone HTML export.' },
  { name: 'choreograph', title: 'Choreograph', cat: 'Creative', desc: 'Create keyframe animations on a draggable timeline and copy the generated CSS.' },

  { name: 'calculator', title: 'Calculator', cat: 'Tools', desc: 'A keyboard friendly calculator with a running history.' },
  { name: 'password-generator', title: 'Password Generator', cat: 'Tools', desc: 'Strong passwords with length, symbol and strength options.' },
  { name: 'typing-speed-test', title: 'Typing Speed Test', cat: 'Tools', desc: 'Measure your words per minute and accuracy.' },
  { name: 'stopwatch-timer', title: 'Stopwatch and Timer', cat: 'Tools', desc: 'Lap times and a countdown timer in one place.' },
  { name: 'bmi-calculator', title: 'BMI Calculator', cat: 'Tools', desc: 'Body mass index in metric or imperial units.' },
  { name: 'unit-converter', title: 'Unit Converter', cat: 'Tools', desc: 'Convert length, weight, temperature and volume.' },
  { name: 'world-clock', title: 'World Clock', cat: 'Tools', desc: 'Sixty-one time zones, saved cities and live local times.' },
  { name: 'regex-tester', title: 'Regex Tester', cat: 'Tools', desc: 'Test patterns with live highlighting and capture groups.' },
  { name: 'sorting-visualizer', title: 'Sorting Visualizer', cat: 'Tools', desc: 'Watch four sorting algorithms race on a bar chart.' },
  { name: 'weather-app', title: 'Weather App', cat: 'Tools', desc: 'Current conditions for a thousand locations worldwide.' },
  { name: 'markdown-preview', title: 'Markdown Preview', cat: 'Tools', desc: 'Write markdown and see the rendered result as you type.' },
  { name: 'word-counter', title: 'Word Counter', cat: 'Tools', desc: 'Live word, character and reading time stats plus word frequency.' },
  { name: 'json-formatter', title: 'JSON Formatter', cat: 'Tools', desc: 'Format, minify and validate JSON with a collapsible tree view.' },
  { name: 'base64-encoder', title: 'Base64 Encoder', cat: 'Tools', desc: 'Encode and decode Base64 text with full Unicode support.' },
  { name: 'tip-calculator', title: 'Tip Calculator', cat: 'Tools', desc: 'Split a bill, pick a tip and round the total, receipt included.' },
  { name: 'age-calculator', title: 'Age Calculator', cat: 'Tools', desc: 'Your exact age in years, months and days, and the next birthday.' },
  { name: 'decision-wheel', title: 'Decision Wheel', cat: 'Tools', desc: 'Spin a colourful wheel to settle any choice.' },
  { name: 'meridian', title: 'Meridian', cat: 'Tools', desc: 'Plan a meeting across eight cities with a DST-aware overlap timeline.' },
  { name: 'foundry', title: 'Foundry', cat: 'Tools', desc: 'Build colour, type and spacing tokens with live WCAG contrast checks.' },
  { name: 'cipher', title: 'Cipher', cat: 'Tools', desc: 'Encode, decode and analyse messages with five classical ciphers.' },

  { name: 'todo-list', title: 'To-Do List', cat: 'Productivity', desc: 'Tasks with filters, priorities and local storage.' },
  { name: 'notes-app', title: 'Notes App', cat: 'Productivity', desc: 'Quick notes with search, editing and autosave.' },
  { name: 'expense-tracker', title: 'Expense Tracker', cat: 'Productivity', desc: 'Track spending by category and see the totals.' },
  { name: 'kanban-board', title: 'Kanban Board', cat: 'Productivity', desc: 'Drag cards between columns to plan your work.' },
  { name: 'pomodoro-timer', title: 'Pomodoro Timer', cat: 'Productivity', desc: 'Work and break intervals with a session count.' },
  { name: 'flashcard-app', title: 'Flashcard App', cat: 'Productivity', desc: 'Study decks you can flip, shuffle and mark as known.' },
  { name: 'movie-watchlist', title: 'Movie Watchlist', cat: 'Productivity', desc: 'Films to see and films seen, with filters and ratings.' },
  { name: 'habit-tracker', title: 'Habit Tracker', cat: 'Productivity', desc: 'Weekly habits with streaks and progress bars.' },
  { name: 'calendar', title: 'Calendar', cat: 'Productivity', desc: 'A month planner with events saved in the browser.' },
  { name: 'quote-generator', title: 'Quote Generator', cat: 'Productivity', desc: 'Sixty quotes with copy and keyboard shortcuts.' },
  { name: 'bookmark-manager', title: 'Bookmark Manager', cat: 'Productivity', desc: 'Save, tag, search and export your bookmarks in the browser.' },
  { name: 'invoice-generator', title: 'Invoice Generator', cat: 'Productivity', desc: 'Build and print a clean invoice with live totals and tax.' },
  { name: 'ledger', title: 'Ledger', cat: 'Productivity', desc: 'An offline-first accounting workspace with CSV and JSON import and export.' },
  { name: 'field-notes', title: 'Field Notes', cat: 'Productivity', desc: 'An installable field notebook with glove mode, GPS tags and dictation.' },
  { name: 'archivist', title: 'Archivist', cat: 'Productivity', desc: 'Write local-first notes with wiki links, backlinks, tags and a force-directed graph.' },
  { name: 'cadence', title: 'Cadence', cat: 'Productivity', desc: 'Track habits on a twelve-week heatmap with streaks and weekday insights.' },
  { name: 'rota', title: 'Rota', cat: 'Productivity', desc: 'Plan fourteen days of three-shift cover with auto-fill, conflict checks and CSV export.' },

  { name: 'quiz-app', title: 'Quiz App', cat: 'Learning', desc: 'A hundred questions across four quiz modes.' },
  { name: 'capital-quiz', title: 'Capital Quiz', cat: 'Learning', desc: 'Test your knowledge of world capitals with timers and streaks.' },

  { name: 'periodic-table', title: 'Periodic Table', cat: 'Reference', desc: 'All 118 elements with a detail popup for each one.' },
  { name: 'signal', title: 'Signal', cat: 'Reference', desc: 'A 92-component design system with live specimens and copyable code.' },
  { name: 'tidepool', title: 'Tidepool', cat: 'Reference', desc: 'Explore twelve coastal species, compare them side by side and read the tide curve.' },
  { name: 'almanac', title: 'Almanac', cat: 'Reference', desc: 'Follow sun times, moon phases, daylight curves and field notes through the year.' },

  { name: 'recipe-website', title: 'Recipe Website', cat: 'Web', desc: 'A responsive recipe site with cards and a shopping list.' },
  { name: 'landing-page', title: 'Landing Page', cat: 'Web', desc: 'A product page with pricing, FAQ and scroll reveals.' },
  { name: 'chat-ui', title: 'Chat UI', cat: 'Web', desc: 'A messenger interface with conversation switching and a bot.' },
  { name: 'dashboard', title: 'Dashboard', cat: 'Web', desc: 'An analytics dashboard with charts, stat cards and a sortable table.' },
  { name: 'atlas-console', title: 'Atlas Console', cat: 'Web', desc: 'A dark logistics control room with live canvas charts and an incident feed.' },
  { name: 'contour', title: 'Contour', cat: 'Web', desc: 'An interactive SVG trail atlas with waypoints and elevation profiles.' },
  { name: 'portfolio-page', title: 'Portfolio Page', cat: 'Web', desc: 'A dark editorial portfolio with animated skills and a contact form.' },
  { name: 'transit-lab', title: 'Transit Lab', cat: 'Web', desc: 'Plan metro journeys on a live SVG network with Dijkstra routing and simulated trains.' },
  { name: 'rally', title: 'Rally', cat: 'Web', desc: 'Seed, score and simulate an eight-team tournament bracket.' },

  { name: 'palimpsest', title: 'Palimpsest', cat: 'Productivity', desc: 'A parchment writing archive with layered revisions, marginalia, comparison and text export.' },
  { name: 'vending', title: 'Vending', cat: 'Creative', desc: 'A bright retro vending machine with coins, keypad purchases, restocking and a sales tape.' },
  { name: 'shortwave', title: 'Shortwave', cat: 'Creative', desc: 'Tune a 1970s receiver through eight stations with generated static, presets and a reception log.' },
  { name: 'orbital', title: 'Orbital', cat: 'Tools', desc: 'A flight-dynamics desk for orbit parameters, launch windows, tracked objects and pass schedules.' },
  { name: 'marigold', title: 'Marigold', cat: 'Productivity', desc: 'A 1950s diner order pad with seat tabs, kitchen tickets, tips and a printed receipt.' },
  { name: 'herbarium', title: 'Herbarium', cat: 'Reference', desc: 'A Victorian botanical cabinet with specimen plates, family filters and editable field notes.' },
  { name: 'splitflap', title: 'Splitflap', cat: 'Creative', desc: 'An amber airport board with mechanical letter flips, delays and live departure statuses.' },
  { name: 'lost-sounds', title: 'Lost Sounds', cat: 'Creative', desc: 'A black-and-gold sound museum with synthesised exhibits, a moving waveform and favourites.' },
  { name: 'werkstatt', title: 'Werkstatt', cat: 'Creative', desc: 'A Bauhaus poster studio with geometric presets, ink palettes, saved plates and SVG export.' },
  { name: 'sunday', title: 'Sunday', cat: 'Productivity', desc: 'A pastel weekly meal planner with a recipe bank, servings and an automatic grocery list.' },
  { name: 'riso', title: 'Riso', cat: 'Creative', desc: 'A fluorescent risograph zine press with ink pairings, editable pages and print preview.' },
  { name: 'telegraph', title: 'Telegraph', cat: 'Creative', desc: 'A working Morse desk with audible keying, a moving paper tape, speed control and a log.' },
  { name: 'cartographer', title: 'Cartographer', cat: 'Reference', desc: 'An antique island chart with clickable regions, waypoints and a saved expedition log.' },
  { name: 'sprint', title: 'Sprint', cat: 'Productivity', desc: 'A typewriter writing sprint with timed sessions, prompts, live WPM and saved history.' },
  { name: 'crate', title: 'Crate', cat: 'Productivity', desc: 'A 1970s vinyl crate with sleeve art, search, genres, ratings and detailed tracklists.' },
  { name: 'contact-sheet', title: 'Contact Sheet', cat: 'Creative', desc: 'A monochrome proof sheet with twenty-four frames, a loupe, ratings and captions.' },
  { name: 'mailroom', title: 'Mailroom', cat: 'Productivity', desc: 'A 1990s desktop email client with folders, unread counts, compose, reply and a taskbar.' },
  { name: 'broadsheet', title: 'Broadsheet', cat: 'Web', desc: 'A daily newspaper front page with a ticker, filters, article reader and saved clippings.' },
  { name: 'dollhouse', title: 'Dollhouse', cat: 'Creative', desc: 'A pastel isometric house with six rooms, decorating palettes, furniture and night mode.' },
  { name: 'terrarium', title: 'Terrarium', cat: 'Creative', desc: 'A glass terrarium simulator with misting, sunlight, humidity, plant health and a day count.' },
];

const CATEGORIES = ['All', 'Games', 'Creative', 'Tools', 'Productivity', 'Learning', 'Reference', 'Web'];

const grid = document.getElementById('grid');
const chips = document.getElementById('chips');
const search = document.getElementById('search');
const count = document.getElementById('count');
const empty = document.getElementById('empty');
const total = document.getElementById('total');
const year = document.getElementById('year');

let activeCategory = 'All';
let query = '';

const cards = PROJECTS.map((project, index) => {
  const card = document.createElement('article');
  card.className = 'card';
  card.dataset.cat = project.cat;
  card.dataset.search = `${project.title} ${project.cat} ${project.desc} ${project.name}`.toLowerCase();

  const top = document.createElement('div');
  top.className = 'card-top';

  const number = document.createElement('span');
  number.className = 'card-index';
  number.textContent = String(index + 1).padStart(2, '0');

  const tag = document.createElement('span');
  tag.className = 'card-cat';
  tag.textContent = project.cat;

  top.append(number, tag);

  const title = document.createElement('h2');
  title.textContent = project.title;

  const desc = document.createElement('p');
  desc.textContent = project.desc;

  const links = document.createElement('div');
  links.className = 'card-links';

  const demo = document.createElement('a');
  demo.href = `https://ayo-2010.github.io/${project.name}/`;
  demo.target = '_blank';
  demo.rel = 'noopener';
  demo.textContent = 'Live demo';
  demo.setAttribute('aria-label', `Live demo of ${project.title}`);

  const code = document.createElement('a');
  code.className = 'ghost';
  code.href = `https://github.com/Ayo-2010/${project.name}`;
  code.target = '_blank';
  code.rel = 'noopener';
  code.textContent = 'Code';
  code.setAttribute('aria-label', `Source code for ${project.title}`);

  links.append(demo, code);
  card.append(top, title, desc, links);

  grid.appendChild(card);
  return card;
});

CATEGORIES.forEach((category) => {
  const chip = document.createElement('button');
  chip.type = 'button';
  chip.className = 'chip';
  chip.textContent = category;
  chip.dataset.category = category;
  if (category === 'All') chip.classList.add('is-active');

  chip.addEventListener('click', () => {
    activeCategory = category;
    chips.querySelectorAll('.chip').forEach((item) => {
      item.classList.toggle('is-active', item === chip);
    });
    applyFilter();
  });

  chips.appendChild(chip);
});

function applyFilter() {
  let shown = 0;

  cards.forEach((card) => {
    const matchesCategory = activeCategory === 'All' || card.dataset.cat === activeCategory;
    const matchesQuery = !query || card.dataset.search.includes(query);
    const visible = matchesCategory && matchesQuery;

    card.hidden = !visible;
    if (visible) shown += 1;
  });

  count.textContent = `Showing ${shown} of ${PROJECTS.length}`;
  empty.hidden = shown !== 0;
}

search.addEventListener('input', () => {
  query = search.value.trim().toLowerCase();
  applyFilter();
});

document.addEventListener('keydown', (event) => {
  if (event.key === '/' && document.activeElement !== search) {
    event.preventDefault();
    search.focus();
  }
});

total.textContent = String(PROJECTS.length);
year.textContent = `© ${new Date().getFullYear()} Ayo-2010`;
applyFilter();
