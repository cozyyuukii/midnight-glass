/* =========================================
   1. Shared Utilities
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    
    // Update Year
    const yearSpan = document.getElementById('year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Initialize Spotlight for known containers
    // We pass the IDs of the grids used in index, blog, series, and stellaris
    initSpotlight('cards');           // Index Bento Grid
    initSpotlight('blog-grid');       // Blog Grid
    initSpotlight('grid-container');  // Series & Stellaris Lists
    initSpotlight('intro-cards');     // Series & Stellaris Top Section

    // Initialize Modal Closing Logic (if modal exists)
    initModalLogic();
});


/* =========================================
   2. Spotlight Effect Logic
   ========================================= */
function initSpotlight(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // We track mouse on the container, but update variables on the cards
    // Use 'mousemove' on the container to save event listeners
    container.addEventListener('mousemove', (e) => {
        const cards = container.getElementsByClassName('spotlight-card');
        
        for (const card of cards) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        }
    });
}


/* =========================================
   3. Modal Logic (Close Actions)
   ========================================= */
function initModalLogic() {
    const modalWrapper = document.getElementById('modal-wrapper');
    const closeBtn = document.getElementById('close-modal');
    const backdrop = document.getElementById('modal-backdrop');

    if (!modalWrapper) return;

    function closeModal() {
        modalWrapper.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Event Listeners
    if(closeBtn) closeBtn.addEventListener('click', closeModal);
    if(backdrop) backdrop.addEventListener('click', closeModal);

    // Escape Key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modalWrapper.classList.contains('hidden')) {
            closeModal();
        }
    });
}

// Helper to open modal (Called from HTML files)
function openGenericModal() {
    const modalWrapper = document.getElementById('modal-wrapper');
    if(modalWrapper) {
        modalWrapper.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Lock scrolling
    }
}