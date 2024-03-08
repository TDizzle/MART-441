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
    var myViewFinder = new ViewFinder(" An American tank, called the Abrams.");

    var myViewFinder1 = new ViewFinder('images/Abrams.jpeg');

    var myViewFinder2 = new ViewFinder(" Abrams tanks were born in the 1970s. Today, our army still uses the same chassis, but with updated eletronics and weapon systems.");

    var myViewFinder3 = new ViewFinder(" By me :D");

    var myViewFinder4 = new ViewFinder(" The image was captured in 2018");

    myViewFinderArray.push(myViewFinder);

    myViewFinderArray.push(myViewFinder1);

    myViewFinderArray.push(myViewFinder2);

    myViewFinderArray.push(myViewFinder3);

    myViewFinderArray.push(myViewFinder4);

    myViewFinderArray.push(myImage.src = images/Abrams.jpeg)

}

function accessInformation()
{
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);

    document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();
}