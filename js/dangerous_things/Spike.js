class Spike
{
	constructor( x,y,startingFrame )
	{
		this.x = x;
		this.y = y;
		this.w = 80;
		this.h = 80;
		// this.c = [ "#666666","#775544","#884433","#993322" ];
		this.c = "#993322";
		this.c = "#CC3322";
		this.alpha = [ 0.0,0.3,0.6,1.0 ];
		this.isActive = false;
		this.moveCycle = [ 0,0,0,1,1,2,2,3,3,3,3,2,2,1,1 ];
		this.moveCycleCounter = startingFrame;
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
		this.UpdateColor();
	}
	Draw()
	{
		if( this.alpha[this.moveCycle[this.moveCycleCounter]] )
		{
			Rect( this.x,this.y,this.w,this.h,this.c,this.alpha[this.moveCycle[this.moveCycleCounter]] );
		}
		else
		{
			Rect( this.x,this.y,this.w,this.h,this.c,this.alpha[this.moveCycle[0]] );
		}
	}
	UpdateColor()
	{
		/*
		if( this.moveCycle[this.moveCycleCounter] === 0 )
		{
			this.c = "#666666";
		}
		else if( this.moveCycle[this.moveCycleCounter] === 1 )
		{
			this.c = "#775544";
		}
		else if( this.moveCycle[this.moveCycleCounter] === 2 )
		{
			this.c = "#884433";
		}
		else if( this.moveCycle[this.moveCycleCounter] === 3 )
		{
			this.c = "#993322";
		}
		*/
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
