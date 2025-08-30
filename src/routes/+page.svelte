<script lang="ts">
	// You can replace these with your actual information
	const name = "Danar";
	const title = "Data Scientist and AI Enthusiast";
	const email = "fathurahmandanar@gmail.com";
	const github = "https://github.com/danarfthr";
	const linkedin = "https://linkedin.com/in/danarfthr";
	
	const projects = [
		{
			title: "Project One",
			description: "A brief description of your first project and the technologies used.",
			link: "https://github.com/yourusername/project1"
		},
		{
			title: "Project Two", 
			description: "A brief description of your second project and its key features.",
			link: "https://github.com/yourusername/project2"
		}
	];
</script>

<svelte:head>
	<title>{name} - Portfolio</title>
	<meta name="description" content="Personal portfolio of {name}, {title}" />
</svelte:head>

<main>
	<!-- Hero Section -->
	<section class="hero">
		<div class="container">
			<h1 class="name">{name}</h1>
			<p class="title">{title}</p>
			<p class="bio">
				Passionate about creating elegant solutions to complex problems. 
				I love building applications that make a difference.
			</p>
			<div class="links">
				<a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
				<a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
				<a href="mailto:{email}">Contact</a>
			</div>
		</div>
	</section>

	<!-- Projects Section -->
	<section class="projects">
		<div class="container">
			<h2>Projects</h2>
			<div class="project-grid">
				{#each projects as project}
					<div class="project-card">
						<h3>{project.title}</h3>
						<p>{project.description}</p>
						<a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer>
		<div class="container">
			<p>&copy; 2025 {name}. All rights reserved.</p>
		</div>
	</footer>
</main>

<style>
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(body) {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		line-height: 1.6;
		color: #222222;
		background-color: #ffffff;
	}

	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	/* Hero Section */
	.hero {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		border-bottom: 1px solid #222222;
	}

	.name {
		font-size: 3rem;
		font-weight: 300;
		margin-bottom: 0.5rem;
		letter-spacing: -1px;
	}

	.title {
		font-size: 1.5rem;
		font-weight: 400;
		margin-bottom: 1.5rem;
		color: #666;
	}

	.bio {
		font-size: 1.1rem;
		margin-bottom: 2rem;
		max-width: 500px;
		margin-left: auto;
		margin-right: auto;
	}

	.links {
		display: flex;
		gap: 2rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.links a {
		color: #222222;
		text-decoration: none;
		padding: 0.5rem 1rem;
		border: 1px solid #222222;
		transition: all 0.3s ease;
	}

	.links a:hover {
		background-color: #222222;
		color: #fff;
	}

	/* Projects Section */
	.projects {
		padding: 4rem 0;
		border-bottom: 1px solid #222222;
	}

	.projects h2 {
		font-size: 2rem;
		font-weight: 300;
		margin-bottom: 3rem;
		text-align: center;
	}

	.project-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
	}

	.project-card {
		padding: 2rem;
		border: 1px solid #222222;
		background-color: #fff;
		transition: transform 0.3s ease;
	}

	.project-card:hover {
		transform: translateY(-5px);
	}

	.project-card h3 {
		font-size: 1.3rem;
		font-weight: 400;
		margin-bottom: 1rem;
	}

	.project-card p {
		margin-bottom: 1.5rem;
		color: #666;
	}

	.project-card a {
		color: #222222;
		text-decoration: none;
		border-bottom: 1px solid #222222;
		transition: opacity 0.3s ease;
	}

	.project-card a:hover {
		opacity: 0.7;
	}

	/* Footer */
	footer {
		padding: 2rem 0;
		text-align: center;
		background-color: #222222;
		color: #fff;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.name {
			font-size: 2.5rem;
		}

		.title {
			font-size: 1.3rem;
		}

		.container {
			padding: 0 1rem;
		}

		.links {
			gap: 1rem;
		}

		.project-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
