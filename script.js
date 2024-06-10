// Team Member Data

const teamMembers = [
    {
        name: 'Tom Brady',
        position: 'Quarterback',
        strengths: ['GOAT', ' Incredible Arm Strength'],
        number: '12',
        skills: [ 'Long Throws', ' Friendliness with Referees'],
        teams: ['Patriots', ' Buccaneers'],
        image: 'assets/Tom Brady.webp',
    },
    {
        name: 'Aaron Rodgers',
        position: 'Quarterback',
        strengths: ['Arm Strength', ' Mobility'],
        number: '12',
        skills: ['Elite Play Extender', ' Long Passer'],
        teams:['Packers', ' Jets',],
        image: 'assets/Aaron Rodgers.webp'
    },     
    {
        name: 'Peyton Manning',
        position: 'Quarterback',
        strengths: ['Durability', ' Greatness'],
        number: '18',
        skills: ['Elite Playmaker', ' Long Passer'],
        teams:['Colts', ' Broncos',],
        image: 'assets/Peyton Manning.jpg'
    },
    {
        name: 'Antonio Brown',
        position: 'Wide Receiver',
        strengths: [' Insane Hands', ' Insane Speed', ' Insane'],
        number: '84',
        skills: ['Elite Playmaker', ' Team Player'],
        teams:['Steelers', ' Raiders', ' Patriots', ' Buccaneers'],
        image:'assets/Antonio Brown.webp'
    },
        {
        name: 'Megatron',
        position: 'Wide Receiver',
        strengths: [' Insane Hands', ' Insane Speed'],
        number: '81',
        skills: ['Elite Playmaker', ' Team Player'],
        teams:['Lions'],
        image:'assets/Megatron.webp'
    },
    {
        name: 'Julio Jones',
        position: 'Wide Receiver',
        strengths: [' Insane Hands', ' Insane Speed'],
        number: '11',
        skills: ['Elite Playmaker', ' Team Player'],
        teams:['Falcons', ' Eagles', ' Titans', ' Buccaneers'],
        image:'assets/Julio Jones.jpg'
    },
    {
        name: 'Todd Gurley',
        position: 'Running Back',
        strengths: ['Amazing Maneuverability', ' Unreal Speed'],
        number: '30',
        skills: ['Elite Playmaker', ' Outrunner'],
        teams:['Rams', ' Falcons'],
        image: 'assets/Todd Gurley.png'
    },
    {
        name: 'Marshawn Lynch',
        position: 'Running Back',
        strengths: ['Amazing Maneuverability', ' Unreal Speed'],
        number: '24',
        skills: ['Elite Playmaker', ' Outrunner'],
        teams:['Seahawks', ' Bills', ' Raiders'],
        image: 'assets/Marshawn Lynch.webp'
    },
    {
        name: 'Adrian Peterson',
        position: 'Running Back',
        strengths: ['Amazing Maneuverability', ' Unreal Speed'],
        number: '28',
        skills: ['Elite Playmaker', ' Outrunner'],
        teams:['Seahawks', ' Bills', ' Raiders'],
        image: 'assets/Adrian Peterson.jpg'
    },
    {
        name: 'Pete Carroll',
        position: 'Head Coach',
        strengths: ['Good Coahing', ' Friendly Guy'],
        number: 'N/A',
        skills: ['Elite Playmaker', ' A Few Playoff Appearances'],
        teams:['Seahwaks'],
        image: 'assets/Pete Carroll.jpg'
    },
        {
        name: 'Bill Belichick',
        position: 'Head Coach',
        strengths: ['Great Cheating', ' Questionable Coaching'],
        number: 'N/A',
        skills: ['Elite Playmaker', ' A lot of Playoff Appearances'],
        teams:['Patriots'],
        image: 'assets/Bill Belichick.avif'
    },
    {
        name: 'Mike Tomlin',
        position: 'Head Coach',
        strengths: ['Amazing Coahing', ' 0 Losing Seasons'],
        number: 'N/A',
        skills: ['Elite Playmaker', ' 10/17 Playoff Appearances'],
        teams:['Steelers'],
        image: 'assets/Mike Tomlin.jpg'
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
         <br>
            <div class="card c1 m-2">
                <div>
                </div>
                <div class = "card-header">
                    ${member.name}
                </div>
                <div class="card-body">
                    <img class="img-fluid" src="${member.image}">
                    <p><strong>Position:</strong> ${member.position}</p>
                    <p><strong>Strengths:</strong> ${member.strengths}</p>
                    <p><strong>Number:</strong> ${member.number}</p>
                    <p><strong>Skills:</strong> ${member.skills}</p>
                    <p><strong>Team(s):</strong> ${member.teams}</p>

                </div>
            </div>
            <br>
         `
    teamCardsContainer.appendChild(card)
    });
}


window.onload = generateTeamCards()

//document.getElementById('info-pic').src = 'img/' + selected + '.jpg';
