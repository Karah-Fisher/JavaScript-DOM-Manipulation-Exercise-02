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
    toggleStatusButton.textContent = newStatus === 'active' ? 'Deactivate' : 'Activate';
});

// --- Task 3: Update Profile Image --- //
updateImageButton.addEventListener('click', function() {
    const newImageUrl = prompt('Enter a new image URL:');
    if (newImageUrl) {
        profileImage.src = newImageUrl;
    }
});
