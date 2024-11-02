// Store the screens as variables
const screen1 = document.querySelector("#screen-1");
const screen2 = document.querySelector("#screen-2");

// Store the buttons as variables
const nextButton = document.querySelector("#next-button");

const imageOne = document.querySelector(".image-1 img");
const imageTwo = document.querySelector(".image-2 img");
const imageThree = document.querySelector(".image-3 img");

// Next button functionality
nextButton.addEventListener("click", () => {
    screen1.style.display = "none";
    screen2.style.display = "flex";
});


// AUDIO FUNCTIONALITY
const bgMusic = new Audio('audio/bgmusic.wav'); 

const soundBtn = document.querySelector('#sound-btn');
soundBtn.addEventListener('click', () => {
    if(bgMusic.paused){
        bgMusic.play();
        soundBtn.name = 'volume-up';
      }else{
        bgMusic.pause();
        soundBtn.name = 'volume-mute';
      }
    });


// Zoom Images Function 
function zoomImage(element) {
    /* Remove class from all images besides the one that we've just clicked*/
    if (imageOne != element) {
        imageOne.classList.remove("zoomImage");
    }
    if (imageTwo != element) {
        imageTwo.classList.remove("zoomImage");
    }
    if (imageThree != element) {
        imageThree.classList.remove("zoomImage");
    }
    element.classList.toggle("zoomImage");
}


// SNAKE ANIMATION
const snakeMoving = {
    curviness: 1,
    autoRotate: true, 
    values: [
        {x: 100, y: 100}, 
        {x: 150, y: 200}, 
        {x: 200, y: 280}, 
        {x: 350, y: 300},
        {x: 460, y: 350},
        {x: 600, y: 400}, 
        {x: 980, y: 700}, 
        {x: window.innerWidth, y:-200 } 
    ]
};

const tween = new TimelineLite();
tween.add(
    TweenLite.to('.snake', 1,{
        bezier: snakeMoving,
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();
new ScrollMagic.Scene ({
    triggerElement: '.animation',
    duration: 3000, 
    triggerHook: 2,
})
.setTween(tween)
.addTo(controller);



//MAP DIALOGS
// NSW
// Button in the map
const nswButton = document.querySelector('#NSW');
// The dialog for NSW, starts off hidden
const nswDialog = document.querySelector('#nsw-dialog');
// The close dialog button for NSW
const nswDialogCloseButton = document.querySelector('#nsw-dialog-close');
// Add logic to open & close the NSW dialog
nswButton.addEventListener('click', () => nswDialog.show());
nswDialogCloseButton.addEventListener('click', () => nswDialog.hide());

// QLD
const qldButton = document.querySelector('#QLD');
const qldDialog = document.querySelector('#qld-dialog');
const qldDialogCloseButton = document.querySelector('#qld-dialog-close');
qldButton.addEventListener('click', () => qldDialog.show());
qldDialogCloseButton.addEventListener('click', () => qldDialog.hide());

// WA
const waButton = document.querySelector('#WA');
const waDialog = document.querySelector('#wa-dialog');
const waDialogCloseButton = document.querySelector('#wa-dialog-close');
waButton.addEventListener('click', () => waDialog.show());
waDialogCloseButton.addEventListener('click', () => waDialog.hide());

// SA 
const saButton = document.querySelector('#SA');
const saDialog = document.querySelector('#sa-dialog');
const saDialogCloseButton = document.querySelector('#sa-dialog-close');
saButton.addEventListener('click', () => saDialog.show());
saDialogCloseButton.addEventListener('click', () => saDialog.hide());

// NT
const ntButton = document.querySelector('#NT');
const ntDialog = document.querySelector('#nt-dialog');
const ntDialogCloseButton = document.querySelector('#nt-dialog-close');
ntButton.addEventListener('click', () => ntDialog.show());
ntDialogCloseButton.addEventListener('click', () => ntDialog.hide());


// References
// CDNJS. n.d. “BezierPlugin.” CDNJS. Accessed 2024. https://cdnjs.com/libraries/BezierPlugin.

// CDNJS. n.d. “CSSPlugin” CDNJS. Accessed 2024. https://cdnjs.com/libraries/CSSPlugin.

// CDNJS. n.d. “Debug addIndicators” CDNJS. Accessed 2024. https://cdnjs.com/libraries/debug_addIndicators.

// CDNJS. n.d. “GSAP” CDNJS. Accessed 2024. https://cdnjs.com/libraries/gsap

// CDNJS. n.d. “ScrollMagic.” CDNJS. Accessed 2024. https://cdnjs.com/libraries/ScrollMagic.

// CDNJS. n.d. “addIndicators.” CDNJS. Accessed 2024. https://cdnjs.com/libraries/ScrollMagic.

// CDNJS. n.d. “TweenLite.” CDNJS. Accessed 2024. https://cdnjs.com/libraries/TweenLite.

// CDNJS. n.d. “TimelineLite.” CDNJS. Accessed 2024. https://cdnjs.com/libraries/TimelineLite.

// Connolly, Michael J. 2016. “The Rainbow Serpent.” Kullilla Art. 2016. https://www.kullillaart.com.au/dreamtime-stories/The-Rainbow-Serpent.
// Joe, Syd Bruce Short. 2019. “Rainbow Serpent Art from Pormpuraaw | Garland Magazine.” Garlandmag.com. May 30, 2019. https://garlandmag.com/article/pormpuraaw/.
// Lauren, Alejandro. n.d. Rainbow Serpent. Alejando Lauren. https://alejandrolauren.com/products/rainbow-serpent?_pos=1&_psq=serpent&_ss=e&_v=1.0.
// melbourne.atmospheres. 2021. “Freesound - Australian Birds in Rural Nature Reserve, Yarra Ranges, Victoria by Melbourne.atmospheres.” Freesound.org. 2021. https://freesound.org/people/melbourne.atmospheres/sounds/582918/.
// Pwerle, Selina Teece. n.d. My Father’s Country. Acrylic. Kate Owen Gallery. https://www.kateowengallery.com/artists/Sel392/Sel21597.htm.
// Shoelace. 2024. “Shoelace.” Shoelace.style. 2024. https://shoelace.style/.
// Tjungurrayi, George Ward. 2024. “Tingari - Karrkurritinytja (Lake MacDonald) - GWTHF0001 by George Ward Tjungurrayi.” Kateowengallery.com. 2024. https://www.kateowengallery.com/artists/Geo21/Geo12792.htm.


// Simple Maps. 2016. “Free Blank Australia Map in SVG - Resources | Simplemaps.com.” Simplemaps.com. 2016. https://simplemaps.com/svg/country/au.
// Ware, T’keyah. n.d. Rainbow Serpent. Painting. https://bluethumb.com.au/t-keyah-ware/Artwork/rainbow-serpent-496314.
// Yarinkura, Lena. 2024. “Ngalyod (Rainbow Serpent) 2004.” QAGOMA Collection Online. 2024. https://collection.qagoma.qld.gov.au/objects/14722.
