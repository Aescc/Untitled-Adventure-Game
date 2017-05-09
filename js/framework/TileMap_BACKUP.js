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
			],
			[
				[ 0,0,0,0,1,1,0,0,0,0 ],
				[ 0,0,0,0,1,1,0,0,0,0 ],
				[ 0,0,0,0,1,1,0,0,0,0 ],
				[ 0,0,0,0,1,1,0,0,0,0 ],
				[ 0,0,0,0,1,1,0,0,0,0 ],
				[ 0,0,0,0,1,1,0,0,0,0 ],
				[ 0,0,0,0,1,1,0,0,0,0 ],
				[ 0,0,0,0,1,1,0,0,0,0 ],
				[ 0,0,0,0,1,1,0,0,0,0 ],
				[ 0,0,0,0,1,1,0,0,0,0 ]
			],
			[
				[ 0,0,0,0,1,1,0,0,0,0 ],
				[ 0,0,0,1,1,1,1,0,0,0 ],
				[ 0,0,0,1,0,0,1,0,0,0 ],
				[ 0,0,0,1,0,0,1,0,0,0 ],
				[ 0,0,0,1,1,1,1,0,0,0 ],
				[ 0,0,0,1,0,0,1,0,0,0 ],
				[ 0,0,0,1,0,0,1,0,0,0 ],
				[ 0,0,0,1,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,0,0,0,0 ],
				[ 0,0,0,0,1,1,0,0,0,0 ]
			],
			[
				[ 0,0,0,0,0,0,0,1,0,0 ],
				[ 0,0,0,0,0,0,0,1,0,0 ],
				[ 0,0,0,0,1,0,0,1,0,0 ],
				[ 0,0,1,1,1,1,1,1,0,1 ],
				[ 0,0,1,0,0,0,0,0,0,0 ],
				[ 0,0,1,1,1,1,0,0,0,1 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ]
			],
			[
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ]
			],
			[
				[ 1,0,0,0,0,1,0,0,0,0 ],
				[ 1,0,0,0,0,1,0,0,0,0 ],
				[ 1,0,0,0,0,1,0,0,0,0 ],
				[ 1,1,0,0,0,1,0,0,0,0 ],
				[ 1,0,0,0,0,1,0,0,0,0 ],
				[ 1,0,0,0,0,1,0,0,0,0 ],
				[ 1,1,0,0,0,1,0,0,0,0 ],
				[ 1,0,0,0,0,1,0,0,0,0 ],
				[ 1,0,0,0,0,1,0,0,0,0 ],
				[ 1,1,1,1,1,1,0,0,0,0 ]
			],
			[
				[ 0,0,0,0,1,1,0,0,0,0 ],
				[ 0,0,0,0,1,1,0,0,0,0 ],
				[ 0,0,1,1,1,1,1,1,0,0 ],
				[ 0,0,1,1,1,1,1,1,0,0 ],
				[ 0,0,1,1,1,1,1,1,0,0 ],
				[ 0,0,0,0,1,1,0,0,0,0 ],
				[ 0,0,0,0,1,1,0,0,0,0 ],
				[ 0,0,0,0,1,1,0,0,0,0 ],
				[ 0,0,0,0,1,1,0,0,0,0 ],
				[ 0,0,0,1,1,1,1,0,0,0 ]
			],
			[
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ]
			],
			[
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,0,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ]
			],
			[
				[ 1,0,0,0,0,0,0,0,0,0 ],
				[ 1,0,0,0,0,0,0,0,0,0 ],
				[ 1,0,0,0,0,0,0,0,0,0 ],
				[ 1,0,0,0,0,0,0,0,0,0 ],
				[ 1,1,1,1,1,1,1,1,1,1 ],
				[ 0,0,0,0,0,0,0,0,0,1 ],
				[ 0,0,0,0,0,0,0,0,0,1 ],
				[ 0,0,0,0,0,0,0,0,0,1 ],
				[ 0,0,0,0,0,1,1,1,1,1 ],
				[ 0,0,0,0,0,1,0,0,0,0 ]
			],
			[
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,0,0,0,1,0,0 ],
				[ 0,0,0,1,0,0,0,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ]
			],
			[
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ]
			],
			[
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ]
			],
			[
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
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
			],
			[],
			[
				new Enemy( 6 * 80,4 * 80,[ 1,1,1,0,0,0,0,0,0,1,1,1 ] )
			],
			[],
			[],
			[],
			[],
			[
				new Enemy( 3 * 80,3 * 80,[ 3,3,3,3,2,2,2,2 ] ),
				new Enemy( 7 * 80,6 * 80,[ 2,2,2,2,3,3,3,3 ] )
			],
			[
				new Enemy( 4 * 80,3 * 80,[ 3,3,1,1,2,2,0,0 ] )
			],
			[
				new Enemy( 1 * 80,3 * 80,[ 1,1,3,3,0,0,3,3,1,1,3,3,0,0,3,1,1,2,2,0,0,2,2,1,1,2,2,0,0,2 ],3 )
			],
			[
				new Enemy( 3 * 80,4 * 80,[ 3,3,3,3,1,1,1,2,2,2,2,0,0,0 ] ),
				new Enemy( 7 * 80,7 * 80,[ 2,2,2,2,0,0,0,3,3,3,3,1,1,1 ] )
			],
			[],
			[],
			[]
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
			],
			[],
			[
				new FallingFloor( 4 * 80,4 * 80,80,80 ),
				new FallingFloor( 5 * 80,4 * 80,80,80 )
			],
			[
				new FallingFloor( 4 * 80,2 * 80,80,80 )
			],
			[],
			[
				new FallingFloor( 0 * 80,0 * 80,80,80 ),
				new FallingFloor( 0 * 80,1 * 80,80,80 ),
				new FallingFloor( 0 * 80,2 * 80,80,80 ),
				new FallingFloor( 0 * 80,3 * 80,80,80 ),
				new FallingFloor( 0 * 80,4 * 80,80,80 ),
				new FallingFloor( 0 * 80,5 * 80,80,80 ),
				new FallingFloor( 0 * 80,6 * 80,80,80 ),
				new FallingFloor( 0 * 80,7 * 80,80,80 ),
				new FallingFloor( 0 * 80,8 * 80,80,80 )
			],
			[],
			[],
			[],
			[
				new FallingFloor( 1 * 80,4 * 80 ),
				new FallingFloor( 2 * 80,4 * 80 ),
				new FallingFloor( 3 * 80,4 * 80 ),
				new FallingFloor( 4 * 80,4 * 80 ),
				new FallingFloor( 5 * 80,4 * 80 ),
				new FallingFloor( 6 * 80,4 * 80 ),
				new FallingFloor( 7 * 80,4 * 80 ),
				new FallingFloor( 8 * 80,4 * 80 )
			],
			[],
			[],
			[
				new FallingFloor( 4 * 80,7 * 80 ),
				new FallingFloor( 5 * 80,7 * 80 ),
				new FallingFloor( 6 * 80,7 * 80 ),
				new FallingFloor( 4 * 80,6 * 80 ),
				new FallingFloor( 5 * 80,6 * 80 ),
				new FallingFloor( 6 * 80,6 * 80 ),
				new FallingFloor( 4 * 80,4 * 80 ),
				new FallingFloor( 5 * 80,4 * 80 ),
				new FallingFloor( 6 * 80,4 * 80 ),
				new FallingFloor( 4 * 80,3 * 80 ),
				new FallingFloor( 5 * 80,3 * 80 ),
				new FallingFloor( 6 * 80,3 * 80 ),
			],
			[]
		];
		this.flameThrowers = [
			[],
			[],
			[],
			[],
			[
				new FlameThrower( 9 * 80,3 * 80,110,2 ),
				new FlameThrower( 7 * 80,5 * 80, 80,2 )
			],
			[
				new FlameThrower( 5 * 80,4 * 80,30,2 ),
				new FlameThrower( 5 * 80,4 * 80,30,3 )
			],
			[
				new FlameThrower( 8 * 80,7 * 80,70,2 ),
				new FlameThrower( 2 * 80,6 * 80,70,3 ),
				new FlameThrower( 8 * 80,5 * 80,70,2 ),
				new FlameThrower( 2 * 80,4 * 80,80,3 ),
				new FlameThrower( 8 * 80,3 * 80,80,2 ),
				new FlameThrower( 2 * 80,2 * 80,80,3 ),
				new FlameThrower( 8 * 80,1 * 80,80,2 )
			],
			[],
			[],
			[],
			[],
			[],
			[],
			[],
			[]
		];
		this.spikes = [
			[],
			[
				new Spike( 4 * 80,7 * 80,0 ),
				new Spike( 5 * 80,7 * 80,5 ),
				new Spike( 6 * 80,7 * 80,9 ),
			],
			[
				new Spike( 5 * 80,0 * 80,14 ),
				new Spike( 4 * 80,1 * 80,12 ),
				new Spike( 5 * 80,2 * 80,10 ),
				new Spike( 4 * 80,3 * 80, 8 ),
				new Spike( 5 * 80,4 * 80, 6 ),
				new Spike( 4 * 80,5 * 80, 4 ),
				new Spike( 5 * 80,6 * 80, 2 ),
				new Spike( 4 * 80,7 * 80, 0 ),
				new Spike( 5 * 80,8 * 80, 0 ),
				new Spike( 4 * 80,9 * 80, 0 )
			],
			[
				new Spike( 3 * 80,1 * 80,14 ),
				new Spike( 3 * 80,2 * 80,12 ),
				new Spike( 3 * 80,3 * 80, 9 ),
				new Spike( 3 * 80,4 * 80, 7 ),
				new Spike( 3 * 80,5 * 80, 4 ),
				new Spike( 3 * 80,6 * 80, 2 ),
				new Spike( 3 * 80,7 * 80, 0 )
			],
			[],
			[],
			[],
			[
				new Spike( 2 * 80,2 * 80,14 ),
				new Spike( 3 * 80,2 * 80,13 ),
				new Spike( 4 * 80,2 * 80,12 ),
				new Spike( 5 * 80,2 * 80,11 ),
				new Spike( 6 * 80,2 * 80,10 ),
				new Spike( 7 * 80,2 * 80, 9 ),
				new Spike( 2 * 80,3 * 80,11 ),
				new Spike( 3 * 80,3 * 80,10 ),
				new Spike( 4 * 80,3 * 80, 9 ),
				new Spike( 5 * 80,3 * 80, 8 ),
				new Spike( 6 * 80,3 * 80, 7 ),
				new Spike( 7 * 80,3 * 80, 6 ),
				new Spike( 2 * 80,4 * 80, 8 ),
				new Spike( 3 * 80,4 * 80, 7 ),
				new Spike( 4 * 80,4 * 80, 6 ),
				new Spike( 5 * 80,4 * 80, 5 ),
				new Spike( 6 * 80,4 * 80, 4 ),
				new Spike( 7 * 80,4 * 80, 3 )
			],
			[],
			[
				new Spike( 5 * 80,6 * 80,0 )
			],
			[],
			[],
			[
				new Spike( 3 * 80,5 * 80,0 ),
				new Spike( 4 * 80,5 * 80,0 ),
				new Spike( 5 * 80,5 * 80,0 ),
				new Spike( 6 * 80,5 * 80,0 ),
				new Spike( 7 * 80,5 * 80,0 ),
				new Spike( 3 * 80,4 * 80,7 ),
				new Spike( 4 * 80,4 * 80,7 ),
				new Spike( 5 * 80,4 * 80,7 ),
				new Spike( 6 * 80,4 * 80,7 ),
				new Spike( 7 * 80,4 * 80,7 ),
				new Spike( 3 * 80,3 * 80,0 ),
				new Spike( 4 * 80,3 * 80,0 ),
				new Spike( 5 * 80,3 * 80,0 ),
				new Spike( 6 * 80,3 * 80,0 ),
				new Spike( 7 * 80,3 * 80,0 )
			],
			[
				new Spike( 4 * 80,5 * 80, 0 ),
				new Spike( 5 * 80,5 * 80, 4 ),
				new Spike( 6 * 80,5 * 80, 8 ),
				new Spike( 4 * 80,2 * 80, 8 ),
				new Spike( 5 * 80,2 * 80, 4 ),
				new Spike( 6 * 80,2 * 80, 0 ),
			],
			[
				new Spike( 4 * 80,7 * 80,0 ),
				new Spike( 4 * 80,6 * 80,0 ),
				new Spike( 4 * 80,5 * 80,0 ),
				new Spike( 4 * 80,4 * 80,0 ),
				new Spike( 4 * 80,3 * 80,0 ),
				new Spike( 4 * 80,2 * 80,0 ),
				new Spike( 4 * 80,1 * 80,0 ),
				new Spike( 5 * 80,7 * 80,7 ),
				new Spike( 5 * 80,6 * 80,7 ),
				new Spike( 5 * 80,5 * 80,7 ),
				new Spike( 5 * 80,4 * 80,7 ),
				new Spike( 5 * 80,3 * 80,7 ),
				new Spike( 5 * 80,2 * 80,7 ),
				new Spike( 5 * 80,1 * 80,7 ),
				new Spike( 6 * 80,7 * 80,0 ),
				new Spike( 6 * 80,6 * 80,0 ),
				new Spike( 6 * 80,5 * 80,0 ),
				new Spike( 6 * 80,4 * 80,0 ),
				new Spike( 6 * 80,3 * 80,0 ),
				new Spike( 6 * 80,2 * 80,0 ),
				new Spike( 6 * 80,1 * 80,0 )
			]
		];
		this.currentMap = -1;
		this.colors = [
			[ 1,0,1,0,1,1,1,0,0,0 ],
			[ 1,1,1,0,0,1,0,0,0,0 ],
			[ 1,0,1,0,1,1,1,0,0,0 ],
			[ 0,0,0,0,0,0,0,0,0,0 ],
			[ 1,0,1,1,1,1,0,1,0,1 ],
			[ 0,1,0,1,0,1,0,1,0,1 ],
			[ 0,1,0,1,1,1,0,1,1,1 ],
			[ 0,0,0,0,0,0,0,0,0,0 ],
			[ 0,0,0,0,0,0,0,0,0,0 ],
			[ 0,0,0,0,0,0,0,0,0,0 ]
		];
		this.colorCounter = 0;
		this.colorCounterMax = 15; // Frequency of tile color updates; Lower is faster.
		this.transitionAlpha = 1.0;
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
		this.UpdateFlameThrowers( player );
		this.UpdateFallingFloors( player );
		this.UpdateSpikes( player );
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
		this.DrawFlameThrowers();
		this.DrawEnemies();
		this.DrawSpikes();
		this.transitionAlpha -= 0.01;
		if( this.transitionAlpha < 0.0 )
		{
			this.transitionAlpha = 0.0;
		}
		for( var i = 0; i < this.maps[this.currentMap].length; ++i )
		{
			for( var j = 0; j < this.maps[this.currentMap][i].length; ++j )
			{
				Rect( j * 80,i * 80,80,80,"#000",this.transitionAlpha );
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
			return this.colors[col][row];
		}
	}
	Transition( nextMap = -50 )
	{
		this.transitionAlpha = 1;
		if( nextMap === -50 )
		{
			// ++this.currentMap;
			this.currentMap = Random( 0,this.maps.length - 1 );
		}
		else
		{
			this.currentMap = nextMap;
		}
		for( var i = 0; i < this.fallingFloors[this.currentMap].length; ++i )
		{
			this.fallingFloors[this.currentMap][i].Reset();
		}
		this.InitColors();
		player.SetX( player.GetX( false ) );
		player.SetY( player.GetY( false ) );
		if( nextMap === -50 )
		{
			console.log( "Level " + ( this.currentMap + 1 ) + " loaded successfully!" );
			return( "Success!" );
		}
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
			if( player.GetX( true ) === this.enemies[this.currentMap][i].GetX() &&
				player.GetY( true ) === this.enemies[this.currentMap][i].GetY() )
			{
				player.SetDead( true );
			}
			else if( player.GetX( true ) === this.enemies[this.currentMap][i].GetSlimeX() &&
				player.GetY( true ) === this.enemies[this.currentMap][i].GetSlimeY() )
			{
				player.SetDead( true );
			}
		}
	}
	UpdateFallingFloors( player )
	{
		for( var i = 0; i < this.fallingFloors[this.currentMap].length; ++i )
		{
			this.fallingFloors[this.currentMap][i].Update();
			if( player.GetX( true ) === this.fallingFloors[this.currentMap][i].GetX() &&
				player.GetY( true ) === this.fallingFloors[this.currentMap][i].GetY() )
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
	UpdateFlameThrowers( player )
	{
		for( var i = 0; i < this.flameThrowers[this.currentMap].length; ++i )
		{
			this.flameThrowers[this.currentMap][i].Update();
			if( player.GetX( true ) === this.flameThrowers[this.currentMap][i].GetFireballX() &&
				player.GetY( true ) === this.flameThrowers[this.currentMap][i].GetFireballY() )
			{
				player.SetDead( true );
			}
			if( player.GetX( true ) === this.flameThrowers[this.currentMap][i].GetX() &&
				player.GetY( true ) === this.flameThrowers[this.currentMap][i].GetY() )
			{
				player.SetDead( true );
			}
		}
	}
	UpdateSpikes( player )
	{
		for( var i = 0; i < this.spikes[this.currentMap].length; ++i )
		{
			this.spikes[this.currentMap][i].Update();
			if( player.GetX( true ) === this.spikes[this.currentMap][i].GetX() &&
			player.GetY( true ) === this.spikes[this.currentMap][i].GetY() &&
			this.spikes[this.currentMap][i].GetActive() )
			{
				player.SetDead( true );
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
	DrawSpikes()
	{
		for( var i = 0; i < this.spikes[this.currentMap].length; ++i )
		{
			this.spikes[this.currentMap][i].Draw();
		}
	}
	DrawFlameThrowers()
	{
		for( var i = 0; i < this.flameThrowers[this.currentMap].length; ++i )
		{
			this.flameThrowers[this.currentMap][i].Draw();
		}
	}
}
