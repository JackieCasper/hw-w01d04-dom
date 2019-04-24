var quotes = [
  'I live my life a quarter mile at a time',
  'I said a ten-second car, not a ten-minute car',
  'You almost had me? You never had me - you never had your car!',
  'I don\'t have friends. I have family.',
  'It don\'t matter if you win by an inch or a mile. Winning\'s winning.'
];

var favoriteThings = [
  'Fast cars',
  'Muscles',
  'Sleeveless t-shirts',
  'Revving my engine',
  'Living my life a quarter mile at a time',
  'Staring people down'
]


// Random quote of the day generator



// Part 1
document.querySelector('#main-title').textContent="Something Shorter, LOL";
// Part 2
document.body.style.backgroundColor ='lavenderblush';

// Part 3
var changefont = document.querySelectorAll('.special-title');

for (var i=0; i< changefont.length; i++)
{
  changefont[i].style.fontSize='2rem';
}


// Part 4

var divClass = document.querySelectorAll('.side-bar')[1];
var ulList = document.querySelectorAll('ul')[1];
var newFavList = document.createElement('li');
var newCity = document.createTextNode('Riyadh');

newFavList.appendChild(newCity);
ulList.appendChild(newFavList);
divClass.appendChild(ulList);
this.document.body.appendChild(ulList);


// Part 5
var newDiv = document.createElement('div');
newDiv.classList.add('blog-post');
newDiv.classList.add('purple');
console.log(newDiv);
var newHeader = document.createElement('h1');
var pText = document.createElement('p');
var cityEve = document.createTextNode('end game');

pText.appendChild(cityEve);
newHeader.appendChild(newCity);
newDiv.appendChild(newHeader);
newDiv.appendChild(pText);

document.querySelector('.main').appendChild(newDiv);

// Part 6


var listt = document.querySelector('#favorite-things'); //نجيب الليست اللي بنضيف عليها 
   
  
   console.log(listt);
   for (i=0;i<favoriteThings.length;i++)
   {
     var te = favoriteThings[i];
   var li1 = document.createElement('li');  // ننشئ عنصر الليست
   var li1text = document.createTextNode(te); // حطينا الفاليو في متغير جديد عشان نسمي فيه الايتم الجديد لاحقاً
   li1.appendChild(li1text); // نسند النص للايتم الجديد
    
   listt.appendChild(li1); // أخيرًا نسند الايتم لليست  

   }
// Part 7

function randomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length)
  document.querySelector('#quote-of-the-day').textContent = '"' + quotes[randomIndex] + '"';
};

randomQuote();

var submitButton =document.querySelector('.special-title');  //نجيب الزر
    submitButton.addEventListener('click', function (event) {  
      randomQuote()  ;//نجيب الايفنت ليستنر
    event.preventDefault();
    


})
////////////////////////////////
