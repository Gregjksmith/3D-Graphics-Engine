void main()
{
	vectorReturn = vec3(gl_in[0].gl_Position);
	gPosition = vPosition[0];
	gColor = vColor[0];
	gNormal = vNormal[0];
	gMaterialIndex = vMaterialIndex[0];
	gTextureCoord = vTextureCoord[0];
	
	gl_Position = gl_in[0].gl_Position;
	EmitVertex();
	
	
	vectorReturn = vec3(gl_in[1].gl_Position);
	gPosition = vPosition[1];
	gColor = vColor[1];
	gNormal = vNormal[1];
	gMaterialIndex = vMaterialIndex[1];
	gTextureCoord = vTextureCoord[1];
	
	gl_Position = gl_in[1].gl_Position;
	EmitVertex();
	
	vectorReturn = vec3(gl_in[2].gl_Position);
	gPosition = vPosition[2];
	gColor = vColor[2];
	gNormal = vNormal[2];
	gMaterialIndex = vMaterialIndex[2];
	gTextureCoord = vTextureCoord[2];
	
	gl_Position = gl_in[2].gl_Position;
	EmitVertex();
	
	EndPrimitive();
}