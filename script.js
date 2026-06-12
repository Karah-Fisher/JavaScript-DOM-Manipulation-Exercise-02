// --- DOM Elements --- //
const profileCard = document.getElementById('profileCard');
const profileImage = document.getElementById('profileImage');
const profileName = document.getElementById('profileName');
const profileRole = document.getElementById('profileRole');

const updateNameButton = document.getElementById('updateNameBtn');
const updateRoleButton = document.getElementById('updateRoleBtn');
const toggleStatusButton = document.getElementById('toggleStatusBtn');
const updateImageButton = document.getElementById('updateImageBtn');

// --- Event Listeners --- //
// --- Task 1: Update Name and Role--- //
updateNameButton.addEventListener('click', function() {
    const newName = prompt('Enter a new name:');
    if (newName) {
        profileName.textContent = newName;
    }
});

updateRoleButton.addEventListener('click', function() {
    const newRole = prompt('Enter a new role:');
    if (newRole) {
        profileRole.textContent = newRole;
    }
});

// --- Task 2: Toggle Active Status --- //
toggleStatusButton.addEventListener('click', function() {
    const currentStatus = profileCard.getAttribute('data-status');
    const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
    profileCard.setAttribute('data-status', newStatus);
    toggleStatusButton.textContent = newStatus === 'active' ? 'Deactivate Profile' : 'Activate Profile';
    toggleStatusButton.classList.toggle('active-status', newStatus === 'active');
    toggleStatusButton.classList.toggle('inactive-status', newStatus === 'inactive');
});

// --- Task 3: Update Profile Image --- //
updateImageButton.addEventListener('click', function() {
    const newImageUrl = prompt('Enter a new image URL:');
    if (newImageUrl) {
        profileImage.src = newImageUrl;
    }
});

// Initialize toggle button label to reflect current status
(function initStatusButton() {
    if (!profileCard) return;
    const currentStatus = profileCard.getAttribute('data-status') || 'active';
    profileCard.setAttribute('data-status', currentStatus);
    if (toggleStatusButton) {
        toggleStatusButton.textContent = currentStatus === 'active' ? 'Deactivate Profile' : 'Activate Profile';
        toggleStatusButton.classList.toggle('active-status', currentStatus === 'active');
        toggleStatusButton.classList.toggle('inactive-status', currentStatus === 'inactive');
    }
})();
