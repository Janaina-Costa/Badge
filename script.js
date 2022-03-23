//gerador de url dinamico

const LinkSocialMedia = {
    github: 'Janaina-Costa',
    youtube:'channel/UCPTS2E9pS2op2qdZ9Ni2z-A',
    instagram:'janacosta_dev',
    facebook:'people/Janaina-Costa/100003359607758',
    twitter:'Janaina_dev',

}

function changeSocialMediaLinks(){
    for(let li of listLinks.children){
       const social = (li.getAttribute('class'))        
        li.children[0].href =  `https://www.${social}.com/${LinkSocialMedia[social]}`
    }
}
changeSocialMediaLinks()

function getGitHubProfileInfo(){
    const url = `https://api.github.com/users/${LinkSocialMedia.github}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        username.textContent = data.name
        netname.href = data.html_url
        loginprofile.textContent = data.login
        userbio.textContent = data.bio
        useravatar.src = data.avatar_url
       
        
    })
}
getGitHubProfileInfo()