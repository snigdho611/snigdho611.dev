function evolve1()
{
    //console.log(document.getElementById('myImage').src);
    console.log(document.getElementById('myHint').textContent);
    if(document.getElementById('myImage').src == 'https://raw.githubusercontent.com/snigdho611/snigdho611.github.io/main/pokemon/images/pichu.png')
    {
        document.getElementById('myImage').src='https://raw.githubusercontent.com/snigdho611/snigdho611.github.io/main/pokemon/images/pikachu.png';
    }

    else if(document.getElementById('myImage').src == 'https://raw.githubusercontent.com/snigdho611/snigdho611.github.io/main/pokemon/images/pikachu.png')
    {
        document.getElementById('myImage').src='https://raw.githubusercontent.com/snigdho611/snigdho611.github.io/main/pokemon/images/raichu.png';
    }

    else if(document.getElementById('myImage').src == 'https://raw.githubusercontent.com/snigdho611/snigdho611.github.io/main/pokemon/images/raichu.png')
    {
        document.getElementById('myHint').textContent='Raichu cannot evolve!';
    }
}

function reset()
{
    document.getElementById('myImage').src='https://raw.githubusercontent.com/snigdho611/snigdho611.github.io/main/pokemon/images/pichu.png';
    document.getElementById('myHint').textContent='';
}

