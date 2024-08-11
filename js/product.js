document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.product-view-container');
    const colorDivs = document.querySelectorAll('.color-div img');
    const varientDivs = document.querySelectorAll('.varient-div img');
    let defaultSrc = '../images/tshirt.jfif'; 
    let currentSrc = defaultSrc;

    containers[0].classList.add('active');

    colorDivs.forEach(function(colorDiv) {
        colorDiv.addEventListener('click', function() {
            const clickedSrc = this.src;
            currentSrc = clickedSrc; 

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

    varientDivs.forEach(function(varientDiv) {
        varientDiv.addEventListener('mouseenter', function() {
            const hoveredSrc = this.src;
            const activeContainer = document.querySelector('.product-view-container.active .product-view-image img');
            activeContainer.src = hoveredSrc; 
        });

        varientDiv.addEventListener('mouseleave', function() {
            const activeContainer = document.querySelector('.product-view-container.active .product-view-image img');
            activeContainer.src = currentSrc; 
        });
    });
});
