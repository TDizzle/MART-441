var myViewFinderArray = new Array();

class ViewFinder
{
    constructor(title, image, description, author, imageYear)
    {
        this.title = title;
        this.image = image;
        this.description = description;
        this.author - author;
        this.imageYear = imageYear;
    }

    toString()
    {
        return "All about tanks:" + this.title;  
    }

    get theTitle()
    {
        return this.title;
    }

}

function initializeArray()
{
    var myViewFinder = new ViewFinder(" An American tank, called the Abrams.", 'images/Abrams.jpeg', " Abrams tanks were born in the 1970s. Today, our army still uses the same chassis, but with updated eletronics and weapon systems."," The image was captured in 2018" );

    myViewFinderArray.push(myViewFinder);

}

function accessInformation()
{
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);

    document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();
}