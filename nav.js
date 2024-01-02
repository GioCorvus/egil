window.onload = function() {
    var navItems = document.querySelectorAll('nav ul li a'); // Select anchor tags inside list items
    var maxWidth = 0;

    // Find the widest item
    navItems.forEach(function(item) {
        if (item.offsetWidth > maxWidth) {
            maxWidth = item.offsetWidth;
        }
    });

    // Set all items to the width of the widest item
    navItems.forEach(function(item) {
        item.style.width = maxWidth + 'px';
        item.style.display = 'inline-block'; // Ensure the anchor tags behave like block elements
    });
};
