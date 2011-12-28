/*
Copyright (c) 2011 Cimaron Shanahan

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


function cnvgl_program() {

	//state
	this.name = 0;
	this.delete_status = GL_FALSE;
	this.link_status = null;
	this.validate_status = null;
	this.information_log = '';

	//shaders
	this.attached_shaders_count = 0;
	this.attached_shaders = [];

	//uniforms
	this.active_uniforms = [];

	//attributes
	this.attributes = {};
	this.active_attributes = [];

	//programs
	this.fragment_program = null;
	this.vertex_program = null;
}


function cnvgl_program_var(name, location, size) {
	this.name = name;
	this.location = location;
	this.size = size;
	this.slots = Math.ceil(size / 4);
	this.type = GL_FLOAT;
}

