class Spike
{
	constructor( x,y )
	{
		this.x = x;
		this.y = y;
		this.w = 80;
		this.h = 80;
		this.c = "#666666";
		this.isActive = false;
		this.moveCycle = [ 0,0,0,0,1,1,2,2,3,3,3,2,2,1,1];
		this.moveCycleCounter = 0;
		this.waitTimer = 0;
		this.waitTimerMax = 2;
	}
	Update()
	{
		if( this.waitTimer > this.waitTimerMax )
		{
			if( this.moveCycleCounter < this.moveCycle.length )
			{
				++this.moveCycleCounter;
			}
			else
			{
				this.moveCycleCounter = 0;
			}
			this.waitTimer = 0;
		}
		else
		{
			++this.waitTimer;
		}
	}
	Draw()
	{
		Rect( this.x,this.y,this.w,this.h,this.c );
	}
	Fall()
	{
		
	}
	GetActive()
	{
		if( this.moveCycle[this.moveCycleCounter] === 3 )
		{
			return true;
		}
		else
		{
			return false;
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
}
