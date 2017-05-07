class FlameThrower
{
	constructor( x,y,ffMax,dir )
	{
		this.x = x;
		this.y = y;
		this.w = 80;
		this.h = 80;
		this.c = "#884411";
		this.ff = 0; // Fire Frequency counter.
		this.ffMax = ffMax; // Lower is faster.
		this.dir = dir; // Direction in which to throw fireballs.
		this.fireball = new Fireball( this.x,this.y,this.dir,10 );
	}
	Update()
	{
		if( this.ff > this.ffMax )
		{
			if( this.dir === 0 )
			{
				this.fireball.SetX( this.x );
				this.fireball.SetY( this.y - 1 * 80 );
			}
			else if( this.dir === 1 )
			{
				this.fireball.SetX( this.x );
				this.fireball.SetY( this.y + 1 * 80 );
			}
			else if( this.dir === 2 )
			{
				this.fireball.SetX( this.x - 1 * 80 );
				this.fireball.SetY( this.y );
			}
			else if( this.dir === 3 )
			{
				this.fireball.SetX( this.x + 1 * 80 );
				this.fireball.SetY( this.y );
			}
			this.fireball.SetDir( this.dir );
			this.fireball.SetCounter( 0 );
			this.fireball.ResetColor();
			this.ff = 0;
		}
		else
		{
			++this.ff;
		}
		this.fireball.Update();
	}
	Draw()
	{
		Rect( this.x,this.y,this.w,this.h,this.c );
		
		this.fireball.Draw();
	}
	GetX()
	{
		return this.x;
	}
	GetY()
	{
		return this.y;
	}
	GetFireballX()
	{
		return this.fireball.GetX();
	}
	GetFireballY()
	{
		return this.fireball.GetY();
	}
}