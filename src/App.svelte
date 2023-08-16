<script>
	import { Modal, Content, Trigger} from "sv-popup";
</script>

<main>
	<h1>Click the button</h1>
	<Modal basic big={true}>
		<Content>
			<h2>You just got lotaded</h2>
			<img src="https://media.tenor.com/Za9YlWVtBa8AAAAd/pokemon-lotad.gif" alt="">
			<h2>Send this to your friends to totally lotad them!</h2>
		</Content>
		<Trigger>
			<div id="but"><h1>button</h1></div>
		</Trigger>
	</Modal>
	
</main>

<style>
	main {
		position: absolute;
		left: 0;
		top: 0;
		text-align: center;
		width: 100%;
		height: 100%;
		background-color: rgb(7, 9, 8);
		display: grid;
		grid-template-rows: repeat(auto-fill, minmax(20rem, 5fr));
		place-items: center;
	}
	
	#but{
		border: 0.2rem solid #fff;
		border-radius: 2rem;
		padding: 0.4rem;
		box-shadow: 0 0 .1rem #fff,
              		0 0 .1rem #fff,
              		0 0 1rem #0fa,
              		0 0 0.4rem #0fa,
              		0 0 1.4rem #0fa,
              		inset 0 0 .8rem #0fa;
		background-color: #00f0a062;
	}

	#but h1{
		font-size: 2rem;
	}

	h1 {
		padding: 5rem;
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4.2rem;
		font-weight: 400;
		animation: pulsate 0.11s ease-in-out infinite alternate;
		color: #fff;
  		text-shadow:
    		0 0 7px #fff,
    		0 0 10px #fff,
    		0 0 21px #fff,
    		0 0 42px #0fa,
    		0 0 82px #0fa,
    		0 0 92px #0fa,
    		0 0 102px #0fa,
    		0 0 151px #0fa;
	}

	h2{
		text-align: center;
	}

	img{
		text-align: center;
	}
	
	@keyframes pulsate {
    
		100% {
			text-shadow:
			0 0 4px #fff,
			0 0 11px #fff,
			0 0 19px #fff,
			0 0 40px #0fa,
			0 0 80px #0fa,
			0 0 90px #0fa,
			0 0 100px #0fa,
			0 0 150px #0fa;
		}

		0% {
	  		text-shadow:
	  		0 0 4px #fff,
	  		0 0 10px #fff,
	  		0 0 18px #fff,
	  		0 0 38px #0fa,
	  		0 0 73px #0fa,
	  		0 0 80px #0fa,
	  		0 0 94px #0fa,
	  		0 0 140px #0fa;
  		}
	}
</style>