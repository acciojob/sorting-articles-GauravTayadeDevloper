//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
let sortedBand=bands.sort((a,b)=>a.replace(/^(a |the |an )/i, "").localeCompare(b.replace(/^(a |an |the )/i,"")));

let bandNames = document.getElementById("band");
for(let i =0;i<sortedBand.length;i++)
	{
		
		let article = document.createElement("li");
		article.textContent = sortedBand[i].toString();
		bandNames.appendChild(article);
	}