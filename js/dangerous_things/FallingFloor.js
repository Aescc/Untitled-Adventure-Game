class FallingFloor
{
	constructor( x,y,w = 80,h = 80,map = 0 )
	{
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.drawX = this.x;
		this.drawY = this.y;
		this.drawW = this.w;
		this.drawH = this.h;
		this.c1 = this.FindBackColor();
		// this.alpha = 1.0;
		this.colors = this.InitColors( map );
		this.c0 = this.colors[0];
		this.isFalling = false;
		this.fallCounter = 0;
		this.fallCounterMax = 30;
		this.xStart = this.x;
		this.yStart = this.y;
		this.wStart = this.w;
		this.hStart = this.h;
	}
	InitColors( map )
	{
		if( map === 0 )
		{
			return [
				"#555555",
				"#444444",
				"#333333",
				"#222222",
				"#111111",
				"#000000"
			];
		}
		else if( map === 1 )
		{
			// TODO: Fix the colors so they match the terrain *better*.
			return [
				"#554515",
				"#443505",
				"#332500",
				"#221500",
				"#110500",
				"#000000"
			];
		}
		else // if( map === 2 )
		{
			return [
				"#664444",
				"#553333",
				"#442222",
				"#331111",
				"#220000",
				"#110000"
			];
		}
	}
	FindBackColor()
	{
		const randColor = "#" + Random( 11,22 ) + Random( 11,22 ) + Random( 22,44 );
		return randColor;
	}
	Update()
	{
		if( this.isFalling )
		{
			// this.alpha = 0.0;
			this.fallCounter = 0;
			this.drawW -= 2;
			this.drawH -= 2;
			++this.drawX;
			++this.drawY;
			if( this.drawW < 0 || this.drawH < 0 )
			{
				this.drawW = this.wStart;
				this.drawH = this.hStart;
				this.drawX = this.x;
				this.drawY = this.y;
				this.c0 = this.colors[0];
				this.isFalling = false;
				// this.alpha = 1.0;
			}
		}
		else
		{
			// this.c0 = this.colors[0];
		}
	}
	Draw()
	{
		Rect( this.x,this.y,this.w,this.h,this.c1 );
		Rect( this.drawX,this.drawY,this.drawW,this.drawH,this.c0 );
	}
	Fall()
	{
		if( this.fallCounter > this.fallCounterMax )
		{
			this.isFalling = true;
			this.fallCounter = 0;
		}
		else
		{
			if( Random( 0,1 ) )
			{
				++this.fallCounter;
				this.c0 = this.colors[Math.floor( this.fallCounter / 10 )];
			}
		}
	}
	GetX()
	{
		return this.x;
	}
	GetY()
	{
		return this.y;
	}
	GetFalling()
	{
		return this.isFalling;
	}
	SetFalling( willFall )
	{
		this.isFalling = willFall;
	}
	Reset()
	{
		this.isFalling = true;
	}
}
