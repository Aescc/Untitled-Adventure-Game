class Fireball
{
	constructor( x,y,dir,mfMax )
	{
		this.x = x;
		this.y = y;
		this.w = 80;
		this.h = 80;
		this.c = "#FF" + Random( 11,99 ) + Random( 11,99 );
		this.dir = dir; // Direction in which to move.
		this.mf = 0;
		this.mfMax = mfMax; // Move frequency.
	}
	Update()
	{
		if( this.mf > this.mfMax )
		{
			this.Move();
			this.mf = 0;
		}
		else
		{
			++this.mf;
		}
	}
	Move()
	{
		if( this.dir === 0 )
		{
			this.y -= this.h;
		}
		else if( this.dir === 1 )
		{
			this.y += this.h;
		}
		else if( this.dir === 2 )
		{
			this.x -= this.h;
		}
		else if( this.dir === 3 )
		{
			this.x += this.h;
		}
	}
	Draw()
	{
		// TODO: Add lights on the surrounding tiles.
		Rect( this.x + 1 * 80,this.y,this.w,this.h,this.c,0.1 );
		Rect( this.x - 1 * 80,this.y,this.w,this.h,this.c,0.1 );
		Rect( this.x,this.y + 1 * 80,this.w,this.h,this.c,0.1 );
		Rect( this.x,this.y - 1 * 80,this.w,this.h,this.c,0.1 );
		
		Rect( this.x,this.y,this.w,this.h,this.c,0.7 );
	}
	ResetColor()
	{
		this.c = "#FF" + Random( 11,99 ) + Random( 11,99 );
	}
	SetX( x )
	{
		this.x = x;
	}
	SetY( y )
	{
		this.y = y;
	}
	SetDir( dir )
	{
		this.dir = dir;
	}
	SetCounter( num )
	{
		this.mf = num;
	}
	GetX()
	{
		return this.x;
	}
	GetY()
	{
		return this.y;
	}
}