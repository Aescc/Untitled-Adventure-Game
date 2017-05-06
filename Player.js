class Player
{
	constructor()
	{
		this.x = 80 * 5;
		this.y = canvas.height - 80 * 1;
		this.w = 80;
		this.h = 80;
		this.c = "#DD3322";
		this.speed = this.w;
		this.drawX = this.x;
		this.drawY = this.y;
		this.xStart = this.x;
		this.yStart = this.y
		this.wStart = this.w;
		this.hStart = this.h;
		this.speedStart = this.speed;
		this.isDead = false;
		
		this.moveDir = 0;
		this.hasInitialized = false;
		this.img = new Image();
	}
	Init()
	{
		this.img.src = "images/player/0.png";
		this.img.src = "images/player/1.png";
		this.img.src = "images/player/2.png";
		this.img.src = "images/player/3.png";
		this.hasInitialized = true;
	}
	GetInit()
	{
		return this.hasInitialized;
	}
	Move( dir,speed )
	{
		if( !this.isDead )
		{
			this.drawX = this.x;
			this.drawY = this.y;
		}
		if( dir === 0 )
		{
			this.y -= speed;
			this.moveDir = 0;
		}
		else if( dir === 1 )
		{
			this.y += speed;
			this.moveDir = 1;
		}
		else if( dir === 2 )
		{
			this.x -= speed;
			this.moveDir = 2;
		}
		else if( dir === 3 )
		{
			this.x += speed;
			this.moveDir = 3;
		}
	}
	Draw()
	{
		Rect( this.drawX,this.drawY,this.w,this.h,this.c );
		
		// this.img.src = "images/player/" + this.moveDir + ".png";
		// context.drawImage( this.img,this.drawX,this.drawY,this.w,this.h );
	}
	BindToScreen()
	{
		if( this.y < 0 )
		{
			return 1;
		}
		if( this.y + this.h > canvas.height )
		{
			return 0;
		}
		if( this.x < 0 )
		{
			return 3;
		}
		if( this.x + this.w > canvas.width )
		{
			return 2;
		}
		return 4;
	}
	Respawn()
	{
		this.speed = 0;
		this.w -= 2;
		this.h -= 2;
		++this.drawX;
		++this.drawY;
		if( this.w < 0 || this.h < 0 )
		{
			this.x = this.xStart;
			this.y = this.yStart;
			this.w = this.wStart;
			this.h = this.hStart;
			this.speed = this.speedStart;
			this.isDead = false;
		}
	}
	SetDead( willBeKilled )
	{
		this.isDead = willBeKilled;
	}
	GetDead()
	{
		return this.isDead;
	}
	GetX( start )
	{
		if( start )
		{
			return this.x;
		}
		else
		{
			return this.xStart;
		}
	}
	GetY( start )
	{
		if( start )
		{
			return this.y;
		}
		else
		{
			return this.yStart;
		}
	}
	SetX( new_x )
	{
		this.x = new_x;
	}
	SetY( new_y )
	{
		this.y = new_y;
	}
}
