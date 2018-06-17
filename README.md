<div align="center">
  <img alt="The Wolf Among Us Logo" src="https://vignette.wikia.nocookie.net/logopedia/images/f/f6/The_Wolf_Among_Us.png/revision/latest/scale-to-width-down/640?cb=20131019205531" width=400/>
</div>


# The Wolf Among Us API
Small test project working with Swagger and Redoc.<br />
This REST API provides the (current) characters, locations, and episodes within Telltale's The Wolf Among Us.


## Accessing the API
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

## Use cases
No use cases really, besides cataloguing characters, locations and episodes...<br />
The JSON file is only around 40KB - so if you wanted to access the data you're better off just downloading it from this repository and implement it directly into your project(s). But if you want to access it with HTTP, here you go!

## Credits
- [ReDoc](https://github.com/Rebilly/ReDoc) for the API reference documentation.
- [json-server](https://github.com/typicode/json-server) for the REST API builder.
- [Wolf Among Us wiki](http://fables.wikia.com/wiki/The_Wolf_Among_Us) contributors for the data and information.
- [Telltale Games](https://telltale.com/) for the awesome game.
