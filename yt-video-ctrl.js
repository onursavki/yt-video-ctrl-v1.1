document.addEventListener('DOMContentLoaded', function () {
    var videoFrame = document.getElementById('videoFrame');
    var videoContainer = document.getElementById('videoContainer');

    // Check if src is empty
    if (!videoFrame.getAttribute('src')) {
        // Create the warning message elements dynamically
        var warningMessage = document.createElement('center');
        warningMessage.id = 'warningMessage';

        var noEntrySpan = document.createElement('span');
        noEntrySpan.className = 'noentry';
        noEntrySpan.innerHTML = '❌'; // Insert the warning symbol
        noEntrySpan.style.userSelect = 'none'; // Prevent emoji selection

        var messageText = document.createElement('p');
        messageText.textContent = 'Video Bulunamadı...';
        messageText.style.userSelect = 'none'; // Prevent text selection

        // Append elements to the warning message
        warningMessage.appendChild(noEntrySpan);
        warningMessage.appendChild(messageText);

        // Insert the warning message after the video container
        videoContainer.parentNode.insertBefore(warningMessage, videoContainer.nextSibling);

        // Hide the video container
        videoContainer.style.display = 'none';
    }
});
