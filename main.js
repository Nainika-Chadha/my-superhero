var can=new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
b_width=30;
b_height=30;
player_object="";
block_object="";

function player_update(){
fabric.Image.fromURL("player(1).png",function(Img)
{
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
top:player_y,
left:player_x
});
canvas.add(player_object);
});
}

function new_block(get_image){
    fabric.Image.fromURL(get_image,function(Img)
    {
    block_object=Img;
    block_object.scaleToWidth(b_width);
    block_object.scaleToHeight(b_height);
    block_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(block_object);
    });
    }