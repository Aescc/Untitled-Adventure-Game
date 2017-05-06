class TileMap
{
	constructor()
	{
		this.x = 0;
		this.y = 0;
		this.maps = [
			[
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ]
			],
			[
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,0,0,0,1,0,0 ],
				[ 0,0,0,1,0,0,0,1,0,0 ],
				[ 0,0,0,1,0,0,0,1,0,0 ],
				[ 0,0,0,1,0,0,0,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ]
			]
		];
		this.enemies = [
			[
				new Enemy( 4 * 80,3 * 80,[ 3,3,3,1,1,2,2,2,2,0,0,3 ] ),
				new Enemy( 6 * 80,5 * 80,[ 2,2,2,0,0,3,3,3,3,1,1,2 ] )
			],
			[
				new Enemy( 7 * 80,4 * 80,[ 1,1,2,2,2,2,0,0,0,0,0,3,3,3,3,1,1,1 ] ),
				new Enemy( 3 * 80,2 * 80,[ 0,3,3,3,3,1,1,1,1,1,2,2,2,2,0,0,0,0 ] )
			]
		];
		this.fallingFloors = [
			[
				new FallingFloor( 4 * 80,4 * 80,80,80 ),
				new FallingFloor( 5 * 80,4 * 80,80,80 ),
				new FallingFloor( 6 * 80,4 * 80,80,80 )
			],
			[
				new FallingFloor( 3 * 80,1 * 80,80,80 ),
				new FallingFloor( 4 * 80,1 * 80,80,80 ),
				new FallingFloor( 5 * 80,1 * 80,80,80 ),
				new FallingFloor( 6 * 80,1 * 80,80,80 ),
				new FallingFloor( 7 * 80,1 * 80,80,80 ),
				new FallingFloor( 3 * 80,2 * 80,80,80 ),
				new FallingFloor( 7 * 80,2 * 80,80,80 ),
				new FallingFloor( 3 * 80,3 * 80,80,80 ),
				new FallingFloor( 7 * 80,3 * 80,80,80 ),
				new FallingFloor( 3 * 80,4 * 80,80,80 ),
				new FallingFloor( 7 * 80,4 * 80,80,80 ),
				new FallingFloor( 3 * 80,5 * 80,80,80 ),
				new FallingFloor( 7 * 80,5 * 80,80,80 ),
				new FallingFloor( 3 * 80,6 * 80,80,80 ),
				new FallingFloor( 4 * 80,6 * 80,80,80 ),
				new FallingFloor( 5 * 80,6 * 80,80,80 ),
				new FallingFloor( 6 * 80,6 * 80,80,80 ),
				new FallingFloor( 7 * 80,6 * 80,80,80 )
			]
		];
		this.currentMap = -1;
		this.colors = [
			[ 0,0,0,0,0,0,0,0,0,0 ],
			[ 0,0,0,0,0,0,0,0,0,0 ],
			[ 0,0,0,0,0,0,0,0,0,0 ],
			[ 0,0,0,0,0,0,0,0,0,0 ],
			[ 0,0,0,0,0,0,0,0,0,0 ],
			[ 0,0,0,0,0,0,0,0,0,0 ],
			[ 0,0,0,0,0,0,0,0,0,0 ],
			[ 0,0,0,0,0,0,0,0,0,0 ],
			[ 0,0,0,0,0,0,0,0,0,0 ],
			[ 0,0,0,0,0,0,0,0,0,0 ]
		];
		this.colorCounter = 0;
		this.colorCounterMax = 15; // Frequency of tile color updates; Lower is faster.
	}
	InitColors()
	{
		for( var i = 0; i < this.colors.length; ++i )
		{
			for( var j = 0; j < this.colors[i].length; ++j )
			{
				if( this.maps[this.currentMap][j][i] === 0 )
				{
					if( Random( 0,100 ) )
					{
						const randColor = "#" + Random( 11,22 ) + Random( 11,22 ) + Random( 22,44 );
						this.colors[j][i] = randColor;
					}
					else
					{
						// this.colors[j][i] = "#DDCCBB"
						const randColor = "#" + Random( 11,22 ) + Random( 11,22 ) + Random( 22,44 );
						this.colors[j][i] = randColor;
					}
				}
				else
				{
					const randRGB = Random( 33,66 );
					const randColor = "#" + randRGB + randRGB + randRGB;
					this.colors[j][i] = randColor;
				}
			}
		}
	}
	RandomizeTileColor()
	{
		var randRow = Random( 0,this.colors[0].length - 1 );
		var randCol = Random( 0,this.colors.length - 1 );
		while( this.maps[this.currentMap][randCol][randRow] )
		{
			randRow = Random( 0,this.colors[0].length - 1 );
			randCol = Random( 0,this.colors.length - 1 );
		}
		this.colors[randCol][randRow] = "#" + Random( 11,22 ) + Random( 11,22 ) + Random( 22,44 );
	}
	Update( player )
	{
		this.UpdateEnemies( player );
		this.UpdateFallingFloors( player );
	}
	Draw()
	{
		if( this.colorCounter > this.colorCounterMax )
		{
			this.RandomizeTileColor();
			this.colorCounter = 0;
		}
		else
		{
			++this.colorCounter;
		}
		for( var i = 0; i < this.maps[this.currentMap].length; ++i )
		{
			for( var j = 0; j < this.maps[this.currentMap][i].length; ++j )
			{
				Rect( j * 80,i * 80,80,80,this.FindColor( this.maps[this.currentMap][i][j],j,i ) );
			}
		}
		this.DrawFallingFloors();
		this.DrawEnemies();
	}
	FindColor( c,row,col )
	{
		if( c === 0 )
		{
			// return "#000000";
			return this.colors[col][row];
		}
		else if( c === 1 )
		{
			// return "#464646";
			// const randColor = Random( 11, 66 );
			// return "#" + randColor + randColor + randColor;
			return this.colors[col][row];
		}
	}
	Transition()
	{
		++this.currentMap;
		this.InitColors();
		player.SetX( player.GetX( false ) );
		player.SetY( player.GetY( false ) );
		console.log( "Level " + ( this.currentMap + 1 ) + " loaded successfully!" );
	}
	CheckMouseData( x,y )
	{
		var newX = x;
		var newY = y;
		while( newX % 80 !== 0 )
		{
			--newX;
		}
		while( newY % 80 !== 0 )
		{
			--newY;
		}
		newX /= 80;
		newY /= 80;
		// Text( newX * 80,newY * 80 + 45,this.colors[newY][newX],"#FFFFFF","20PX Arial" );
		var textVal = "Void";
		if( this.maps[this.currentMap][newY][newX] )
		{
			textVal = "Ground";
		}
		else
		{
			textVal = "Void";
		}
		Text( newX * 80,newY * 80 + 45,textVal,"#FFFFFF","20PX Arial" );
		// console.log( x + " " + y );
	}
	GetLoc( xPos,yPos )
	{
		return this.maps[this.currentMap][ yPos / 80 ][ xPos / 80 ];
	}
	GetCurrentLevel()
	{
		return this.currentMap;
	}
	UpdateEnemies( player )
	{
		for( var i = 0; i < this.enemies[this.currentMap].length; ++i )
		{
			this.enemies[this.currentMap][i].UpdateAI();
			if( player.GetX( true ) === this.enemies[this.currentMap][i].GetX() && player.GetY( true ) === this.enemies[this.currentMap][i].GetY() )
			{
				player.SetDead( true );
			}
			else if( player.GetX( true ) === this.enemies[this.currentMap][i].GetSlimeX() && player.GetY( true ) === this.enemies[this.currentMap][i].GetSlimeY() )
			{
				// player.SetDead( true );
			}
		}
	}
	UpdateFallingFloors( player )
	{
		for( var i = 0; i < this.fallingFloors[this.currentMap].length; ++i )
		{
			this.fallingFloors[this.currentMap][i].Update();
			if( player.GetX( true ) === this.fallingFloors[this.currentMap][i].GetX() && player.GetY( true ) === this.fallingFloors[this.currentMap][i].GetY() )
			{
				for( var j = 0; j < this.fallingFloors[this.currentMap].length; ++j )
				{
					this.fallingFloors[this.currentMap][j].Fall();
				}
				if( this.fallingFloors[this.currentMap][i].GetFalling() )
				{
					player.SetDead( true );
				}
			}
		}
	}
	DrawEnemies()
	{
		for( var i = 0; i < this.enemies[this.currentMap].length; ++i )
		{
			this.enemies[this.currentMap][i].Draw();
		}
	}
	DrawFallingFloors()
	{
		for( var i = 0; i < this.fallingFloors[this.currentMap].length; ++i )
		{
			this.fallingFloors[this.currentMap][i].Draw();
		}
	}
}
