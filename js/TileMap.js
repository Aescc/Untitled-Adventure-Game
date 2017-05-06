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
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ]
			]
		]
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
						this.colors[j][i] = "#DDCCBB"
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
	UpdateMap()
	{
		
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
		Text( newX * 80,newY * 80 + 45,this.colors[newY][newX],"#FFFFFF","20PX Arial" );
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
}
