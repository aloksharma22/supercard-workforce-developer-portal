/*
==============================================================================
Supercard Workforce Developer Portal
Custom JavaScript
Author: Alok Sharma
==============================================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    console.log("Supercard Workforce Developer Portal Loaded");

    // Add target="_blank" to external links
    document.querySelectorAll("a").forEach(link => {

        if (
            link.hostname &&
            link.hostname !== window.location.hostname
        ) {
            link.target = "_blank";
            link.rel = "noopener noreferrer";
        }

    });

});