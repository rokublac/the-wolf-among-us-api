<div align="center">
  <img alt="The Wolf Among Us Logo" src="https://vignette.wikia.nocookie.net/logopedia/images/f/f6/The_Wolf_Among_Us.png/revision/latest/scale-to-width-down/640?cb=20131019205531" width=400/>
</div>

<div align="center">
	# The Wolf Among Us API
</div>
Welcome to the REST API for Telltale's The Wolf Among Us!<br />
The Wolf Among Us API provides the (current) characters, locations, and episodes within the game.
<div align="center">
	## Accessing the API
</div>
Requests can be made with Curl or with your desired language's HTTP GET request method. For example, with Curl, to GET the data for Bigsby Wolf:
`curl https://twauapi.herokuapp.com/characters/1`

```json
{
	"statusCode": 200,
	"body": {
		"id": 1,
		"name": "Bigby Wolf",
		"species": "Wolf",
		"gender": "Male",
		"occupation": "Fabletown Sherrif",
		"hairColour": "Mahogany",
		"eyeColour": "Brown",
		"description": "The renowned Big Bad Wolf. He's known for tormenting pigs and girls in red hoods, but is trying to put those dark days behind him. Bigby now acts as Fabletown's sheriff and remains in his human form, mostly. However, due to his rough past, the citizens of Fabletown are slow to trust him. Bigby is determined to show that he's truly changed, but some instincts are just too hard to control",
		"imagePath": "https://vignette.wikia.nocookie.net/fables/images/2/2b/CW_Bigby_Nerissa_Convo.png/revision/latest?cb=20140710174447"
	}
}
```
## Credits
- [ReDoc](https://github.com/Rebilly/ReDoc) for the API reference documentation.
- [json-server](https://github.com/typicode/json-server) for REST API builder.
- [Studio Ghibli API](https://github.com/janaipakos/ghibliapi) for inspiring me to make this API.
- [Wolf Among Us wiki](http://fables.wikia.com/wiki/The_Wolf_Among_Us) contributors for the data and information.
- [Telltale Games](https://telltale.com/) for the awesome game.
