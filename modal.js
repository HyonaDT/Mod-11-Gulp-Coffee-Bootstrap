function openModal(productId) {
    document.getElementById(productId + 'Modal').style.display = "block";
}

function closeModal(productId) {
    document.getElementById(productId + 'Modal').style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}