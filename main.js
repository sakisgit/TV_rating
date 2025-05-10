
//Initial Ratings
const ratings = {
    sony: 4.7,
    samsung: 3.4,
    vizio:2.3,
    panasonic:3.6,
    phillips: 4.1
};  

//Total stars
const totalStars=5;

//Run getRattings when DOM loads
document.addEventListener('DOMContentLoaded',getRatings);

//Form Elements
const productSelect = document.getElementById('product-select');
const ratingControl= document.getElementById('rating-control');

//Init Product 
let product;

//Product select change
productSelect.addEventListener('change', (e)=> {
    product=e.target.value;
    
    //Enable rating control
    ratingControl.disabled=false;
    ratingControl.value=ratings[product];
});

//Rating control change
ratingControl.addEventListener('blur', (e) => {
    const rating=e.target.value;

    //Make sure 5 or under
    if(rating>5 || rating<0){
        alert('Please rate 1 to 5');
        return;
    };

    //Change rating
    ratings[product] = rating;

    getRatings();
});



//Get ratings
function getRatings() {
    for(let rating in ratings) {
        //Get percentage 
        const starPerc= (ratings[rating]/totalStars) *100;

        //Round to nearest 10
        const starPercRounded = `${Math.round(starPerc/10) * 10}%`;

        //Set width of stars-inner to percentage
        document.querySelector(`.${rating} .stars-inner`).style.width = starPercRounded;
        

        //Add number rating
        document.querySelector(`.${rating} .number-rating`).innerHTML= ratings[rating];
    };
};