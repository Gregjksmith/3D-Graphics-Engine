#version 430

layout (triangles) in;
layout (triangle_strip, max_vertices = 3) out;

in vec4 vPosition[];
in vec4 vLocalPosition[];
in vec4 vColor[];
in vec4 vNormal[];
in int vMaterialIndex[];
in vec2 vTextureCoord[];
in vec4 vBasisX[];
in vec4 vBasisZ[];

out vec4 gPosition;
out vec4 gLocalPosition;
out vec4 gColor;
out vec4 gNormal;
flat out int gMaterialIndex;
out vec2 gTextureCoord;

out vec3 basisX;
out vec3 basisZ;

flat out vec2 texVert1;
flat out vec2 texVert2;
flat out vec2 texVert3;

flat out vec3 vert1;
flat out vec3 vert2;
flat out vec3 vert3;

void emitVertex(int index)
{
	gPosition = vPosition[index];
	gLocalPosition = vLocalPosition[index];
	gColor = vColor[index];
	gNormal = vNormal[index];
	gMaterialIndex = vMaterialIndex[index];
	gTextureCoord = vTextureCoord[index];
	
	basisX = vec3(vBasisX[index]);
	basisZ = vec3(vBasisZ[index]);

	vert1 = vec3(vPosition[0]);
	vert2 = vec3(vPosition[1]);
	vert3 = vec3(vPosition[2]);

	texVert1 = vTextureCoord[0];
	texVert2 = vTextureCoord[1];
	texVert3 = vTextureCoord[2];

	gl_Position = gl_in[index].gl_Position;
	EmitVertex();
}

void main()
{
	emitVertex(0);
	emitVertex(1);
	emitVertex(2);
	EndPrimitive();
}