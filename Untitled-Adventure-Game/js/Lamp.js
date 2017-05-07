class Lamp
{
	constructor( x,y,intensity )
	{
		this.x = x;
		this.y = y;
		this.w = 80;
		this.h = 80;
		this.c = "#FFAA00";
		this.intensity = intensity;
	}
	Draw()
	{
		Rect( this.x,this.y,this.w,this.h,this.c,0.7 );
		
		Rect( this.x + 1 * 80,this.y,this.w,this.h,this.c,0.5 );
		Rect( this.x - 1 * 80,this.y,this.w,this.h,this.c,0.5 );
		Rect( this.x,this.y + 1 * 80,this.w,this.h,this.c,0.5 );
		Rect( this.x,this.y - 1 * 80,this.w,this.h,this.c,0.5 );
		
		Rect( this.x + 1 * 80,this.y + 1 * 80,this.w,this.h,this.c,0.3 );
		Rect( this.x + 1 * 80,this.y - 1 * 80,this.w,this.h,this.c,0.3 );
		Rect( this.x - 1 * 80,this.y + 1 * 80,this.w,this.h,this.c,0.3 );
		Rect( this.x - 1 * 80,this.y - 1 * 80,this.w,this.h,this.c,0.3 );
	}
}
