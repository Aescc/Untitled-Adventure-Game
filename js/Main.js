const canvas = document.getElementById("gc");
const context = canvas.getContext("2d");

var keyMap = [];

var mouse = { x: 0,y: 0 }

var player = new Player();
var playerMoveCounter = 0;
const playerMoveCounterMax = 5;

var tileMap = new TileMap();
var lamps = [
	new Lamp( 2 * 80,4 * 80,1 )
];

var enemies = [
	new Enemy( 4 * 80,3 * 80,3 )
];
var fallingFloors = [
	new FallingFloor( 4 * 80,4 * 80,80,80 ),
	new FallingFloor( 5 * 80,4 * 80,80,80 ),
	new FallingFloor( 6 * 80,4 * 80,80,80 )
];
var spikes = [
	new Spike( 4 * 80,4 * 80 ),
	new Spike( 5 * 80,4 * 80 ),
	new Spike( 6 * 80,4 * 80 )
];

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
	enemies.forEach( function( enemy )
	{
		enemy.UpdateAI();
		// enemies[i].Move( enemies[i].CheckAIMoveDir( tileMap ),player.speed );
		if( player.GetX( true ) === enemy.GetX() && player.GetY( true ) === enemy.GetY() )
		{
			// player.SetDead( true );
			player.Move( enemy.GetNextPos(),player.speed );
		}
		else if( player.GetX( true ) === enemy.GetSlimeX() && player.GetY( true ) === enemy.GetSlimeY() )
		{
			// player.SetDead( true );
		}
	});
	for( var i = 0; i < fallingFloors.length; ++i )
	{
		fallingFloors[i].Update();
		if( player.GetX( true ) === fallingFloors[i].GetX() && player.GetY( true ) === fallingFloors[i].GetY() )
		{
			for( var j = 0; j < fallingFloors.length; ++j )
			{
				fallingFloors[j].Fall();
			}
			if( fallingFloors[i].GetFalling() )
			{
				player.SetDead( true );
			}
		}
	}
	/*
	for( var i = 0; i < spikes.length; ++i )
	{
		if( player.GetX( true ) === spikes[i].GetX() && player.GetY( true ) === spikes[i].GetY() && spikes[i].GetActive() )
		{
			player.SetDead( true );
		}
		spikes[i].Update();
	}
	*/
	if( playerMoveCounter > playerMoveCounterMax )
	{
		tileMap.UpdateMap();
		if( !player.GetDead() )
		{
			if( keyMap[87] )
			{
				// W
				player.Move( 0,player.speed );
				playerMoveCounter = 0;
			}
			else if( keyMap[83] )
			{
				// S
				player.Move( 1,player.speed );
				playerMoveCounter = 0;
			}
			else if( keyMap[65] )
			{
				// A
				player.Move( 2,player.speed );
				playerMoveCounter = 0;
			}
			else if( keyMap[68] )
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

function Draw()
{
	// Draw things here
	Rect( 0,0,canvas.width,canvas.height,"#000" );
	tileMap.Draw();
	for( var i = 0; i < spikes.length; ++i )
	{
		// spikes[i].Draw();
	}
	enemies.forEach( function( enemy )
	{
		enemy.Draw();
	});
	fallingFloors.forEach( function( tile )
	{
		tile.Draw();
	});
	player.Draw();
	for( var i = 0; i < lamps.length; ++i )
	{
		// lamps[i].Draw();
	}
	tileMap.CheckMouseData( mouse.x,mouse.y );
}
