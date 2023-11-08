function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5krMOLRr4MY":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbw0t7Yw13RrgBrLo3BN34FV55Vxufiy7hG_oSc67HZvWYl1EZaROZY9Y8LH7h0PwZjs/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v9q1attempts:player.GetVar("v9q1attempts"),v9q1answeredcorrect:player.GetVar("v9q1answeredcorrect")})
	}
	)
}

