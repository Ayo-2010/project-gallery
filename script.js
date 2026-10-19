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

  { name: 'image-carousel', title: 'Image Carousel', cat: 'Creative', desc: 'A touch friendly slideshow with arrows, dots and fullscreen.' },
  { name: 'drawing-app', title: 'Drawing App', cat: 'Creative', desc: 'A freehand canvas with brush sizes, colours and undo.' },
  { name: 'color-palette', title: 'Colour Palette', cat: 'Creative', desc: 'Generate palettes and copy colours in several formats.' },
  { name: 'drum-machine', title: 'Drum Machine', cat: 'Creative', desc: 'A step sequencer with pads, tempo and swing.' },
  { name: 'pixel-art-editor', title: 'Pixel Art Editor', cat: 'Creative', desc: 'Draw on grids from sixteen to sixty-four pixels and export a PNG.' },

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

  { name: 'quiz-app', title: 'Quiz App', cat: 'Learning', desc: 'A hundred questions across four quiz modes.' },

  { name: 'periodic-table', title: 'Periodic Table', cat: 'Reference', desc: 'All 118 elements with a detail popup for each one.' },

  { name: 'recipe-website', title: 'Recipe Website', cat: 'Web', desc: 'A responsive recipe site with cards and a shopping list.' },
  { name: 'landing-page', title: 'Landing Page', cat: 'Web', desc: 'A product page with pricing, FAQ and scroll reveals.' },
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
