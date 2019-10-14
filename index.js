/*
***
This is a markup routing page that is broken down as follows:
    1. Category Section
    - Quads
    - Hexacopters
    - Fixed Wing
Further work will be performed once database is completed
***
*/

// Changes HTML to Quadcopters
const renderQuads = document.querySelector('.quads').addEventListener('click', () => {
    const markup = `
    <div class="row">
    <div class="col-md-6">
        <h1 class="quad-h1"><a href="#">Quads</a></h1>
    </div>
    <div class="col-md-6">
        <div class="arrows">
            <a href="./index.html" class="back">
                <i class="fa fa-chevron-left" aria-hidden="true"></i> Back
            </a>
            <a href="#" class="more">
                More <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </a>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-md-6 rmv-pad-right">
        <div class="card card-quad">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-7 line-separation center-content">
                        <img class="card-img-top card-top-cat" src="images/quad.jpg" alt="Card image cap">
                    </div>
                    <div class="col-md-5 center-content">
                        <h4 class="rmv-txt-align">Another Name</h4>
                        <p class="rmv-txt-align">Check out some of the best available quad copters on the market. We guarantee best price!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-6 rmv-pad-left">
        <img src="drone-pic1.jpeg" alt="img-1" class="cards-image">
    </div>
</div>

<div class="row tweek-row">
    <div class="col-md-3">
        <div class="card custom">
            <a href="./productpage.html"><img class="card-img-top card-top-cat" src="images/quad.jpg" alt="Card image cap"></a>
            <div class="card-body">
                <h5 class="js-inj-card-txt">Quad 1</h5>
                <h6>Price: £150</h6>
            </div>
        </div>
    </div>
    <div class="col-md-3">
        <div class="card custom">
            <a href="./productpage.html"><img class="card-img-top card-top-cat" src="images/quad.jpg" alt="Card image cap"></a>
            <div class="card-body">
                <h5 class="js-inj-card-txt">Quad 2</h5>
                <h6>Price: £150</h6>
            </div>
        </div>
    </div>
    <div class="col-md-3">
        <div class="card custom">
            <a href="./productpage.html"><img class="card-img-top card-top-cat" src="images/quad.jpg" alt="Card image cap"></a>
            <div class="card-body">
                <h5 class="js-inj-card-txt">Quad 3</h5>
                <h6>Price: £150</h6>
            </div>
        </div>
    </div>
    <div class="col-md-3">
        <div class="card custom">
            <a href="./productpage.html"><img class="card-img-top card-top-cat" src="images/quad.jpg" alt="Card image cap"></a>
            <div class="card-body">
                <h5 class="js-inj-card-txt">Quad 4</h5>
                <h6>Price: £150</h6>
            </div>
        </div>
    </div>
</div>

<div class="row tweek-row">
    <div class="col-md-3">
        <div class="card custom">
            <a href="./productpage.html"><img class="card-img-top card-top-cat" src="images/quad.jpg" alt="Card image cap"></a>
            <div class="card-body">
                <h5 class="js-inj-card-txt">Quad 5</h5>
                <h6>Price: £150</h6>
            </div>
        </div>
    </div>
    <div class="col-md-3">
        <div class="card custom">
            <a href="./productpage.html"><img class="card-img-top card-top-cat" src="images/quad.jpg" alt="Card image cap"></a>
            <div class="card-body">
                <h5 class="js-inj-card-txt">Quad 6</h5>
                <h6>Price: £150</h6>
            </div>
        </div>
    </div>
    <div class="col-md-3">
        <div class="card custom">
            <a href="./productpage.html"><img class="card-img-top card-top-cat" src="images/quad.jpg" alt="Card image cap"></a>
            <div class="card-body">
                <h5 class="js-inj-card-txt">Quad 7</h5>
                <h6>Price: £150</h6>
            </div>
        </div>
    </div>
    <div class="col-md-3">
        <div class="card custom">
            <a href="./productpage.html"><img class="card-img-top card-top-cat" src="images/quad.jpg" alt="Card image cap"></a>
            <div class="card-body">
                <h5 class="js-inj-card-txt">Quad 8</h5>
                <h6>Price: £150</h6>
            </div>
        </div>
    </div>
</div>
<div class="arrows ar-bottom">
    <a href="./index.html" class="back">
        <i class="fa fa-chevron-left" aria-hidden="true"></i> Back
    </a>
    <a href="#" class="more">
        More <i class="fa fa-chevron-right" aria-hidden="true"></i>
    </a>
</div>
</div>`;
    document.querySelector('.cat-card').textContent = '';
    document.querySelector('.cat-card').insertAdjacentHTML('afterbegin', markup);
});

