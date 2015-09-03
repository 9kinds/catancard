<!DOCTYPE html>
<html lang="en-us">
<?php include 'header.php'; ?>
<body>
<div class='container'>
	<header class="page-header">
		<ul class="nav nav-tabs pull-right">
			<li><a href="index.html">home</a></li>
			<li>about</li>
		</ul>
	<h3 class="project-name">Catancard</h3>
    	<h5 class="project-tagline">A simple web app to generate random resource cards for the game Settlers of Catan - in progress</h5>
      <a href="https://github.com/9kinds/catancard" class="btn">View on GitHub</a>
       </header>

    <section class="main-content">
      <h3>Background</h3>

		<p>
		<a href="www.catan.com">Settlers of Catan</a> is a board game in which players strategize where to build settlements in order to obtain needed resources. The board is variable, made up of 19 hexagon tiles representing # different terrains, so the game is different every time it's played. However, the Building Costs cards are always the same for all players - these are basically recipe cards telling you what resources you need in order to build a road, settlement, or city, or to purchase a development card. All players, for example, need 1 Lumber card and 1 Brick card to build a road. We thought it might be interesting to see what happens when each player has their own unique building requirements. 
		</p>

		<p>
		Hence, I've made catancard, a simple web app to generate random Building Costs cards. 
		</p>

	<h3>Planned improvements</h3> 

		<p>
		There are lots of changes planned: 
		<ul>
			<li class="done">4 different cards, instead of 1</li>
			<li>ability to print a PDF of the 4 cards</li>
			<li>improved graphics and formatting</li> 
			<li>a refresh button</li>
			<li>refactoring</li>
			<li>et cetera!</li>
		</ul>
		</p>
    </section>

	<section class="main-content">
    <h3>Catan Custom Cards</h3>

	<p> You can use this site to generate custom Building Costs cards 
	for use with the awesome game Settlers of Catan.</p>

	<h3>Cards</h3>

<!	<div class="quotebox" >

<!-- 
	thought about making the cards items in a list
<div class="row-fluid">
	<ul class="thumbnails">
		<li class="span3"></li>
		<li class="span3"></li>
		<li class="span3"></li>
		<li class="span3"></li>
	</ul>
</div>
-->

<!-- <p><blockquote>  -->
<div class="row">
	<div class="col-md-5" background-color="gray">
		<script src="shuffle.js">	
		</script>
	</div>

	<div class="col-md-5" background-color="gray">
		<script type="text/javascript">
			document.write(cardtext); 
		</script>
	</div>
</div>

<div class="row">
	<div class="col-md-5" background-color="gray">
		<script type="text/javascript">
			document.write(cardtext); 
		</script>
	</div>

	<div class="col-md-5" background-color="gray">
		<script type="text/javascript">
			document.write(cardtext); 
		</script>
	</div>
</div>

<footer class="site-footer">
    <span class="site-footer-owner"><a href="https://github.com/9kinds/catancard">Catancard</a> is maintained by <a href="https://github.com/9kinds">9kinds</a>.</span>
</footer>
</section>
  
</div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="../bootstrap-3.3.4-dist/js/bootstrap.min.js"></script>
	<script src="/shuffle.js"></script>
</body>
</html>
