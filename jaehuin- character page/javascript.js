// check for saved 'darkMode' in localStorage
 // check for saved 'darkMode' in localStorage
 let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('.toggle');

const enableDarkMode = () => {
// 1. Add the class to the body
document.body.classList.add('dark');
// 2. Update darkMode in localStorage
localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
// 1. Remove the class from the body
document.body.classList.remove('dark');
// 2. Update darkMode in localStorage 
localStorage.setItem('darkMode', null);
}

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
// get their darkMode setting
darkMode = localStorage.getItem('darkMode'); 

// if it not current enabled, enable it
if (darkMode !== 'enabled') {
    enableDarkMode();
// if it has been enabled, turn it off  
} else {  
    disableDarkMode(); 
}
});



const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for(const el of openEls) {
el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
});
}

for (const el of closeEls) {
el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
});
}

document.addEventListener("click", e => {
if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
}
});

document.addEventListener("keyup", e => {
if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
}
});

function openSidebar() {
    document.getElementById("sidebar").style.transform = "translateX(0)";
}

function closeSidebar() {
    document.getElementById("sidebar").style.transform = "translateX(-100%)";
}

document.querySelectorAll('.open-modal').forEach(button => {
    button.addEventListener('click', event => {
        const modalId = button.getAttribute('data-open');
        const modal = document.getElementById(modalId);
        
        // Reset all tabs in the modal
        const tabs = modal.querySelectorAll('.tab-group button');
        tabs.forEach(tab => {
            tab.setAttribute('aria-selected', 'false'); // Reset all tabs to false
            tab.classList.remove('active');  // Remove 'active' class from all tabs
        });

        // By default, select the first tab
        const firstTab = tabs[0];
        firstTab.setAttribute('aria-selected', 'true');
        firstTab.classList.add('active');  // Add active class to the first tab

        // Show the corresponding tab panel (first tab by default)
        const firstPanel = modal.querySelector(`#${firstTab.getAttribute('aria-controls')}`);
        document.querySelectorAll('.modal-tabs > div').forEach(panel => {
            panel.setAttribute('hidden', true);  // Hide all panels
        });
        firstPanel.removeAttribute('hidden');  // Show the first tab's panel
    });
});

document.querySelectorAll('.tab-group button').forEach(button => {
    button.addEventListener('click', event => {
        const modal = button.closest('.modal');  // Get the parent modal
        const targetPanel = document.querySelector(`#${button.getAttribute('aria-controls')}`);
        
        // Hide all the panels in the current modal
        modal.querySelectorAll('.modal-tabs > div').forEach(panel => {
            panel.setAttribute('hidden', true);
        });

        // Reset 'aria-selected' to false for all buttons in the current modal
        modal.querySelectorAll('.tab-group button').forEach(btn => {
            btn.setAttribute('aria-selected', 'false');
            btn.classList.remove('active');
        });

        // Show the selected panel
        targetPanel.removeAttribute('hidden');
        
        // Set the clicked tab's 'aria-selected' to true
        button.setAttribute('aria-selected', 'true');
        button.classList.add('active');
    });
});



tippy('[title]', {
    theme: 'custom',
    arrow: false,
    followCursor: true,
    zIndex: 9999999999,
    maxWidth: 300,

    content(reference) {
      const title = reference.getAttribute('title');
      reference.removeAttribute('title');
      return title;
    },
  });