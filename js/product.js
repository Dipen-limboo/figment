document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.product-view-container');
    const colorDivs = document.querySelectorAll('.color-div img');
    const varientDivs = document.querySelectorAll('.varient-div img');
    let defaultSrc = '../images/tshirt.jfif'; // Default image source
    let currentSrc = defaultSrc;

    // Show the first product-view-container (white by default)
    containers[0].classList.add('active');

    // Change the main product image when a color-div is clicked
    colorDivs.forEach(function(colorDiv) {
        colorDiv.addEventListener('click', function() {
            const clickedSrc = this.src;
            currentSrc = clickedSrc; // Update the current image source

            containers.forEach(function(container) {
                const mainImage = container.querySelector('.product-view-image img');
                if (mainImage.src === clickedSrc) {
                    container.classList.add('active');
                } else {
                    container.classList.remove('active');
                }
            });
        });
    });

    // Change the main product image on hover over a varient-div
    varientDivs.forEach(function(varientDiv) {
        varientDiv.addEventListener('mouseenter', function() {
            const hoveredSrc = this.src;
            const activeContainer = document.querySelector('.product-view-container.active .product-view-image img');
            activeContainer.src = hoveredSrc; // Temporarily change the image
        });

        varientDiv.addEventListener('mouseleave', function() {
            const activeContainer = document.querySelector('.product-view-container.active .product-view-image img');
            activeContainer.src = currentSrc; // Revert to the previously selected image
        });
    });
});
