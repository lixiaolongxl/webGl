function initShader(gl,v,f){
    var vertex = gl.createShader(gl.VERTEX_SHADER);
    var frag = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(vertex, v);
    gl.shaderSource(frag,f);
    gl.compileShader(vertex);
    gl.compileShader(frag);

    var program = gl.createProgram();
    gl.attachShader(program, vertex);
    gl.attachShader(program, frag);
    gl.linkProgram(program);
    
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        throw gl.getProgramInfoLog(program);
    }
    gl.useProgram(program)
    return program;
}
function bufferInit(gl,dataSource,attr,program){
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER,dataSource,gl.STATIC_DRAW );
    var a_pos = gl.getAttribLocation(program, attr);
    gl.vertexAttribPointer(a_pos, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(a_pos);
}
