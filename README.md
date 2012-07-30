JZoopraxiscope
==============
http://www.cobalys.com/open-source/jzoopraxiscope.html
https://github.com/cobalys/JZoopraxiscope

### Animate static image sequences with this jQuery plugin.

JZoopraxiscope is a jQuery plugin for making animations from static images inspired in Eadweard Muybridge's Zoopraxiscope. 


Requirements
-------------
* JQuery
* JQuery UI
* An image representing the sequence to be animated


Browser Compatibility
---------------------
* Chrome  18.0.1025.162
* Mozilla Firefox 11.0
* Internet Explorer 8
* Safari 5
* Opera 11.62


Use
---

1. Download JZoopraxiscope and reference the jquery.jzoopraxiscope.js file in your page.

		<script src="jquery.jzoopraxiscope.js"></script>


2. Reference jQuery and jQuery UI libraries from your page

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.18/jquery-ui.js"></script>

		
3. Prepare the static sequence. Every frame must have the same width and be attached to his previous frame in a horizontal image. Refer to the included file 'jzoo.jpg'
<pre>
+------------+------------+------------+------------+
|  Frame 1   |  Frame 2   |  Frame 3   |  Frame 4   |
+------------+------------+------------+------------+
</pre>

4. Define the options

			var optionsAnimation = {
				'widthItem' : 380,
				'widthImage' : 4560,
				'height' : 306,
				'image' : 'images/jzoo.jpg'}

	**widthItem**: Width of every frame.   
	**widthImage**: Width of the entire image.   
	**height**: Height of the image.   
	**image**: Location of the image. Use relative or absolute path, relative paths are related to the html document where the plugin is installed.   


5. Initialize a div with JZoo (#animation)
		
		//Html
		<div id="animation" style="border: 1px solid #999; margin: auto;"></div>

		//Javascript
		$('#animation').jzoopraxiscope(optionsAnimation);
				

6. Control JZoo

		//Play the animation
		$('#animation').jzoopraxiscope('play');
		
		//Stop the animation
		$('#animation').jzoopraxiscope('stop');
