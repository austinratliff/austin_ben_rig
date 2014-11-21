#pragma strict

public var lowMesh : Transform;

public var custDist : float; 

private var dist : float;

function Start () {

}

function Update () {

// Check to see how far low mesh is to  controler 

 	if (lowMesh) 
 	{
 		dist = Vector3.Distance(lowMesh.position, transform.position);
 		
 		print ('Distance to other' + dist);		
	}

// Turn of low mesh if distance is close

	if ( dist <= custDist ) {
	
		 gameObject.SetActive (false );
	
	}
	
// Turn low mesh back on if distance is grater than custDist

	if (dist >= custDist ) {
	
		renderer.enabled = true ;
		
	}
	
}



//Draw

function OnGUI() {

	GUI.Box(Rect(0,0,Screen.width,Screen.height), 'Dist = ' + dist);
	
	}
