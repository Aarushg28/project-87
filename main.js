canvas = new fabric.Canvas('myCanvas');

 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img){
		block_img_object = Img;

		block_img_object.scaleToWidth(block_image_width);
		block_img_object.scaleToHeight(block_image_height);

		block_img_object.set({
			top: block_y,
			left: block_x

		});

		canvas.add(block_img_object);

	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		block_x = 1;
		new_image('rr.jpg')
		console.log("Red Ranger");
		
	}
	if(keyPressed == '71')
	{
		block_x = 230;
		new_image('gr.png')
		console.log("Green Ranger");
	}
	
	if(keyPressed == '89')
	{
		block_x =380;
		new_image('yr.png')
		console.log("Yellow Ranger");
	}
	if(keyPressed == '80')
	{
		block_x = 640;
		new_image('pr.png')
		console.log("Pink Ranger");
	}
	if(keyPressed == '66')
	{
		block_x = 750;
		new_image('br.png')
		console.log("Blue Ranger");
	}
	
}

