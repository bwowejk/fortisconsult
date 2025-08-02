    const images = [
        'url("/images/IMG_4273.jpeg")',
        'url("/images/IMG_4834.jpeg")',
        'url("/images/IMG_3934.jpeg")'
    ];

    let index = 0;

    setInterval(() => {
        document.querySelector('.section-one').style.backgroundImage = images[index];
        index = (index + 1) % images.length;
    }, 5000); // change every 5 seconds