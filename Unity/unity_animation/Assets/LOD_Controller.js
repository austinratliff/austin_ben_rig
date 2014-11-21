#pragma strict

public var distanceRanges : float[];
public var lodModels : GameObject[];

private var current = -2 ;



public var PlayerCamera : Camera;

function Start () {

for (var i = 0; i < lodModels.Length; i++)
	{
		lodModels[i].SetActiveRecursively(false);
	}

}

function Update () {

	var d = Vector3.Distance(PlayerCamera.main.transform.position, transform.position) ;
	
	var level = -1 ;
	
	for (var i = 0; i < distanceRanges.Length; i++)
	{
		if (d< distanceRanges[i])
		{
			level = i;
			i = distanceRanges.Length;
		}
		
		if (level == -1)
		{
			level = distanceRanges.Length;
		}
		
		if (current !=level)
		{
			ChangeLOD(level);
		}
	}
	
	}
	
	function ChangeLOD (level)
	
	{
	
		lodModels[level].SetActiveRecursively(true);
		
		if( current >= 0)
		{
			lodModels[current].SetActiveRecursively(false);	
		}
	
		current = level ;

}