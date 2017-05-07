class Enemy
{
	constructor( x,y,moveCycle )
	{
		this.x = x;
		this.y = y;
		this.w = 80;
		this.h = 80;
		this.c = "#" + Random( 11,99 ) + "DD" + Random( 11,99 );
		this.moveCounter = 0;
		this.moveCounterMax = 5; // speed, lower is faster
		this.moveCycle = moveCycle;
		this.moveCycleCounter = 0;
		this.slime = { x:this.x,y:this.y };
	}
	UpdateAI()
	{
		// TODO: Make this work with any layout.
		if( this.moveCounter > this.moveCounterMax )
		{
			this.Move( this.moveCycle[this.moveCycleCounter],80 );
			if( this.moveCycleCounter < this.moveCycle.length )
			{
				++this.moveCycleCounter;
			}
			else
			{
				this.moveCycleCounter = 0;
			}
			this.moveCounter = 0;
		}
		else
		{
			++this.moveCounter;
		}
	}
	Move( dir,speed )
	{
		if( dir === 0 )
		{
			this.y -= speed;
		}
		else if( dir === 1 )
		{
			this.y += speed;
		}
		else if( dir === 2 )
		{
			this.x -= speed;
		}
		else if( dir === 3 )
		{
			this.x += speed;
		}	
	}
	Draw()
	{
		Rect( this.x,this.y,this.w,this.h,this.c,0.7 );
		
		this.slime.x = this.x;
		this.slime.y = this.y;
		if( this.moveCycle[this.moveCycleCounter - 1] === 0 )
		{
			this.slime.y = this.y + 80;
		}
		else if( this.moveCycle[this.moveCycleCounter - 1] === 1 )
		{
			this.slime.y = this.y - 80;
		}
		else if( this.moveCycle[this.moveCycleCounter - 1] === 2 )
		{
			this.slime.x = this.x + 80;
		}
		else if( this.moveCycle[this.moveCycleCounter - 1] === 3 )
		{
			this.slime.x = this.x - 80;
		}
		// Rect( this.x,this.y,this.w,this.h,"#00FF00",0.3 );
		Rect( this.slime.x,this.slime.y,this.w,this.h,this.c,0.4 );
		// Rect( this.x + 1 * 80,this.y,this.w,this.h,"#00FF00",0.1 );
	}
	GetX()
	{
		return this.x;
	}
	GetY()
	{
		return this.y;
	}
	GetSlimeX()
	{
		return this.slime.x;
	}
	GetSlimeY()
	{
		return this.slime.y;
	}
	GetNextPos()
	{
		return this.moveCycle[this.moveCycleCounter + 0];
	}
}