// Changes HTML to Hexacopters
const renderHexa = document.querySelector('.hexa').addEventListener('click', () => {
    const markup = `
    <div class="row">
    <div class="col-md-6">
        <h1 class="quad-h1"><a href="#">Hexacopter</a></h1>
    </div>
    <div class="col-md-6">
        <div class="arrows">
            <a href="./index.html" class="back">
                <i class="fa fa-chevron-left" aria-hidden="true"></i> Back
            </a>
            <a href="#" class="more">
                More <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </a>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-md-6 rmv-pad-right">
        <div class="card card-quad">
            <div class="card-body">
                <h5>Some Name</h5>
                <h4>Another Name</h4>
            </div>
        </div>
    </div>
    <div class="col-md-6 rmv-pad-left">
        <img src="drone-pic1.jpeg" alt="img-1" class="cards-image">
    </div>
</div>

<div class="row tweek-row">
    <div class="col-md-3">
        <div class="card custom">
            <div class="card-body">
                <h5>Some Name</h5>
                <h6>Price: £150</h6>
            </div>
        </div>
    </div>
    <div class="col-md-3">
        <div class="card custom">
            <div class="card-body">
                <h5>Some Name</h5>
                <h6>Price: £150</h6>
            </div>
        </div>
    </div>
    <div class="col-md-3">
        <div class="card custom">
            <div class="card-body">
                <h5>Some Name</h5>
                <h6>Price: £150</h6>
            </div>
        </div>
    </div>
    <div class="col-md-3">
        <div class="card custom">
            <div class="card-body">
                <h5>Some Name</h5>
                <h6>Price: £150</h6>
            </div>
        </div>
    </div>
</div>

<div class="row tweek-row">
    <div class="col-md-3">
        <div class="card custom">
            <div class="card-body">
                <h5>Some Name</h5>
                <h6>Price: £150</h6>
            </div>
        </div>
    </div>
    <div class="col-md-3">
        <div class="card custom">
            <div class="card-body">
                <h5>Some Name</h5>
                <h6>Price: £150</h6>
            </div>
        </div>
    </div>
    <div class="col-md-3">
        <div class="card custom">
            <div class="card-body">
                <h5>Some Name</h5>
                <h6>Price: £150</h6>
            </div>
        </div>
    </div>
    <div class="col-md-3">
        <div class="card custom">
            <div class="card-body">
                <h5>Some Name</h5>
                <h6>Price: £150</h6>
            </div>
        </div>
    </div>
</div>
<div class="arrows ar-bottom">
    <a href="./index.html" class="back">
        <i class="fa fa-chevron-left" aria-hidden="true"></i> Back
    </a>
    <a href="#" class="more">
        More <i class="fa fa-chevron-right" aria-hidden="true"></i>
    </a>
</div>
</div>`;
    document.querySelector('.cat-card').textContent = '';
    document.querySelector('.cat-card').insertAdjacentHTML('afterbegin', markup);
});

// Changes HTML to Fixed-Wing
const renderFw = document.querySelector('.fw').addEventListener('click', () => {
    const markup = `
    <div class="row">
    <div class="col-md-6">
        <h1 class="quad-h1"><a href="#">Fixed-wing</a></h1>
    </div>
    <div class="col-md-6">
        <div class="arrows">
            <a href="./index.html" class="back">
                <i class="fa fa-chevron-left" aria-hidden="true"></i> Back
            </a>
            <a href="#" class="more">
                More <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </a>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-md-6 rmv-pad-right">
        <div class="card card-quad">
            <div class="card-body">
                <h5>Some Name</h5>
                <h4>Another Name</h4>
            </div>
        </div>
    </div>
    <div class="col-md-6 rmv-pad-left">
        <img src="drone-pic1.jpeg" alt="img-1" class="cards-image">
    </div>
</div>

<div class="row tweek-row">
    <div class="col-md-3">
        <div class="card custom">
            <div class="card-body">
                <h5>Some Name</h5>
                <h6>Price: £150</h6>
            </div>
        </div>
    </div>
    <div class="col-md-3">
        <div class="card custom">
            <div class="card-body">
                <h5>Some Name</h5>
                <h6>Price: £150</h6>
            </div>
        </div>
    </div>
    <div class="col-md-3">
        <div class="card custom">
            <div class="card-body">
                <h5>Some Name</h5>
                <h6>Price: £150</h6>
            </div>
        </div>
    </div>
    <div class="col-md-3">
        <div class="card custom">
            <div class="card-body">
                <h5>Some Name</h5>
                <h6>Price: £150</h6>
            </div>
        </div>
    </div>
</div>

<div class="row tweek-row">
    <div class="col-md-3">
        <div class="card custom">
            <div class="card-body">
                <h5>Some Name</h5>
                <h6>Price: £150</h6>
            </div>
        </div>
    </div>
    <div class="col-md-3">
        <div class="card custom">
            <div class="card-body">
                <h5>Some Name</h5>
                <h6>Price: £150</h6>
            </div>
        </div>
    </div>
    <div class="col-md-3">
        <div class="card custom">
            <div class="card-body">
                <h5>Some Name</h5>
                <h6>Price: £150</h6>
            </div>
        </div>
    </div>
    <div class="col-md-3">
        <div class="card custom">
            <div class="card-body">
                <h5>Some Name</h5>
                <h6>Price: £150</h6>
            </div>
        </div>
    </div>
</div>
<div class="arrows ar-bottom">
    <a href="./index.html" class="back">
        <i class="fa fa-chevron-left" aria-hidden="true"></i> Back
    </a>
    <a href="#" class="more">
        More <i class="fa fa-chevron-right" aria-hidden="true"></i>
    </a>
</div>
</div>`;
    document.querySelector('.cat-card').textContent = '';
    document.querySelector('.cat-card').insertAdjacentHTML('afterbegin', markup);
});

// Go back to main category selection
