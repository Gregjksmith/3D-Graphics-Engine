#version 430

layout(location = 0) in vec4 position;
layout(location = 1) in vec4 color;
layout(location = 2) in vec4 normal;
layout(location = 3) in float materialIndex;
layout(location = 4) in vec2 textureCoord;
layout(location = 5) in vec4 basisX;
layout(location = 6) in vec4 basisZ;
layout(location = 7) in float vertIndex;

out vec4 vPosition;
out vec4 vLocalPosition;
out vec4 vColor;
out vec4 vNormal;
out int vMaterialIndex;
out vec2 vTextureCoord;
out vec4 vBasisX;
out vec4 vBasisZ;

uniform float windowAspectRatio;

void main()
{
	vLocalPosition = vec4(vec3(position),1.0);
	vMaterialIndex = int(round(materialIndex));
	
	vec4 eyeCoords = transformEye( position);
	vec4 clipCoords = transformClip( eyeCoords );
	
	vPosition = entityMatrix*position;
	vColor = color;

 	vTextureCoord = textureCoord;
	
 	vNormal = matrixMult(entityNormalMatrix, normal);
	vNormal = vec4(normalize(vec3(vNormal)),1.0);
	
 	vBasisX = matrixMult(entityNormalMatrix, basisX);
	vBasisX = vec4(normalize(vec3(vBasisX)),1.0);

	vBasisZ = matrixMult(entityNormalMatrix, basisZ);
	vBasisZ = vec4(normalize(vec3(vBasisZ)),1.0);

	vec2 tStretched = 2.0*textureCoord*vec2(1.0,1.0) - vec2(1.0,1.0);

	gl_Position = vec4(tStretched,-1.0,1.0);

}