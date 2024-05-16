// Team Member Data

const teamMembers = [
    {
        name: 'Tom Brady',
        position: 'Quarterback',
        strengths: ['GOAT', ' Incredible Arm Strength'],
        number: '84',
        skills: [ 'Long Throws', ' Friendliness with Referees'],
        teams: ['Patriots', ' Buccaneers'],
        image: 'Tom Brady',
    },
    {
        name: 'Antonio Brown',
        position: 'Wide Receiver',
        strengths: [' Insane Hands', ' Insane Speed', ' Insane'],
        number: '12',
        skills: ['Elite Playmaker', ' Team Player'],
        teams:['Steelers', ' Raiders', ' Patriots', ' Buccaneers']
    },
    {
        name: 'Marshawn Lynch',
        position: 'Running Back',
        strengths: ['Amazing Maneuverability', ' Unreal Speed'],
        number: '24',
        skills: ['Elite Playmaker', ' Outrunner'],
        teams:['Seahawks', ' Bills', ' Raiders']
    },
];

function generateTeamCards(){

    const teamCardsContainer = document.getElementById('teamCards')

    teamMembers.forEach(member => {
         const card = document.createElement('div')
         card.classList.add('col-md-4')
         
        // Style Card Based on Position

        let backgroundColor
        switch(member.position.toLowerCase()){
            case 'quarterback':
                backgroundColor = "red"
                break
            case 'running back':
                backgroundColor = "blue"
                break
            case 'wide receiver':
                backgroundColor = "yellow"
                break
            default:
                backgroundColor = "grey"
        }
        card.style.backgroundColor = backgroundColor
         card.innerHTML= `
            <div class="card">
                <div class="img" src="${member.image} + '.png'>
                </div>
                <div class = "card-header">
                    ${member.name}
                </div>
                <div class="card-body">
                    <p><strong>Position:</strong> ${member.position}</p>
                    <p><strong>Strengths:</strong> ${member.strengths}</p>
                    <p><strong>Number:</strong> ${member.number}</p>
                    <p><strong>Skills:</strong> ${member.skills}</p>
                    <p><strong>Team(s):</strong> ${member.teams}</p>

                </div>
            </div>
         
         `
    teamCardsContainer.appendChild(card)
    });
}


window.onload = generateTeamCards()

//document.getElementById('info-pic').src = 'img/' + selected + '.jpg';
