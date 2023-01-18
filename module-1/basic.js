<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Learn JavaScript Classes</title>
	</head>
	<body>
		<h1>Learn JavaScript Classes</h1>

		<script type="text/javascript">
			class Rectangle {
				constructor (_width, _height, _color) {
					console.log("The Rectangle is being created");

					this.width  = _width; 
					this.height = _height;
					this.color  = _color;
				}

				getArea () {
					return this.width * this.height;
				}

				echoDescription () {
					console.log(`I am a rectangle of ${this.width} X ${this.height} and I am ${this.color}`);
				}
			}	

			let myRectancle1 = new Rectangle(12, 3, "chocolate");
			console.log(myRectancle1);
			console.log("AREA ===> ", myRectancle1.getArea());

			let myRectancle2 = new Rectangle(9, 6, "tomato");
			console.log(myRectancle2);
			console.log("AREA ===> ", myRectancle2.getArea());
			myRectancle2.echoDescription();
		</script>		
	</body>
</html>