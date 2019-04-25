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
// function randomQuote() {
//   var randomIndex = Math.floor(Math.random() * quotes.length)
//   document.querySelector('#quote-of-the-day').textContent = '"' + quotes[randomIndex] + '"';
// };



// Part 1

document.querySelector('#main-title').textContent = 'Welcome to Dom page';
// Part 2

document.body.style.backgroundColor= '#dbbdcc';

// Part 3


var selectSpecialTitle= document.querySelectorAll('#special-title')

selectSpecialTitle.forEach( function(special){
  
  special.style.fontSize = '2rem';
  
})

// Part 4


function addItem (){
  var ul = document.getElementById("Past-Races");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode('Riyadh'));
  ul.appendChild(li);
}
addItem();

// Part 5
function NewBlogPost(){
  
  var div = document.createElement('div');
  div.setAttribute('class',"blog-post purple");
  
  
  var h1 = document.createElement('h1')
  h1.appendChild(document.createTextNode('Riyadh'));
  div.appendChild(h1);
  var p = document.createElement('p');
  p.appendChild(document.createTextNode('I drove my car following riyad traffic laws'.toLocaleUpperCase()))
  div.appendChild(p);
  document.querySelector(".main").appendChild(div);
}
NewBlogPost();
// Part 6

var sideBar = document.querySelector('#favorite-things');

for (i = 0; i < favoriteThings.length; i++) {
    var Text = favoriteThings[i];
    var list1 = document.createElement('li');
    var list1Text = document.createTextNode(Text);
    list1.appendChild(list1Text);

    sideBar.appendChild(list1);

};


// Part 7


document.getElementById('quote-title')
        .addEventListener('click', function (event) {
     
        function randomQuote() {
            var randomIndex = Math.floor(Math.random() * quotes.length)
            document.querySelector('#quote-of-the-day').textContent = '"' + quotes[randomIndex] + '"';
          };
          randomQuote();
        });






