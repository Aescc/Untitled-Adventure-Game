const canvas = document.getElementById("gc");
const context = canvas.getContext("2d");

var playerMoveCounter = 0;
const playerMoveCounterMax = 5;
var clickNum = 0;

var keyMap = [];
var uncoveredTiles = [ 0,0 ];

var mouse = { x: 0,y: 0 }

var player = new Player();

var tileMap = new TileMap();

var isStarted = false;

window.onload = function()
{
	const fps = 30;
	setInterval(function()
	{
		Update();
		Draw();
	}, 1000/fps);
	onkeydown = onkeyup = function(e)
	{
		keyMap[e.keyCode] = e.type == "keydown";
	}
	canvas.addEventListener( 'mousedown',CheckClick );
	canvas.addEventListener( 'mousemove',function( e )
	{
			mouse.x = CheckMousePos( e ).x;
			mouse.y = CheckMousePos( e ).y;
	} );
	context.webkitImageSmoothingEnabled = false;
	context.mozImageSmoothingEnabled = false;
	context.imageSmoothingEnabled = false;
	Init();
};

function CheckClick()
{
	// When you click, this happens.
	++clickNum;
}

function CheckMousePos( e )
{
	const rect = canvas.getBoundingClientRect();
	const root = document.documentElement;
	const mouseX = e.clientX - rect.left - root.scrollLeft;
	const mouseY = e.clientY - rect.top - root.scrollTop;
	return { x:mouseX, y:mouseY };
}

function Init()
{
	tileMap.Transition();
	tileMap.InitColors();
	console.log( "Initialization complete!" );
}

function Update()
{
	if( clickNum > 2 )
	{
		isStarted = true;
	}
	if( isStarted )
	{
		// Update things here
		if( player.BindToScreen() === 1 )
		{
			tileMap.Transition();
		}
		player.Move( player.BindToScreen(),player.speed ); // Must come BEFORE tileMap check.
		
		if( !tileMap.GetLoc( player.x,player.y ) )
		{
			// player.speed = 0;
			player.SetDead( true );
		}
		tileMap.Update( player );
		if( playerMoveCounter > playerMoveCounterMax )
		{
			if( !player.GetDead() )
			{
				if( keyMap[87] || keyMap[38] )
				{
					// W
					player.Move( 0,player.speed );
					playerMoveCounter = 0;
				}
				else if( keyMap[83] || keyMap[40] )
				{
					// S
					player.Move( 1,player.speed );
					playerMoveCounter = 0;
				}
				else if( keyMap[65] || keyMap[37] )
				{
					// A
					player.Move( 2,player.speed );
					playerMoveCounter = 0;
				}
				else if( keyMap[68] || keyMap[39] )
				{
					// D
					player.Move( 3,player.speed );
					playerMoveCounter = 0;
				}
			}
			else
			{
				player.Respawn();
			}
		}
		else
		{
			++playerMoveCounter;
		}
	}
	else
	{
		var tempX = mouse.x;
		var tempY = mouse.y;
		while( tempX % 80 !== 0 )
		{
			--tempX;
		}
		while( tempY % 80 !== 0 )
		{
			--tempY;
		}
		uncoveredTiles[0] = tempX / 80;
		uncoveredTiles[1] = tempY / 80;
	}
}

function Draw()
{
	if( isStarted )
	{
		// Draw things here
		Rect( 0,0,canvas.width,canvas.height,"#000" );
		tileMap.Draw();
		player.Draw();
		if( keyMap[17] )
		{
			tileMap.CheckMouseData( mouse.x,mouse.y );
		}
	}
	else
	{
		Rect( 0,0,canvas.width,canvas.height,"#000" );
		/*
		Text( 0,150,"CLICK","#FFF","200PX Arial" );
		Text( 0,300,"THE",  "#FFF","200PX Arial" );
		Text( 0,450,"MOUSE","#FFF","200PX Arial" );
		Text( 0,600,"THREE","#FFF","200PX Arial" );
		Text( 0,750,"TIMES","#FFF","200PX Arial" );
		*/
		for( var i = 0; i < canvas.height / 80; ++i )
		{
			for( var j = 0; j < canvas.width / 80; ++j )
			{
				if( j === uncoveredTiles[0] && i === uncoveredTiles[1] )
				{
					Rect( j * 80,i * 80,80,80,"#FFAA00",0.5 );
				}
				else if( ( j === uncoveredTiles[0] + 1 && i === uncoveredTiles[1] ) ||
						 ( j === uncoveredTiles[0] - 1 && i === uncoveredTiles[1] ) ||
						 ( j === uncoveredTiles[0] && i === uncoveredTiles[1] + 1 ) ||
						 ( j === uncoveredTiles[0] && i === uncoveredTiles[1] - 1 ) )
				{
					Rect( j * 80,i * 80,80,80,"#FFAA00",0.3 );
				}
				else if( ( j === uncoveredTiles[0] + 1 && i === uncoveredTiles[1] + 1 ) ||
						 ( j === uncoveredTiles[0] - 1 && i === uncoveredTiles[1] + 1 ) ||
						 ( j === uncoveredTiles[0] + 1 && i === uncoveredTiles[1] - 1 ) ||
						 ( j === uncoveredTiles[0] - 1 && i === uncoveredTiles[1] - 1 ) )
				{
					Rect( j * 80,i * 80,80,80,"#FFAA00",0.1 );
				}
				else
				{
					Rect( j * 80,i * 80,80,80,"#000",1.0 );
				}
			}
		}
	}
}
