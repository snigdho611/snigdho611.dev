function evolve1()
{
    //console.log(document.getElementById('myImage').src);
    console.log(document.getElementById('myHint').textContent);
    if(document.getElementById('myImage').src == 'http://localhost/JSpractice/images/pichu.png')
    {
        document.getElementById('myImage').src='http://localhost/JSpractice/images/pikachu.png';
    }

    else if(document.getElementById('myImage').src == 'http://localhost/JSpractice/images/pikachu.png')
    {
        document.getElementById('myImage').src='http://localhost/JSpractice/images/raichu.png';
    }

    else if(document.getElementById('myImage').src == 'http://localhost/JSpractice/images/raichu.png')
    {
        document.getElementById('myHint').textContent='Raichu cannot evolve!';
    }
}

function reset()
{
    document.getElementById('myImage').src='http://localhost/JSpractice/images/pichu.png';
    document.getElementById('myHint').textContent='';
}

