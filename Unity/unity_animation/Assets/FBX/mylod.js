#pragma strict

public var lowMesh : Transform;

public var custDist : float; 

private var dist : float;

private var lowmonster : GameObject[];

function Start () {

}

function Update () {


// Check to see how far low mesh is to  controler 

 	if (lowMesh) 
 	{
 		dist = Vector3.Distance(lowMesh.position, transform.position);
 		
 		print ('Distance to other' + dist);		
	}
	
	lowmonster = gameObject.GetComponents.<MeshRenderer>();
	
	for (var i = 0; i < lowmonster.length(); i++);
	
	{
	
	lowmonster[i].enable = false ;
	
	}
	
	
	
}

//Draw

function OnGUI() {

	GUI.Box(Rect(0,0,Screen.width,Screen.height), 'Dist = ' + dist);
	
	}
