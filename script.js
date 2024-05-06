// Team Member Data

const teamMembers = [
    {
        name: 'Tom Brady',
        position: 'Quaterback',
        strengths: 'Arm Strength',
        number: '12',
        skills: ['Shovel Passes', 'Long Throws', 'Friendliness with Referees'],
        biography: 'A AM tim braddyshaw'
    }
];

function generateTeamCards(){

    const teamCardsContainer = document.getElementById('teamCards')

    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-4')

        card.innerHTML= `
        <div class="card">
            <div class = "card-header">
                ${member.name}
            </div>
            <div class="card-body">
                <p><strong>Position:</strong> ${member.position}</p>
            </div>
        </div>
        `
    teamCardsContainer.appendChild(card)
    });
};


window.onload = generateTeamCards();