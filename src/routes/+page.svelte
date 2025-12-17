<script lang="ts">
	// You can replace these with your actual information
	const name = "Hi! I'm Danar 👋";
	const title = "Data Science and AI Enthusiast 📊";
	const email = "fathurahmandanar@gmail.com";
	const github = "https://github.com/danarfthr";
	const linkedin = "https://linkedin.com/in/danarfthr";
	
	const projects = [
		{
			title: "RUU Sentiment Analysis 📢",
			description: "Analyzed 4,472 tweets on the 2025 TNI Law Revision using Python and NLP. Found 75.8% negative sentiment, highlighting civil-military concerns.",
			links: [
				{ label: "GitHub", url: "https://github.com/Farscent/gamadata-1" }
			]
		},
		{
			title: "HealthyHen 🐔", 
			description: "Built an edge-deployable poultry disease detector with EfficientNetV2-S, achieving 90%+ accuracy on chicken feces image classification.",
			links: [
				{ label: "GitHub", url: "https://github.com/danarfthr/HealthyHen" }
			]
		},
		{
			title: "AI Customer Assistant 🤖",
			description: "Led the development of a WhatsApp-based AI agent for PT Inspeksi Mobil Jogja using GPT-4.1 Mini and Gemini-2.5 Flash. Built a simple RAG system for the knowledge base, an n8n workflow for inquiry handling, booking, and payment, and a Google Cloud distance check to auto-calculate service pricing.",
			links: []
		},
		{
		title: "TB X-Ray CAD 🫁", 
		description: "Built a tuberculosis detection system by implementing Digital Image Processing using GLCM texture features and SVM classification, achieving 84.25% accuracy and 86.67% specificity on the TBX11K dataset.",
		links: [
			{ label: "GitHub", url: "https://github.com/kosmasrio0411/Final-Project-PCD" },
			{ label: "Paper", url: "https://drive.google.com/file/d/1CC3PnjoD9G5t8q8PatH4G1LRVcnpvthy/view?usp=sharing" }
		]
		}		
		
	];
</script>

<svelte:head>
	<title>danarfthr</title>
	<meta name="description" content="danar's personal portfolio 💼" />
</svelte:head>

<main>
	<!-- Hero Section -->
	<section class="hero">
		<div class="container">
			<img src="/photo.jpeg" alt="Danar" class="profile-photo" />
			<h1 class="name">{name}</h1>
			<p class="title">{title}</p>
			<p class="bio">
				Curious mind exploring Data Science and AI. I enjoy turning messy data into meaningful insights and building simple AI-powered tools that (hopefully) make life a little easier 😄
			</p>
			<div class="links">
				<a href={github} target="_blank" rel="noopener noreferrer" title="GitHub">
					<img src="/github.svg" alt="GitHub" class="icon" />
				</a>
				<a href={linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
					<img src="/linkedin.svg" alt="LinkedIn" class="icon" />
				</a>
				<a href="mailto:{email}" title="Email">
					<img src="/email.svg" alt="Email" class="icon" />
				</a>
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
						<div class="project-links">
							{#each project.links as link}
								<a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer>
		<div class="container">
			<p>&copy; 2025 Danar. All rights reserved.</p>
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
		font-family: Helvetica, -apple-system, BlinkMacSystemFont, Arial, sans-serif;
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

	.profile-photo {
		width: 220px;
		height: 220px;
		border-radius: 15%;
		object-fit: cover;
		margin-bottom: 2rem;
		display: block;
		margin-left: auto;
		margin-right: auto;
		box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.3);
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
		transition: all 0.3s ease;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.icon {
		width: 34px;
		height: 34px;
	}

	.links a:hover .icon {
		opacity: 0.6;
		transform: translateY(-2px);
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

	.project-links {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
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
