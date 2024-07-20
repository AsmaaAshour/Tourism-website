document.addEventListener('DOMContentLoaded', function() 
{
    const greetings =
     [
        'Welcome to Our Tourism Website!',
        'Explore Amazing Places with Us!',
        'Your Adventure Starts Here!'
    ];
    
    let index = 0;
    const greetingElement = document.getElementById('greeting');

    setInterval(() =>
    {
        index = (index + 1) % greetings.length;
        greetingElement.textContent = greetings[index];
    }, 3000);
});


function changeImage(imageId)
{
    var image = document.getElementById(imageId);
    if (image)
    {
        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-lT6TcSB0vQ1r4MdN9NUcMtLT2jfKsnyzrnlAkCv-okumI80jMY9n-mNvEsGm4YF2Yk&usqp=CAU";
    }
}