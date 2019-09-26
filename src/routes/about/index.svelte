<svelte:head>
	<title>О нас</title>
</svelte:head>

<script>
	const orgs = [
		{
			name: 'Dzmitry Bek',
			jobTitle: 'Software Engineer',
			pic: './orgs/1.png',
			company: 'EPAM',
		},
		{
			name: 'Pavel Drazdou',
			jobTitle: 'Software Engineer',
			pic: './orgs/2.png',
			company: 'Godel Technologies',
		},
		{
			name: 'Siarhei Prystauka',
			jobTitle: 'Software Engineer',
			pic: './orgs/3.png',
			company: 'EPAM',
		},
		{
			name: 'Aliaksandr Rabchanka',
			jobTitle: 'Software Engineer',
			pic: './orgs/4.png',
			company: 'EPAM',
		},
		{
			name: 'Yauheniya Kalbasnikava',
			jobTitle: 'Community Specialist',
			pic: './orgs/5.png',
			company: 'EPAM',
		},

	];
</script>

<style>
.stf-org-members {
	display:flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.stf-org-member-card {
	width: calc(50% - 2em);
	display: flex;
	background: #fff;
	padding: 0.5em;
	margin-bottom: 1em;
	border: 1px solid rgba(255,62,0,0.1);
}

.stf-org-member-card:hover {
	box-shadow: 0 0 10px rgba(0,0,0,0.5);
}

.stf-org-member-card:last-child { 
	margin-right: auto;
}

.stf-org-member-card__image {
	margin: 0 10px;
 }

 .stf-org-member-card__info h3 {
	font-family: "Source Sans Pro Semibold",Arial,sans-serif;
	font-size: 20px;
	font-weight: 600;
	text-transform: none;
	line-height: 30px;
	margin: 0;
	color: #2c2f3c;
	max-height: 60px;
	overflow: hidden;
 }

 .stf-org-member-card__job-info {
	font-family: Source Sans Pro Regular,Arial,sans-serif;
	font-size: 14px;
	color: #5b5a59;
	line-height: 18px;
 }
</style>

<h2>О нашем сообществе</h2>
<p>
	Здесь вы сможете найти последние новости из мира Front-End,
	поделиться своими идеями, быть в курсе ближайших ивентов,
	принимать активное участие в их организации, прокачать свои скилы,
	развить навыки презентации и выступления на публике. Если у вас есть
	тема, которая достойна внимания – приходите с ней к нам. Мы поможем
	вам реализовать ваши смелые профессиональные идеи.
</p>
<br/>

<h2>Команда организаторов</h2>
<div class='stf-org-members'>
	{#each orgs as org}
		<div class="stf-org-member-card">
			<div class="stf-org-member-card__image">
				<img src="{org.pic}" alt="">
			</div>
			<div class="stf-org-member-card__info">
				<h3>{org.name}</h3>
				<span class="stf-org-member-card__job-info">{org.company}, {org.jobTitle}</span>
			</div>
		</div>
	{/each}
</div>