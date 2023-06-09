console.clear();

const team = [

	{
		rank: 1,
		name: 'Dhruuv Naik',
		handle: '321dhruuv0037',
		img: 'assets/img/leaderboard/chick.png',
		kudos: 120,
		sent: 310
	},

	{
		rank: 1,
		name: 'Prasad Anil Alai',
		handle: '321prasad0058',
		img: 'assets/img/leaderboard/cat.png',
		kudos: 120,
		sent: 31
	}, {
		rank: 2,
		name: 'Divij Sarkale',
		handle: 'divijms07',
		img: 'assets/img/leaderboard/bearrrr.png',
		kudos: 105,
		sent: 21
	}, {
		rank: 2,
		name: 'Prakhar Sharma',
		handle: 'Prakhar29Sharma',
		img: 'assets/img/leaderboard/bird.png',
		kudos: 105,
		sent: 7
	}, {
		rank: 2,
		name: 'Neha Nair ',
		handle: 'nehanair2004',
		img: 'assets/img/leaderboard/cool.png',
		kudos: 105,
		sent: 4
	}, {
		rank: 2,
		name: 'Sraina Panchangam ',
		handle: 'PSraina',
		img: 'assets/img/leaderboard/hamster.png',
		kudos: 105,
		sent: 16
	}, {
		rank: 3,
		name: 'Siddesh bhaiyyasaheb patil',
		handle: 'siddesh1672003',
		img: 'assets/img/leaderboard/frog.png',
		kudos: 90,
		sent: 6
	}, {
		rank: 3,
		name: 'Advay Vinod Gujar ',
		handle: 'AdvayGujar',
		img: 'assets/img/leaderboard/dinosaur.png',
		kudos: 90,
		sent: 21
	}, {
		rank: 4,
		name: 'Terrence Dias',
		handle: 'terrydias',
		img: 'assets/img/leaderboard/sloth.png',
		kudos: 60,
		sent: 4
	}, {
		rank: 4,
		name: 'Mitali Rananavare',
		handle: 'MR41055',
		img: 'assets/img/leaderboard/dinosaurrrr.png',
		kudos: 60,
		sent: 2
	},
];

const randomEmoji = () => {
	const emojis = ['👏','👍','🙌','🤩','🔥','⭐️','🏆','💯'];
	let randomNumber = Math.floor(Math.random() * emojis.length);
	return emojis[randomNumber]
}

team.forEach(member => {
	let newRow = document.createElement('li');
	newRow.classList = 'c-list__item';
	newRow.innerHTML = `
		<div class="c-list__grid">
			<div class="c-flag c-place u-bg--transparent">${member.rank}</div>
			<div class="c-media">
				<img class="c-avatar c-media__img" src="${member.img}" />
				<div class="c-media__content">
					<div class="c-media__title">${member.name}</div>
					<a class="c-media__link u-text--small" href="https://github.com/${member.handle}" target="_blank">@${member.handle}</a>
				</div>
			</div>
			<div class="u-text--right c-kudos">
				<div class="u-mt--8">
					<strong>${member.kudos}</strong> ${randomEmoji()}
				</div>
			</div>
		</div>
	`;
	if(member.rank === 1) {
		newRow.querySelector('.c-place').classList.add('u-text--dark')
		newRow.querySelector('.c-place').classList.add('u-bg--yellow')
		newRow.querySelector('.c-kudos').classList.add('u-text--yellow')
	} else if(member.rank === 2) {
		newRow.querySelector('.c-place').classList.add('u-text--dark')
		newRow.querySelector('.c-place').classList.add('u-bg--teal')
		newRow.querySelector('.c-kudos').classList.add('u-text--teal')
	} else if(member.rank === 3) {
		newRow.querySelector('.c-place').classList.add('u-text--dark')
		newRow.querySelector('.c-place').classList.add('u-bg--orange')
		newRow.querySelector('.c-kudos').classList.add('u-text--orange')
	}
	else if(member.rank === 4) {
		newRow.querySelector('.c-place').classList.add('u-text--dark')
		newRow.querySelector('.c-place').classList.add('u-bg--red')
		newRow.querySelector('.c-kudos').classList.add('u-text--red')
	}
	else if(member.rank === 5, 6, 7) {
		newRow.querySelector('.c-place').classList.add('u-text--dark')
	}
	list.appendChild(newRow)
})

// Find Winner from sent kudos by sorting the drivers in the team array
let sortedTeam = team.sort((a, b) => b.sent - a.sent)
let winner = sortedTeam[0]

// Render winner card
const winnerCard = document.getElementById('winner')
winnerCard.innerHTML = `
	<div class="u-text-small u-text--medium u-mb--16">Current Month Top Student</div>
	<img class="c-avatar c-avatar--lg img-fluid" src=assets/img/leaderboard/chick.png>
	<h3 class="u-mt--16">Dhruuv Naik</h3>
    <a class="c-media__link u-text--small" href="https://github.com/321dhruuv0037" target="_blank">@321dhruuv0037</a>
`